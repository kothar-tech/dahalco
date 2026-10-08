"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const TOPICS = [
  "General enquiry",
  "Personal tax return",
  "Business tax and BAS",
  "Bookkeeping and payroll",
  "An ATO letter or audit",
  "Starting or changing a business",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border border-primary-200 bg-primary-50 p-8">
        <CheckCircle2 className="h-8 w-8 text-primary-700" aria-hidden="true" />
        <h3 className="font-heading text-2xl text-ink">Thanks, we&rsquo;ve got it.</h3>
        <p className="max-w-sm text-ink-soft">
          Your message is with us. We&rsquo;ll reply by phone or email, usually
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline-dark mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="input"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input"
        />
      </Field>

      <Field label="What’s it about?" htmlFor="topic">
        <select id="topic" name="topic" className="input" defaultValue={TOPICS[0]}>
          {TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input resize-none"
          placeholder="A line or two on what you need help with."
        />
      </Field>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:self-start"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
