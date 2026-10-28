"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
    Shield,
    Shirt,
    Trophy,
    X,
    Activity,
    ShoppingBag,
    Layers3,
    Target,
    Sparkles,
    Zap,
} from "lucide-react";

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

const screenshots = [
    {
        number: "01",
        eyebrow: "THE OVERVIEW",
        title: "Where football passion meets jersey culture.",
        description:
            "JerseyArena is a football jersey discovery experience built around the passion of fans, iconic club identities, new-season kits, and memorable designs. The goal is to make exploring football jerseys feel engaging, organised, and visually exciting.",
        points: [
            "A football-focused jersey browsing experience",
            "Explore club collections and latest designs",
            "Discover jerseys across different categories",
        ],
        image: "/projects/jersey1.png",
        imageAlt: "JerseyArena homepage overview",
        icon: Trophy,
        color: "#86EFAC",
    },
    {
        number: "02",
        eyebrow: "THIS SEASON",
        title: "Discover the season's football identity.",
        description:
            "The This Season section highlights the current-season jersey experience, giving fans a focused way to discover kits associated with the latest football season.",
        points: [
            "A dedicated seasonal discovery section",
            "Football-inspired visual presentation",
            "A starting point for exploring current kits",
        ],
        image: "/projects/jersey2.png",
        imageAlt: "JerseyArena This Season section",
        icon: Activity,
        color: "#67E8F9",
    },
    {
        number: "03",
        eyebrow: "SHOP BY CLUB",
        title: "Find the colours of your club.",
        description:
            "The Shop by Club section organises jersey discovery around football clubs. Fans can start with the team they support and explore its associated jersey collection.",
        points: [
            "Club-focused jersey discovery",
            "A more organised browsing journey",
            "A natural path from club selection to jerseys",
        ],
        image: "/projects/jersey3.png",
        imageAlt: "JerseyArena Shop by Club section",
        icon: Shield,
        color: "#93C5FD",
    },
    {
        number: "04",
        eyebrow: "LATEST DESIGNS",
        title: "Explore fresh looks from the football world.",
        description:
            "The Latest Designs section gives new and featured jersey designs a dedicated place, helping visitors discover visually interesting kits without browsing the entire collection.",
        points: [
            "A dedicated latest-design showcase",
            "Emphasis on jersey artwork and presentation",
            "A quick entry point to new designs",
        ],
        image: "/projects/jersey4.png",
        imageAlt: "JerseyArena latest jersey designs",
        icon: Sparkles,
        color: "#F9A8D4",
    },
    {
        number: "05",
        eyebrow: "SHOP BY CATEGORY",
        title: "A collection for every kind of fan.",
        description:
            "The Shop by Category section gives visitors another way to explore the collection, using jersey categories as a starting point instead of searching only by club.",
        points: [
            "Category-oriented browsing",
            "A clearer way to explore different jersey types",
            "Multiple discovery paths through the collection",
        ],
        image: "/projects/jersey5.png",
        imageAlt: "JerseyArena Shop by Category section",
        icon: Layers3,
        color: "#C4B5FD",
    },
    {
        number: "06",
        eyebrow: "RETRO ARCHIVE",
        title: "Celebrate the jerseys that made history.",
        description:
            "Football jerseys often carry memories of legendary teams, players, and unforgettable seasons. The Retro Archive brings vintage-inspired jersey discovery into the JerseyArena experience.",
        points: [
            "A dedicated retro jersey experience",
            "Celebrate classic football aesthetics",
            "Explore designs inspired by football history",
        ],
        image: "/projects/jersey6.png",
        imageAlt: "JerseyArena Retro Archive section",
        icon: Heart,
        color: "#FDBA74",
    },
    {
        number: "07",
        eyebrow: "LIVE FOOTBALL SCORES",
        title: "The matchday experience, beyond the shirt.",
        description:
            "The Live Football Score section is designed to bring match information into the jersey discovery experience. Whether scores are powered by a live data provider or are still being integrated, the real-time data functionality should be verified separately.",
        points: [
            "A dedicated football score section",
            "A matchday-focused experience",
            "Potential integration with a live football data API",
        ],
        image: "/projects/jersey7.png",
        imageAlt: "JerseyArena live football score section",
        icon: Zap,
        color: "#FDE047",
    },
    {
        number: "08",
        eyebrow: "ALL JERSEYS",
        title: "One place to explore the collection.",
        description:
            "The All Jerseys page provides a broader view of the available jersey collection, giving visitors a central place to browse designs rather than navigating through individual homepage sections.",
        points: [
            "A dedicated jersey collection page",
            "A central place for jersey discovery",
            "Room for search, filtering, and sorting improvements",
        ],
        image: "/projects/jersey8.png",
        imageAlt: "JerseyArena All Jerseys page",
        icon: ShoppingBag,
        color: "#6EE7B7",
    },
    {
        number: "09",
        eyebrow: "CLUB COLLECTION",
        title: "A closer look at Real Madrid jerseys.",
        description:
            "This screenshot highlights the Real Madrid jersey collection inside Shop by Club. It demonstrates the club-specific browsing experience, bringing a team's identity and jersey designs together.",
        points: [
            "A focused Real Madrid collection",
            "Club identity presented alongside jersey designs",
            "A more direct path to team-specific products",
        ],
        image: "/projects/jersey10.png",
        imageAlt: "Real Madrid jerseys in JerseyArena Shop by Club",
        icon: Shield,
        color: "#E5E7EB",
    },
];

