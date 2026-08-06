"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
    return (
        <section id="work" className="px-8 md:px-16 lg:px-24 py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-dark mb-12"
            >
                Featured Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.a
                        key={project.slug}
                        href={`/work/${project.slug}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group block"
                    >
                        <div className="relative aspect-[4/3] bg-dark/5 rounded-2xl overflow-hidden mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                        </div>
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-dark group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-text/60 mt-1">{project.category}</p>
                            </div>
                            <span className="text-sm text-text/40">{project.year}</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}