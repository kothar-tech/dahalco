"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const steps = [
  { label: "Documents received", done: true },
  { label: "Return prepared", done: true },
  { label: "Lodged with the ATO", done: false },
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
            This week
          </p>
          <span className="rounded-full bg-accent-500/15 px-2.5 py-1 text-xs font-medium text-accent-300">
            On track
          </span>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold text-white">
          Your return status
        </h3>

        <ul className="mt-6 flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                className={`h-5 w-5 shrink-0 ${
                  step.done ? "text-accent-400" : "text-white/25"
                }`}
                aria-hidden="true"
              />
              <span className={`text-sm ${step.done ? "text-white" : "text-white/40"}`}>
                {step.label}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "66%" }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-500"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute -bottom-6 -left-8 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-slate-900">TPB Registered</p>
          <p className="text-[11px] text-slate-500">#{siteConfig.credentials.tpbNumber}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
