// export type Project = {
//   slug: string;
//   title: string;
//   category: string;
//   blurb: string;
//   description: string;
//   images: string[];
//   year: string;
//   role: string;
//   overview: string;
//   challenge: string;
//   outcome: string;
// };

// export const projects: Project[] = [
//   {
//     slug: "mesam-prints",
//     title: "MESAM Prints",
//     category: "Brand Identity",
//     blurb: "A premium print and branding identity designed to position Mesam Prints as a serious creative production studio.",
//     description:
//       "Full brand system for a Harare printing and branding studio — logo, color palette, typography, and print collateral.",
//     images: ["/projects/mesam-prints.png"],
//     year: "2026",
//     role: "Brand Designer",
//     overview:
//       "MESAM Prints is a Harare-based printing and branding studio I founded, offering everything from logo design to full brand identity systems for local businesses.",
//     challenge:
//       "Building a brand system that could scale from digital assets to physical print production, while keeping visual consistency across both.",
//     outcome:
//       "A complete brand identity — logo suite, color palette, typography pairing, and a repeatable system used across business cards, posters, and marketing materials.",
//   },
//   {
//     slug: "mopane-grill",
//     title: "Mopane Grill",
//     category: "Restaurant Branding",
//     blurb: "A savanna-rooted brand identity built to feel authentic across menus, signage, and social — one bite is never enough.",
//     description:
//       "Brand identity for a new restaurant concept — logo, color system, and marketing flier design.",
//     images: ["/projects/mopane-grill.png"],
//     year: "2026",
//     role: "Brand Designer",
//     overview:
//       "Mopane Grill needed a brand identity that captured an African savanna feel while staying versatile enough for menus, signage, and social media.",
//     challenge:
//       "Translating a regional dining concept into a visual identity that feels authentic without leaning on cliché.",
//     outcome:
//       "A logo built around a tree/savanna motif, a full color palette, and a launch flier carrying the tagline 'One Bite Is Never Enough.'",
//   },
//   {
//     slug: "rescuezw",
//     title: "RescueZW",
//     category: "Product Design & Development",
//     blurb: "An emergency response platform built for Zimbabwe's real infrastructure — free life-saving features, backed by a sustainable model.",
//     description:
//       "Emergency response platform for Zimbabwe — crash detection, Silent SOS, and lock-screen medical ID, built with Next.js and PostgreSQL.",
//     images: ["/projects/rescuezw.png"],
//     year: "2026",
//     role: "Product Designer & Developer",
//     overview:
//       "RescueZW is an emergency response platform designed for the Zimbabwean context — built to work with local payment rails and real infrastructure constraints.",
//     challenge:
//       "Designing a system where life-critical features had to remain free and instantly accessible, while still supporting a sustainable revenue model.",
//     outcome:
//       "A tiered platform with free emergency features (crash detection, Silent SOS, lock-screen Medical ID) and a full build spec using Next.js, TypeScript, and PostgreSQL.",
//   },
//   {
//     slug: "printbridge-zim",
//     title: "PrintBridge Zim",
//     category: "Marketplace Platform",
//     blurb: "A B2B print marketplace that replaces fragmented, informal ordering with one structured, trustworthy platform.",
//     description:
//       "B2B print marketplace — wireframed and prototyped across lo-fi, mid-fi, and hi-fi stages with a full product brief.",
//     images: ["/projects/printbridge-zim.jpg"],
//     year: "2026",
//     role: "Product Designer",
//     overview:
//       "PrintBridge Zim connects businesses with print vendors in a structured B2B marketplace, replacing informal, fragmented ordering processes.",
//     challenge:
//       "Mapping a multi-step B2B ordering flow into an interface simple enough for non-technical business owners to use confidently.",
//     outcome:
//       "A full prototype progression from lo-fi wireframes to a high-fidelity interactive prototype, backed by a complete product brief.",
//   },
//   {
//     slug: "urban-fix-zim",
//     title: "Urban Fix Zim",
//     category: "Marketplace Platform",
//     blurb: "A two-sided service marketplace built around a single account that switches cleanly between hiring and earning.",
//     description:
//       "Two-sided service marketplace with a dual-role hire/earn toggle — full customer and provider flows across 26+ screens.",
//     images: ["/projects/urban-fix-zim.png"],
//     year: "2026",
//     role: "Product Designer",
//     overview:
//       "Urban Fix Zim is a two-sided marketplace connecting people who need services with people who provide them, built around a single dual-role account model.",
//     challenge:
//       "Designing one account system that could switch cleanly between 'hiring' and 'earning' modes without confusing users or duplicating flows.",
//     outcome:
//       "A toggle-based dual-role UX validated across a 26-screen provider-side prototype, full customer flows, and complete Figma user flow diagrams.",
//   },
// ];


