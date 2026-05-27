"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    type: "Current",
    title: "Master of Computer Applications (MCA)",
    institution: "St. Joseph Engineering College, Mangaluru",
    period: "2025 – Present",
    description:
      "Currently pursuing MCA with a strong focus on software development, backend engineering, cloud systems, and practical product building.",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    type: "Completed",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Mangaluru University",
    period: "2022 – 2025",
    description:
      "Built core foundations in programming, databases, software engineering, and application development while actively working on practical projects.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    type: "Achievement",
    title: "HackToFuture 2026 National Finalist",
    institution: "Top 41 among 705+ participating teams",
    period: "2026",
    description:
      "Worked on KubeHeal, a Kubernetes-focused self-healing system, gaining hands-on exposure to cloud infrastructure, automation, and engineering collaboration.",
    accent: "from-amber-500 to-orange-500",
  },
];

const stats = [
  {
    value: "8.7",
    label: "MCA CGPA",
  },
  {
    value: "Top 41",
    label: "Hackathon Finalist",
  },
  {
    value: "3+",
    label: "Projects Built",
  },
  {
    value: "Python",
    label: "Primary Focus",
  },
];

const learning = [
  "Next.js",
  "TypeScript",
  "Cloud Engineering",
  "System Design",
  "AI APIs",
  "DSA",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 sm:py-36 bg-[#080B10] overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at left, rgba(52,211,153,0.08), transparent 55%)",
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
            <span className="h-px w-8 bg-emerald-500/60" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
              Education
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Education &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
              learning journey.
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl leading-relaxed">
            Academic foundation, practical engineering growth, and technical
            milestones shaping my development journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative pl-10"
              >
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-4 top-10 w-px h-full bg-white/10" />
                )}

                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-xl bg-gradient-to-br ${item.accent}`}
                />

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-400 mb-4">
                    {item.type}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-emerald-300 text-sm font-medium mb-2">
                    {item.institution}
                  </p>

                  <p className="text-xs text-slate-500 mb-4">{item.period}</p>

                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-center"
                >
                  <p className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Certification & Recognition
              </h3>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                <p className="text-amber-300 font-medium text-sm">
                  HackToFuture 2026 Participation Certificate
                </p>

                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  National-level hackathon participation and finalist recognition
                  through collaborative engineering problem-solving.
                </p>
              </div>
            </motion.div>

            {/* Learning */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Currently Learning
              </h3>

              <div className="flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}