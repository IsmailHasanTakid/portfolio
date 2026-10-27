
"use client";

import type { CSSProperties } from "react";
import {
    Mail,
    Phone,
    MessageCircle,
    ArrowUpRight,
    Sparkles,
    Globe,
    Code2,
} from "lucide-react";

const contacts = [
    {
        title: "Email Me",
        description: "For inquiries & collaboration",
        value: "mdtakid62@gmail.com",
        href: "mailto:mdtakid62@gmail.com",
        icon: Mail,
        color: "#67E8F9",
        background: "rgba(34, 211, 238, 0.10)",
    },
    {
        title: "Call Me",
        description: "Direct phone contact",
        value: "+8801647273392",
        href: "tel:+8801647273392",
        icon: Phone,
        color: "#C4B5FD",
        background: "rgba(167, 139, 250, 0.12)",
    },
    {
        title: "WhatsApp",
        description: "Let's have a quick conversation",
        value: "Chat on WhatsApp",
        href: "https://wa.me/8801647273392",
        icon: MessageCircle,
        color: "#4ADE80",
        background: "rgba(74, 222, 128, 0.10)",
    },
    {
        title: "GitHub",
        description: "Explore my projects & code",
        value: "Visit my GitHub profile",
        href: "https://github.com/IsmailHasanTakid",
        icon: Code2,
        color: "#FFFFFF",
        background: "rgba(255, 255, 255, 0.08)",
    },
    {
        title: "LinkedIn",
        description: "Connect professionally",
        value: "Visit my LinkedIn profile",
        href: "https://www.linkedin.com/in/ismail-hasan-takid/",
        icon: Globe,
        color: "#F0ABFC",
        background: "rgba(232, 121, 249, 0.10)",
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#080A12] px-4 py-12 sm:px-8 sm:py-16 lg:px-12"
        >
            {/* Background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
            />

            <div className="relative mx-auto w-full max-w-4xl">
                {/* Compact heading */}
                <div className="mb-7 text-center sm:mb-9">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5">
                        <Sparkles className="h-4 w-4 text-violet-300" />

                        <span className="text-xs font-semibold tracking-[0.16em] text-violet-200">
                            LET'S CONNECT
                        </span>
                    </div>


                    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                        Let's build something{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                            great together.
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base">
                        Have a project idea or want to collaborate?
                        Choose your preferred way to reach me.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>

                        Open to connections & collaboration
                    </div>
                </div>

                {/* Wide contact panel — no separate cards */}
                <div className="grid grid-cols-1 gap-x-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-4 sm:grid-cols-2 sm:px-7">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;

                        const isExternal =
                            contact.title === "GitHub" ||
                            contact.title === "LinkedIn";

                        return (
                            <a
                                key={contact.title}
                                href={contact.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={
                                    isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={`${contact.title}: ${contact.value}`}
                                className={`group relative flex items-center gap-3 py-4 transition-colors duration-300 hover:bg-white/[0.035] sm:gap-5 sm:py-5 ${index < contacts.length - 1
                                    ? "border-b border-white/[0.08]"
                                    : ""
                                    }`}
                                style={
                                    {
                                        "--contact-color": contact.color,
                                    } as CSSProperties
                                }
                            >
                                {/* Icon */}
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
                                    style={{
                                        backgroundColor: contact.background,
                                    }}
                                >
                                    <Icon
                                        className="h-5 w-5 sm:h-6 sm:w-6"
                                        style={{ color: contact.color }}
                                    />
                                </div>

                                {/* Contact information */}
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-[var(--contact-color)] sm:text-base">
                                        {contact.title}
                                    </h3>

                                    <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                                        {contact.description}
                                    </p>

                                    <p className="mt-1 break-all text-xs font-medium text-slate-300 sm:text-sm">
                                        {contact.value}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--contact-color)] sm:h-10 sm:w-10">
                                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="text-center text-xs text-slate-500">
                        Every great connection starts with a conversation.
                    </p>
                </div>
            </div>
        </section>
    );
}
