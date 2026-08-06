"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
    return (
        <section id="services" className="px-8 md:px-16 lg:px-24 py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-dark mb-12"
            >
                What I Do
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10 rounded-2xl overflow-hidden">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-bg p-8"
                    >
                        <h3 className="text-xl font-semibold text-dark mb-3">
                            {service.title}
                        </h3>
                        <p className="text-text/70 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}