// "use client";

// import { motion } from "framer-motion";
// import { services } from "@/data/services";

// export default function Services() {
//     return (
//         <section id="services" className="px-8 md:px-16 lg:px-24 py-24">
//             <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="text-3xl md:text-4xl font-bold text-dark mb-12"
//             >
//                 What I Do
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10 rounded-2xl overflow-hidden">
//                 {services.map((service, index) => (
//                     <motion.div
//                         key={service.title}
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         className="bg-bg p-8"
//                     >
//                         <h3 className="text-xl font-semibold text-dark mb-3">
//                             {service.title}
//                         </h3>
//                         <p className="text-text/70 leading-relaxed">
//                             {service.description}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// "use client";

// import { motion } from "framer-motion";
// import { services } from "@/data/services";

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="px-6 py-24 md:px-12 md:py-32 lg:px-24"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Section heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 grid gap-6 md:grid-cols-2 md:items-end"
//         >
//           <div>
//             <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
//               <span className="h-px w-8 bg-accent" />
//               Services & Expertise
//             </p>

//             <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl">
//               Creative thinking.
//               <br />
//               <span className="text-accent">Meaningful results.</span>
//             </h2>
//           </div>

//           <p className="max-w-lg text-base leading-7 text-text/70 md:justify-self-end md:text-lg">
//             I bring ideas to life through thoughtful design, strong visual
//             identities, and digital experiences built around real people
//             and business goals.
//           </p>
//         </motion.div>

//         {/* Services grid */}
//         <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-dark/10 bg-dark/10 sm:grid-cols-2">
//           {services.map((service, index) => (
//             <motion.article
//               key={service.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group flex min-h-[260px] flex-col bg-bg p-7 transition-colors duration-300 hover:bg-dark/[0.02] sm:p-9 lg:p-10"
//             >
//               <div className="mb-10 flex items-center justify-between">
//                 <span className="text-sm font-semibold tabular-nums text-accent">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <span
//                   aria-hidden="true"
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-lg text-dark/60 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
//                 >
//                   ↗
//                 </span>
//               </div>

//               <h3 className="mb-4 text-xl font-semibold tracking-tight text-dark transition-colors duration-300 group-hover:text-accent md:text-2xl">
//                 {service.title}
//               </h3>

//               <p className="max-w-xl text-sm leading-7 text-text/70 md:text-base">
//                 {service.description}
//               </p>

//               <div className="mt-auto pt-8">
//                 <div className="h-px w-10 bg-accent/50 transition-all duration-300 group-hover:w-16" />
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {/* Closing call to action */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-12 flex flex-col gap-5 border-l-2 border-accent pl-5 sm:flex-row sm:items-center sm:justify-between"
//         >
//           <p className="max-w-2xl text-sm leading-7 text-text/70 md:text-base">
//             Have a project in mind? Let’s turn your idea into something
//             clear, useful, and visually compelling.
//           </p>

//           <a
//             href="#contact"
//             className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-dark transition-colors hover:text-accent"
//           >
//                       </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bg px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-8 md:grid-cols-2 md:items-end lg:mb-20"
        >
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Services
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl">
              Design with
              <br />
              <span className="text-accent">purpose and precision.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-text/70 md:justify-self-end md:text-lg">
            From distinctive brand identities to thoughtful digital
            experiences, I combine creative direction and practical
            problem-solving to help ideas stand out and businesses move
            forward.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-dark/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-dark/5 sm:p-9 lg:p-10"
            >
              <div className="mb-10">
                <span className="text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-4 max-w-md text-2xl font-bold tracking-tight text-dark transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {service.title}
              </h3>

              <p className="max-w-lg text-sm leading-7 text-text/70 md:text-base">
                {service.description}
              </p>

              <div className="mt-auto pt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-text/40">
                  What&apos;s included
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.capabilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-dark/5 px-3 py-1.5 text-xs text-text/70 transition-colors group-hover:bg-accent/10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