const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Project-specific data and API integrations",
];

const challenges = [
    {
        number: "01",
        title: "Organising a rich jersey collection",
        description:
            "A football jersey platform needs clear ways to explore designs by club, category, season, and style without overwhelming visitors.",
        solution:
            "JerseyArena's different discovery sections provide a foundation for organising the browsing experience.",
    },
    {
        number: "02",
        title: "Building an engaging visual experience",
        description:
            "Jersey designs are highly visual. The interface needs to give the artwork room to stand out while maintaining consistent layouts.",
        solution:
            "The homepage showcases dedicated sections for club collections, latest designs, categories, and retro jerseys.",
    },
    {
        number: "03",
        title: "Integrating live football information",
        description:
            "Displaying accurate live scores requires a reliable data source, loading and error states, and suitable refresh behaviour.",
        solution:
            "The live-score section provides a dedicated place for this experience; its actual data integration should be verified against the implementation.",
    },
];

const futurePlans = [
    "Refine responsive layouts and test mobile, tablet, and desktop screens",
    "Complete or improve authentication and user account features, if planned",
    "Enhance jersey search, filtering, sorting, and collection discovery",
    "Verify and strengthen live football score data integration",
    "Improve product details and the overall shopping journey",
    "Add further features based on the project's actual roadmap",
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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050807]";

/* Visual-only styles: keyframes, grain texture, pitch-line background */
const pageStyles = `
.ja-font{font-family:var(--font-manrope),system-ui,sans-serif;-webkit-font-smoothing:antialiased}
@media (min-width:1024px){.ja-font{font-family:var(--font-sora),var(--font-manrope),system-ui,sans-serif}}
.ja-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");mix-blend-mode:overlay}
.ja-grid{background-image:linear-gradient(to right,rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.045) 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(ellipse 70% 60% at 50% 0%,#000 30%,transparent 80%);mask-image:radial-gradient(ellipse 70% 60% at 50% 0%,#000 30%,transparent 80%)}
.ja-shimmer{background-size:220% auto;animation:ja-shimmer 7s linear infinite}
.ja-marquee{animation:ja-marquee 38s linear infinite}
.ja-reveal{opacity:0;transform:translateY(22px);animation:ja-reveal .9s cubic-bezier(.2,.8,.2,1) forwards}
.ja-stroke{-webkit-text-stroke:1px rgba(255,255,255,.09);color:transparent}
.ja-sheen{position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.09) 50%,transparent 65%);transform:translateX(-120%);transition:transform 1.1s cubic-bezier(.2,.8,.2,1)}
.group:hover .ja-sheen,.group\\/image:hover .ja-sheen{transform:translateX(120%)}
@keyframes ja-shimmer{to{background-position:220% center}}
@keyframes ja-marquee{to{transform:translateX(-50%)}}
@keyframes ja-reveal{to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){
.ja-shimmer,.ja-marquee,.ja-reveal{animation:none!important}
.ja-reveal{opacity:1;transform:none}
.ja-sheen{display:none}
}
`;

