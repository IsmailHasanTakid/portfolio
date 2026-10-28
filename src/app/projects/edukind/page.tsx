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
import { Manrope, Sora } from "next/font/google";
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
/* Fonts: Manrope on mobile/tablet, Sora on large screens              */
/* ------------------------------------------------------------------ */

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    display: "swap",
});

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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060812]";

/* ------------------------------------------------------------------ */
/* Decorative AI neural-network background (visual only)               */
/* ------------------------------------------------------------------ */

const NET_LAYERS = [4, 6, 6, 4];
const NET_X = [110, 420, 780, 1090];

const netNodes = NET_LAYERS.map((count, layer) =>
    Array.from({ length: count }, (_, i) => ({
        x: NET_X[layer],
        y: 50 + (i + 0.5) * (520 / count),
    }))
);

const netLines: { x1: number; y1: number; x2: number; y2: number }[] = [];
for (let l = 0; l < netNodes.length - 1; l++) {
    for (const a of netNodes[l]) {
        for (const b of netNodes[l + 1]) {
            netLines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
        }
    }
}

function NeuralNetwork() {
    return (
        <svg
            className="absolute left-1/2 top-20 w-[1200px] max-w-none -translate-x-1/2 opacity-60"
            viewBox="0 0 1200 620"
            fill="none"
        >
            <defs>
                <linearGradient id="ek-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#67E8F9" />
                </linearGradient>
                <radialGradient id="ek-node">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#A78BFA" />
                </radialGradient>
            </defs>
            {netLines.map((line, i) => (
                <line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#ek-line)"
                    strokeWidth="1"
                    opacity="0.14"
                />
            ))}
            {netNodes.flat().map((node, i) => (
                <g key={i}>
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="14"
                        fill="#A78BFA"
                        opacity="0.08"
                    />
                    <circle
                        className="ek-node"
                        cx={node.x}
                        cy={node.y}
                        r="4.5"
                        fill="url(#ek-node)"
                        style={{ animationDelay: `${(i % 7) * 0.6}s` }}
                    />
                </g>
            ))}
        </svg>
    );
}

/* Visual-only styles: keyframes, grain, grid */
const pageStyles = `
.ek-font{font-family:var(--font-manrope),system-ui,sans-serif;-webkit-font-smoothing:antialiased}
@media (min-width:1024px){.ek-font{font-family:var(--font-sora),var(--font-manrope),system-ui,sans-serif}}
.ek-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");mix-blend-mode:overlay}
.ek-grid{background-image:linear-gradient(to right,rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.04) 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 0%,#000 30%,transparent 80%);mask-image:radial-gradient(ellipse 70% 60% at 50% 0%,#000 30%,transparent 80%)}
.ek-shimmer{background-size:220% auto;animation:ek-shimmer 7s linear infinite}
.ek-marquee{animation:ek-marquee 40s linear infinite}
.ek-reveal{opacity:0;transform:translateY(22px);animation:ek-reveal .9s cubic-bezier(.2,.8,.2,1) forwards}
.ek-node{transform-box:fill-box;transform-origin:center;animation:ek-node 4.2s ease-in-out infinite}
.ek-stroke{-webkit-text-stroke:1px rgba(255,255,255,.09);color:transparent}
.ek-sheen{position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.09) 50%,transparent 65%);transform:translateX(-120%);transition:transform 1.1s cubic-bezier(.2,.8,.2,1)}
.group:hover .ek-sheen{transform:translateX(120%)}
@keyframes ek-shimmer{to{background-position:220% center}}
@keyframes ek-marquee{to{transform:translateX(-50%)}}
@keyframes ek-reveal{to{opacity:1;transform:none}}
@keyframes ek-node{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1.25)}}
@media (prefers-reduced-motion:reduce){
.ek-shimmer,.ek-marquee,.ek-reveal,.ek-node{animation:none!important}
.ek-reveal{opacity:1;transform:none}
.ek-sheen{display:none}
}
`;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

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

