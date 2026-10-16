// "use client";

// import { motion } from "framer-motion";
// import { services } from "@/data/services";

// export default function Process() {
//     return (
//         <section id="process" className="px-8 md:px-16 lg:px-24 py-24 bg-dark/[0.03]">
//             <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="text-3xl md:text-4xl font-bold text-dark mb-12"
//             >
//                 How I Work
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                 {services.map((step, index) => (
//                     <motion.div
//                         key={step.number}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                         <span className="text-4xl font-bold text-accent/30">
//                             {step.number}
//                         </span>
//                         <h3 className="text-lg font-semibold text-dark mt-3 mb-2">
//                             {step.title}
//                         </h3>
//                         <p className="text-text/60 text-sm leading-relaxed">
//                             {step.description}
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

// export default function Process() {
//   return (
//     <section
//       id="process"
//       className="bg-dark/[0.03] px-8 py-24 md:px-16 md:py-32 lg:px-24"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Section introduction */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 grid gap-8 md:grid-cols-2 md:items-end"
//         >
//           <div>
//             <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
//               <span className="h-px w-8 bg-accent" />
//               My Approach
//             </p>

//             <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl">
//               From first idea
//               <br />
//               <span className="text-accent">to final delivery.</span>
//             </h2>
//           </div>

//           <p className="max-w-lg text-base leading-7 text-text/70 md:justify-self-end md:text-lg">
//             Great design starts with understanding the problem. I combine
//             research, creative thinking, and attention to detail to deliver
//             work that looks purposeful and works effectively.
//           </p>
//         </motion.div>

//         {/* Process steps */}
//         <div className="grid grid-cols-1 border-t border-dark/15 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((step, index) => (
//             <motion.article
//               key={step.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.12,
//               }}
//               className="group border-b border-dark/15 py-8 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
//             >
//               <div className="mb-10 flex items-center justify-between">
//                 <span className="text-sm font-semibold tabular-nums text-accent">
//                   0{index + 1}
//                 </span>

//                 <span
//                   aria-hidden="true"
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-lg text-dark/60 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
//                 >
//                   ↗
//                 </span>
//               </div>

//               <h3 className="mb-4 text-xl font-semibold tracking-tight text-dark transition-colors duration-300 group-hover:text-accent md:text-2xl">
//                 {step.title}
//               </h3>

//               <p className="text-sm leading-7 text-text/70">
//                 {step.description}
//               </p>

//               <div className="mt-8 h-px w-10 bg-accent/50 transition-all duration-300 group-hover:w-16" />
//             </motion.article>
//           ))}
//         </div>

//         {/* Closing statement */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-12 flex flex-col gap-5 border-l-2 border-accent pl-5 sm:flex-row sm:items-center sm:justify-between"
//         >
//           <p className="max-w-2xl text-sm leading-7 text-text/70 md:text-base">
//             Every project is different. My commitment to thoughtful design,
//             clear communication, and quality execution stays the same.
//           </p>

//           <a
//             href="#contact"
//             className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-dark transition-colors hover:text-accent"
//           >
            
//             <span aria-hidden="true">↗</span>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { services as process } from "@/data/services";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-dark py-24 text-bg md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            The Process
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            A clear process.
            <br />
            <span className="text-accent">Better outcomes.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-bg/65 md:text-lg">
            Every successful project starts with a clear understanding
            of the problem. Here is how I turn ideas into purposeful
            design and finished work.
          </p>
        </motion.div>

        {/* Workflow timeline */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-bg/15 lg:block"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative"
              >
                <div className="relative z-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-dark text-sm font-semibold text-accent">
                  {step.number}
                </div>

                <h3 className="mb-4 text-xl font-semibold tracking-tight md:text-2xl">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-bg/65 md:text-base">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 flex flex-col gap-5 border-t border-bg/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-bg/65 md:text-base">
            Clear communication, thoughtful decisions, and attention
            to detail guide every stage of my work.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-bg transition-colors hover:text-accent"
          >
           
          </a>
        </div>
      </div>
    </section>
  );
}