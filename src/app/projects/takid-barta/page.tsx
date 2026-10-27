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
    Newspaper,
    Sparkles,
    X,
    CloudSun,
    Globe,
    Activity,
    Trophy,
    MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Project Data                                                        */
/* ------------------------------------------------------------------ */

const projectSections = [
    {
        number: "01",
        eyebrow: "PROJECT OVERVIEW",
        title: "News that keeps you connected.",
        description:
            "TAKID-BARTA is a news and information platform designed to bring important stories, national and international updates, health news, sports coverage, and weather information together in one place.",
        points: [
            "Explore news across multiple categories",
            "Stay updated with national and international stories",
            "Access weather information and visual charts",
        ],
        image: "/projects/barta.png",
        imageAlt: "TAKID-BARTA news platform overview",
        icon: Sparkles,
        color: "#67E8F9",
    },
    {
        number: "02",
        eyebrow: "MAIN NEWS",
        title: "Discover the stories that matter.",
        description:
            "The main news section provides a central place to explore current stories and important updates. Its purpose is to help readers discover relevant news through a clean, accessible interface.",
        points: [
            "Explore the main news feed",
            "Discover important stories in one place",
            "Enjoy a focused reading experience",
        ],
        image: "/projects/barta1.png",
        imageAlt: "TAKID-BARTA main news section",
        icon: Newspaper,
        color: "#67E8F9",
    },
    {
        number: "03",
        eyebrow: "SELECTED NEWS",
        title: "Important stories, closer to you.",
        description:
            "The selected news section highlights curated stories so readers can quickly discover noteworthy updates without navigating through every category.",
        points: [
            "Browse selected news stories",
            "Find noteworthy updates quickly",
            "Navigate news content with ease",
        ],
        image: "/projects/barta2.png",
        imageAlt: "TAKID-BARTA selected news section",
        icon: Sparkles,
        color: "#C4B5FD",
    },
    {
        number: "04",
        eyebrow: "BANGLADESH NEWS",
        title: "Stay informed about Bangladesh.",
        description:
            "The Bangladesh news section focuses on national updates and stories relevant to readers who want to stay informed about events across the country.",
        points: [
            "Explore Bangladesh-focused news",
            "Follow national developments",
            "Access local and countrywide updates",
        ],
        image: "/projects/barta3.png",
        imageAlt: "TAKID-BARTA Bangladesh news",
        icon: MapPin,
        color: "#6EE7B7",
    },
    {
        number: "05",
        eyebrow: "WORLD NEWS",
        title: "Understand what's happening worldwide.",
        description:
            "The world news section brings international stories into the platform, helping readers explore global developments and understand events beyond their local surroundings.",
        points: [
            "Explore international news",
            "Follow global developments",
            "Discover stories from around the world",
        ],
        image: "/projects/barta4.png",
        imageAlt: "TAKID-BARTA world news section",
        icon: Globe,
        color: "#93C5FD",
    },
    {
        number: "06",
        eyebrow: "HEALTH NEWS",
        title: "Knowledge for a healthier life.",
        description:
            "The health news section provides a dedicated space for health-related stories, wellness information, and developments in healthcare.",
        points: [
            "Explore health-related news",
            "Discover wellness and healthcare stories",
            "Keep health information easy to access",
        ],
        image: "/projects/barta5.png",
        imageAlt: "TAKID-BARTA health news section",
        icon: Heart,
        color: "#F9A8D4",
    },
    {
        number: "07",
        eyebrow: "SPORTS NEWS",
        title: "Stay close to the action.",
        description:
            "The sports news section gives readers a dedicated place to follow sporting stories, competitions, and updates from the world of sports.",
        points: [
            "Explore sports news and updates",
            "Follow sporting events and stories",
            "Access sports coverage in one section",
        ],
        image: "/projects/barta6.png",
        imageAlt: "TAKID-BARTA sports news section",
        icon: Trophy,
        color: "#FDBA74",
    },
    {
        number: "08",
        eyebrow: "WEATHER",
        title: "Plan your day with weather insights.",
        description:
            "The weather page brings weather information into the same platform as the news experience. It helps users check weather conditions through a dedicated interface.",
        points: [
            "Explore the dedicated weather page",
            "Access location-based weather information when available",
            "Keep weather information easy to discover",
        ],
        image: "/projects/barta7.png",
        imageAlt: "TAKID-BARTA weather page",
        icon: CloudSun,
        color: "#67E8F9",
    },
    {
        number: "09",
        eyebrow: "WEATHER VISUALIZATION",
        title: "Make weather data easier to understand.",
        description:
            "The weather chart section presents weather information visually, helping users explore changing conditions and understand data more easily than through numbers alone.",
        points: [
            "Explore weather data through charts",
            "Understand weather trends visually",
            "Combine useful information with data visualization",
        ],
        image: "/projects/barta8.png",
        imageAlt: "TAKID-BARTA weather charts",
        icon: Activity,
        color: "#C4B5FD",
    },
];

