// export type Service = {
//     title: string;
//     description: string;
// };

// export const services: Service[] = [
//     {
//         title: "Brand Identity",
//         description:
//             "Logo design, color systems, typography, and full brand guidelines built to hold up across print and digital.",
//     },
//     {
//         title: "UI / Product Design",
//         description:
//             "Wireframes, prototypes, and polished interfaces for web and mobile products designed to be built, not just admired.",
//     },
//     {
//         title: "Print Design",
//         description:
//             "Business cards, fliers, posters, and print-ready collateral, backed by real production experience running a print studio.",
//     },
//     {
//         title: "Platform Development",
//         description:
//             "Jnr Full-stack builds with Next.js, TypeScript, and Tailwind taking a product from design file to deployed, working software.",
//     },
// ];

// export type ProcessStep = {
//     number: string;
//     title: string;
//     description: string;
// };

// export const process: ProcessStep[] = [
//     {
//         number: "01",
//         title: "Discover",
//         description:
//             "Understand the problem, the audience, and the constraints before touching any design tool.",
//     },
//     {
//         number: "02",
//         title: "Design",
//         description:
//             "Wireframe, prototype, and refine validating direction early instead of polishing the wrong idea.",
//     },
//     {
//         number: "03",
//         title: "Build",
//         description:
//             "Turn approved designs into real, working code no handoff gap between design and development.",
//     },
//     {
//         number: "04",
//         title: "Ship",
//         description:
//             "Deploy, test, and refine post-launch based on how the product actually performs in the real world.",
//     },
// ];

export type Service = {
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    title: "Brand Identity",
    description:
      "Logos, colour palettes, typography and brand guidelines that give a business an identity people remember and trust.",
    capabilities: [
      "Logo design",
      "Colour & typography",
      "Brand guidelines",
      "Visual identity systems",
    ],
  },
  {
    title: "Print Design",
    description:
      "Business cards, fliers, posters, billboards and merchandise, prepared as production-ready files for real printing.",
    capabilities: [
      "Business cards",
      "Posters & fliers",
      "Billboards",
      "Merchandise",
    ],
  },
  {
    title: "Marketing Materials",
    description:
      "Brochures, promotional pieces and campaign assets that communicate clearly and keep the brand consistent everywhere.",
    capabilities: ["Brochures", "Promotional pieces", "Campaign assets"],
  },
  {
    title: "Digital Graphics",
    description:
      "Social media graphics and online visuals that apply your identity consistently and get noticed.",
    capabilities: ["Social media graphics", "Ad creatives", "Web graphics"],
  },
  {
    title: "UI/UX Design",
    description:
      "User flows, wireframes and polished interfaces for websites and apps, designed around real users and real goals.",
    capabilities: [
      "User flows",
      "Wireframes",
      "Prototypes",
      "Interface design",
    ],
  },
  {
    title: "Product Design",
    description:
      "Taking an idea from research and prototype to a complete product design, ready to hand over and build.",
    capabilities: [
      "Research",
      "Prototyping",
      "Design systems",
      "Developer handover",
    ],
  },
];

export const coreCapabilities = [
  "Typography",
  "Colour theory",
  "Layout",
  "Visual hierarchy",
  "Research",
  "Prototyping",
];