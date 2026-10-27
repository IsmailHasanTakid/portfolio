"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: string[] = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
    const [active, setActive] = useState<string>("Home");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="relative z-20 flex justify-center px-5 pt-[30px] text-white">
            <nav className="relative flex h-20 w-full max-w-[1124px] items-center justify-between rounded-full border border-[rgba(130,160,220,0.28)] bg-[rgba(11,24,49,0.62)] px-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-[18px] md:h-[92px] md:px-12">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-[32px] font-bold leading-none tracking-[-1.5px] text-white md:text-[46px]"
                >
                    Tak<span className="text-[#2f7bff]">id</span>
                </a>

                {/* Links */}
                <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex">
                    {links.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setActive(item)}
                                aria-current={active === item ? "page" : undefined}
                                className={`relative flex h-[54px] items-center px-4 text-[18px] font-medium transition-colors hover:text-[#3b82f6] ${active === item
                                    ? "text-[#2f7bff] after:absolute after:inset-x-[4px] after:bottom-0 after:h-0.5 after:rounded-full after:bg-[#2f7bff]"
                                    : "text-white"
                                    }`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hire Me / mobile menu */}
                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="inline-flex h-10 items-center rounded-full border-[1.5px] border-[#2f7bff] px-5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#2f7bff] hover:shadow-[0_0_25px_rgba(47,123,255,0.45)] md:h-[44px] md:px-[28px] md:text-[18px]"
                    >
                        Hire Me
                    </a>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.02] text-white transition-colors hover:border-[#2f7bff] lg:hidden"
                    >
                        {menuOpen ? (
                            <X aria-hidden className="h-5 w-5" strokeWidth={2} />
                        ) : (
                            <Menu aria-hidden className="h-5 w-5" strokeWidth={2} />
                        )}
                    </button>
                </div>

                {/* Mobile navigation */}
                {menuOpen && (
                    <div
                        id="mobile-menu"
                        className="absolute inset-x-0 top-[calc(100%+12px)] rounded-[28px] border border-[rgba(130,160,220,0.22)] bg-[rgba(8,18,38,0.98)] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-[18px] lg:hidden"
                    >
                        <ul className="flex flex-col">
                            {links.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => {
                                            setActive(item);
                                            setMenuOpen(false);
                                        }}
                                        aria-current={active === item ? "page" : undefined}
                                        className={`flex h-11 items-center rounded-full px-4 text-[16px] font-medium ${active === item ? "text-[#2f7bff]" : "text-white"
                                            }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
