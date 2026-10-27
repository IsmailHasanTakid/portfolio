import { Bricolage_Grotesque } from "next/font/google";
import {
    Code2,
    Brain,
    Puzzle,
    Sparkles,
    Target,
    ArrowDownRight,
} from "lucide-react";

const font = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
});

const journey = [
    {
        number: "01",
        title: "The Beginning",
        text: "Started with C and C++, learning programming logic, algorithms, and problem solving.",
        color: "#22D3EE",
        icon: Brain,
    },
    {
        number: "02",
        title: "The Web",
        text: "Discovered web development through HTML, CSS, JavaScript, React, and Next.js.",
        color: "#A78BFA",
        icon: Code2,
    },
    {
        number: "03",
        title: "Growing Further",
        text: "Exploring APIs, databases, authentication, and backend development.",
        color: "#F472B6",
        icon: Target,
    },
];

const interests = [
    {
        icon: Sparkles,
        title: "UI & UX",
        text: "Clean, responsive, user-friendly interfaces.",
        color: "#A78BFA",
    },
    {
        icon: Puzzle,
        title: "Problem Solving",
        text: "Breaking complex challenges into simple steps.",
        color: "#22D3EE",
    },
    {
        icon: Code2,
        title: "Continuous Learning",
        text: "Learning by building, experimenting, and improving.",
        color: "#F472B6",
    },
];

const glass =
    "rounded-2xl border border-white/[0.09] bg-white/[0.035] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]";

export default function AboutMe() {
    return (
        <section
            id="about"
            className={`${font.className} relative isolate overflow-hidden bg-[#070B14] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24`}
        >
            {/* Subtle colorful background */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[110px]" />
                <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/10 blur-[110px]" />

                <div className="absolute inset-0 bg-[#070B14]/30" />
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Introduction */}

                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium text-cyan-200 sm:text-sm">
                            <Sparkles size={15} />
                            CSE Student · Aspiring Full-Stack Developer
                        </span>

                        <h2
                            id="about-heading"
                            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            A little about{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                                me.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                            I'm Ismail Hasan Takid, a CSE student passionate
                            about web development. I enjoy turning ideas into
                            useful digital experiences, solving problems, and
                            learning how things work. My goal is to grow into
                            a Full-Stack Developer who builds meaningful,
                            user-friendly applications.
                        </p>

                        <a
                            href="#my-journey"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                        >
                            Discover my journey
                            <ArrowDownRight size={17} />
                        </a>
                    </div>

                    {/* Short personal note */}

                    <div className="lg:col-span-4">
                        <div className={`${glass} p-6`}>
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/10 text-violet-300">
                                <Brain size={22} />
                            </div>

                            <h3 className="mt-4 text-xl font-semibold">
                                My mindset
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-white/60">
                                Stay curious, solve problems step by step,
                                and keep improving. Progress matters more
                                than perfection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Programming journey */}

                <div id="my-journey" className="mt-16 scroll-mt-24 sm:mt-20">
                    <div className="flex items-center gap-4">
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            My programming journey
                        </h3>

                        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {journey.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.number}
                                    className={`${glass} relative overflow-hidden p-5`}
                                >
                                    <div
                                        className="absolute inset-x-0 top-0 h-px"
                                        style={{
                                            background: `linear-gradient(90deg, ${item.color}, transparent)`,
                                        }}
                                    />

                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-xs font-semibold uppercase tracking-widest"
                                            style={{ color: item.color }}
                                        >
                                            {item.number}
                                        </span>

                                        <Icon
                                            size={20}
                                            style={{ color: item.color }}
                                        />
                                    </div>

                                    <h4 className="mt-4 font-semibold">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-white/60">
                                        {item.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Work interests */}

                <div className="mt-16 sm:mt-20">
                    <div className="flex items-center gap-4">
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            What I enjoy
                        </h3>

                        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {interests.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className={`${glass} flex items-start gap-4 p-5`}
                                >
                                    <div
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                        style={{
                                            color: item.color,
                                            backgroundColor: `${item.color}15`,
                                        }}
                                    >
                                        <Icon size={20} />
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold">
                                            {item.title}
                                        </h4>

                                        <p className="mt-1.5 text-sm leading-6 text-white/55">
                                            {item.text}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
