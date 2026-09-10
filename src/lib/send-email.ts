type NotificationEmail = {
  subject: string;
  replyTo: string;
  heading: string;
  fields: Record<string, string | undefined>;
};

function getToAddress() {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured.");
  }
  return to;
}

function formatFields(fields: Record<string, string | undefined>) {
  return Object.entries(fields)
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([key, value]) => `<p><strong>${key}:</strong> ${escapeHtml(value!.trim())}</p>`)
    .join("");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function sendWithResend(payload: NotificationEmail) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.EMAIL_FROM?.trim() || "Dahal & Co <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [getToAddress()],
    replyTo: payload.replyTo,
    subject: payload.subject,
    html: `
      <h2>${escapeHtml(payload.heading)}</h2>
      ${formatFields(payload.fields)}
      <hr />
      <p style="color:#64748b;font-size:12px;">Sent from the Dahal &amp; Co website</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

async function sendWithFormSubmit(payload: NotificationEmail) {
  // Free fallback (no API key). First use sends a confirmation email to CONTACT_TO_EMAIL —
  // click the link once, then submissions will arrive in the inbox.
  const to = getToAddress();
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: payload.subject,
      _replyto: payload.replyTo,
      _template: "table",
      _captcha: "false",
      heading: payload.heading,
      ...payload.fields,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || "FormSubmit request failed.");
  }
}

export async function sendNotificationEmail(payload: NotificationEmail) {
  if (process.env.RESEND_API_KEY?.trim()) {
    await sendWithResend(payload);
    return { provider: "resend" as const };
  }

  await sendWithFormSubmit(payload);
  return { provider: "formsubmit" as const };
}
