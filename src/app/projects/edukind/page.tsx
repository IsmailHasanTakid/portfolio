"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
    type TouchEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    ExternalLink,
    Eye,
    Heart,
    Maximize2,
    MessageCircle,
    Sparkles,
    X,
    BookOpen,
    GraduationCap,
    Layers3,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const technologies = [
    { name: "Next.js", group: "Frontend" },
    { name: "React", group: "Frontend" },
    { name: "TypeScript", group: "Frontend" },
    { name: "Tailwind CSS", group: "Frontend" },
    { name: "MongoDB", group: "Database" },
    { name: "Groq AI", group: "AI" },
];

const techGroups = ["Frontend", "Database", "AI"];

const projectSections = [
    {
        number: "01",
        eyebrow: "THE VISION",
        title: "More than a learning platform.",
        description:
            "EDUKIND is an AI-powered learning ecosystem designed to bring knowledge, technology, and humanity together. The vision is to help people learn new skills, explore ideas, grow with AI assistance, and make a positive impact on the world.",
        points: [
            "One ecosystem for multiple learning needs",
            "AI-assisted learning and problem solving",
            "Knowledge, personal growth, and community impact",
        ],
        image: "/projects/edukind1.png",
        imageAlt: "EDUKIND platform introduction",
        icon: Sparkles,
        color: "#A78BFA",
    },
    {
        number: "02",
        eyebrow: "AI MENTOR",
        title: "A smarter way to learn.",
        description:
            "The AI Mentor gives learners a place to ask questions, understand difficult concepts, and get guidance while learning. Instead of searching through endless resources, users can start a conversation and explore a topic step by step.",
        points: [
            "Ask questions in a conversational interface",
            "Get explanations tailored to the topic",
            "Continue learning through follow-up questions",
        ],
        image: "/projects/edukind2.png",
        imageAlt: "EDUKIND Ask AI Mentor interface",
        icon: MessageCircle,
        color: "#67E8F9",
    },
    {
        number: "03",
        eyebrow: "LEARNING HUB",
        title: "Turn curiosity into skills.",
        description:
            "The Learning Hub brings learning experiences together in one place. Its goal is to help users explore subjects, build knowledge, and develop practical skills through a more structured and accessible learning experience.",
        points: [
            "Explore learning topics and resources",
            "Build knowledge through guided learning",
            "Create opportunities for continuous improvement",
        ],
        image: "/projects/edukind3.png",
        imageAlt: "EDUKIND Learning Hub",
        icon: GraduationCap,
        color: "#C4B5FD",
    },
    {
        number: "04",
        eyebrow: "HUMANITY HUB",
        title: "Technology with a human purpose.",
        description:
            "EDUKIND is not only about personal growth. Humanity Hub is designed around community support, helping people connect with opportunities to make a difference through blood donation, volunteering, and humanitarian initiatives.",
        points: [
            "Connect blood donors with people in need",
            "Encourage community volunteering",
            "Make meaningful help easier to discover",
        ],
        image: "/projects/edukind4.png",
        imageAlt: "EDUKIND Humanity Hub",
        icon: Heart,
        color: "#F9A8D4",
    },
    {
        number: "05",
        eyebrow: "AI TOOLKIT",
        title: "One mentor. Different possibilities.",
        description:
            "The AI Mentor experience brings together specialized tools for different learning goals. From understanding a concept to practising code or preparing for interviews, each tool is designed around a particular learner need.",
        points: [
            "AI Chat and Learn",
            "Code Mentor and Problem Solver",
            "Study Planner and AI Interviewer",
        ],
        image: "/projects/edukind5.png",
        imageAlt: "EDUKIND AI Mentor tools",
        icon: Layers3,
        color: "#93C5FD",
    },
    {
        number: "06",
        eyebrow: "DEENISLAM",
        title: "Explore knowledge with purpose.",
        description:
            "The Islamic Knowledge experience aims to make Quran reading and Islamic learning more accessible. Features include Quran reading, Bengali translation, Surah search, bookmarks, and a separate Hadith library.",
        points: [
            "Read the Quran with Bengali translation",
            "Search Surahs and save bookmarks",
            "Explore a dedicated Hadith library",
        ],
        image: "/projects/edukind6.png",
        imageAlt: "EDUKIND Islamic Knowledge experience",
        icon: BookOpen,
        color: "#6EE7B7",
    },
    {
        number: "07",
        eyebrow: "CONVERSATIONAL AI",
        title: "Ask. Understand. Keep growing.",
        description:
            "The AI chat experience is designed to make asking questions feel natural. Learners can interact with the assistant, explore answers, and ask follow-up questions to deepen their understanding of a subject.",
        points: [
            "A focused conversational workspace",
            "Ask follow-up questions naturally",
            "Get learning support in one place",
        ],
        image: "/projects/edukind7.png",
        imageAlt: "EDUKIND AI chatbox interface",
        icon: MessageCircle,
        color: "#C4B5FD",
    },
];

