// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// type Tool = {
//   name: string;
//   slug?: string;
//   generic?: "prototype" | "system" | "layout";
// };

// const skillGroups: { category: string; tools: Tool[] }[] = [
//   {
//     category: "Design",
//     tools: [
//       { name: "Figma", slug: "figma" },
//       { name: "Adobe Illustrator", slug: "adobeillustrator" },
//       { name: "Photoshop", slug: "adobephotoshop" },
//       { name: "CorelDRAW", slug: "coreldraw" },
//       { name: "Canva", slug: "canva" },
//       { name: "Affinity Designer", slug: "affinitydesigner" },
//     ],
//   },
//   {
//     category: "Product Design",
//     tools: [
//       { name: "Figma", slug: "figma" },
//       { name: "Prototyping", generic: "prototype" },
//       { name: "Design Systems", generic: "system" },
//       { name: "UX/UI", generic: "layout" },
//     ],
//   },
//   {
//     category: "Development",
//     tools: [
//       { name: "Next.js", slug: "nextdotjs" },
//       { name: "VS Code", slug: "visualstudiocode" },
//       { name: "React", slug: "react" },
//       { name: "TypeScript", slug: "typescript" },
//       { name: "Tailwind CSS", slug: "tailwindcss" },
//       { name: "Git", slug: "git" },
//       { name: "GitHub", slug: "github" },
//     ],
//   },
//   {
//     category: "AI",
//     tools: [
//       { name: "ChatGPT", slug: "openai" },
//       { name: "Gemini", slug: "googlegemini" },
//     ],
//   },
// ];

// const svgProps = {
//   width: 16,
//   height: 16,
//   viewBox: "0 0 24 24",
//   fill: "none",
//   stroke: "currentColor",
//   strokeWidth: 2,
//   strokeLinecap: "round" as const,
//   strokeLinejoin: "round" as const,
//   "aria-hidden": true,
// };

// function GenericIcon({ kind }: { kind: NonNullable<Tool["generic"]> }) {
//   if (kind === "prototype") {
//     return (
//       <svg {...svgProps}>
//         <polygon points="6 4 20 12 6 20 6 4" />
//       </svg>
//     );
//   }
//   if (kind === "system") {
//     return (
//       <svg {...svgProps}>
//         <rect x="3" y="3" width="7" height="7" rx="1" />
//         <rect x="14" y="3" width="7" height="7" rx="1" />
//         <rect x="3" y="14" width="7" height="7" rx="1" />
//         <rect x="14" y="14" width="7" height="7" rx="1" />
//       </svg>
//     );
//   }
//   return (
//     <svg {...svgProps}>
//       <rect x="3" y="3" width="18" height="18" rx="2" />
//       <path d="M3 9h18" />
//       <path d="M9 21V9" />
//     </svg>
//   );
// }

// function BrandIcon({ name, slug }: { name: string; slug: string }) {
//   const [failed, setFailed] = useState(false);
//   const ref = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (el && el.complete && el.naturalWidth === 0) setFailed(true);
//   }, []);

//   if (failed) {
//     return (
//       <span
//         className="flex h-4 w-4 items-center justify-center rounded-sm bg-bg/15 text-[9px] font-bold leading-none text-bg/80"
//         aria-hidden="true"
//       >
//         {name.charAt(0)}
//       </span>
//     );
//   }

//   return (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img
//       ref={ref}
//       src={`https://cdn.simpleicons.org/${slug}/white`}
//       alt=""
//       width={16}
//       height={16}
//       loading="lazy"
//       onError={() => setFailed(true)}
//       className="h-4 w-4 opacity-80"
//     />
//   );
// }

