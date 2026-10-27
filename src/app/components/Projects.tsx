import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

const projects = [
    {
        number: "01",
        name: "EDUKIND",
        category: "AI Learning Platform",
        description:
            "An educational platform project focused on building a digital learning experience. More project details will be added after verifying the implemented features.",
        slug: "edukind",
        image: "/projects/edukind.png",
        glow: "group-hover:shadow-blue-500/10",
        iconColor: "text-blue-300",
    },
    {
        number: "02",
        name: "Takid-Barta",
        category: "Project Overview",
        description:
            "Explore this project and its development journey. The description and technology stack will be added after confirming the project details.",
        slug: "takid-barta",
        image: "/projects/barta.png",
        glow: "group-hover:shadow-cyan-500/10",
        iconColor: "text-cyan-300",
    },
    {
        number: "03",
        name: "JerseyArena",
        category: "Project Overview",
        description:
            "Discover the project, its purpose, and the challenges behind its development. Verified features and technologies will be added next.",
        slug: "jerseyarena",
        image: "/projects/edukind.png",
        glow: "group-hover:shadow-violet-500/10",
        iconColor: "text-violet-300",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative isolate overflow-hidden bg-[#080A12] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
        >
            {/* Background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.10] blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-600/[0.10] blur-[120px]"
            />

            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 backdrop-blur-xl">
                        <Sparkles className="h-4 w-4 text-blue-300" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                            Selected Works
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Projects I&apos;ve{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                            Built
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        A collection of projects reflecting my journey in
                        development, problem-solving, and turning ideas into
                        digital experiences.
                    </p>
                </div>

                {/* Project cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
                    {projects.map((project) => (
                        <article
                            key={project.slug}
                            className={`group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.045] hover:shadow-2xl ${project.glow}`}
                        >
                            {/* Project screenshot */}
                            <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101522]">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} website screenshot`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-contain p-2 transition-transform duration-700"
                                />

                                {/* Subtle image overlay */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-t from-[#080A12]/50 via-transparent to-[#080A12]/10"
                                />

                                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-white/85 backdrop-blur-lg">
                                    PROJECT {project.number}
                                </span>

                                <ArrowUpRight
                                    aria-hidden
                                    className="absolute right-4 top-4 h-5 w-5 text-white/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                                />
                            </div>

                            {/* Project information */}
                            <div className="flex flex-1 flex-col px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
                                <p
                                    className={`text-xs font-semibold tracking-wide ${project.iconColor}`}
                                >
                                    {project.category}
                                </p>

                                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-100">
                                    {project.name}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent" />

                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/[0.07] px-5 py-3 text-sm font-semibold text-blue-200 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                                >
                                    View Project Details
                                    <ArrowUpRight
                                        aria-hidden
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Closing line */}
                <div className="mt-12 text-center sm:mt-16">
                    <p className="text-sm text-slate-500">
                        Every project is another opportunity to learn, build,
                        and improve.
                    </p>
                </div>
            </div>
        </section>
    );
}
