// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { projects } from "@/data/projects";

// export default function FeaturedWork() {
//     return (
//         // <section id="work" className="px-8 md:px-16 lg:px-24 py-24">
//         <section id="work" className="px-8 md:px-16 lg:px-24 pt-8 pb-24">
//             <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="text-3xl md:text-4xl font-bold text-dark mb-12"
//             >
//                 Featured Work
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {projects.map((project, index) => (
//                     <motion.a
//                         key={project.slug}
//                         href={`/work/${project.slug}`}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         className="group block"
//                     >
//                         <div className="relative aspect-[4/3] bg-dark/5 rounded-2xl overflow-hidden mb-4">
//                             <Image
//                                 src={project.image}
//                                 alt={project.title}
//                                 fill
//                                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//                                 onError={(e) => {
//                                     e.currentTarget.style.display = "none";
//                                 }}
//                             />
//                         </div>
//                         <div className="flex items-start justify-between">
//                             <div>
//                                 <h3 className="text-xl font-semibold text-dark group-hover:text-accent transition-colors">
//                                     {project.title}
//                                 </h3>
//                                 <p className="text-sm text-text/60 mt-1">{project.category}</p>
//                             </div>
//                             <span className="text-sm text-text/40">{project.year}</span>
//                         </div>
//                     </motion.a>
//                 ))}
//             </div>
//         </section>
//     );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <section id="work" className="px-8 md:px-16 lg:px-24 pt-8 pb-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-accent font-medium uppercase tracking-wide text-sm mb-16"
      >
        Selected Work
      </motion.p>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-sm text-text/40 font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-dark/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] bg-dark/5 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/5 transition-colors duration-500" />
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-dark group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text/50 mb-6">
                    {project.category} · {project.year}
                  </p>
                  <p className="text-text/70 leading-relaxed mb-6 max-w-md">
                    {project.blurb}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-dark group-hover:text-accent group-hover:gap-3 transition-all">
                    View case study
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}