/* `solution` is optional: add it to any challenge to show how you solved it. */
const challenges: {
    number: string;
    title: string;
    description: string;
    solution?: string;
}[] = [
        {
            number: "01",
            title: "Bringing different experiences together",
            description:
                "Designing a unified platform for AI assistance, learning resources, Islamic knowledge, and community support while keeping navigation clear.",
        },
        {
            number: "02",
            title: "Working with AI services",
            description:
                "Building AI-powered interactions requires thoughtful API handling, useful responses, loading states, and graceful error handling.",
        },
        {
            number: "03",
            title: "Creating a consistent experience",
            description:
                "Maintaining a cohesive interface across different tools and pages while adapting the experience to mobile and desktop screens.",
        },
    ];

const futurePlans = [
    "Complete the Humanity Hub and its community support features",
    "Implement user authentication and authorization",
    "Improve responsive design across mobile, tablet, and desktop",
    "Enhance learning progress tracking and personalization",
    "Improve AI service reliability and error handling",
];

const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Features", id: "project-story" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Challenges", id: "challenges" },
    { label: "Future Plans", id: "future-plans" },
    { label: "Links", id: "project-links" },
];

const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A12]";

/* ------------------------------------------------------------------ */
/* Small helper components                                             */
/* ------------------------------------------------------------------ */

