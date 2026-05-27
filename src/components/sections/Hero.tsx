"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arundodamani27",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arundodamani",
    icon: <LinkedInIcon />,
  },
];

const techBadges = [
  "Python",
  "JavaScript",
  "SQL",
  "Docker",
  "Kubernetes",
  "MySQL",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B10]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row gap-20 items-center"
      >
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to internships & developer opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Arun Dodamani
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-2xl text-slate-300"
          >
            Aspiring Python Full Stack Developer & Hackathon Finalist
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            I’m a final-year MCA student passionate about Python full-stack
            development, scalable applications, cloud engineering, and
            AI-powered automation. I enjoy building practical products that
            solve real-world problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-8"
          >
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-sm border border-white/10 bg-white/5 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold"
            >
              View My Work
              <ArrowRightIcon />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            >
              <DownloadIcon />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 mt-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block w-[340px]"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 font-mono text-sm">
            <p className="text-slate-500">// about me</p>
            <p className="mt-4 text-slate-300">name: "arun dodamani"</p>
            <p className="text-slate-300">role: "Python Full Stack"</p>
            <p className="text-slate-300">hackathon: "Top 41 Finalist"</p>
            <p className="text-slate-300">focus: "Cloud & Web Apps"</p>
            <p className="text-slate-300">available: true</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { value: "Top 41", label: "HackToFuture" },
              { value: "8.5", label: "MCA CGPA" },
              { value: "2+", label: "Projects" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-white font-bold">{item.value}</p>
                <p className="text-xs text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}