export type Project = {
  slug: string;
  title: string;
  category: string;
  services?: string[];
  blurb: string;
  description: string;
  images: string[];
  year: string;
  role: string;
  overview: string;
  challenge: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "mesam-prints",
    title: "MESAM Prints",
    category: "Brand Identity",
    blurb: "A premium print and branding identity designed to position Mesam Prints as a serious creative production studio.",
    description:
      "Full brand system for a Harare printing and branding studio logo, color palette, typography, and print collateral.",
    images: ["/projects/mesam-prints.png"],
    year: "2026",
    role: "Brand Designer",
    overview:
      "MESAM Prints is a Harare-based printing and branding studio I founded, offering everything from logo design to full brand identity systems for local businesses.",
    challenge:
      "Building a brand system that could scale from digital assets to physical print production, while keeping visual consistency across both.",
    outcome:
      "A complete brand identity logo suite, color palette, typography pairing, and a repeatable system used across business cards, posters, and marketing materials.",
  },
  {
    slug: "mopane-grill",
    title: "Mopane Grill",
    category: "Restaurant Branding",
    blurb: "A savanna-rooted brand identity built to feel authentic across menus, signage, and social one bite is never enough.",
    description:
      "Brand identity for a new restaurant concept logo, color system, and marketing flier design.",
    images: ["/projects/mopane-grill.png"],
    year: "2026",
    role: "Brand Designer",
    overview:
      "Mopane Grill needed a brand identity that captured an African savanna feel while staying versatile enough for menus, signage, and social media.",
    challenge:
      "Translating a regional dining concept into a visual identity that feels authentic without leaning on cliché.",
    outcome:
      "A logo built around a tree/savanna motif, a full color palette, and a launch flier carrying the tagline 'One Bite Is Never Enough.'",
  },
  {
    slug: "rescuezw",
    title: "RescueZW",
    category: "Product Design & Development",
    blurb: "An emergency response platform built for Zimbabwe's real infrastructure free life-saving features, backed by a sustainable model.",
    description:
      "Emergency response platform for Zimbabwe crash detection, Silent SOS, and lock-screen medical ID, built with Next.js and PostgreSQL.",
    images: ["/projects/rescuezw.png"],
    year: "2026",
    role: "Product Designer & Developer",
    overview:
      "RescueZW is an emergency response platform designed for the Zimbabwean context built to work with local payment rails and real infrastructure constraints.",
    challenge:
      "Designing a system where life-critical features had to remain free and instantly accessible, while still supporting a sustainable revenue model.",
    outcome:
      "A tiered platform with free emergency features (crash detection, Silent SOS, lock-screen Medical ID) and a full build spec using Next.js, TypeScript, and PostgreSQL.",
  },
  {
    slug: "aura-loop-wear",
    title: "Aura Loop Wear",
    category: "Fashion Brand Identity",
    services: ["Brand Identity", "Art Direction", "Campaign Design"],
    blurb: "A modern fashion identity built around bold expression, movement and contemporary streetwear.",
    description:
      "A modern fashion identity built around bold expression, movement and contemporary streetwear.",
    images: [
      "/projects/aura-loop-wear-logo.png",
      "/projects/aura-loop-wear-colours.png",
      "/projects/aura-loop-wear-typography.png",
      "/projects/aura-loop-wear-poster-main.png",
      "/projects/aura-loop-wear-poster-instagram.png",
      "/projects/aura-loop-wear-mockup.png",
      "/projects/aura-loop-wear-campaign.png",
      "/projects/aura-loop-wear-applications.png",
    ],
    year: "2026",
    role: "Brand & Art Director",
    overview:
      "Aura Loop Wear is a fashion brand identity built around bold expression, movement, and contemporary streetwear culture.",
    challenge:
      "Creating a visual identity energetic enough for streetwear culture while staying cohesive across logo, campaign, and product applications.",
    outcome:
      "A complete brand system logo, color palette, typography, campaign posters, and clothing mockups ready to launch across digital and physical touchpoints.",
  },
  {
    slug: "urban-fix-zim",
    title: "Urban Fix Zim",
    category: "Marketplace Platform",
    blurb: "A two-sided service marketplace built around a single account that switches cleanly between hiring and earning.",
    description:
      "Two-sided service marketplace with a dual-role hire/earn toggle full customer and provider flows across 26+ screens.",
    images: ["/projects/urban-fix-zim.png"],
    year: "2026",
    role: "Product Designer",
    overview:
      "Urban Fix Zim is a two-sided marketplace connecting people who need services with people who provide them, built around a single dual-role account model.",
    challenge:
      "Designing one account system that could switch cleanly between 'hiring' and 'earning' modes without confusing users or duplicating flows.",
    outcome:
      "A toggle-based dual-role UX validated across a 26-screen provider-side prototype, full customer flows, and complete Figma user flow diagrams.",
  },
];