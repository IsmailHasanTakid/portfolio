"use client";

import type { ComponentType } from "react";
import {
    Code2,
    Globe,
    Database,
    Wrench,
    Terminal,
    Layers3,
    ArrowUpRight,
    Server,
    BrainCircuit,
    ChartNoAxesCombined,
} from "lucide-react";

type ColorKey =
    | "cyan"
    | "violet"
    | "emerald"
    | "pink"
    | "amber"
    | "blue"
    | "rose";

type Variant = "large" | "compact" | "wide";

type SkillGroup = {
    number: string;
    title: string;
    subtitle: string;
    icon: ComponentType<{ className?: string }>;
    color: ColorKey;
    skills: string[];
    tileCols?: string;
};

const skillGroups = {
    programming: {
        number: "01",
        title: "Programming Languages",
        subtitle: "Thinking logically, solving problems",
        icon: Code2,
        color: "cyan",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
    },
    frontend: {
        number: "02",
        title: "Frontend Development",
        subtitle: "Building beautiful experiences",
        icon: Globe,
        color: "violet",
        skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
        tileCols: "grid-cols-2 sm:grid-cols-3",
    },
    backend: {
        number: "03",
        title: "Backend Development",
        subtitle: "Making applications work",
        icon: Server,
        color: "emerald",
        skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
        tileCols: "grid-cols-2",
    },
    ai: {
        number: "04",
        title: "AI & Machine Learning",
        subtitle: "Exploring intelligent systems",
        icon: BrainCircuit,
        color: "pink",
        skills: [
            "Scikit-learn",
            "Data Preprocessing",
            "Model Training",
            "Model Evaluation",
        ],
    },
    data: {
        number: "05",
        title: "Data Science & Visualization",
        subtitle: "Turning data into insights",
        icon: ChartNoAxesCombined,
        color: "amber",
        skills: [
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Data Cleaning",
            "Data Visualization",
        ],
    },
    databases: {
        number: "06",
        title: "Databases",
        subtitle: "Organizing and managing data",
        icon: Database,
        color: "blue",
        skills: ["MongoDB", "MySQL", "SQL"],
    },
    tools: {
        number: "07",
        title: "Tools & Workflow",
        subtitle: "From idea to implementation",
        icon: Wrench,
        color: "rose",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
} satisfies Record<string, SkillGroup>;

const colorStyles: Record<
    ColorKey,
    { text: string; border: string; glow: string; dot: string; tile: string }
> = {
    cyan: {
        text: "text-cyan-300",
        border: "hover:border-cyan-400/40",
        glow: "from-cyan-400/15 via-blue-500/5 to-transparent",
        dot: "bg-cyan-300",
        tile: "group-hover:border-cyan-400/20",
    },
    violet: {
        text: "text-violet-300",
        border: "hover:border-violet-400/40",
        glow: "from-violet-400/15 via-purple-500/5 to-transparent",
        dot: "bg-violet-300",
        tile: "group-hover:border-violet-400/20",
    },
    emerald: {
        text: "text-emerald-300",
        border: "hover:border-emerald-400/40",
        glow: "from-emerald-400/15 via-teal-500/5 to-transparent",
        dot: "bg-emerald-300",
        tile: "group-hover:border-emerald-400/20",
    },
    pink: {
        text: "text-pink-300",
        border: "hover:border-pink-400/40",
        glow: "from-pink-400/15 via-rose-500/5 to-transparent",
        dot: "bg-pink-300",
        tile: "group-hover:border-pink-400/20",
    },
    amber: {
        text: "text-amber-300",
        border: "hover:border-amber-400/40",
        glow: "from-amber-400/15 via-orange-500/5 to-transparent",
        dot: "bg-amber-300",
        tile: "group-hover:border-amber-400/20",
    },
    blue: {
        text: "text-blue-300",
        border: "hover:border-blue-400/40",
        glow: "from-blue-400/15 via-indigo-500/5 to-transparent",
        dot: "bg-blue-300",
        tile: "group-hover:border-blue-400/20",
    },
    rose: {
        text: "text-rose-300",
        border: "hover:border-rose-400/40",
        glow: "from-rose-400/15 via-pink-500/5 to-transparent",
        dot: "bg-rose-300",
        tile: "group-hover:border-rose-400/20",
    },
};

function SkillCard({
    group,
    variant = "compact",
    className = "",
}: {
    group: SkillGroup;
    variant?: Variant;
    className?: string;
}) {
    const Icon = group.icon;
    const colors = colorStyles[group.color];
    const isLarge = variant === "large";
    const isWide = variant === "wide";

    return (
        <article
            className={`group relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0c101c]/80 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#111627] ${isLarge ? "p-5 sm:p-6 lg:p-7" : "p-4 sm:p-5"
                } ${colors.border} ${className}`}
        >
            {/* Card glow */}
            <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${colors.glow} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
            />

            {/* Faded watermark icon (large cards only) */}
            {isLarge && (
                <Icon
                    className={`pointer-events-none absolute -bottom-8 -right-8 -z-10 h-44 w-44 ${colors.text} opacity-[0.045] transition-all duration-700 group-hover:rotate-[-8deg] group-hover:opacity-[0.08]`}
                />
            )}

            <div
                className={`relative flex h-full flex-1 ${isWide
                    ? "flex-col gap-5 lg:flex-row lg:items-center lg:gap-10"
                    : "flex-col"
                    }`}
            >
                {/* Header: icon + title inline to save height */}
                <div
                    className={`flex items-start gap-3.5 ${isWide ? "lg:w-[34%] lg:shrink-0" : ""
                        }`}
                >
                    <div
                        className={`flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] ${colors.text} transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 ${isLarge ? "h-12 w-12" : "h-10 w-10"
                            }`}
                    >
                        <Icon className={isLarge ? "h-6 w-6" : "h-5 w-5"} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <h3
                            className={`font-semibold leading-snug tracking-tight text-white ${isLarge
                                ? "text-xl sm:text-2xl"
                                : "text-base sm:text-[17px]"
                                }`}
                        >
                            {group.title}
                        </h3>

                        <p className="mt-0.5 text-xs leading-5 text-slate-500 sm:text-[13px]">
                            {group.subtitle}
                        </p>
                    </div>

                    <span className="font-mono text-xs tracking-widest text-slate-600">
                        / {group.number}
                    </span>
                </div>

                {/* Divider */}
                {!isWide && (
                    <div className="my-4 h-px bg-gradient-to-r from-white/15 via-white/[0.06] to-transparent" />
                )}

                {/* Skills */}
                <div className={isWide ? "flex-1" : isLarge ? "flex-1" : ""}>
                    {isLarge ? (
                        <div
                            className={`grid h-full auto-rows-fr gap-2.5 ${group.tileCols ?? "grid-cols-2"
                                }`}
                        >
                            {group.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className={`flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/[0.09] hover:text-white ${colors.tile}`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`}
                                    />
                                    <span className="truncate">{skill}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-1.5">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer (large cards only) */}
                {isLarge && (
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
                            />
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                                {group.skills.length} technologies · Always evolving
                            </span>
                        </div>

                        <ArrowUpRight
                            className={`h-4 w-4 ${colors.text} opacity-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100`}
                        />
                    </div>
                )}
            </div>
        </article>
    );
}

export default function Skills() {
    const g = skillGroups;

    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="relative isolate overflow-hidden bg-[#070912] px-5 py-12 text-white sm:px-8 sm:py-16 lg:py-20"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[130px]" />
                <div className="absolute -left-32 top-[45%] h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
                <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-pink-500/[0.07] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage:
                            "linear-gradient(to bottom, black, transparent 85%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:mb-16">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
                        <Layers3 className="h-4 w-4 text-cyan-300" />

                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                            Tech Stack
                        </span>

                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    </div>

                    <h2
                        id="skills-heading"
                        className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Tools I use to{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                            bring ideas to life.
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                        A growing toolkit for building modern interfaces,
                        developing intelligent applications, and transforming
                        complex problems into meaningful solutions.
                    </p>
                </div>

                {/*
                  Bento layout (desktop, 12 columns):

                  Row 1:  [ Frontend (8)           ] [ Programming (4) ]
                          [  big card, full height ] [ AI & ML (4)     ]

                  Row 2:  [ Data Science (4) ] [ Backend (8)           ]
                          [ Databases (4)    ] [ big card, full height ]

                  Row 3:  [ Tools & Workflow (12, wide)                ]
                */}
                <div className="grid grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-12">
                    {/* Row 1 — Frontend (big) */}
                    <SkillCard
                        group={g.frontend}
                        variant="large"
                        className="lg:col-span-8"
                    />

                    {/* Row 1 — stacked pair next to Frontend */}
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2">
                        <SkillCard group={g.programming} />
                        <SkillCard group={g.ai} />
                    </div>

                    {/* Row 2 — stacked pair next to Backend */}
                    <div className="order-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:order-3 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-2">
                        <SkillCard group={g.data} />
                        <SkillCard group={g.databases} />
                    </div>

                    {/* Row 2 — Backend (big) */}
                    <SkillCard
                        group={g.backend}
                        variant="large"
                        className="order-3 lg:order-4 lg:col-span-8"
                    />

                    {/* Row 3 — Tools (wide) */}
                    <SkillCard
                        group={g.tools}
                        variant="wide"
                        className="order-5 lg:col-span-12"
                    />
                </div>

                {/* Bottom statement */}
                <div className="mt-6 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-r from-cyan-400/[0.06] via-violet-400/[0.08] to-pink-400/[0.06] p-6 sm:mt-8 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                                <Terminal className="h-5 w-5 text-cyan-300" />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-white sm:text-lg">
                                    The stack keeps growing.
                                </h3>

                                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
                                    Every new concept is another opportunity to
                                    build something better.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 self-start rounded-full border border-violet-300/15 bg-violet-300/[0.06] px-4 py-2 text-xs font-medium text-violet-200 sm:self-auto">
                            <Layers3 className="h-4 w-4" />
                            <span>Learn · Build · Improve</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}