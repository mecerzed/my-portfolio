"use client";

import { motion } from "framer-motion";
import ProcessStepper from "@/components/process/ProcessStepper";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-dark px-6 py-24 text-bg md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 grid gap-8 md:grid-cols-2 md:items-end lg:mb-20"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              The Process
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              From first idea
              <br />
              <span className="text-accent">to final delivery.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-bg/60 md:justify-self-end md:text-lg">
            Good design is more than the final result. It is a thoughtful
            process built on understanding, clear decisions, creative
            exploration, and careful execution.
          </p>
        </motion.div>

        <ProcessStepper />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-7 text-bg/60 md:text-base">
            Clear thinking. Intentional design. Attention to every detail.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-bg transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-dark"
          >
            Have a project in mind?
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}