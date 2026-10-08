import type { ReactNode } from "react";

type PageIntroProps = {
  title: string;
  tone?: "paper" | "blue";
  children?: ReactNode;
};

// Page header: the title on the left, a short introduction on the right.
export default function PageIntro({
  title,
  tone = "paper",
  children,
}: PageIntroProps) {
  const blue = tone === "blue";

  return (
    <section className={blue ? "bg-ink text-white" : "border-b border-ink/15"}>
      <div className="container-page grid gap-8 py-14 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-24">
        <h1
          className={`font-heading text-display-lg lg:col-span-7 ${
            blue ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h1>
        {children && (
          <div
            className={`text-lg leading-relaxed lg:col-span-5 ${
              blue ? "text-white/85" : "text-ink-soft"
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
