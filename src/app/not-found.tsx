import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center gap-4 text-center">
        <span className="eyebrow">404</span>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-2">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
