"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Projects",    href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

// ── Logo mark ────────────────────────────────────────────────────────────────
const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="7" fill="url(#logoGrad)" />
    <path
      d="M8 20L14 8L20 20M10.5 15.5H17.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

// ── Hamburger / Close icon ────────────────────────────────────────────────────
const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative w-5 h-5 flex flex-col justify-center items-center">
    <motion.span
      animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute block w-5 h-[1.5px] bg-slate-300 origin-center"
    />
    <motion.span
      animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.15 }}
      className="absolute block w-5 h-[1.5px] bg-slate-300 origin-center"
    />
    <motion.span
      animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute block w-5 h-[1.5px] bg-slate-300 origin-center"
    />
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeId, setActiveId]     = useState<string>("");
  const [menuOpen, setMenuOpen]     = useState(false);
  const indicatorRef                = useRef<HTMLDivElement>(null);
  const navRef                      = useRef<HTMLDivElement>(null);
  const linkRefs                    = useRef<Record<string, HTMLAnchorElement | null>>({});

  // ── Scroll: glass intensity + active section ──────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Find which section is in view
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= 120) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Move pill indicator under active link ─────────────────────────────────
  useEffect(() => {
    if (!indicatorRef.current || !navRef.current) return;
    const activeEl = linkRefs.current[activeId];
    if (!activeEl) {
      indicatorRef.current.style.opacity = "0";
      return;
    }
    const navRect  = navRef.current.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    indicatorRef.current.style.opacity  = "1";
    indicatorRef.current.style.left     = `${linkRect.left - navRect.left}px`;
    indicatorRef.current.style.width    = `${linkRect.width}px`;
  }, [activeId]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop / Mobile sticky navbar ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        {/* Glass bar */}
        <div
          className="mx-auto transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(8,11,16,0.82)"
              : "rgba(8,11,16,0.4)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 1px 40px rgba(0,0,0,0.5)"
              : "none",
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 h-[62px] flex items-center justify-between">

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
              className="flex items-center gap-2.5 group"
            >
              <LogoMark />
              <span className="text-[15px] font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors duration-200">
                arundodamani<span className="text-indigo-400">.dev</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">
              {/* Sliding pill indicator */}
              <div
                ref={indicatorRef}
                className="absolute bottom-0 h-full rounded-lg bg-white/[0.07] pointer-events-none transition-all duration-300"
                style={{ opacity: 0 }}
              />

              {NAV_LINKS.map(({ label, href }) => {
                const id        = href.replace("#", "");
                const isActive  = activeId === id;
                return (
                  <a
                    key={href}
                    href={href}
                    ref={(el) => { linkRefs.current[id] = el; }}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
                    className={`relative z-10 px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.35), 0 4px 16px rgba(99,102,241,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(99,102,241,0.65), 0 6px 24px rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(99,102,241,0.35), 0 4px 16px rgba(99,102,241,0.2)";
                }}
              >
                Hire me
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[70px] left-4 right-4 z-50 rounded-2xl overflow-hidden md:hidden"
              style={{
                background: "rgba(10,13,20,0.96)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              <nav className="flex flex-col p-3">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id       = href.replace("#", "");
                  const isActive = activeId === id;
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-150 ${
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      )}
                      <span className={isActive ? "" : "ml-[18px]"}>{label}</span>
                    </motion.a>
                  );
                })}

                {/* Mobile CTA */}
                <div className="mt-3 pt-3 border-t border-white/[0.07] px-1">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
                    className="flex items-center justify-center w-full py-3 rounded-xl text-[14px] font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                    }}
                  >
                    Hire me
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}