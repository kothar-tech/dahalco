import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/send-email";

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

  try {
    await sendNotificationEmail({
      subject: `Consultation request from ${name.trim()}`,
      replyTo: email.trim(),
      heading: "New consultation request",
      fields: {
        Name: name,
        Email: email,
        Phone: phone,
        Service: service,
        "Preferred date": preferredDate,
        "Preferred time": preferredTime || "No preference",
        Notes: notes || "—",
      },
    });
  } catch (error) {
    console.error("[appointment-request]", error);
    return NextResponse.json(
      { error: "Could not send your request right now. Please try again or call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
