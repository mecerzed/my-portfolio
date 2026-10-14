"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";

// Three repeats per half so the loop never shows a gap on wide screens
const items = [...projects, ...projects, ...projects];

const edgeFade =
  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

export default function WorkMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-8 flex items-center gap-6 border-t border-dark/10 py-6 md:mx-16 lg:mx-24">
      <span className="shrink-0 text-xs uppercase tracking-widest text-text/40">
        Selected work
      </span>

      <div
        className="relative flex-1 overflow-hidden"
        style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}
      >
        <motion.div
          className="flex w-max"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-10 pr-10"
              aria-hidden={copy === 1}
            >
              {items.map((project, i) => (
                <div key={`${copy}-${i}`} className="flex items-center gap-10">
                  <Link
                    href={`/work/${project.slug}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="whitespace-nowrap text-sm font-medium text-text/60 transition-colors hover:text-accent"
                  >
                    {project.title}
                  </Link>
                  <span
                    className="h-1 w-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}