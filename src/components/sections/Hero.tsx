"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-accent font-medium tracking-wide uppercase text-sm mb-4"
            >
                Product Designer & Developer
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-dark"
            >
                Melchizedek
                <br />
                Tinashe Mecer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg text-text/70"
            >
                I design and build brand identities, digital products, and platforms -
                based in Harare, working with clients globally.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex gap-4"
            >
                <a
                    href="#work"
                    className="px-6 py-3 bg-dark text-bg rounded-full font-medium hover:bg-accent transition-colors"
                >
                    View Work
                </a>

                <a
                    href="#contact"
                    className="px-6 py-3 border border-dark/20 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
                >
                    Get in Touch
                </a>
            </motion.div>
        </section>
    );
}