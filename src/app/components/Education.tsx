"use client";

import {
    GraduationCap,
    BookOpen,
    CalendarDays,
    Award,
    Sparkles,
} from "lucide-react";

const educationData = [
    {
        id: "diu",
        title: "B.Sc. in Computer Science and Engineering",
        institution: "Dhaka International University",
        shortName: "DIU",
        period: "2023 — 2027",
        status: "Currently studying",
        current: true,
        resultLabel: "Current CGPA",
        result: "3.85",
        resultScale: "/ 4.00",
        icon: GraduationCap,
        accent: "violet",
    },
    {
        id: "hsc",
        title: "Higher Secondary Certificate (HSC)",
        institution: "Altazer Rahman College",
        shortName: "HSC",
        period: "2021",
        status: "Completed",
        current: false,
        resultLabel: "Final GPA",
        result: "5.00",
        resultScale: "/ 5.00",
        icon: BookOpen,
        accent: "emerald",
    },
] as const;

const accentStyles = {
    violet: {
        iconWrap:
            "border-violet-300/30 bg-gradient-to-br from-violet-500/25 to-fuchsia-500/10 text-violet-200 shadow-[0_0_32px_-6px_rgba(139,92,246,0.7)]",
        chip: "border-violet-300/20 bg-violet-400/[0.08] text-violet-200",
        dot: "bg-violet-300",
        period: "text-violet-200",
        result: "from-violet-200 via-fuchsia-200 to-cyan-200",
        glow: "bg-violet-500/[0.07]",
    },
    emerald: {
        iconWrap:
            "border-emerald-300/25 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 text-emerald-200 shadow-[0_0_32px_-8px_rgba(16,185,129,0.6)]",
        chip: "border-emerald-300/20 bg-emerald-400/[0.08] text-emerald-200",
        dot: "bg-emerald-300",
        period: "text-emerald-200",
        result: "from-emerald-200 to-cyan-200",
        glow: "bg-emerald-500/[0.06]",
    },
} as const;

export default function Education() {
    return (
        <section
            id="education"
            className="relative isolate overflow-hidden bg-[#080A12] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-violet-600/[0.10] blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="mx-auto max-w-3xl">
                {/* Section heading */}
                <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
                        <Sparkles className="h-4 w-4 text-violet-300" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                            Academic Journey
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        My{" "}
                        <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                        Building a strong foundation in technology,
                        problem-solving, and continuous learning.
                    </p>
                </div>

                {/* Timeline */}
                <ol className="relative">
                    {/* Vertical line */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-violet-400/70 via-fuchsia-400/30 to-emerald-400/50 sm:left-[31px]"
                    />

                    {educationData.map((item, index) => {
                        const Icon = item.icon;
                        const a = accentStyles[item.accent];
                        const isLast = index === educationData.length - 1;

                        return (
                            <li
                                key={item.id}
                                className={`group relative pl-[76px] sm:pl-[92px] ${isLast ? "" : "pb-8 sm:pb-9"
                                    }`}
                            >
                                {/* Node */}
                                <div
                                    className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] sm:h-16 sm:w-16 ${a.iconWrap}`}
                                >
                                    <Icon
                                        className="h-6 w-6 sm:h-7 sm:w-7"
                                        strokeWidth={1.7}
                                    />
                                    {item.current && (
                                        <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                                            <span
                                                className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${a.dot}`}
                                            />
                                            <span
                                                className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#080A12] ${a.dot}`}
                                            />
                                        </span>
                                    )}
                                </div>

                                {/* Soft hover glow */}
                                <div
                                    className={`pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${a.glow}`}
                                />

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                                    {/* Left: info */}
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                            <span
                                                className={`inline-flex items-center gap-1.5 text-xs font-semibold ${a.period}`}
                                            >
                                                <CalendarDays className="h-3.5 w-3.5" />
                                                {item.period}
                                            </span>

                                            <span
                                                className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${a.chip}`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>

                                        <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm font-medium leading-6 text-slate-300 sm:text-base">
                                            {item.institution}
                                            <span className="ml-2 text-xs font-normal text-slate-500">
                                                ({item.shortName})
                                            </span>
                                        </p>
                                    </div>

                                    {/* Right: result */}
                                    <div className="shrink-0 sm:text-right">
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:justify-end">
                                            <Award className="h-3.5 w-3.5" />
                                            {item.resultLabel}
                                        </div>

                                        <div className="mt-1 flex items-baseline gap-1.5 sm:justify-end">
                                            <span
                                                className={`bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl ${a.result}`}
                                            >
                                                {item.result}
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                {item.resultScale}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {/* Closing statement */}
                <div className="mt-8 flex items-center justify-center gap-3 text-center sm:mt-10">
                    <span className="h-px w-10 bg-white/10" />
                    <p className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
                        Every step forward is an investment in my future.
                    </p>
                    <span className="h-px w-10 bg-white/10" />
                </div>
            </div>
        </section>
    );
}