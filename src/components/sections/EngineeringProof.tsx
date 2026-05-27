"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "Top 41",
    label: "HackToFuture Finalist",
    description: "National finalist among 705+ participating teams.",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    value: "3+",
    label: "Projects Built",
    description: "Practical full-stack and systems-focused applications.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    value: "8.5",
    label: "MCA CGPA",
    description: "Strong academic consistency in computer applications.",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    value: "Python",
    label: "Technical Focus",
    description: "Backend systems, cloud engineering, and product development.",
    accent: "from-amber-500 to-orange-500",
  },
];

const highlights = [
  {
    title: "SnapBridge MVP",
    description:
      "Built a secure temporary file-sharing platform for fast classroom and presentation file transfer using QR-based sharing and access-code workflows.",
  },
  {
    title: "KubeHeal",
    description:
      "Built a Kubernetes-focused self-healing system during HackToFuture 2026, helping the team reach National Finalist status.",
  },
  {
    title: "BusTracker",
    description:
      "Developed a practical transport tracking web application focused on real-time route visibility and accessibility.",
  },
  {
    title: "Cloud & DevOps Learning",
    description:
      "Exploring Docker, Kubernetes, cloud systems, deployment workflows, and scalable backend architecture.",
  },
  {
    title: "AI Exploration",
    description:
      "Actively learning AI-powered automation, APIs, and practical product integration opportunities.",
  },
  {
    title: "Problem Solving",
    description:
      "Continuously strengthening logical reasoning, development workflows, and practical engineering thinking.",
  },
];

export default function EngineeringProof() {
  return (
    <section
      id="proof"
      className="relative py-28 sm:py-36 bg-[#080B10] overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at right, rgba(99,102,241,0.08), transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-indigo-500/60" />
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
              Proof of Work
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Building through{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              real engineering work.
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl leading-relaxed">
            Practical projects, technical exploration, and measurable milestones
            that reflect my engineering growth.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:-translate-y-1 hover:border-white/20 transition"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.accent} mb-5`}
              />

              <h3 className="text-3xl font-bold text-white mb-2">
                {metric.value}
              </h3>

              <p className="text-sm font-semibold text-slate-200 mb-2">
                {metric.label}
              </p>

              <p className="text-sm text-slate-500 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Engineering Highlights
            </h3>

            <p className="text-slate-500 mt-2">
              Real projects, systems, and technical learning milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="p-6 border-r border-b border-white/10 hover:bg-white/[0.03] transition"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/arundodamani27"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.05] transition"
          >
            GitHub Profile
          </a>

          <a
            href="https://linkedin.com/in/arundodamani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.05] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}