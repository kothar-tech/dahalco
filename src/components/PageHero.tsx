import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div aria-hidden="true" className="absolute inset-0 text-primary-800/40 bg-dot-grid mask-fade-b" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-800/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-accent-600/15 blur-3xl"
      />
      <div className="container-page relative section">
        <Reveal>
          <span className="eyebrow-dark rounded-full border border-accent-500/20 bg-accent-500/10 px-3.5 py-1.5">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-100">{description}</p>
        </Reveal>
        {children && <Reveal delay={0.24}>{children}</Reveal>}
      </div>
    </section>
  );
}
