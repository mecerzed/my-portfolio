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
  number: string;
  title: string;
  outcome: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Brand Identity",
    outcome: "Build a visual identity people remember.",
    description:
      "Logo design, colour, typography and brand guidelines, built so the brand looks consistent on a screen, a sign or a shirt.",
    deliverables: ["Logo suite", "Colour & type", "Brand guidelines"],
  },
  {
    number: "02",
    title: "UI/UX & Product Design",
    outcome: "Turn complicated ideas into products people can use.",
    description:
      "Research, user flows, wireframes and prototypes, taken from rough idea to a polished interface that's ready to build.",
    deliverables: ["User flows", "Wireframes", "Prototypes", "UI design"],
  },
  {
    number: "03",
    title: "Print & Marketing Design",
    outcome: "Take the brand from screen to the real world.",
    description:
      "Business cards, fliers, posters, billboards and merchandise, prepared as production-ready files and tested against real printing.",
    deliverables: ["Business cards", "Posters & fliers", "Billboards", "Merch"],
  },
  {
    number: "04",
    title: "Digital Graphics",
    outcome: "Keep every post and campaign looking like one brand.",
    description:
      "Social media graphics and campaign visuals that apply the identity consistently and give audiences something worth stopping for.",
    deliverables: ["Social graphics", "Campaign visuals", "Ad creatives"],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  youGet: string;
};

export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "I learn the brand, the audience and the constraints before I open a design tool.",
    youGet: "A clear brief and direction.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I sketch and explore concepts, such as logo routes, wireframes and layouts, and share them early so you can react.",
    youGet: "Concepts to give feedback on.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "I check the work against the brief and tighten typography, hierarchy and detail until it holds together.",
    youGet: "Polished, consistent work.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "I hand over production-ready files, brand guidelines and assets, print-ready or ready for a developer.",
    youGet: "Files you can use straight away.",
  },
];