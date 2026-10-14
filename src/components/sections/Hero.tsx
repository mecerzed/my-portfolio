// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { projects } from "@/data/projects";

// const reveal = (delay: number) => ({
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, delay },
// });

// const tags = ["Brand identity", "Product design", "Front-end build"];

// const heroSlugs = ["mesam-prints", "aura-loop-wear", "mopane-grill"];

// const heroProjects = heroSlugs
//   .map((slug) => projects.find((p) => p.slug === slug))
//   .filter((p): p is NonNullable<typeof p> => Boolean(p));

// const cardLayout = [
//   { className: "left-0 top-4 w-[62%]", rotate: -6 },
//   { className: "right-0 top-28 w-[62%]", rotate: 4 },
//   { className: "left-[14%] bottom-0 w-[62%]", rotate: -2 },
// ];

// function useHarareTime() {
//   const [time, setTime] = useState<string | null>(null);

//   useEffect(() => {
//     const fmt = new Intl.DateTimeFormat("en-GB", {
//       timeZone: "Africa/Harare",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     });
//     const tick = () => setTime(fmt.format(new Date()));
//     tick();
//     const id = setInterval(tick, 30000);
//     return () => clearInterval(id);
//   }, []);

//   return time;
// }

// function ArrowIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M5 12h14" />
//       <path d="m13 6 6 6-6 6" />
//     </svg>
//   );
// }

// function DownloadIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M12 3v12" />
//       <path d="m7 10 5 5 5-5" />
//       <path d="M5 21h14" />
//     </svg>
//   );
// }

// export default function Hero() {
//   const time = useHarareTime();

//   return (
//     <section className="relative overflow-hidden">
//       {/* Dot grid background, fades out toward the bottom */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(17,17,17,0.09) 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//           maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, black 0%, transparent 85%)",
//         }}
//       />

//       <div className="relative grid min-h-[84vh] grid-cols-1 items-center gap-12 px-8 pb-10 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-16 lg:px-24">
//         <div>
//           <motion.div
//             {...reveal(0)}
//             className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text/60"
//           >
//             <span className="font-bold text-dark">
//               Melchizedek Tinashe Mecer
//             </span>
//             <span className="h-4 w-px bg-dark/15" aria-hidden="true" />
//             <span className="inline-flex items-center gap-2">
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
//               </span>
//               Harare, ZW{time ? ` · ${time} CAT` : ""}
//             </span>
//           </motion.div>

//           <motion.h1
//             {...reveal(0.1)}
//             className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-dark md:text-6xl lg:text-7xl"
//           >
//             I design brands and products,
//             <br />
//             then <span className="text-accent">build</span> them.
//           </motion.h1>

//           <motion.p
//             {...reveal(0.2)}
//             className="mt-6 max-w-xl text-lg leading-relaxed text-text/70"
//           >
//             Currently building MESAM Prints, a branding and print studio in
//             Harare, and taking on brand and product work worldwide.
//           </motion.p>

//           <motion.ul
//             {...reveal(0.3)}
//             className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-widest text-text/50"
//           >
//             {tags.map((tag, i) => (
//               <li key={tag} className="flex items-center gap-3">
//                 {i > 0 && (
//                   <span
//                     className="h-1 w-1 rounded-full bg-accent"
//                     aria-hidden="true"
//                   />
//                 )}
//                 {tag}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div
//             {...reveal(0.4)}
//             className="mt-10 flex flex-wrap items-center gap-4"
//           >
//             <motion.a
//               href="#work"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               className="group inline-flex items-center gap-2 rounded-full bg-dark px-7 py-3.5 font-medium text-bg shadow-lg shadow-dark/10 transition-colors hover:bg-accent"
//             >
//               View Work
//               <span className="transition-transform group-hover:translate-x-1">
//                 <ArrowIcon />
//               </span>
//             </motion.a>
//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               className="rounded-full border border-dark/20 px-7 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent"
//             >
//               Let&apos;s Work Together
//             </motion.a>
//           </motion.div>

//           <motion.div
//             {...reveal(0.5)}
//             className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
//           >
//             <a
//               href="/files/melchizedek-mecer-cv.pdf"
//               download
//               className="inline-flex items-center gap-2 text-text/60 transition-colors hover:text-accent"
//             >
//               <DownloadIcon />
//               Download CV
//             </a>
//             <span className="h-4 w-px bg-dark/15" aria-hidden="true" />
//             <a
//               href="/files/melchizedek-mecer-portfolio.pdf"
//               download
//               className="inline-flex items-center gap-2 text-text/60 transition-colors hover:text-accent"
//             >
//               <DownloadIcon />
//               Download Portfolio
//             </a>
//           </motion.div>
//         </div>

