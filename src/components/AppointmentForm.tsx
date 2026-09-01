"use client";

import { FormEvent, ReactNode, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const TIME_PREFERENCES = ["Morning (9am – 12pm)", "Afternoon (12pm – 5:30pm)", "No preference"];

type Status = "idle" | "submitting" | "success" | "error";

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/appointment", {
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
      <div className="flex flex-col items-center gap-3 rounded-xl border border-primary-100 bg-primary-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary-700" aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold text-slate-900">
          Request received.
        </h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thanks — we&apos;ll confirm your preferred time (or suggest a nearby one) by
          phone or email shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline-dark mt-2"
        >
          Request another time
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="apt-name">
          <input id="apt-name" name="name" type="text" required autoComplete="name" className="input" />
        </Field>
        <Field label="Phone" htmlFor="apt-phone">
          <input id="apt-phone" name="phone" type="tel" required autoComplete="tel" className="input" />
        </Field>
      </div>

      <Field label="Email" htmlFor="apt-email">
        <input id="apt-email" name="email" type="email" required autoComplete="email" className="input" />
      </Field>

      <Field label="Service you need" htmlFor="apt-service">
        <select id="apt-service" name="service" className="input" defaultValue={siteConfig.services[0].title}>
          {siteConfig.services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred date" htmlFor="apt-date">
          <input
            id="apt-date"
            name="preferredDate"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className="input"
          />
        </Field>
        <Field label="Preferred time" htmlFor="apt-time">
          <select id="apt-time" name="preferredTime" className="input" defaultValue={TIME_PREFERENCES[0]}>
            {TIME_PREFERENCES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Anything else we should know?" htmlFor="apt-notes">
        <textarea
          id="apt-notes"
          name="notes"
          rows={4}
          className="input resize-none"
          placeholder="Optional — e.g. specific documents you'll bring, or context on your situation."
        />
      </Field>

      <p className="text-xs text-slate-500">
        This is a request, not a confirmed booking — we&apos;ll follow up by phone or
        email to lock in a time that works for both of us.
      </p>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Submitting…" : "Request Appointment"}
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
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}
