"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="px-8 md:px-16 lg:px-24 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
            >
                <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
                    Get in Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-8">
                    Have a project in mind? Let&apos;s build something worth shipping.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="mailto:mecertinashe@gmail.com"
                        className="px-8 py-4 bg-dark text-bg rounded-full font-medium hover:bg-accent transition-colors text-center"
                    >
                        mecertinashe@gmail.com
                    </a>

                    <a
                        href="https://wa.me/263787733667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-dark/20 rounded-full font-medium hover:border-accent hover:text-accent transition-colors text-center"
                    >
                        WhatsApp
                    </a>
                </div>
            </motion.div>
        </section>
    );
}