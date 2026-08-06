"use client";

import { motion } from "framer-motion";

const skills = [
    "Graphic Design",
    "Brand Identity",
    "UI/Product Design",
    "Print Design",
    "Frontend Development",
    "Prototyping",
    "Design Systems",
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
                        I design and build products end-to-end - from brand strategy to
                        Print ready file.
                    </h2>
                    <p className="text-bg/70 text-lg leading-relaxed">
                        Based in Harare, Zimbabwe, I work as an independent product
                        designer and developer, and I&apos;m the Founder & Creative
                        Director of MESAM Prints, a Harare-based printing and branding
                        studio. My work spans brand identity, UI and product design,
                        print design, and full platform development  I don&apos;t just
                        hand off a design file, I build the thing.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <p className="text-sm uppercase tracking-wide text-bg/50 mb-4">
                        What I work with
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="border border-bg/15 rounded-lg px-4 py-3 text-sm text-bg/90"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}