function BrowserFrame({
    children,
    color,
}: {
    children: ReactNode;
    color?: string;
}) {
    const accent = color ?? "#A78BFA";

    return (
        <div
            className="rounded-2xl p-px shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] transition duration-500 sm:rounded-3xl"
            style={{
                background: `linear-gradient(145deg, ${accent}70, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.03) 60%, ${accent}40)`,
            }}
        >
            <div className="overflow-hidden rounded-[15px] bg-[#0B0E1C] sm:rounded-[23px]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="mx-auto rounded-md border border-white/[0.06] bg-black/30 px-8 py-1 text-[10px] tracking-[0.2em] text-slate-500">
                        EDUKIND
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}

function SectionLabel({
    children,
    color = "text-violet-300",
    line = "from-violet-300",
}: {
    children: ReactNode;
    color?: string;
    line?: string;
}) {
    return (
        <p
            className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] ${color}`}
        >
            <span className={`h-px w-8 bg-gradient-to-r ${line} to-transparent`} />
            {children}
        </p>
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

    const liveUrl = "https://edukind-takid.vercel.app/";
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
        <main
            className={`${manrope.variable} ${sora.variable} ek-font min-h-screen overflow-hidden scroll-smooth bg-[#060812] text-[#EEF0FA] selection:bg-violet-500/30`}
        >
            <style>{pageStyles}</style>

            {/* Scroll progress */}
            <div
                ref={progressRef}
                aria-hidden="true"
                className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-300 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
                style={{ transform: "scaleX(0)" }}
            />

            {/* Film grain */}
            <div
                aria-hidden="true"
                className="ek-grain pointer-events-none fixed inset-0 z-[55] opacity-[0.07]"
            />

            {/* Background atmosphere (hidden on small screens for performance) */}
            <div className="pointer-events-none fixed inset-0 -z-0 hidden overflow-hidden sm:block">
                <div className="absolute -left-48 top-40 h-[480px] w-[480px] rounded-full bg-violet-600/[0.14] blur-[150px]" />
                <div className="absolute -right-48 top-[900px] h-[540px] w-[540px] rounded-full bg-cyan-500/[0.10] blur-[160px]" />
                <div className="absolute left-1/3 top-[2200px] h-[440px] w-[440px] rounded-full bg-pink-500/[0.07] blur-[140px]" />
            </div>

            {/* AI neural network + grid behind hero */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px] overflow-hidden"
            >
                <div className="ek-grid absolute inset-0" />
                <div className="hidden sm:block">
                    <NeuralNetwork />
                </div>
                <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[110px] sm:h-96 sm:w-96" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#060812]" />
            </div>

            {/* Top bar */}
            <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
                <Link
                    href="/"
                    className={`group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-[13px] text-slate-300 backdrop-blur-md transition hover:border-violet-300/40 hover:bg-white/[0.07] hover:text-white sm:py-2 sm:pl-3 sm:pr-5 sm:text-sm ${focusRing}`}
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.07] transition group-hover:bg-violet-300 group-hover:text-black">
                        <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
                    </span>
                    Back to portfolio
                </Link>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-slate-500 backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
                    PROJECT <span className="text-violet-400">/ 01</span>
                </span>
            </header>

            {/* Hero */}
            <section
                id="overview"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 pb-7 pt-10 sm:px-8 sm:pb-8 sm:pt-16 lg:px-12"
            >
                <div className="max-w-4xl">
                    <div
                        className="ek-reveal mb-6 inline-flex items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-violet-200 shadow-[0_0_40px_-10px_rgba(167,139,250,0.5)] backdrop-blur-md sm:text-xs"
                        style={{ animationDelay: "0.05s" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70 motion-reduce:animate-none" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                        </span>
                        FEATURED PROJECT
                    </div>

                    <h1
                        className="ek-reveal text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
                        style={{ animationDelay: "0.15s" }}
                    >
                        EDUKIND
                        <span className="ek-shimmer mt-1 block bg-clip-text pb-2 text-transparent [background-image:linear-gradient(90deg,#67e8f9,#c4b5fd,#f9a8d4,#67e8f9)]">
                            Learn with purpose.
                        </span>
                    </h1>

                    <p
                        className="ek-reveal mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
                        style={{ animationDelay: "0.3s" }}
                    >
                        An AI-powered learning ecosystem connecting intelligent
                        mentorship, skill development, Islamic knowledge, and
                        meaningful humanitarian action in one place.
                    </p>

                    <div
                        className="ek-reveal mt-8 flex flex-wrap items-center gap-3"
                        style={{ animationDelay: "0.42s" }}
                    >
                        {liveUrl ? (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-violet-200 px-6 py-3 text-sm font-semibold text-[#060812] shadow-[0_10px_40px_-8px_rgba(167,139,250,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-8px_rgba(167,139,250,0.9)] ${focusRing}`}
                            >
                                Visit live project
                                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-slate-500 backdrop-blur-md">
                                <ExternalLink className="h-4 w-4" />
                                Live link coming soon
                            </span>
                        )}

                        {githubUrl ? (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/[0.07] ${focusRing}`}
                            >
                                <Code2 className="h-4 w-4" />
                                Source code
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-slate-500 backdrop-blur-md">
                                <Code2 className="h-4 w-4" />
                                Repository link coming soon
                            </span>
                        )}
                    </div>
                </div>

                {/* Hero screenshot */}
                <div
                    className="ek-reveal relative mt-12 sm:mt-20"
                    style={{ animationDelay: "0.55s" }}
                >
                    <div className="pointer-events-none absolute -inset-x-6 -inset-y-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.22),transparent_65%)] blur-3xl" />
                    <div className="relative">
                        <BrowserFrame>
                            <button
                                type="button"
                                onClick={() => setActiveImage(0)}
                                aria-label="View EDUKIND introduction screenshot"
                                className={`group relative block w-full overflow-hidden text-left ${focusRing}`}
                            >
                                <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#060812]/60 via-transparent to-white/[0.02]" />
                                <Image
                                    src="/projects/edukind1.png"
                                    alt="EDUKIND project introduction"
                                    width={1600}
                                    height={900}
                                    priority
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                    className="h-auto max-h-[650px] w-full object-contain transition duration-700 group-hover:scale-[1.015] motion-reduce:transition-none"
                                />
                                <span className="ek-sheen z-10" aria-hidden="true" />
                                <span className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 text-xs text-white shadow-lg backdrop-blur-xl transition group-hover:border-violet-300/50 group-hover:bg-white group-hover:text-black sm:bottom-5 sm:right-5 sm:px-4">
                                    <Maximize2 className="h-3.5 w-3.5" />
                                    View screenshot
                                </span>
                            </button>
                        </BrowserFrame>
                    </div>
                </div>

                {/* Marquee ticker */}
                <div
                    aria-hidden="true"
                    className="relative mt-10 overflow-hidden border-y border-white/[0.07] py-3.5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] sm:mt-14"
                >
                    <div className="ek-marquee flex w-max gap-8 whitespace-nowrap text-xs font-semibold tracking-[0.3em] text-white/25 sm:gap-10 sm:text-sm">
                        {[...projectSections, ...projectSections].map((item, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-8 sm:gap-10"
                            >
                                {item.eyebrow}
                                <span className="h-1.5 w-1.5 rounded-full bg-violet-300/60" />
                            </span>
                        ))}
                    </div>
                </div>

                <a
                    href="#project-story"
                    className={`group mt-8 inline-flex items-center gap-3 rounded-full text-sm font-medium text-slate-300 transition hover:text-white sm:text-base ${focusRing}`}
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition group-hover:border-violet-300/60 group-hover:bg-violet-300/10">
                        <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
                    </span>
                    Explore the project
                </a>
            </section>

            {/* Sticky section navigation */}
            <nav
                aria-label="Project sections"
                className="sticky top-3 z-40 mt-8 px-3 sm:px-8"
            >
                <div className="mx-auto flex max-w-full justify-start sm:max-w-fit sm:justify-center">
                    <div className="max-w-full rounded-full border border-white/10 bg-[#0B0E1C]/70 p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
                        <div className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        aria-current={isActive ? "location" : undefined}
                                        className={`relative shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-300 ease-out sm:px-4 sm:text-sm ${focusRing} ${isActive
                                            ? "bg-gradient-to-b from-violet-200 to-violet-400 text-[#0B0720] shadow-[0_6px_24px_-6px_rgba(167,139,250,0.8)]"
                                            : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Project status */}
            <section className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
                <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.08] via-amber-300/[0.02] to-transparent p-5 sm:p-8">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/10 blur-[70px]" />
                    <div className="relative flex flex-wrap items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-300 shadow-[0_0_30px_-6px_rgba(252,211,77,0.5)]">
                            <Code2 className="h-5 w-5" />
                        </span>

                        <div>
                            <h2 className="text-lg font-semibold tracking-tight text-white">
                                Project Status
                            </h2>
                            <p className="mt-1 text-[13px] text-amber-300 sm:text-sm">
                                Currently in Development
                            </p>
                        </div>
                    </div>

                    <p className="relative mt-5 max-w-3xl text-[13px] leading-7 text-slate-400 sm:text-sm">
                        EDUKIND is an ongoing full-stack project. Several parts of the
                        platform are being developed and improved, and some important
                        features are still in progress. The goal is to build a reliable,
                        accessible, and user-friendly AI-powered learning ecosystem.
                    </p>

                    <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Humanity Hub implementation",
                            "User authentication and authorization",
                            "Responsive design for mobile and tablet",
                        ].map((task) => (
                            <div
                                key={task}
                                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-300/30 hover:bg-white/[0.05]"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
                                <span className="text-[13px] leading-6 text-slate-300 sm:text-sm">
                                    {task}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="relative mt-5 text-xs leading-6 text-slate-500">
                        New features and improvements will be added as development
                        continues.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section
                id="project-story"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12"
            >
                <div className="mb-14 max-w-2xl sm:mb-24">
                    <SectionLabel color="text-cyan-300" line="from-cyan-300">
                        INSIDE EDUKIND
                    </SectionLabel>
                    <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                        One vision.
                        <span className="block bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
                            Many ways to make an impact.
                        </span>
                    </h2>
                    <p className="mt-5 max-w-xl text-[13px] leading-7 text-slate-400 sm:text-sm">
                        Explore the experiences that make up the EDUKIND
                        ecosystem, from AI-assisted learning to knowledge
                        discovery and community support.
                    </p>
                </div>

                {/* Vision (feature 01 text, previously not shown anywhere) */}
                <Reveal className="mb-20 sm:mb-36">
                    <div className="rounded-[2rem] bg-gradient-to-br from-violet-300/40 via-white/10 to-cyan-300/30 p-px sm:rounded-[2.5rem]">
                        <div className="relative grid gap-8 overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#14102B] via-[#0B0E1C] to-[#08121C] p-6 sm:rounded-[calc(2.5rem-1px)] sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
                            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />
                            <div className="relative">
                                <p
                                    className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em]"
                                    style={{ color: vision.color }}
                                >
                                    <span
                                        className="flex h-9 w-9 items-center justify-center rounded-xl border"
                                        style={{
                                            borderColor: `${vision.color}40`,
                                            backgroundColor: `${vision.color}12`,
                                            boxShadow: `0 0 30px -8px ${vision.color}90`,
                                        }}
                                    >
                                        <Sparkles className="h-4 w-4" />
                                    </span>
                                    {vision.eyebrow}
                                </p>
                                <h3 className="mt-5 text-xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-2xl lg:text-[1.9rem]">
                                    {vision.title}
                                </h3>
                            </div>
                            <div className="relative">
                                <p className="text-[13px] leading-7 text-slate-400 sm:text-sm">
                                    {vision.description}
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {vision.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-[13px] leading-6 text-slate-300 transition hover:border-white/15 hover:bg-white/[0.05] sm:text-sm"
                                        >
                                            <span
                                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                                style={{
                                                    backgroundColor: `${vision.color}20`,
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
                    </div>
                </Reveal>

                <div className="space-y-24 sm:space-y-40 lg:space-y-52">
                    {projectSections.slice(1).map((section, index) => {
                        const Icon = section.icon;
                        const reverse = index % 2 === 1;
                        const imageIndex = index + 1;

                        return (
                            <Reveal key={section.number}>
                                <section
                                    id={`feature-${section.number}`}
                                    className="relative grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-20"
                                >
                                    {/* Watermark number */}
                                    <span
                                        aria-hidden="true"
                                        className={`ek-stroke pointer-events-none absolute -top-8 select-none text-[4.5rem] font-bold leading-none tracking-[-0.06em] sm:-top-14 sm:text-[8rem] ${reverse
                                            ? "right-0 lg:left-[50%] lg:right-auto"
                                            : "left-0 lg:left-auto lg:right-0"
                                            }`}
                                    >
                                        {section.number}
                                    </span>

                                    <div
                                        className={`group relative min-w-0 ${reverse ? "lg:order-2" : ""
                                            }`}
                                    >
                                        <div
                                            className="pointer-events-none absolute -inset-5 rounded-[2.5rem] opacity-30 blur-3xl transition duration-700 group-hover:opacity-70"
                                            style={{
                                                background: `radial-gradient(ellipse at center, ${section.color}55, transparent 70%)`,
                                            }}
                                        />
                                        <div className="relative transition duration-500 group-hover:-translate-y-1">
                                            <BrowserFrame color={section.color}>
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
                                                        className="h-auto max-h-[520px] w-full object-contain transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                                                    />
                                                    <span className="ek-sheen" aria-hidden="true" />
                                                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 text-xs text-white opacity-100 shadow-lg backdrop-blur-xl transition sm:opacity-0 sm:group-hover:opacity-100">
                                                        <Eye className="h-3.5 w-3.5" />
                                                        Preview
                                                    </span>
                                                </button>
                                            </BrowserFrame>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:text-[11px]">
                                            <span>EDUKIND / {section.number}</span>
                                            <span>Product showcase</span>
                                        </div>
                                    </div>

                                    <div
                                        className={`relative min-w-0 ${reverse ? "lg:order-1" : ""
                                            }`}
                                    >
                                        <div className="mb-5 flex items-center gap-4">
                                            <span
                                                className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                                                style={{
                                                    color: section.color,
                                                    borderColor: `${section.color}40`,
                                                    backgroundColor: `${section.color}12`,
                                                    boxShadow: `0 0 36px -8px ${section.color}80`,
                                                }}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p
                                                    className="text-[11px] font-semibold tracking-[0.2em] sm:text-xs"
                                                    style={{ color: section.color }}
                                                >
                                                    {section.eyebrow}
                                                </p>
                                                <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                                                    EXPERIENCE {section.number}
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="max-w-xl text-xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-2xl lg:text-[1.75rem]">
                                            {section.title}
                                        </h3>
                                        <p className="mt-5 max-w-xl text-[13px] leading-7 text-slate-400 sm:text-sm">
                                            {section.description}
                                        </p>

                                        <ul className="mt-6 space-y-3">
                                            {section.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-[13px] leading-6 text-slate-300 transition hover:border-white/15 hover:bg-white/[0.05] sm:text-sm"
                                                >
                                                    <span
                                                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                                        style={{
                                                            backgroundColor: `${section.color}20`,
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
                                            className={`mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium transition hover:gap-3 hover:bg-white/[0.05] sm:text-sm ${focusRing}`}
                                            style={{
                                                color: section.color,
                                                borderColor: `${section.color}40`,
                                            }}
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
                className="relative z-10 scroll-mt-20 border-y border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-transparent"
            >
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
                    <div>
                        <SectionLabel>UNDER THE HOOD</SectionLabel>
                        <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                            Built with modern technology.
                        </h2>
                        <p className="mt-5 max-w-lg text-[13px] leading-7 text-slate-400">
                            The technology stack supports the platform&apos;s
                            interface, learning experiences, data handling,
                            and AI-powered functionality.
                        </p>
                    </div>

                    <div className="space-y-7">
                        {techGroups.map((group) => (
                            <div key={group}>
                                <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-slate-500">
                                    {group.toUpperCase()}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {technologies
                                        .filter((tech) => tech.group === group)
                                        .map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-300/[0.06] hover:text-white hover:shadow-[0_18px_40px_-18px_rgba(167,139,250,0.5)] sm:text-base"
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
                    <SectionLabel color="text-cyan-300" line="from-cyan-300">
                        PROJECT OVERVIEW
                    </SectionLabel>
                    <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                        Learning meets technology and purpose.
                    </h2>
                </div>
                <div className="space-y-5 border-l border-white/10 pl-5 text-[13px] leading-7 text-slate-400 sm:pl-10 sm:text-sm">
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
                    <SectionLabel color="text-pink-300" line="from-pink-300">
                        THE DEVELOPMENT JOURNEY
                    </SectionLabel>
                    <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                        Challenges worth solving.
                    </h2>
                    <p className="mt-5 text-[13px] leading-7 text-slate-400 sm:text-sm">
                        Building a multi-purpose platform involves more than
                        creating individual pages. It requires consistency,
                        reliable interactions, and thoughtful architecture.
                    </p>
                </div>

                <div className="space-y-4">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.number}
                            className="group relative grid gap-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-violet-300/30 hover:bg-white/[0.04] sm:grid-cols-[80px_1fr_1.2fr] sm:gap-8 sm:p-8"
                        >
                            <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-400/0 blur-[70px] transition duration-700 group-hover:bg-violet-400/20" />
                            <span className="relative font-mono text-lg text-violet-300/80 sm:text-xl">
                                / {challenge.number}
                            </span>
                            <h3 className="relative text-base font-medium leading-7 tracking-tight text-white transition group-hover:text-cyan-200 sm:text-lg">
                                {challenge.title}
                            </h3>
                            <div className="relative">
                                <p className="text-[13px] leading-7 text-slate-400 sm:text-sm">
                                    {challenge.description}
                                </p>
                                {challenge.solution && (
                                    <p className="mt-4 border-l-2 border-cyan-300/50 bg-gradient-to-r from-cyan-300/[0.07] to-transparent py-2 pl-4 text-[13px] leading-7 text-slate-300 sm:text-sm">
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
                <div className="rounded-[2rem] bg-gradient-to-br from-violet-300/40 via-white/10 to-cyan-300/30 p-px sm:rounded-[2.5rem]">
                    <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#14102B] via-[#0B0E1C] to-[#08121C] p-6 sm:rounded-[calc(2.5rem-1px)] sm:p-12 lg:p-16">
                        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
                        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
                        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                            <div>
                                <SectionLabel>WHAT COMES NEXT</SectionLabel>
                                <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                                    The vision keeps growing.
                                </h2>
                                <p className="mt-5 max-w-lg text-[13px] leading-7 text-slate-400">
                                    EDUKIND is a work in progress, with room to
                                    improve the learning experience, strengthen
                                    reliability, and expand its positive impact.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {futurePlans.map((plan, index) => (
                                    <li
                                        key={plan}
                                        className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-[13px] leading-7 text-slate-300 transition hover:border-violet-300/30 hover:bg-white/[0.06] sm:p-5 sm:text-sm"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 font-mono text-[11px] text-cyan-300">
                                            0{index + 1}
                                        </span>
                                        <span>{plan}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project links */}
            <section
                id="project-links"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
            >
                <div className="border-t border-white/10 pt-12 sm:pt-16">
                    <SectionLabel color="text-cyan-300" line="from-cyan-300">
                        EXPLORE THE PROJECT
                    </SectionLabel>
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="bg-gradient-to-r from-white via-violet-100 to-cyan-200 bg-clip-text text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-transparent sm:text-4xl lg:text-5xl">
                                See what&apos;s possible.
                            </h2>
                            <p className="mt-5 max-w-xl text-[13px] leading-7 text-slate-400">
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
                                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-violet-200 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-8px_rgba(167,139,250,0.7)] transition hover:-translate-y-0.5 ${focusRing}`}
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
                                    className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/[0.07] ${focusRing}`}
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
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(14,10,36,0.96),rgba(2,3,8,0.98))] p-4 backdrop-blur-2xl sm:p-8"
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
                        className={`absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-md transition hover:rotate-90 hover:bg-white hover:text-black ${focusRing}`}
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
                        className={`absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-violet-300 hover:text-black sm:left-6 sm:h-12 sm:w-12 ${focusRing}`}
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    <div
                        className="relative w-full max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="rounded-2xl bg-gradient-to-br from-violet-200/40 via-white/10 to-cyan-300/30 p-px shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
                            <Image
                                src={projectSections[activeImage].image}
                                alt={projectSections[activeImage].imageAlt}
                                width={1800}
                                height={1200}
                                priority
                                sizes="100vw"
                                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-[15px] bg-[#0B0E1C] object-contain"
                            />
                        </div>
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
                            <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-500 sm:block">
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
                        className={`absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-violet-300 hover:text-black sm:right-6 sm:h-12 sm:w-12 ${focusRing}`}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </main>
    );
}