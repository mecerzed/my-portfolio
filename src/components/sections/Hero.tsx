// "use client";

// import { motion } from "framer-motion";
// import dynamic from "next/dynamic";

// const HeroObject = dynamic(() => import("@/components/ui/HeroObject"), {
//   ssr: false,
// });

// export default function Hero() {
//   return (
//     <section className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 lg:px-24 gap-8">
//       <div>
//         <motion.p
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   className="text-accent font-medium tracking-wide uppercase text-sm mb-4"
// >
//   Product & Brand Identity Designer
// </motion.p>

// <motion.h1
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, delay: 0.1 }}
//   className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-dark"
// >
//   Melchizedek Tinashe
//   <br />
//   Mecer
// </motion.h1>

// <motion.p
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, delay: 0.2 }}
//   className="mt-6 max-w-xl text-lg text-text/70"
// >
//   I turn business ideas into clear brands, usable products, and scalable digital experiences.
// </motion.p>

// <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 0.6, delay: 0.4 }}
//   className="mt-10 flex gap-4"
// >
//   <motion.a
//     href="#work"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.97 }}
//     className="px-6 py-3 bg-dark text-bg rounded-full font-medium hover:bg-accent transition-colors"
//   >
//     View Work
//   </motion.a>
//   <motion.a
//     href="#contact"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.97 }}
//     className="px-6 py-3 border border-dark/20 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
//   >
//     Let&apos;s Work Together
//   </motion.a>
// </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="hidden md:block"
//       >
//         <HeroObject />
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import BouncingBall from "@/components/ui/BouncingBall";

export default function Hero() {
  return (
    <section className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 lg:px-24 gap-8">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium tracking-wide uppercase text-sm mb-4"
        >
          Product Designer & Brand Identity Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-dark"
        >
          Melchizedek
          <br />
          Mecer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-text/70"
        >
          I design digital products and visual identities — and build the systems behind them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-dark text-bg rounded-full font-medium hover:bg-accent transition-colors"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border border-dark/20 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Let&apos;s Work Together
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block"
      >
        <BouncingBall />
      </motion.div>
    </section>
  );
}