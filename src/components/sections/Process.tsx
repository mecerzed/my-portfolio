"use client";

import { motion } from "framer-motion";
import { process } from "@/data/services";

export default function Process() {
    return (
        <section id="process" className="px-8 md:px-16 lg:px-24 py-24 bg-dark/[0.03]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-dark mb-12"
            >
                How I Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {process.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="text-4xl font-bold text-accent/30">
                            {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-dark mt-3 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-text/60 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}