const technologies = [
    { name: "Next.js", group: "Frontend" },
    { name: "React", group: "Frontend" },
    { name: "TypeScript", group: "Frontend" },
    { name: "Tailwind CSS", group: "Frontend" },

    { name: "BBC Bangla RSS Feed", group: "Data & APIs" },
    { name: "Weather API", group: "Data & APIs" },
    { name: "Weather Chart Visualization", group: "Data & APIs" },
];

const techGroups = ["Frontend", "Data & APIs"];

const challenges = [
    {
        number: "01",
        title: "Organizing multiple news categories",
        description:
            "Creating a consistent browsing experience across main news, selected stories, national news, international news, health, and sports.",
    },
    {
        number: "02",
        title: "Presenting information clearly",
        description:
            "Designing a readable interface that helps users discover stories and navigate between different sections without unnecessary complexity.",
    },
    {
        number: "03",
        title: "Making weather data understandable",
        description:
            "Combining weather information with chart-based visualization so users can explore conditions and trends through a more visual experience.",
    },
];

const futurePlans = [
    "Improve the mobile and tablet news-reading experience",
    "Enhance news search, filtering, and category navigation",
    "Explore personalized news and saved articles",
    "Improve weather information and chart interactions",
    "Strengthen accessibility, performance, and error handling",
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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A12]";