//         {/* Fanned project cards */}
//         <div className="relative hidden h-[500px] md:block">
//           {heroProjects.map((project, i) => {
//             const layout = cardLayout[i];
//             return (
//               <motion.div
//                 key={project.slug}
//                 initial={{ opacity: 0, y: 30, rotate: layout.rotate }}
//                 animate={{ opacity: 1, y: 0, rotate: layout.rotate }}
//                 whileHover={{ y: -10, rotate: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
//                 className={`absolute hover:z-40 ${layout.className}`}
//                 style={{ zIndex: 10 + i }}
//               >
//                 <Link
//                   href={`/work/${project.slug}`}
//                   className="block overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-xl shadow-dark/10"
//                 >
//                   <div className="relative aspect-[4/3] bg-dark/[0.03]">
//                     <Image
//                       src={project.images[0]}
//                       alt={project.title}
//                       fill
//                       sizes="(min-width: 768px) 280px, 100vw"
//                       className="object-contain p-5"
//                     />
//                   </div>
//                   <div className="flex items-center justify-between px-4 py-3">
//                     <span className="text-sm font-semibold text-dark">
//                       {project.title}
//                     </span>
//                     <span className="text-xs text-text/50">
//                       {project.category.split("·")[0].trim()}
//                     </span>
//                   </div>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Selected work strip */}
//       <motion.div
//         {...reveal(0.7)}
//         className="relative mx-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-dark/10 py-6 md:mx-16 lg:mx-24"
//       >
//         <span className="text-xs uppercase tracking-widest text-text/40">
//           Selected work
//         </span>
//         {projects.map((project) => (
//           <Link
//             key={project.slug}
//             href={`/work/${project.slug}`}
//             className="text-sm font-medium text-text/60 transition-colors hover:text-accent"
//           >
//             {project.title}
//           </Link>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import WorkMarquee from "@/components/ui/WorkMarquee";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const tags = ["Brand identity", "Product design", "Front-end build"];

const heroSlugs = ["mesam-prints", "aura-loop-wear", "mopane-grill"];

const heroProjects = heroSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const cardLayout = [
  { className: "left-0 top-4 w-[62%]", rotate: -6 },
  { className: "right-0 top-28 w-[62%]", rotate: 4 },
  { className: "left-[14%] bottom-0 w-[62%]", rotate: -2 },
];

function useHarareTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Harare",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function Hero() {
  const time = useHarareTime();

  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background, fades out toward the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,17,17,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      <div className="relative grid min-h-[84vh] grid-cols-1 items-center gap-12 px-8 pb-10 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-16 lg:px-24">
        <div>
          <motion.div
            {...reveal(0)}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text/60"
          >
            <span className="font-medium text-dark">
              Melchizedek Tinashe Mecer
            </span>
            <span className="h-4 w-px bg-dark/15" aria-hidden="true" />
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Harare, ZW{time ? ` · ${time} CAT` : ""}
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.1)}
            className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-dark md:text-6xl lg:text-7xl"
          >
            I design brands and products,
            <br />
            then <span className="text-accent">build</span> them.
          </motion.h1>

          <motion.p
            {...reveal(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text/70"
          >
            Currently running MESAM Prints, a branding and print studio in
            Harare, and taking on brand and product work worldwide.
          </motion.p>

          <motion.ul
            {...reveal(0.3)}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-widest text-text/50"
          >
            {tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    className="h-1 w-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
                {tag}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...reveal(0.4)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-dark px-7 py-3.5 font-medium text-bg shadow-lg shadow-dark/10 transition-colors hover:bg-accent"
            >
              View Work
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-dark/20 px-7 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>

          <motion.div
            {...reveal(0.5)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          >
            <a
              href="/files/melchizedek-mecer-cv.pdf"
              download
              className="inline-flex items-center gap-2 text-text/60 transition-colors hover:text-accent"
            >
              <DownloadIcon />
              Download CV
            </a>
            <span className="h-4 w-px bg-dark/15" aria-hidden="true" />
            <a
              href="/files/melchizedek-mecer-portfolio.pdf"
              download
              className="inline-flex items-center gap-2 text-text/60 transition-colors hover:text-accent"
            >
              <DownloadIcon />
              Download Portfolio
            </a>
          </motion.div>
        </div>

        {/* Fanned project cards */}
        <div className="relative hidden h-[500px] md:block">
          {heroProjects.map((project, i) => {
            const layout = cardLayout[i];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30, rotate: layout.rotate }}
                animate={{ opacity: 1, y: 0, rotate: layout.rotate }}
                whileHover={{ y: -10, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className={`absolute hover:z-40 ${layout.className}`}
                style={{ zIndex: 10 + i }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-xl shadow-dark/10"
                >
                  <div className="relative aspect-[4/3] bg-dark/[0.03]">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      className="object-contain p-5"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm font-semibold text-dark">
                      {project.title}
                    </span>
                    <span className="text-xs text-text/50">
                      {project.category.split("·")[0].trim()}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div {...reveal(0.7)}>
        <WorkMarquee />
      </motion.div>
    </section>
  );
}


