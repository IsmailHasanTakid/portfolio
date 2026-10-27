
"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    Heart,
    MoveUpRight,
} from "lucide-react";

const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#080A12] text-white">
            {/* Ambient background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
            />

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                {/* Main footer */}
                <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
                    {/* Brand */}
                    <div>
                        <Link
                            href="#home"
                            className="group inline-flex items-center gap-3"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-violet-500/20 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-transform duration-300 group-hover:scale-105">
                                <span className="bg-gradient-to-br from-cyan-300 to-violet-300 bg-clip-text text-xl font-bold text-transparent">
                                    T
                                </span>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold tracking-[0.16em]">
                                    TAKID
                                </h2>
                                <p className="mt-0.5 text-[10px] tracking-[0.2em] text-slate-500">
                                    DEVELOPER PORTFOLIO
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                            I build modern digital experiences with clean
                            code, creative ideas, and a passion for solving
                            real-world problems.
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs text-emerald-300">
                                Open to opportunities
                            </span>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                            QUICK LINKS
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navigation.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-slate-600 transition-colors group-hover:bg-cyan-300" />
                                        {item.label}
                                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                            LET&apos;S CONNECT
                        </h3>

                        <p className="mt-5 text-sm leading-6 text-slate-400">
                            Have an idea or an exciting project? Let&apos;s
                            make something meaningful together.
                        </p>

                        <a
                            href="mailto:mdtakid62@gmail.com"
                            className="group mt-4 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-cyan-300 transition-colors hover:text-violet-300"
                        >
                            <Mail className="h-4 w-4 shrink-0" />
                            mdtakid62@gmail.com
                            <MoveUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://github.com/IsmailHasanTakid"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-[18px] w-[18px] fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.03 3.35 1.55.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ismail-hasan-takid/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-[18px] w-[18px] fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.73a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.46 2.84-1.46C18.66 8.77 19 10.7 19 13.2V18Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 border-t border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-center text-xs text-slate-500 sm:text-left">
                        © {new Date().getFullYear()} Ismail Hasan Takid.
                        All rights reserved.
                    </p>

                    <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 sm:justify-end">
                        Crafted with
                        <Heart className="h-3.5 w-3.5 fill-pink-400 text-pink-400" />
                        and a passion for code
                    </p>

                    <Link
                        href="#home"
                        aria-label="Back to top"
                        className="group mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:border-cyan-300/30 hover:text-cyan-300 sm:mx-0"
                    >
                        <ArrowUpRight className="-rotate-45 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
