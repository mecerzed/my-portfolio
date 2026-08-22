"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Design",
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "CorelDRAW", "Canva", "Affinity Designer"],
  },
  {
    category: "Product Design",
    tools: ["Figma", "Prototyping", "Design Systems", "UX/UI"],
  },
  {
    category: "Development",
    tools: ["Next.js", "VS Code", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
  },
  {
    category: "AI",
    tools: ["ChatGPT", "Gemini"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-24 bg-dark text-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            I design and build products end-to-end from brand strategy to
            print ready files, and from wireframes to fully functional web platforms.
          </h2>
          <p className="text-bg/70 text-lg leading-relaxed">
            Based in Harare, Zimbabwe, I work as an independent product
            designer and developer, and I&apos;m the Founder & Creative
            Director of MESAM Prints, a Harare-based printing and branding
            studio. My work spans brand identity, UI and product design,
            print design, and full platform development I don&apos;t just
            hand off a design file, I build the thing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-sm uppercase tracking-wide text-bg/50 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-bg/15 rounded-full px-3 py-1.5 text-sm text-bg/90"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}