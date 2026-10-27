"use client";

import Image from "next/image";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

type BrandIconProps = { className?: string; "aria-hidden"?: boolean };

const Github = ({ className, ...rest }: BrandIconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const Linkedin = ({ className, ...rest }: BrandIconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const Twitter = ({ className, ...rest }: BrandIconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const Facebook = ({ className, ...rest }: BrandIconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/IsmailHasanTakid",
        icon: Github,
        color: "hover:border-white/40 hover:bg-white/10",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ismail-hasan-takid/",
        icon: Linkedin,
        color: "hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/",
        icon: Twitter,
        color: "hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/takid.takid.9",
        icon: Facebook,
        color: "hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative z-[5] mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-y-12 overflow-hidden px-6 py-10 text-center text-white sm:px-10 xl:min-h-[calc(100vh-122px)] xl:grid-cols-[minmax(0,1fr)_546px] xl:gap-x-16 xl:pt-6 xl:pb-[52px] xl:pl-[56px] xl:pr-[30px] xl:text-left"
        >
            {/* Ambient background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.12] blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-violet-600/[0.10] blur-[110px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.10] blur-[130px]"
            />

            {/* Faint dotted grid, fades out toward the edges */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:radial-gradient(rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            />

            {/* Left content */}
            <div className="mx-auto w-full max-w-[560px] xl:mx-0">
                <p className="flex items-center justify-center gap-[9px] text-[15px] font-semibold tracking-[0.12em] text-[#66a5ff] sm:text-[18px] xl:justify-start">
                    <span className="h-px w-9 bg-[#2f7bff]" />
                    Hello, I&apos;m
                    <span
                        aria-hidden
                        className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                    />
                </p>

                <h1 className="mt-6 text-[38px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-[52px] xl:text-[68px] xl:tracking-[-2.5px]">
                    Ismail Hasan
                    <br />
                    <span className="bg-gradient-to-r from-[#4b91ff] via-[#78b7ff] to-[#a78bfa] bg-clip-text text-transparent">
                        Takid
                    </span>
                </h1>

                <h2 className="mt-4 text-[23px] font-semibold leading-tight tracking-wide text-[#e6ebf5] sm:text-[29px]">
                    Full Stack Developer
                </h2>

                <p className="mx-auto mt-5 max-w-[500px] text-[15px] leading-[1.9] text-[#aebbd2] sm:text-[16px] xl:mx-0">
                    I build modern, responsive, and user-focused web applications,
                    combining elegant frontend experiences with reliable backend
                    solutions. Passionate about clean code, solving real-world problems,
                    and turning ideas into impactful digital products.
                </p>

                {/* Action buttons */}
                <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 xl:justify-start">
                    <a
                        href="/cv.pdf"
                        download="Ismail-Hasan-Takid-Resume.pdf"
                        className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1265f5] via-[#287cff] to-[#438fff] px-7 text-[15px] font-semibold text-white shadow-[0_10px_35px_rgba(20,100,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(20,100,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A12] sm:px-8"
                    >
                        <Download
                            aria-hidden
                            className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-y-0.5"
                        />
                        Download Resume

                    </a>

                    <a
                        href="#contact"
                        className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 text-[15px] font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:px-8"
                    >
                        <MessageCircle
                            aria-hidden
                            className="h-[18px] w-[18px] text-blue-300 transition-transform duration-300 group-hover:scale-110"
                        />
                        Contact Me
                    </a>
                </div>

                {/* Social links */}
                <div className="mt-8 flex items-center justify-center xl:justify-start">
                    <div className="flex items-center gap-2.5">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit my ${social.name} profile`}
                                    title={social.name}
                                    className={`group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${social.color}`}
                                >
                                    <Icon
                                        aria-hidden
                                        className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right photo card */}
            <div className="flex justify-center xl:block">
                <div className="group relative h-[clamp(420px,70vh,560px)] w-full max-w-[460px] rounded-[40px] border border-[#4f9bff]/50 bg-[rgba(9,20,44,0.4)] p-3 shadow-[0_0_20px_rgba(60,140,255,0.2),0_0_65px_rgba(38,110,240,0.15),inset_0_0_22px_rgba(56,132,255,0.08)] transition-all duration-500 hover:border-[#75b3ff]/80 hover:shadow-[0_0_28px_rgba(60,140,255,0.28),0_0_75px_rgba(38,110,240,0.2)] xl:h-[min(642px,calc(100vh-150px))] xl:max-w-[546px] xl:rounded-[48px] xl:p-[14px]">
                    <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-[rgba(110,165,255,0.35)] bg-[radial-gradient(ellipse_at_50%_28%,#1064cd_0%,#0a3f92_32%,#06234f_70%,#041a3c_100%)] xl:rounded-[36px]">
                        {/* Decorative arcs */}
                        <span
                            aria-hidden
                            className="pointer-events-none absolute left-[64%] top-[57%] aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
                        />
                        <span
                            aria-hidden
                            className="pointer-events-none absolute left-[64%] top-[57%] aspect-square w-[114%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[rgba(130,180,255,0.24)]"
                        />

                        {/* Decorative dots */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute right-[48px] top-[36px] h-16 w-16 bg-[radial-gradient(circle,rgba(130,180,255,0.55)_1.4px,transparent_1.4px)] bg-[length:16px_16px]"
                        />

                        {/* Portrait */}
                        <Image
                            src="/images/takid.jpeg"
                            alt="Ismail Hasan Takid"
                            fill
                            priority
                            sizes="(max-width: 1279px) 460px, 546px"
                            className="object-cover object-[50%_80%] transition-transform duration-700 group-hover:scale-[1.025]"
                        />

                        {/* Bottom vignette */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_62%,rgba(4,14,34,0.3)_100%)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}