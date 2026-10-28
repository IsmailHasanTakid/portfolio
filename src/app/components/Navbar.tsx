
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            <header className="fixed inset-x-0 top-0 z-50">
                <nav className="relative mx-auto flex h-[76px] w-full items-center justify-between border-b border-white/[0.12] bg-[#080D1B]/75 px-8 text-white shadow-[0_8px_35px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-12 lg:px-24 xl:px-24">

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
                    />


                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/[0.035] via-transparent to-violet-500/[0.05]"
                    />


                    <a
                        href="#home"
                        onClick={() => {
                            setActive("Home");
                            setMenuOpen(false);
                        }}
                        className="group inline-flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-105"
                    >
                        {/* Developer Icon */}
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/20 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="url(#takid-icon-gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <defs>
                                    <linearGradient
                                        id="takid-icon-gradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#22D3EE" />
                                        <stop offset="50%" stopColor="#3B82F6" />
                                        <stop offset="100%" stopColor="#A78BFA" />
                                    </linearGradient>
                                </defs>
                                <path d="m8 17-5-5 5-5" />
                                <path d="m16 7 5 5-5 5" />
                                <path d="m14 4-4 16" />
                            </svg>
                        </span>

                        {/* Multicolor TAKID Logo */}
                        <span className="flex items-center text-[30px] font-black leading-none tracking-[-1.8px] sm:text-[34px]">
                            <span className="bg-gradient-to-br from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                                T
                            </span>
                            <span className="bg-gradient-to-br from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                                A
                            </span>
                            <span className="bg-gradient-to-br from-amber-300 via-pink-400 to-rose-500 bg-clip-text text-transparent">
                                K
                            </span>
                            <span className="bg-gradient-to-br from-emerald-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                I
                            </span>
                            <span className="bg-gradient-to-br from-violet-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                D
                            </span>
                        </span>
                    </a>



                    <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex">
                        {links.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setActive(item.label)}
                                    aria-current={
                                        active === item.label
                                            ? "page"
                                            : undefined
                                    }
                                    className={`group relative flex h-11 items-center px-4 text-sm font-medium transition-colors duration-300 xl:px-5 ${active === item.label
                                        ? "text-cyan-300"
                                        : "text-slate-300 hover:text-white"
                                        }`}
                                >
                                    {item.label}


                                    <span
                                        className={`absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-cyan-300 to-blue-500 transition-transform duration-300 ${active === item.label
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-75"
                                            }`}
                                    />


                                    {active === item.label && (
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-x-3 bottom-0 h-4 bg-cyan-400/10 blur-md"
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>


                    <div className="hidden items-center gap-2 text-xs text-slate-400 xl:flex">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        <span>Available for opportunities</span>
                    </div>


                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        className="flex h-10 w-10 items-center justify-center border border-white/[0.14] bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/[0.08] hover:text-cyan-200 lg:hidden"
                    >
                        {menuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>


                    {menuOpen && (
                        <div
                            id="mobile-menu"
                            className="absolute inset-x-0 top-full border-b border-white/[0.12] bg-[#080D1B]/95 px-4 pb-4 pt-3 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden"
                        >
                            <div className="mb-2 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                            <ul className="flex flex-col">
                                {links.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={() => {
                                                setActive(item.label);
                                                setMenuOpen(false);
                                            }}
                                            aria-current={
                                                active === item.label
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={`flex min-h-12 items-center justify-between border-b border-white/[0.05] px-3 text-sm font-medium transition-colors ${active === item.label
                                                ? "text-cyan-300"
                                                : "text-slate-300 hover:text-white"
                                                }`}
                                        >
                                            {item.label}

                                            {active === item.label && (
                                                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <p className="px-3 pt-4 text-xs text-slate-500">
                                Portfolio · Design · Development
                            </p>
                        </div>
                    )}
                </nav>
            </header>


            <div aria-hidden="true" className="h-[76px]" />
        </>
    );
}
