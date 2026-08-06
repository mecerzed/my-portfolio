export type Service = {
    title: string;
    description: string;
};

export const services: Service[] = [
    {
        title: "Brand Identity",
        description:
            "Logo design, color systems, typography, and full brand guidelines built to hold up across print and digital.",
    },
    {
        title: "UI / Product Design",
        description:
            "Wireframes, prototypes, and polished interfaces for web and mobile products designed to be built, not just admired.",
    },
    {
        title: "Print Design",
        description:
            "Business cards, fliers, posters, and print-ready collateral, backed by real production experience running a print studio.",
    },
    {
        title: "Platform Development",
        description:
            "Jnr Full-stack builds with Next.js, TypeScript, and Tailwind taking a product from design file to deployed, working software.",
    },
];

export type ProcessStep = {
    number: string;
    title: string;
    description: string;
};

export const process: ProcessStep[] = [
    {
        number: "01",
        title: "Discover",
        description:
            "Understand the problem, the audience, and the constraints before touching any design tool.",
    },
    {
        number: "02",
        title: "Design",
        description:
            "Wireframe, prototype, and refine validating direction early instead of polishing the wrong idea.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "Turn approved designs into real, working code no handoff gap between design and development.",
    },
    {
        number: "04",
        title: "Ship",
        description:
            "Deploy, test, and refine post-launch based on how the product actually performs in the real world.",
    },
];