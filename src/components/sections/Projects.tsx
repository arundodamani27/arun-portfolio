"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SnapBridge",
    image: "/projects/snapbridge.png",
    tagline: "Instant temporary file sharing for seamless presentations.",
    description:
      "A modern file-sharing web application built to solve classroom and presentation delays by enabling instant secure file transfer using access codes and QR-based sharing without login friction.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "React Dropzone",
      "QRCode React",
    ],
    status: "Featured",
    github: "https://github.com/arundodamani27/snapbridge",
    live: "https://snapbridge.vercel.app",
    featured: true,
  },
  {
    title: "KubeHeal",
    image: "/projects/kubeheal.png",
    tagline: "AI-assisted Kubernetes self-healing system.",
    description:
      "Built during HackToFuture 2026, KubeHeal focuses on detecting Kubernetes pod failures and enabling automated recovery workflows. This project helped our team become National Finalists (Top 41 among 705+ teams).",
    tech: [
      "Python",
      "Docker",
      "Kubernetes",
      "Cloud Systems",
      "Automation",
    ],
    status: "Hackathon Finalist",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "BusTracker",
    image: "/projects/bustracker.png",
    tagline: "Real-time bus tracking web application.",
    description:
      "A practical transport tracking solution designed to help users monitor bus movement and route information through a clean and accessible web interface.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase",
      "Real-time Data",
    ],
    status: "Completed",
    github: "#",
    live: "#",
    featured: false,
  },
];

function BrowserPreview({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
      {/* Browser top bar */}
      <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black/90">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 bg-[#080B10] overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.08), transparent 60%)",
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
              Projects
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Real projects &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              engineering work.
            </span>
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl leading-relaxed">
            A showcase of practical full-stack applications, hackathon projects,
            and real-world engineering solutions.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden mb-10"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-5">
                  Featured Project
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  {featuredProject.title}
                </h3>

                <p className="text-violet-300 font-medium mb-4">
                  {featuredProject.tagline}
                </p>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:scale-105 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06] transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="hidden lg:flex items-center justify-center p-8">
                <BrowserPreview
                  image={featuredProject.image}
                  title={featuredProject.title}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:border-white/20 hover:-translate-y-1 transition"
            >
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-slate-400 mb-4">
                {project.status}
              </span>

              <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-white/10 mb-6 bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2 transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sky-300 text-sm font-medium mb-4">
                {project.tagline}
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs bg-white/[0.04] border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-white transition"
                >
                  Live →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}