/* ------------------------------------------------------------------ */
/* Helper Components                                                   */
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
            className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                } ${className}`}
        >
            {children}
        </div>
    );
}

function BrowserFrame({ children }: { children: ReactNode }) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101322] shadow-2xl shadow-black/40 sm:rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-500">
                    TAKID-BARTA
                </span>
            </div>

            {children}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function TakidBartaProjectPage() {
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("overview");

    const progressRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    // Add the actual URLs when they are available.
    const liveUrl = "https://takid-barta.vercel.app/";
    const githubUrl = "https://github.com/IsmailHasanTakid/bangla-news-24";

    const openNextImage = useCallback((direction: number) => {
        setActiveImage((current) => {
            if (current === null) return current;

            return (
                (current + direction + projectSections.length) %
                projectSections.length
            );
        });
    }, []);

    /* Lightbox keyboard support and scroll locking */
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

    /* Reading progress bar */
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

    /* Active sticky navigation */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
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

        const delta =
            event.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(delta) > 50) {
            openNextImage(delta < 0 ? 1 : -1);
        }

        touchStartX.current = null;
    };

    const overview = projectSections[0];

    return (
        <main className="min-h-screen scroll-smooth overflow-hidden bg-[#080A12] text-white selection:bg-cyan-400/30">
            {/* Scroll progress */}
            <div
                ref={progressRef}
                aria-hidden="true"
                className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-300"
                style={{ transform: "scaleX(0)" }}
            />

            {/* Background atmosphere */}
            <div className="pointer-events-none fixed inset-0 -z-0 hidden overflow-hidden sm:block">
                <div className="absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute -right-48 top-[900px] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
                <div className="absolute left-1/3 top-[2200px] h-[400px] w-[400px] rounded-full bg-pink-500/[0.06] blur-[130px]" />
            </div>

            {/* Header */}
            <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
                <Link
                    href="/"
                    className={`group inline-flex items-center gap-2 rounded-md text-sm text-slate-400 transition hover:text-white ${focusRing}`}
                >
                    <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                    Back to portfolio
                </Link>

                <span className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                    PROJECT <span className="text-cyan-300">/ 02</span>
                </span>
            </header>

            {/* Hero */}
            <section
                id="overview"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12"
            >
                <div className="max-w-4xl">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-cyan-200">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 motion-reduce:animate-none" />
                        NEWS & INFORMATION PLATFORM
                    </div>

                    <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                        TAKID-BARTA
                        <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text pb-2 text-transparent">
                            Stories that matter.
                        </span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                        A news and information platform bringing together
                        national and international news, selected stories,
                        health, sports, and weather insights in one experience.
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
                                className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04] ${focusRing}`}
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

                {/* Overview screenshot */}
                <div className="mt-14 sm:mt-20">
                    <BrowserFrame>
                        <button
                            type="button"
                            onClick={() => setActiveImage(0)}
                            aria-label="View TAKID-BARTA overview screenshot"
                            className={`group relative block w-full overflow-hidden text-left ${focusRing}`}
                        >
                            <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#080A12]/50 via-transparent to-white/[0.02]" />

                            <Image
                                src="/projects/barta.png"
                                alt="TAKID-BARTA project overview"
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
                    className={`mt-6 inline-flex items-center gap-3 rounded-md text-xl font-semibold transition hover:text-cyan-200 sm:text-2xl ${focusRing}`}
                >
                    Explore the project
                    <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
                </a>
            </section>

            {/* Sticky navigation */}
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
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    className={`group relative shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${focusRing} ${isActive
                                        ? "border-cyan-300/30 bg-gradient-to-r from-cyan-500/15 to-violet-400/10 text-white shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                                        : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                                        }`}
                                >
                                    {item.label}

                                    {isActive && (
                                        <span className="absolute inset-x-4 -bottom-[13px] h-[2px] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Project status */}
            <section className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.03] p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                            <Newspaper className="h-5 w-5" />
                        </span>

                        <div>
                            <h2 className="text-xl font-semibold">
                                Project Overview
                            </h2>
                            <p className="mt-1 text-sm text-cyan-300">
                                News, information & weather
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                        TAKID-BARTA brings multiple information categories
                        together in one interface. The screenshots below
                        showcase the main news experience, individual news
                        categories, and weather visualization.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "National and world news",
                            "Health and sports coverage",
                            "Weather information and charts",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                            >
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                                <span className="text-sm leading-6 text-slate-300">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section
                id="project-story"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
            >
                <div className="mb-16 max-w-2xl sm:mb-24">
                    <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-cyan-300">
                        INSIDE TAKID-BARTA
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                        One platform.
                        <span className="block text-slate-500">
                            Multiple perspectives.
                        </span>
                    </h2>

                    <p className="mt-6 leading-8 text-slate-400">
                        Explore the different sections of TAKID-BARTA,
                        from important news stories to weather data
                        presented through charts.
                    </p>
                </div>

                {/* Vision section */}
                <Reveal className="mb-24 sm:mb-36">
                    <div className="grid gap-8 rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-500/[0.07] via-[#101322] to-transparent p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
                        <div>
                            <p
                                className="text-xs font-semibold tracking-[0.2em]"
                                style={{ color: overview.color }}
                            >
                                {overview.eyebrow}
                            </p>

                            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                                {overview.title}
                            </h3>
                        </div>

                        <div>
                            <p className="text-sm leading-8 text-slate-400 sm:text-base">
                                {overview.description}
                            </p>

                            <ul className="mt-6 space-y-4">
                                {overview.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>

                {/* Feature sections */}
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
                                                        setActiveImage(
                                                            imageIndex
                                                        )
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

                                                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-xs text-white backdrop-blur-md transition sm:opacity-0 sm:group-hover:opacity-100">
                                                        <Eye className="h-3.5 w-3.5" />
                                                        Preview
                                                    </span>
                                                </button>
                                            </BrowserFrame>
                                        </div>

                                        <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-600">
                                            <span>
                                                TAKID-BARTA / {section.number}
                                            </span>
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
                                                    style={{
                                                        color: section.color,
                                                    }}
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
                                            style={{
                                                color: section.color,
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

            {/* Tech stack */}
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
                            Built for information.
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-8 text-slate-400">
                            The technology stack supports the news interface,
                            responsive layouts, data integration, and
                            weather chart visualization.
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
                                        .filter(
                                            (tech) => tech.group === group
                                        )
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

            {/* Project overview */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-12">
                <div>
                    <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan-300">
                        PROJECT VISION
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        News, data, and a better-informed world.
                    </h2>
                </div>

                <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                    <p>
                        TAKID-BARTA is designed to bring different news
                        categories together in one accessible platform,
                        making it easier to discover stories that matter.
                    </p>

                    <p>
                        Its dedicated weather experience extends the platform
                        beyond traditional news by presenting weather
                        information and visual charts.
                    </p>

                    <p>
                        The long-term goal is to continue improving the
                        reading experience, usability, accessibility, and
                        reliability of the platform.
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
                        A news platform needs clear navigation, readable
                        content, and useful ways to explore different
                        categories and information.
                    </p>
                </div>

                <div className="divide-y divide-white/10 border-y border-white/10">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.number}
                            className="group grid gap-4 py-7 sm:grid-cols-[80px_1fr_1.2fr] sm:gap-8 sm:py-9"
                        >
                            <span className="font-mono text-sm text-cyan-300">
                                / {challenge.number}
                            </span>

                            <h3 className="text-lg font-medium leading-7 text-white transition group-hover:text-cyan-200">
                                {challenge.title}
                            </h3>

                            <p className="text-sm leading-7 text-slate-400">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Future plans */}
            <section
                id="future-plans"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
            >
                <div className="relative overflow-hidden rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-500/[0.07] via-[#101322] to-violet-500/[0.07] p-6 sm:p-10 lg:p-14">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

                    <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <div>
                            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan-300">
                                WHAT COMES NEXT
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                                The story continues.
                            </h2>

                            <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400">
                                There is room to improve how readers
                                discover news, explore information, and
                                interact with weather data.
                            </p>
                        </div>

                        <ul className="space-y-5">
                            {futurePlans.map((plan, index) => (
                                <li
                                    key={plan}
                                    className="flex items-start gap-4 border-b border-white/10 pb-5 text-sm leading-7 text-slate-300 last:border-0"
                                >
                                    <span className="mt-1 font-mono text-xs text-cyan-300">
                                        {String(index + 1).padStart(2, "0")}
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
                                Discover TAKID-BARTA.
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                                Explore the news experience, discover
                                different categories, and see how weather
                                information can be presented visually.
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
                                    className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-cyan-300/50 hover:bg-white/[0.04] ${focusRing}`}
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

                    <span>
                        TAKID-BARTA · News, information & weather
                    </span>
                </div>
            </section>

            {/* Screenshot lightbox */}
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
                                    {String(activeImage + 1).padStart(2, "0")}
                                    {" / "}
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