export default function JerseyArenaProjectPage() {
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("overview");
    const progressRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    // Add the real URLs when they are available.
    const liveUrl = "";
    const githubUrl = "";

    const openNextImage = useCallback((direction: number) => {
        setActiveImage((current) => {
            if (current === null) return current;
            return (
                (current + direction + screenshots.length) %
                screenshots.length
            );
        });
    }, []);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-35% 0px -55% 0px" }
        );

        navItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return;

        const delta = event.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(delta) > 50) {
            openNextImage(delta < 0 ? 1 : -1);
        }

        touchStartX.current = null;
    };

    return (
        <main className={`${manrope.variable} ${sora.variable} ja-font min-h-screen scroll-smooth overflow-hidden bg-[#050807] text-[#F2F5F0] selection:bg-emerald-400/30`}>
            <style>{pageStyles}</style>

            {/* Scroll progress */}
            <div
                ref={progressRef}
                aria-hidden="true"
                className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]"
                style={{ transform: "scaleX(0)" }}
            />

            {/* Film grain */}
            <div
                aria-hidden="true"
                className="ja-grain pointer-events-none fixed inset-0 z-[55] opacity-[0.07]"
            />

            {/* Ambient glow */}
            <div className="pointer-events-none fixed inset-0 -z-0 hidden overflow-hidden sm:block">
                <div className="absolute -left-48 top-40 h-[480px] w-[480px] rounded-full bg-emerald-500/[0.13] blur-[150px]" />
                <div className="absolute -right-48 top-[1000px] h-[560px] w-[560px] rounded-full bg-cyan-500/[0.09] blur-[160px]" />
                <div className="absolute left-1/3 top-[2300px] h-[460px] w-[460px] rounded-full bg-lime-500/[0.07] blur-[140px]" />
            </div>

            {/* Pitch markings + grid behind hero */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px]"
            >
                <div className="ja-grid absolute inset-0" />
                <svg
                    className="absolute left-1/2 top-24 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.07]"
                    viewBox="0 0 1100 700"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                >
                    <rect x="2" y="2" width="1096" height="696" rx="4" />
                    <line x1="550" y1="2" x2="550" y2="698" />
                    <circle cx="550" cy="350" r="110" />
                    <circle cx="550" cy="350" r="5" fill="white" />
                    <rect x="2" y="190" width="170" height="320" />
                    <rect x="928" y="190" width="170" height="320" />
                    <rect x="2" y="275" width="62" height="150" />
                    <rect x="1036" y="275" width="62" height="150" />
                </svg>
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#050807]" />
            </div>

            {/* Top bar */}
            <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
                <Link
                    href="/"
                    className={`group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-3 pr-5 text-sm text-slate-300 backdrop-blur-md transition hover:border-emerald-300/40 hover:bg-white/[0.07] hover:text-white ${focusRing}`}
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.07] transition group-hover:bg-emerald-300 group-hover:text-black">
                        <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
                    </span>
                    Back to portfolio
                </Link>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.25em] text-slate-500 backdrop-blur-md">
                    PROJECT <span className="text-emerald-300">/ 03</span>
                </span>
            </header>

            {/* Hero */}
            <section
                id="overview"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 pb-8 pt-12 sm:px-8 sm:pt-20 lg:px-12"
            >
                <div className="max-w-5xl">
                    <div
                        className="ja-reveal mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-300/25 bg-emerald-300/[0.07] px-4 py-2 text-xs font-medium tracking-[0.18em] text-emerald-200 shadow-[0_0_40px_-10px_rgba(110,231,183,0.5)] backdrop-blur-md"
                        style={{ animationDelay: "0.05s" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70 motion-reduce:animate-none" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                        </span>
                        FOOTBALL · JERSEY CULTURE
                    </div>

                    <h1
                        className="ja-reveal text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
                        style={{ animationDelay: "0.15s" }}
                    >
                        JerseyArena
                        <span className="ja-shimmer mt-2 block bg-gradient-to-r from-emerald-300 via-lime-100 to-cyan-300 bg-clip-text pb-3 text-transparent [background-image:linear-gradient(90deg,#6ee7b7,#ecfccb,#67e8f9,#6ee7b7)]">
                            Wear your passion.
                        </span>
                    </h1>

                    <p
                        className="ja-reveal mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
                        style={{ animationDelay: "0.3s" }}
                    >
                        A football jersey discovery platform bringing club
                        collections, latest designs, retro kits, and a
                        matchday-inspired experience together for football fans.
                    </p>

                    <div
                        className="ja-reveal mt-10 flex flex-wrap items-center gap-3"
                        style={{ animationDelay: "0.42s" }}
                    >
                        {liveUrl ? (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-200 to-emerald-400 px-7 py-3.5 text-sm font-semibold text-[#04120A] shadow-[0_10px_40px_-8px_rgba(110,231,183,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-8px_rgba(110,231,183,0.9)] ${focusRing}`}
                            >
                                Visit live project
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-white/[0.07] ${focusRing}`}
                            >
                                <Code2 className="h-4 w-4" />
                                Source code
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-slate-500 backdrop-blur-md">
                                <Code2 className="h-4 w-4" />
                                GitHub link coming soon
                            </span>
                        )}
                    </div>
                </div>

                {/* Hero screenshot */}
                <div
                    className="ja-reveal relative mt-16 sm:mt-24"
                    style={{ animationDelay: "0.55s" }}
                >
                    <div className="pointer-events-none absolute -inset-x-6 -inset-y-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(110,231,183,0.22),transparent_65%)] blur-3xl" />
                    <div className="relative rounded-2xl bg-gradient-to-b from-emerald-200/40 via-white/10 to-cyan-300/20 p-px shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] sm:rounded-3xl">
                        <div className="overflow-hidden rounded-[15px] bg-[#0A100E] sm:rounded-[23px]">
                            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                                <span className="mx-auto rounded-md border border-white/[0.06] bg-black/30 px-10 py-1 text-[11px] tracking-[0.2em] text-slate-500">
                                    JERSEYARENA
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveImage(0)}
                                aria-label="View JerseyArena overview screenshot"
                                className={`group relative block w-full overflow-hidden text-left ${focusRing}`}
                            >
                                <Image
                                    src={screenshots[0].image}
                                    alt={screenshots[0].imageAlt}
                                    width={1600}
                                    height={900}
                                    priority
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                    className="h-auto max-h-[650px] w-full object-contain transition duration-700 group-hover:scale-[1.015] motion-reduce:transition-none"
                                />
                                <span className="ja-sheen" aria-hidden="true" />
                                <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs text-white shadow-lg backdrop-blur-xl transition group-hover:border-emerald-300/50 group-hover:bg-emerald-300 group-hover:text-black">
                                    <Maximize2 className="h-3.5 w-3.5" />
                                    View screenshot
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Marquee ticker */}
                <div
                    aria-hidden="true"
                    className="relative mt-14 overflow-hidden border-y border-white/[0.07] py-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
                >
                    <div className="ja-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold tracking-[0.3em] text-white/25">
                        {[...screenshots, ...screenshots].map((item, i) => (
                            <span key={i} className="inline-flex items-center gap-10">
                                {item.eyebrow}
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/60" />
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                        <Shirt className="h-4 w-4 text-emerald-300" />
                        Jersey discovery
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                        <Shield className="h-4 w-4 text-cyan-300" />
                        Club collections
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                        <Trophy className="h-4 w-4 text-lime-300" />
                        Football culture
                    </span>
                </div>

                <a
                    href="#project-story"
                    className={`group mt-12 inline-flex items-center gap-3 rounded-full text-sm text-slate-400 transition hover:text-white ${focusRing}`}
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition group-hover:border-emerald-300/60 group-hover:bg-emerald-300/10">
                        <ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
                    </span>
                    Explore the project
                </a>
            </section>

            {/* Horizontal sticky navigation */}
            <nav
                aria-label="Project sections"
                className="sticky top-3 z-40 mt-10 px-4 sm:px-8"
            >
                <div className="mx-auto flex max-w-fit rounded-full border border-white/10 bg-[#0A100E]/70 p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
                    <div className="flex max-w-full items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${focusRing} ${isActive
                                        ? "bg-gradient-to-b from-emerald-200 to-emerald-400 text-[#04120A] shadow-[0_6px_24px_-6px_rgba(110,231,183,0.8)]"
                                        : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Project status */}
            <section className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
                <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.08] via-amber-300/[0.02] to-transparent p-6 sm:p-9">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/10 blur-[70px]" />
                    <div className="relative flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-300 shadow-[0_0_30px_-6px_rgba(252,211,77,0.5)]">
                            <Code2 className="h-5 w-5" />
                        </span>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight">
                                Project Status
                            </h2>
                            <p className="mt-1 text-sm text-amber-300">
                                Update this status to match your current build
                            </p>
                        </div>
                    </div>
                    <p className="relative mt-6 max-w-3xl text-[13px] leading-7 text-slate-400 sm:text-sm sm:leading-7">
                        JerseyArena is a football jersey platform with dedicated
                        discovery sections for clubs, categories, latest
                        designs, retro jerseys, and football scores. Continue
                        updating this page as development and testing progress.
                    </p>
                </div>
            </section>

            {/* Features and screenshots */}
            <section
                id="project-story"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
            >
                <div className="mb-20 max-w-3xl sm:mb-32">
                    <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-emerald-300">
                        <span className="h-px w-10 bg-gradient-to-r from-emerald-300 to-transparent" />
                        INSIDE JERSEYARENA
                    </p>
                    <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                        Football is more than a game.
                        <span className="mt-2 block bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
                            It is identity, history, and passion.
                        </span>
                    </h2>
                    <p className="mt-7 max-w-xl leading-8 text-slate-400">
                        Explore the different areas of JerseyArena, from
                        club-specific collections and new designs to retro
                        jerseys and the matchday experience.
                    </p>
                </div>

                <div className="space-y-28 sm:space-y-40 lg:space-y-52">
                    {screenshots.slice(1).map((section, index) => {
                        const Icon = section.icon;
                        const reverse = index % 2 === 1;
                        const imageIndex = index + 1;

                        return (
                            <section
                                key={section.number}
                                id={`feature-${section.number}`}
                                className="relative grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-20"
                            >
                                {/* Watermark number */}
                                <span
                                    aria-hidden="true"
                                    className={`ja-stroke pointer-events-none absolute -top-8 select-none text-[4.5rem] font-bold leading-none tracking-[-0.06em] sm:-top-14 sm:text-[8rem] ${reverse ? "right-0 lg:right-auto lg:left-[50%]" : "left-0 lg:left-auto lg:right-0"
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
                                    <div
                                        className="relative rounded-2xl p-px transition duration-500 group-hover:-translate-y-1 sm:rounded-3xl"
                                        style={{
                                            background: `linear-gradient(145deg, ${section.color}70, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.03) 60%, ${section.color}40)`,
                                        }}
                                    >
                                        <div className="overflow-hidden rounded-[15px] bg-[#0A100E] sm:rounded-[23px]">
                                            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                                                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                                                <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                                                <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                                                <span className="ml-3 text-[11px] tracking-[0.15em] text-slate-500">
                                                    JERSEYARENA / {section.number}
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveImage(imageIndex)}
                                                aria-label={`View ${section.imageAlt}`}
                                                className={`group/image relative block w-full overflow-hidden text-left ${focusRing}`}
                                            >
                                                <Image
                                                    src={section.image}
                                                    alt={section.imageAlt}
                                                    width={1400}
                                                    height={950}
                                                    loading="lazy"
                                                    sizes="(max-width: 1024px) 100vw, 600px"
                                                    className="h-auto max-h-[520px] w-full object-contain transition duration-700 group-hover/image:scale-[1.03] motion-reduce:transition-none"
                                                />
                                                <span className="ja-sheen" aria-hidden="true" />
                                                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 text-xs text-white shadow-lg backdrop-blur-xl transition group-hover/image:bg-white group-hover/image:text-black">
                                                    <Eye className="h-3.5 w-3.5" />
                                                    Preview
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between px-1 text-[11px] uppercase tracking-[0.2em] text-slate-600">
                                        <span>JERSEYARENA / {section.number}</span>
                                        <span>Product showcase</span>
                                    </div>
                                </div>

                                <div
                                    className={`relative min-w-0 ${reverse ? "lg:order-1" : ""
                                        }`}
                                >
                                    <div className="mb-6 flex items-center gap-4">
                                        <span
                                            className="flex h-12 w-12 items-center justify-center rounded-2xl border"
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

                                    <h3 className="max-w-xl text-xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-2xl lg:text-[1.75rem]">
                                        {section.title}
                                    </h3>
                                    <p className="mt-6 max-w-xl text-[13px] leading-7 text-slate-400 sm:text-sm">
                                        {section.description}
                                    </p>

                                    <ul className="mt-8 space-y-3">
                                        {section.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-slate-300 transition hover:border-white/15 hover:bg-white/[0.05]"
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
                                        onClick={() => setActiveImage(imageIndex)}
                                        className={`mt-9 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition hover:gap-3 hover:bg-white/[0.05] ${focusRing}`}
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
                        );
                    })}
                </div>
            </section>

            {/* Technology stack */}
            <section
                id="tech-stack"
                className="relative z-10 scroll-mt-24 border-y border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-transparent"
            >
                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
                    <div>
                        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-emerald-300">
                            <span className="h-px w-10 bg-gradient-to-r from-emerald-300 to-transparent" />
                            UNDER THE HOOD
                        </p>
                        <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                            Built with modern technology.
                        </h2>
                        <p className="mt-6 max-w-lg text-[13px] leading-7 text-slate-400">
                            JerseyArena's stack supports the interface,
                            jersey discovery, product presentation, and
                            any connected football data services.
                        </p>
                    </div>
                    <div className="flex flex-wrap content-start gap-3">
                        {technologies.map((technology, index) => (
                            <span
                                key={technology}
                                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/[0.06] hover:text-white hover:shadow-[0_18px_40px_-18px_rgba(110,231,183,0.5)] sm:text-base"
                            >
                                <span className="font-mono text-xs text-emerald-300/70">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                {technology}
                                <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-emerald-300" />
                            </span>
                        ))}
                        <p className="mt-4 w-full text-xs leading-6 text-slate-600">
                            Verify this list against your actual project
                            dependencies and remove technologies that are
                            not used.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project overview */}
            <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20 lg:px-12">
                <div>
                    <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-emerald-300">
                        <span className="h-px w-10 bg-gradient-to-r from-emerald-300 to-transparent" />
                        PROJECT OVERVIEW
                    </p>
                    <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                        Built for the love of football.
                    </h2>
                </div>
                <div className="space-y-6 border-l border-white/10 pl-6 text-[13px] leading-7 text-slate-400 sm:pl-10 sm:text-sm">
                    <p>
                        JerseyArena brings multiple jersey discovery
                        experiences together, including club collections,
                        latest designs, category-based browsing, and a
                        dedicated retro archive.
                    </p>
                    <p>
                        The Real Madrid collection demonstrates how visitors
                        can explore jerseys through a specific club identity,
                        while the All Jerseys page offers a broader view
                        of the collection.
                    </p>
                    <p>
                        The long-term vision is to create a polished
                        football-focused destination where jersey discovery
                        and matchday information complement one another.
                    </p>
                </div>
            </section>

            {/* Challenges */}
            <section
                id="challenges"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-12 sm:px-8 sm:py-20 lg:px-12"
            >
                <div className="mb-14 max-w-2xl">
                    <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-lime-300">
                        <span className="h-px w-10 bg-gradient-to-r from-lime-300 to-transparent" />
                        THE DEVELOPMENT JOURNEY
                    </p>
                    <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                        Challenges worth solving.
                    </h2>
                    <p className="mt-6 text-[13px] leading-7 text-slate-400">
                        Building a football jersey platform involves
                        collection organisation, consistent product
                        presentation, and potentially integrating timely
                        football information.
                    </p>
                </div>

                <div className="space-y-4">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.number}
                            className="group relative grid gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:border-emerald-300/30 hover:bg-white/[0.04] sm:grid-cols-[90px_1fr_1.2fr] sm:gap-8 sm:p-9"
                        >
                            <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-400/0 blur-[70px] transition duration-700 group-hover:bg-emerald-400/20" />
                            <span className="relative font-mono text-lg text-emerald-300/80 sm:text-xl">
                                / {challenge.number}
                            </span>
                            <h3 className="relative text-base font-medium leading-7 tracking-tight sm:text-lg transition group-hover:text-emerald-200">
                                {challenge.title}
                            </h3>
                            <div className="relative">
                                <p className="text-sm leading-7 text-slate-400">
                                    {challenge.description}
                                </p>
                                <p className="mt-4 border-l-2 border-emerald-300/50 bg-gradient-to-r from-emerald-300/[0.07] to-transparent py-2 pl-4 text-sm leading-7 text-slate-300">
                                    {challenge.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-xs leading-6 text-slate-600">
                    Edit these challenges to reflect the actual problems you
                    encountered and the solutions you implemented.
                </p>
            </section>

            {/* Future plans */}
            <section
                id="future-plans"
                className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
            >
                <div className="rounded-[2rem] bg-gradient-to-br from-emerald-300/40 via-white/10 to-cyan-300/30 p-px sm:rounded-[2.5rem]">
                    <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#0D1A14] via-[#0A100E] to-[#08141A] p-7 sm:rounded-[calc(2.5rem-1px)] sm:p-12 lg:p-16">
                        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px]" />
                        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
                        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                            <div>
                                <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-emerald-300">
                                    <span className="h-px w-10 bg-gradient-to-r from-emerald-300 to-transparent" />
                                    WHAT COMES NEXT
                                </p>
                                <h2 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[2.1rem]">
                                    The next chapter.
                                </h2>
                                <p className="mt-7 max-w-lg text-[13px] leading-7 text-slate-400">
                                    JerseyArena can continue to evolve through
                                    usability improvements, richer jersey
                                    discovery, and reliable football data
                                    integration. Keep this roadmap aligned
                                    with the project's actual remaining work.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                {futurePlans.map((plan, index) => (
                                    <li
                                        key={plan}
                                        className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-sm leading-7 text-slate-300 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 font-mono text-[11px] text-emerald-300">
                                            {String(index + 1).padStart(2, "0")}
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
                className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
            >
                <div className="border-t border-white/10 pt-14 sm:pt-20">
                    <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-emerald-300">
                        <span className="h-px w-10 bg-gradient-to-r from-emerald-300 to-transparent" />
                        EXPLORE THE PROJECT
                    </p>
                    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-transparent sm:text-3xl lg:text-4xl">
                                Your next favourite kit.
                            </h2>
                            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                                Explore the live platform or review the source
                                code when the real project URLs are available.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-200 to-emerald-400 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_-8px_rgba(110,231,183,0.7)] transition hover:-translate-y-0.5 ${focusRing}`}
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
                                    className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-white/[0.07] ${focusRing}`}
                                >
                                    <Code2 className="h-4 w-4" />
                                    GitHub repository
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}
                            {!liveUrl && !githubUrl && (
                                <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-500">
                                    Project links will be added when available.
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 text-xs text-slate-600 sm:flex-row">
                    <Link
                        href="/"
                        className={`inline-flex items-center gap-2 rounded-md transition hover:text-white ${focusRing}`}
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back to all projects
                    </Link>
                    <span>JerseyArena · Made for football fans</span>
                </div>
            </section>

            {/* Screenshot lightbox */}
            {activeImage !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(8,20,14,0.96),rgba(2,4,3,0.98))] p-4 backdrop-blur-2xl sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="JerseyArena screenshot preview"
                    onClick={() => setActiveImage(null)}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <button
                        type="button"
                        onClick={() => setActiveImage(null)}
                        aria-label="Close preview"
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
                        className={`absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-emerald-300 hover:text-black sm:left-6 sm:h-12 sm:w-12 ${focusRing}`}
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    <div
                        className="relative w-full max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-200/40 via-white/10 to-cyan-300/30 p-px shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
                            <Image
                                src={screenshots[activeImage].image}
                                alt={screenshots[activeImage].imageAlt}
                                width={1800}
                                height={1200}
                                priority
                                sizes="100vw"
                                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-[15px] bg-[#0A100E] object-contain"
                            />
                        </div>
                        <div className="mt-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs tracking-[0.2em] text-emerald-300">
                                    SCREENSHOT{" "}
                                    {String(activeImage + 1).padStart(2, "0")}{" "}
                                    / {String(screenshots.length).padStart(2, "0")}
                                </p>
                                <p className="mt-2 text-sm text-slate-300">
                                    {screenshots[activeImage].title}
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
                        className={`absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-emerald-300 hover:text-black sm:right-6 sm:h-12 sm:w-12 ${focusRing}`}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </main>
    );
}