/** Fades a block in once when it scrolls into view. Respects reduced motion. */
function Reveal({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${className}`}
        >
            {children}
        </div>
    );
}

/** Browser-window style frame around a screenshot. */
function BrowserFrame({ children }: { children: ReactNode }) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101322] shadow-2xl shadow-black/40 sm:rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-500">
                    EDUKIND
                </span>
            </div>
            {children}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function EdukIndProjectPage() {
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("overview");

    const progressRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    const liveUrl = "";
    const githubUrl = "https://github.com/IsmailHasanTakid/edukind";

    const openNextImage = useCallback((direction: number) => {
        setActiveImage((current) => {
            if (current === null) return current;
            return (
                (current + direction + projectSections.length) %
                projectSections.length
            );
        });
    }, []);

    /* Lightbox: keyboard support + lock page scroll while open */
    useEffect(() => {
        if (activeImage === null) return;

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActiveImage(null);
            if (event.key === "ArrowRight") openNextImage(1);
            if (event.key === "ArrowLeft") openNextImage(-1);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [activeImage, openNextImage]);

    /* Scroll progress bar */
    useEffect(() => {
        const update = () => {
            const total =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = total > 0 ? window.scrollY / total : 0;
            if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${Math.min(
                    Math.max(progress, 0),
                    1
                )})`;
            }
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    /* Highlight the current section in the sticky nav */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        navItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) openNextImage(delta < 0 ? 1 : -1);
        touchStartX.current = null;
    };

    const vision = projectSections[0];

    return (
        <main className="min-h-screen overflow-hidden scroll-smooth bg-[#080A12] text-white selection:bg-violet-500/30">
            {/* Scroll progress */}
            <div
                ref={progressRef}
                aria-hidden="true"
                className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-300"
                style={{ transform: "scaleX(0)" }}
            />

            {/* Background atmosphere (hidden on small screens for performance) */}
            <div className="pointer-events-none fixed inset-0 -z-0 hidden overflow-hidden sm:block">
                <div className="absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-violet-700/10 blur-[140px]" />
                <div className="absolute -right-48 top-[900px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
                <div className="absolute left-1/3 top-[2200px] h-[400px] w-[400px] rounded-full bg-pink-500/[0.06] blur-[130px]" />
            </div>

            {/* Top bar */}
            <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
                <Link
                    href="/"
                    className={`group inline-flex items-center gap-2 rounded-md text-sm text-slate-400 transition hover:text-white ${focusRing}`}
                >
                    <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                    Back to portfolio
                </Link>

                <span className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                    PROJECT <span className="text-violet-400">/ 01</span>
                </span>
            </header>

            {/* Hero */}
            <section
                id="overview"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 pb-7 pt-12 sm:px-8 sm:pb-8 sm:pt-15 lg:px-12 lg:pt-16"
            >
                <div className="max-w-4xl">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-violet-200">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 motion-reduce:animate-none" />
                        FEATURED PROJECT
                    </div>

                    <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                        EDUKIND
                        <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text pb-2 text-transparent">
                            Learn with purpose.
                        </span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                        An AI-powered learning ecosystem connecting intelligent
                        mentorship, skill development, Islamic knowledge, and
                        meaningful humanitarian action in one place.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        {liveUrl ? (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080A12] transition hover:bg-cyan-100 ${focusRing}`}
                            >
                                Visit live project
                                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-slate-500">
                                <ExternalLink className="h-4 w-4" />
                                Live link coming soon
                            </span>
                        )}

                        {githubUrl ? (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-violet-300/50 hover:bg-white/[0.04] ${focusRing}`}
                            >
                                <Code2 className="h-4 w-4" />
                                Source code
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-slate-500">
                                <Code2 className="h-4 w-4" />
                                Repository link coming soon
                            </span>
                        )}
                    </div>
                </div>

                {/* Hero screenshot */}
                <div className="mt-14 sm:mt-20">
                    <BrowserFrame>
                        <button
                            type="button"
                            onClick={() => setActiveImage(0)}
                            aria-label="View EDUKIND introduction screenshot"
                            className={`group relative block w-full overflow-hidden text-left ${focusRing}`}
                        >
                            <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#080A12]/60 via-transparent to-white/[0.02]" />
                            <Image
                                src="/projects/edukind1.png"
                                alt="EDUKIND project introduction"
                                width={1600}
                                height={900}
                                priority
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="h-auto max-h-[650px] w-full object-contain transition duration-700 group-hover:scale-[1.015] motion-reduce:transition-none"
                            />
                            <span className="absolute bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md">
                                <Maximize2 className="h-3.5 w-3.5" />
                                View screenshot
                            </span>
                        </button>
                    </BrowserFrame>
                </div>

                <a
                    href="#project-story"
                    className={`mt-6 inline-flex items-center gap-3 rounded-md  font-semibold text-2xl transition hover:text-white ${focusRing}`}
                >
                    Explore the project
                    <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
                </a>
            </section>

            {/* Sticky section navigation */}

            <nav
                aria-label="Project sections"
                className="sticky top-0 z-40 border-y border-white/[0.08] bg-[#080A12]/80 backdrop-blur-2xl"
            >
                <div className="mx-auto flex max-w-7xl justify-end px-5 sm:px-8 lg:px-12">
                    <div className="flex max-w-full items-center gap-1 overflow-x-auto py-3">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`group relative shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-out ${focusRing} ${isActive
                                        ? "border-violet-400/30 bg-gradient-to-r from-violet-500/15 to-cyan-400/10 text-white shadow-[0_0_20px_rgba(139,92,246,0.10)]"
                                        : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                                        }`}
                                >
                                    {item.label}

                                    {isActive && (
                                        <span className="absolute inset-x-4 -bottom-[13px] h-[2px] rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>


            {/* Project status */}
            <section className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.04] p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300">
                            <Code2 className="h-5 w-5" />
                        </span>

                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                Project Status
                            </h2>
                            <p className="mt-1 text-sm text-amber-300">
                                Currently in Development
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                        EDUKIND is an ongoing full-stack project. Several parts of the
                        platform are being developed and improved, and some important
                        features are still in progress. The goal is to build a reliable,
                        accessible, and user-friendly AI-powered learning ecosystem.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Humanity Hub implementation",
                            "User authentication and authorization",
                            "Responsive design for mobile and tablet",
                        ].map((task) => (
                            <div
                                key={task}
                                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                                <span className="text-sm leading-6 text-slate-300">
                                    {task}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-5 text-xs leading-6 text-slate-500">
                        New features and improvements will be added as development
                        continues.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section
                id="project-story"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
            >
                <div className="mb-16 max-w-2xl sm:mb-24">
                    <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-cyan-300">
                        INSIDE EDUKIND
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                        One vision.
                        <span className="block text-slate-500">
                            Many ways to make an impact.
                        </span>
                    </h2>
                    <p className="mt-6 leading-8 text-slate-400">
                        Explore the experiences that make up the EDUKIND
                        ecosystem, from AI-assisted learning to knowledge
                        discovery and community support.
                    </p>
                </div>

                {/* Vision (feature 01 text, previously not shown anywhere) */}
                <Reveal className="mb-24 sm:mb-36">
                    <div className="grid gap-8 rounded-3xl border border-violet-300/15 bg-gradient-to-br from-violet-500/[0.08] via-[#101322] to-transparent p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
                        <div>
                            <p
                                className="text-xs font-semibold tracking-[0.2em]"
                                style={{ color: vision.color }}
                            >
                                {vision.eyebrow}
                            </p>
                            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                                {vision.title}
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm leading-8 text-slate-400 sm:text-base">
                                {vision.description}
                            </p>
                            <ul className="mt-6 space-y-4">
                                {vision.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                    >
                                        <span
                                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                            style={{
                                                backgroundColor: `${vision.color}15`,
                                                color: vision.color,
                                            }}
                                        >
                                            <Check className="h-3 w-3" />
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>

                <div className="space-y-24 sm:space-y-36 lg:space-y-44">
                    {projectSections.slice(1).map((section, index) => {
                        const Icon = section.icon;
                        const reverse = index % 2 === 1;
                        const imageIndex = index + 1;

                        return (
                            <Reveal key={section.number}>
                                <section
                                    id={`feature-${section.number}`}
                                    className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-16"
                                >
                                    <div
                                        className={`group relative min-w-0 ${reverse ? "lg:order-2" : ""
                                            }`}
                                    >
                                        <div
                                            className="pointer-events-none absolute -inset-3 rounded-3xl opacity-30 blur-2xl transition duration-700 group-hover:opacity-60"
                                            style={{
                                                background: `radial-gradient(ellipse at center, ${section.color}35, transparent 70%)`,
                                            }}
                                        />
                                        <div className="relative">
                                            <BrowserFrame>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveImage(imageIndex)
                                                    }
                                                    aria-label={`View ${section.imageAlt}`}
                                                    className={`relative block w-full overflow-hidden text-left ${focusRing}`}
                                                >
                                                    <Image
                                                        src={section.image}
                                                        alt={section.imageAlt}
                                                        width={1400}
                                                        height={950}
                                                        loading="lazy"
                                                        sizes="(max-width: 1024px) 100vw, 600px"
                                                        className="h-auto max-h-[520px] w-full object-contain transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
                                                    />
                                                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-xs text-white opacity-100 backdrop-blur-md transition sm:opacity-0 sm:group-hover:opacity-100">
                                                        <Eye className="h-3.5 w-3.5" />
                                                        Preview
                                                    </span>
                                                </button>
                                            </BrowserFrame>
                                        </div>
                                        <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-600">
                                            <span>EDUKIND / {section.number}</span>
                                            <span>Product showcase</span>
                                        </div>
                                    </div>

                                    <div
                                        className={`min-w-0 ${reverse ? "lg:order-1" : ""
                                            }`}
                                    >
                                        <div className="mb-5 flex items-center gap-3">
                                            <span
                                                className="flex h-11 w-11 items-center justify-center rounded-xl border"
                                                style={{
                                                    color: section.color,
                                                    borderColor: `${section.color}35`,
                                                    backgroundColor: `${section.color}10`,
                                                }}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p
                                                    className="text-xs font-semibold tracking-[0.2em]"
                                                    style={{ color: section.color }}
                                                >
                                                    {section.eyebrow}
                                                </p>
                                                <p className="mt-1 text-xs text-slate-600">
                                                    EXPERIENCE {section.number}
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.7rem]">
                                            {section.title}
                                        </h3>
                                        <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                                            {section.description}
                                        </p>

                                        <ul className="mt-7 space-y-4">
                                            {section.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                                >
                                                    <span
                                                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                                        style={{
                                                            backgroundColor: `${section.color}15`,
                                                            color: section.color,
                                                        }}
                                                    >
                                                        <Check className="h-3 w-3" />
                                                    </span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveImage(imageIndex)
                                            }
                                            className={`mt-8 inline-flex items-center gap-2 rounded-md text-sm font-medium transition hover:gap-3 ${focusRing}`}
                                            style={{ color: section.color }}
                                        >
                                            Explore screenshot
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </section>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* Technology stack */}
            <section
                id="tech-stack"
                className="relative z-10 scroll-mt-20 border-y border-white/[0.07] bg-white/[0.02]"
            >
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
                    <div>
                        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-violet-300">
                            UNDER THE HOOD
                        </p>
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Built with modern technology.
                        </h2>
                        <p className="mt-5 max-w-lg text-sm leading-8 text-slate-400">
                            The technology stack supports the platform&apos;s
                            interface, learning experiences, data handling,
                            and AI-powered functionality.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {techGroups.map((group) => (
                            <div key={group}>
                                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-500">
                                    {group.toUpperCase()}
                                </p>
                                <div className="flex flex-wrap gap-x-3 gap-y-1">
                                    {technologies
                                        .filter((tech) => tech.group === group)
                                        .map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="group inline-flex items-center gap-3 border-b border-white/15 px-1 py-3 text-base text-slate-300 transition hover:border-cyan-300/60 hover:text-white sm:text-lg"
                                            >
                                                {tech.name}
                                                <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
                                            </span>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brief description */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-12">
                <div>
                    <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan-300">
                        PROJECT OVERVIEW
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Learning meets technology and purpose.
                    </h2>
                </div>
                <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                    <p>
                        EDUKIND is designed to bring multiple experiences
                        together in one platform. Learners can access AI
                        assistance, explore educational resources, develop
                        skills, and discover Islamic knowledge.
                    </p>
                    <p>
                        Beyond learning, the Humanity Hub reflects a broader
                        goal: using digital technology to support people and
                        encourage meaningful community action.
                    </p>
                    <p>
                        The long-term vision is to continue evolving EDUKIND
                        into a more personalized, reliable, and accessible
                        ecosystem for learning and positive impact.
                    </p>
                </div>
            </section>

            {/* Challenges */}
            <section
                id="challenges"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-20 lg:px-12"
            >
                <div className="mb-12 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-pink-300">
                        THE DEVELOPMENT JOURNEY
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                        Challenges worth solving.
                    </h2>
                    <p className="mt-5 text-sm leading-8 text-slate-400">
                        Building a multi-purpose platform involves more than
                        creating individual pages. It requires consistency,
                        reliable interactions, and thoughtful architecture.
                    </p>
                </div>

                <div className="divide-y divide-white/10 border-y border-white/10">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.number}
                            className="group grid gap-4 py-7 transition sm:grid-cols-[80px_1fr_1.2fr] sm:gap-8 sm:py-9"
                        >
                            <span className="font-mono text-sm text-violet-300">
                                / {challenge.number}
                            </span>
                            <h3 className="text-lg font-medium leading-7 text-white transition group-hover:text-cyan-200">
                                {challenge.title}
                            </h3>
                            <div>
                                <p className="text-sm leading-7 text-slate-400">
                                    {challenge.description}
                                </p>
                                {challenge.solution && (
                                    <p className="mt-3 border-l-2 border-cyan-300/40 pl-4 text-sm leading-7 text-slate-300">
                                        {challenge.solution}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Future plans */}
            <section
                id="future-plans"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
            >
                <div className="relative overflow-hidden rounded-3xl border border-violet-300/15 bg-gradient-to-br from-violet-500/[0.09] via-[#101322] to-cyan-500/[0.07] p-6 sm:p-10 lg:p-14">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-[90px]" />
                    <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <div>
                            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-violet-300">
                                WHAT COMES NEXT
                            </p>
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                                The vision keeps growing.
                            </h2>
                            <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400">
                                EDUKIND is a work in progress, with room to
                                improve the learning experience, strengthen
                                reliability, and expand its positive impact.
                            </p>
                        </div>

                        <ul className="space-y-5">
                            {futurePlans.map((plan, index) => (
                                <li
                                    key={plan}
                                    className="flex items-start gap-4 border-b border-white/10 pb-5 text-sm leading-7 text-slate-300 last:border-0"
                                >
                                    <span className="mt-1 font-mono text-xs text-cyan-300">
                                        0{index + 1}
                                    </span>
                                    <span>{plan}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Project links */}
            <section
                id="project-links"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
            >
                <div className="border-t border-white/10 pt-12 sm:pt-16">
                    <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan-300">
                        EXPLORE THE PROJECT
                    </p>
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                                See what&apos;s possible.
                            </h2>
                            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                                {liveUrl
                                    ? "Explore the live platform or review its source code to learn more about the implementation."
                                    : "The live version is not available yet. You can review the source code to learn more about the implementation."}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100 ${focusRing}`}
                                >
                                    Live project
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-violet-300/50 hover:bg-white/[0.04] ${focusRing}`}
                                >
                                    <Code2 className="h-4 w-4" />
                                    GitHub repository
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 text-xs text-slate-600 sm:flex-row">
                    <Link
                        href="/"
                        className={`inline-flex items-center gap-2 rounded-md transition hover:text-white ${focusRing}`}
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back to all projects
                    </Link>
                    <span>EDUKIND · Built with a vision to make an impact</span>
                </div>
            </section>

            {/* Image lightbox */}
            {activeImage !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03040A]/95 p-4 backdrop-blur-xl sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Project screenshot preview"
                    onClick={() => setActiveImage(null)}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <button
                        type="button"
                        onClick={() => setActiveImage(null)}
                        aria-label="Close image preview"
                        className={`absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-white/15 ${focusRing}`}
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            openNextImage(-1);
                        }}
                        aria-label="Previous screenshot"
                        className={`absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition hover:bg-white/15 sm:left-6 sm:h-12 sm:w-12 ${focusRing}`}
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    <div
                        className="relative w-full max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={projectSections[activeImage].image}
                            alt={projectSections[activeImage].imageAlt}
                            width={1800}
                            height={1200}
                            priority
                            sizes="100vw"
                            className="mx-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
                        />
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs tracking-[0.2em] text-cyan-300">
                                    SCREENSHOT{" "}
                                    {String(activeImage + 1).padStart(2, "0")} /{" "}
                                    {String(projectSections.length).padStart(
                                        2,
                                        "0"
                                    )}
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    {projectSections[activeImage].title}
                                </p>
                            </div>
                            <span className="hidden text-xs text-slate-500 sm:block">
                                Esc to close · ← → to navigate
                            </span>
                            <span className="text-xs text-slate-500 sm:hidden">
                                Swipe to navigate
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            openNextImage(1);
                        }}
                        aria-label="Next screenshot"
                        className={`absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition hover:bg-white/15 sm:right-6 sm:h-12 sm:w-12 ${focusRing}`}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </main>
    );
}