// export default function About() {
//   return (
//     <section id="about" className="px-8 md:px-16 lg:px-24 py-24 bg-dark text-bg">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
//             About
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
//             I design and build products end-to-end from brand strategy to
//             print ready files, and from wireframes to fully functional web platforms.
//           </h2>
//           <p className="text-bg/70 text-lg leading-relaxed">
//             Based in Harare, Zimbabwe, I work as an independent product
//             designer and developer, and I&apos;m the Founder & Creative
//             Director of MESAM Prints, a Harare-based printing and branding
//             studio. My work spans brand identity, UI and product design,
//             print design, and full platform development I don&apos;t just
//             hand off a design file, I build the thing.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="space-y-6"
//         >
//           {skillGroups.map((group) => (
//             <div key={group.category}>
//               <p className="text-sm uppercase tracking-wide text-bg/50 mb-3">
//                 {group.category}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {group.tools.map((tool) => (
//                   <span
//                     key={tool.name}
//                     className="inline-flex items-center gap-2 border border-bg/15 rounded-full px-3 py-1.5 text-sm text-bg/90 transition-colors hover:border-accent"
//                   >
//                     {tool.slug ? (
//                       <BrandIcon name={tool.name} slug={tool.slug} />
//                     ) : tool.generic ? (
//                       <span className="text-bg/80">
//                         <GenericIcon kind={tool.generic} />
//                       </span>
//                     ) : null}
//                     {tool.name}
//                                       </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Tool = {
  name: string;
  slug?: string;
  generic?: "prototype" | "system" | "layout";
};

const skillGroups: { category: string; tools: Tool[] }[] = [
  {
    category: "Design",
    tools: [
      { name: "Figma", slug: "figma" },
      { name: "Adobe Illustrator", slug: "adobeillustrator" },
      { name: "Photoshop", slug: "adobephotoshop" },
      { name: "CorelDRAW", slug: "coreldraw" },
      { name: "Canva", slug: "canva" },
      { name: "Affinity Designer", slug: "affinitydesigner" },
    ],
  },
  {
    category: "Product Design",
    tools: [
      { name: "Figma", slug: "figma" },
      { name: "Prototyping", generic: "prototype" },
      { name: "Design Systems", generic: "system" },
      { name: "UX/UI", generic: "layout" },
    ],
  },
  {
    category: "Development",
    tools: [
      { name: "Next.js", slug: "nextdotjs" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    category: "AI",
    tools: [
      { name: "ChatGPT", slug: "openai" },
      { name: "Gemini", slug: "googlegemini" },
    ],
  },
];

const svgProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

function GenericIcon({
  kind,
}: {
  kind: NonNullable<Tool["generic"]>;
}) {
  if (kind === "prototype") {
    return (
      <svg {...svgProps}>
        <polygon points="6 4 20 12 6 20 6 4" />
      </svg>
    );
  }

  if (kind === "system") {
    return (
      <svg {...svgProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  }

  return (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function BrandIcon({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (el && el.complete && el.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <span
        className="flex h-4 w-4 items-center justify-center rounded-sm bg-bg/15 text-[9px] font-bold leading-none text-bg/80"
        aria-hidden="true"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={`https://cdn.simpleicons.org/${slug}/white`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-4 w-4 opacity-80"
    />
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="px-8 md:px-16 lg:px-24 py-24 bg-dark text-bg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
            About
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            I create purposeful designs that bring brands to life and make
            digital experiences more meaningful.
          </h2>

          <div className="space-y-4 text-bg/70 text-lg leading-relaxed">
            <p>
              I&apos;m Melchizedek Tinashe Mecer, a graphic and product
              designer based in Harare, Zimbabwe, with a strong focus on
              visual communication, brand identity, and user-centred design.
              I create purposeful, visually engaging work that helps brands
              communicate effectively, strengthen their identity, and connect
              with their audiences.
            </p>

            <p>
              My expertise spans brand identity design, marketing materials,
              digital graphics, print design, and UI/UX design. I apply design
              principles, typography, colour theory, layout, and visual
              hierarchy to develop creative solutions that balance aesthetics
              with functionality. I&apos;m proficient in tools including Adobe
              Illustrator, Photoshop, CorelDRAW, Canva, and Figma.
            </p>

            <p>
              Currently studying Product Design at Uncommon, I continue to
              strengthen my design process through practical projects,
              research, prototyping, and continuous learning. I value
              attention to detail, collaboration, adaptability, and delivering
              high-quality work that meets project objectives.
            </p>

            <p>
              I&apos;m eager to contribute my creativity, technical skills,
              and problem-solving abilities to a team where I can create
              meaningful design solutions and continue growing as a
              professional designer.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-sm uppercase tracking-wide text-bg/50 mb-3">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-2 border border-bg/15 rounded-full px-3 py-1.5 text-sm text-bg/90 transition-colors hover:border-accent"
                  >
                    {tool.slug ? (
                      <BrandIcon name={tool.name} slug={tool.slug} />
                    ) : tool.generic ? (
                      <span className="text-bg/80">
                        <GenericIcon kind={tool.generic} />
                      </span>
                    ) : null}

                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
