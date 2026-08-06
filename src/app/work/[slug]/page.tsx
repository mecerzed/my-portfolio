import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="px-8 md:px-16 lg:px-24 py-16">
            <Link
                href="/#work"
                className="text-sm text-text/50 hover:text-accent transition-colors"
            >
                ← Back to work
            </Link>

            <div className="mt-8 mb-12">
                <p className="text-accent font-medium uppercase tracking-wide text-sm mb-4">
                    {project.category} · {project.year}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
                    {project.title}
                </h1>
            </div>

            <div className="relative aspect-video bg-dark/5 rounded-2xl overflow-hidden mb-16">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
                <div>
                    <p className="text-sm uppercase tracking-wide text-text/40 mb-2">
                        Role
                    </p>
                    <p className="text-dark font-medium">{project.role}</p>
                </div>

                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-dark mb-3">Overview</h2>
                        <p className="text-text/70 leading-relaxed">{project.overview}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-dark mb-3">
                            The Challenge
                        </h2>
                        <p className="text-text/70 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-dark mb-3">Outcome</h2>
                        <p className="text-text/70 leading-relaxed">{project.outcome}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}