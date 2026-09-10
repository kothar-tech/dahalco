import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/send-email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, topic, message } = body as Record<string, string>;

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, phone and message are required." },
      { status: 400 },
    );
  }

  if (!email?.trim() || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await sendNotificationEmail({
      subject: `Website enquiry from ${name.trim()}`,
      replyTo: email.trim(),
      heading: "New website enquiry",
      fields: {
        Name: name,
        Email: email,
        Phone: phone,
        Topic: topic || "General Enquiry",
        Message: message,
      },
    });
  } catch (error) {
    console.error("[contact-enquiry]", error);
    return NextResponse.json(
      { error: "Could not send your enquiry right now. Please try again or call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
