"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 inline-block">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Projects",    href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com",   icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com",  icon: <LinkedInIcon /> },
  { label: "Twitter",  href: "https://twitter.com",   icon: <TwitterIcon /> },
];

const LOGO_MARK = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="7" fill="url(#footerLogoGrad)" />
    <path
      d="M8 20L14 8L20 20M10.5 15.5H17.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

// ── Scroll to top ─────────────────────────────────────────────────────────────
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView  = useInView(footerRef, { once: true, margin: "-5%" });

  const year = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="relative bg-[#080B10] overflow-hidden">

      {/* Top gradient fade from section above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)",
        }}
      />

      {/* Subtle bottom glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-b border-white/[0.06]"
        >
          {/* Glow accent behind CTA */}
          <div
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-64 h-32 opacity-25"
            style={{
              background: "radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              Open to opportunities
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
              style={{ fontFamily: "'Geist', 'DM Sans', sans-serif" }}
            >
              Ready to work together?
            </h2>
            <p className="text-slate-500 text-[14px] mt-2 max-w-sm">
              Let&apos;s build something people will actually use.
            </p>
          </div>

          <div className="relative flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 0 1px rgba(99,102,241,0.4), 0 8px 32px rgba(99,102,241,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 1px rgba(99,102,241,0.7), 0 12px 40px rgba(99,102,241,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 1px rgba(99,102,241,0.4), 0 8px 32px rgba(99,102,241,0.25)";
              }}
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 border border-white/[0.10] bg-white/[0.04] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.18] transition-all duration-200"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* ── Main footer row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group w-fit"
            >
              <LOGO_MARK />
              <span className="text-[15px] font-semibold text-white/80 tracking-tight group-hover:text-white transition-colors duration-200">
                arundodamani<span className="text-indigo-400">.dev</span>
              </span>
            </a>
            <p className="text-[12px] text-slate-600 max-w-[220px] leading-relaxed">
              Full-stack engineer building fast, polished products end-to-end.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-[13px] text-slate-500 hover:text-slate-200 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social + scroll-to-top */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.07] border border-transparent hover:border-white/[0.09] transition-all duration-200"
              >
                {icon}
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-white/[0.08] mx-1" />

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.07] border border-transparent hover:border-white/[0.09] transition-all duration-200"
            >
              <ArrowUpIcon />
            </button>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="py-5 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-[11px] text-slate-700 text-center sm:text-left">
            © {year} arun dodamani. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-700 text-center">
            Built with{" "}
            <span className="text-red-500/70 mx-0.5">
              <HeartIcon />
            </span>{" "}
            using{" "}
            {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((tech, i, arr) => (
              <span key={tech}>
                <span className="text-slate-600 hover:text-slate-400 transition-colors duration-200 cursor-default">
                  {tech}
                </span>
                {i < arr.length - 1 && <span className="text-slate-800 mx-1">·</span>}
              </span>
            ))}
          </p>

          <p className="text-[11px] text-slate-700 text-center sm:text-right">
            Designed &amp; developed by{" "}
            <span className="text-slate-500">arun dodamani</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
}