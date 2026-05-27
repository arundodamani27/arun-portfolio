"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 14c2.21 0 4 1.79 4 4M8 14c-2.21 0-4 1.79-4 4M12 12a4 4 0 100-8 4 4 0 000 8zm6-2a3 3 0 100-6m-12 6a3 3 0 100-6"
    />
  </svg>
);

const PuzzleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 7V5a2 2 0 10-4 0v2H8a2 2 0 00-2 2v2h2a2 2 0 110 4H6v2a2 2 0 002 2h2v-2a2 2 0 114 0v2h2a2 2 0 002-2v-2h-2a2 2 0 110-4h2V9a2 2 0 00-2-2h-2z"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const AcademicIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14L3 9l9-5 9 5-9 5z"
    />
  </svg>
);

const VALUES = [
  {
    icon: <CodeIcon />,
    title: "Problem Solving",
    desc: "I enjoy solving technical challenges and building practical software solutions with clean and understandable code.",
    glow: "rgba(99,102,241,0.08)",
  },
  {
    icon: <RocketIcon />,
    title: "Fast Learning",
    desc: "I actively learn new technologies in full-stack development, cloud engineering, and AI to improve my technical depth.",
    glow: "rgba(139,92,246,0.08)",
  },
  {
    icon: <UsersIcon />,
    title: "Product Thinking",
    desc: "I like building software that solves real user problems instead of creating projects just for demonstration.",
    glow: "rgba(56,189,248,0.08)",
  },
  {
    icon: <PuzzleIcon />,
    title: "Systems Interest",
    desc: "My HackToFuture experience strengthened my interest in cloud architecture, scalable systems, and backend engineering.",
    glow: "rgba(52,211,153,0.08)",
  },
];

const QUICK_FACTS = [
  { icon: <MapPinIcon />, text: "Mangaluru, Karnataka" },
  { icon: <AcademicIcon />, text: "MCA • 8.7 CGPA" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#080B10] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/3 w-[500px] h-[500px] -translate-x-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-8 bg-indigo-500/60" />
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Building software with{" "}
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                curiosity and purpose.
              </span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
              {QUICK_FACTS.map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 border border-white/[0.08] bg-white/[0.04]"
                >
                  <span className="text-indigo-400">{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <p className="text-base text-slate-400 leading-relaxed mb-5">
              I’m Arun, a first-year MCA student with a strong interest in Python
              full-stack development, backend systems, cloud engineering, and
              AI-powered automation.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              My journey includes building practical projects like SnapBridge and
              BusTracker, and becoming a National Finalist at HackToFuture 2026,
              where I worked on a Kubernetes-based self-healing system.
            </p>
          </motion.div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-20" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-8"
          >
            What I Bring
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map(({ icon, title, desc, glow }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl border transition-all duration-300"
                style={{
                  background: glow,
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 text-indigo-400 border border-white/[0.08]"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {icon}
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 p-6 sm:p-8 rounded-2xl border border-white/[0.07]"
          style={{
            background: "rgba(99,102,241,0.04)",
          }}
        >
          <p className="text-white font-semibold text-[15px] mb-1">
            Open to internships, hackathons, and developer collaborations.
          </p>
          <p className="text-slate-500 text-sm">
            Especially interested in Python backend development, cloud systems,
            and AI-driven applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}