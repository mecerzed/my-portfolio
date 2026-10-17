export type ProcessStep = {
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
};

export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    category: "Research & Understanding",
    description:
      "I start by understanding your goals, audience, challenges, and vision. This foundation helps define the real problem and identify the right opportunities before design begins.",
    deliverables: ["Brief & goals", "Audience insights", "Project direction"],
  },
  {
    number: "02",
    title: "Strategise",
    category: "Planning & Direction",
    description:
      "With a clear understanding of the problem, I develop a focused creative direction. I establish the priorities, structure, and design approach that will guide the project from concept to completion.",
    deliverables: ["Creative direction", "Project structure", "Design priorities"],
  },
  {
    number: "03",
    title: "Design",
    category: "Concept & Creation",
    description:
      "I turn ideas into purposeful visual experiences through thoughtful layouts, typography, colour, and interaction. Each decision is made to support the audience, strengthen the message, and achieve the project goals.",
    deliverables: ["Design concepts", "Visual refinement", "Feedback & iteration"],
  },
  {
    number: "04",
    title: "Deliver",
    category: "Refinement & Handover",
    description:
      "I refine the final work, check the details, and prepare everything for its intended use. Whether digital or print, the result is organised, polished, and ready to move forward.",
    deliverables: ["Final artwork", "Production-ready files", "Project handover"],
  },
];