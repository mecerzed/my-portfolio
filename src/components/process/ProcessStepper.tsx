"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { steps } from "@/data/process";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const contentVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease },
  },
};

export default function ProcessStepper() {
  const [active, setActive] = useState(0);
  const total = steps.length;
  const step = steps[active];
  const goTo = (index: number) => setActive((index + total) % total);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-bg/10 bg-bg/[0.03] shadow-2xl shadow-black/20">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]"
      />

      <div className="relative z-10 grid min-h-[480px] lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left panel */}
        <div className="relative flex flex-col justify-between overflow-hidden border-b border-bg/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-bg/50">
              My approach
            </span>
            <span className="text-sm tabular-nums text-accent">
              {step.number} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Watermark number */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`watermark-${step.number}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7, ease }}
              style={{ fontFamily: "var(--font-heading)" }}
              className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 select-none text-[200px] font-bold leading-none text-bg/[0.04] md:text-[280px]"
              aria-hidden="true"
            >
              {step.number}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 py-12 lg:py-16"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {step.category}
              </p>
              <h3 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {step.title}
                <span className="text-accent">.</span>
              </h3>
              <div className="mt-8 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-bg/40">
              The journey
            </p>
            <div className="flex gap-2">
              {steps.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to step ${item.number}: ${item.title}`}
                  aria-current={active === index ? "step" : undefined}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-bg/10 transition-colors hover:bg-bg/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-dark"
                >
                  {active === index && (
                    <motion.div
                      layoutId="process-active-step"
                      className="absolute inset-0 bg-accent"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1"
              aria-live="polite"
            >
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-bg/40">
                Step {step.number}
              </p>

              <p className="max-w-xl text-lg leading-8 text-bg/80 sm:text-xl sm:leading-9">
                {step.description}
              </p>

              <div className="mt-10 border-t border-bg/10 pt-7">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  What this includes
                </p>
                <ul className="space-y-4">
                  {step.deliverables.map((item, index) => (
                    <li
                      key={item}
                      className="group flex items-center gap-4 text-sm text-bg/70 sm:text-base"
                    >
                      <span className="text-xs tabular-nums text-accent/60 transition-colors group-hover:text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="transition-colors group-hover:text-bg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-bg/10 pt-6">
            <p className="text-sm text-bg/40">Explore the process</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous process step"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-bg/15 text-xl text-bg/70 transition-all hover:border-accent hover:bg-accent hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next process step"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl text-dark shadow-lg shadow-accent/20 transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-dark"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}