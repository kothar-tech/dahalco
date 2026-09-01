import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, preferredDate, preferredTime, notes } =
    body as Record<string, string>;

  if (!name?.trim() || !phone?.trim() || !service?.trim() || !preferredDate?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, service and preferred date are required." },
      { status: 400 },
    );
  }

  if (!email?.trim() || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: wire up an email provider (e.g. Resend, Postmark) to forward this
  // request to the firm's inbox once an API key is available. For now the
  // submission is validated and logged so the flow can be demoed end-to-end.
  console.info("[appointment-request]", {
    name,
    email,
    phone,
    service,
    preferredDate,
    preferredTime,
    notes,
  });

  return NextResponse.json({ ok: true });
}
