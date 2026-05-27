"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { ElementType } from "react";
import {
  TerminalSquare,
  Braces,
  Database,
  Code2,
  Server,
  Flame,
  Link2,
  Package,
  Boxes,
  FolderGit2,
  GitBranch,
  Monitor,
  Send,
  Smartphone,
  Sparkles,
  Network,
  Globe,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: ElementType;
}

interface Category {
  id: string;
  label: string;
  accent: string;
  border: string;
  textAccent: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    id: "languages",
    label: "Languages",
    accent: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.35)",
    textAccent: "#a78bfa",
    skills: [
      { name: "Python", level: 4, icon: TerminalSquare },
      { name: "JavaScript", level: 3, icon: Braces },
      { name: "SQL", level: 3, icon: Database },
      { name: "HTML", level: 4, icon: Globe },
      { name: "CSS", level: 3, icon: Code2 },
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    accent: "rgba(56,189,248,0.10)",
    border: "rgba(56,189,248,0.35)",
    textAccent: "#38bdf8",
    skills: [
      { name: "Python Backend", level: 4, icon: Server },
      { name: "Firebase", level: 3, icon: Flame },
      { name: "MySQL", level: 3, icon: Database },
      { name: "API Integration", level: 3, icon: Link2 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    accent: "rgba(52,211,153,0.10)",
    border: "rgba(52,211,153,0.35)",
    textAccent: "#34d399",
    skills: [
      { name: "Docker", level: 3, icon: Package },
      { name: "Kubernetes", level: 3, icon: Boxes },
      { name: "GitHub", level: 4, icon: FolderGit2 },
      { name: "Git", level: 4, icon: GitBranch },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    accent: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.30)",
    textAccent: "#fbbf24",
    skills: [
      { name: "VS Code", level: 5, icon: Monitor },
      { name: "Postman", level: 3, icon: Send },
      { name: "Android Studio", level: 3, icon: Smartphone },
      { name: "GitHub Desktop", level: 3, icon: FolderGit2 },
    ],
  },
  {
    id: "learning",
    label: "Currently Learning",
    accent: "rgba(244,114,182,0.10)",
    border: "rgba(244,114,182,0.35)",
    textAccent: "#f472b6",
    skills: [
      { name: "Next.js", level: 2, icon: Globe },
      { name: "TypeScript", level: 2, icon: Braces },
      { name: "AI APIs", level: 2, icon: Sparkles },
      { name: "System Design", level: 2, icon: Network },
    ],
  },
];

const LEVEL_LABELS = [
  "",
  "Learning",
  "Basic",
  "Comfortable",
  "Strong",
  "Advanced",
];

function LevelDots({
  level,
  accent,
}: {
  level: number;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="block w-1.5 h-1.5 rounded-full"
          style={{
            background: i < level ? accent : "rgba(255,255,255,0.1)",
            boxShadow: i < level ? `0 0 4px ${accent}` : "none",
          }}
        />
      ))}
    </div>
  );
}

function SkillBadge({
  skill,
  accent,
  border,
  textAccent,
}: {
  skill: Skill;
  accent: string;
  border: string;
  textAccent: string;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-3 p-4 rounded-xl border cursor-default transition-all duration-300"
      style={{
        background: hovered ? accent : "rgba(255,255,255,0.02)",
        borderColor: hovered ? border : "rgba(255,255,255,0.07)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.07] bg-white/[0.03] shrink-0">
          <Icon
            size={20}
            strokeWidth={1.8}
            className={hovered ? "text-white" : "text-indigo-300"}
          />
        </span>

        <LevelDots level={skill.level} accent={textAccent} />
      </div>

      <div>
        <p
          className="text-[13px] font-semibold"
          style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.75)" }}
        >
          {skill.name}
        </p>

        <p
          className="text-[11px] mt-0.5"
          style={{
            color: hovered ? textAccent : "rgba(255,255,255,0.3)",
          }}
        >
          {LEVEL_LABELS[skill.level]}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const [active, setActive] = useState("all");

  const visibleCategories =
    active === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === active);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#080B10] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Skills
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Technical skills &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              learning journey.
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {[{ id: "all", label: "All" }, ...CATEGORIES.map((c) => ({
            id: c.id,
            label: c.label,
          }))].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="px-4 py-2 rounded-lg text-sm border transition"
              style={{
                background:
                  active === id
                    ? "rgba(99,102,241,0.2)"
                    : "rgba(255,255,255,0.03)",
                borderColor:
                  active === id
                    ? "rgba(99,102,241,0.5)"
                    : "rgba(255,255,255,0.08)",
                color:
                  active === id
                    ? "#a78bfa"
                    : "rgba(255,255,255,0.5)",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl border border-white/[0.06] overflow-hidden bg-white/[0.015]"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05]">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.textAccent }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: cat.textAccent }}
                >
                  {cat.label}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-5">
                {cat.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    accent={cat.accent}
                    border={cat.border}
                    textAccent={cat.textAccent}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}