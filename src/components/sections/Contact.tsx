"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4.5 h-4.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);



const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ── Types ─────────────────────────────────────────────────────────────────────
type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const CONTACT_CHANNELS = [
  {
    icon: <EnvelopeIcon />,
    label: "Email",
    value: "arundodamani27@gmail.com",
    href: "mailto:arundodamani27@gmail.com",
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.25)",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    value: "github.com/arundodamani27",
    href: "https://github.com/arundodamani27",
    accent: "#e2e8f0",
    bg: "rgba(226,232,240,0.06)",
    border: "rgba(226,232,240,0.15)",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "linkedin.com/in/arundodamani",
    href: "https://linkedin.com",
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.25)",
  },
 
];

const SUBJECTS = [
  "Job opportunity",
  "Freelance project",
  "Open source collab",
  "Just saying hi",
  "Other",
];

// ── Input component ───────────────────────────────────────────────────────────
function FormInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  icon,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  icon?: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[12px] font-semibold text-slate-400 tracking-wide">
        {label}
        {required && <span className="text-indigo-400 ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200"
            style={{ color: focused || filled ? "#a78bfa" : "rgba(255,255,255,0.2)" }}
          >
            {icon}
          </div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full rounded-xl text-[14px] text-white placeholder:text-slate-600 outline-none transition-all duration-200"
          style={{
            background: focused ? "rgba(99,102,241,0.07)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${focused ? "rgba(99,102,241,0.5)" : filled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
            boxShadow: focused ? "0 0 0 3px rgba(99,102,241,0.12)" : "none",
            padding: icon ? "11px 14px 11px 40px" : "11px 14px",
          }}
        />
      </div>
    </div>
  );
}

// ── Textarea component ────────────────────────────────────────────────────────
function FormTextarea({
  label,
  id,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-[12px] font-semibold text-slate-400 tracking-wide">
          {label}
          {required && <span className="text-indigo-400 ml-1">*</span>}
        </label>
        <span className="text-[11px] text-slate-600">{value.length} / 1000</span>
      </div>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        rows={5}
        maxLength={1000}
        className="w-full rounded-xl text-[14px] text-white placeholder:text-slate-600 outline-none resize-none transition-all duration-200 p-3.5"
        style={{
          background: focused ? "rgba(99,102,241,0.07)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${focused ? "rgba(99,102,241,0.5)" : filled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`,
          boxShadow: focused ? "0 0 0 3px rgba(99,102,241,0.12)" : "none",
        }}
      />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-10%" });

  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const set = (key: keyof FormData) => (v: string) =>
    setFormData((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setFormState("submitting");
    // Simulate async send — replace with your actual API call
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  const isValid = formData.name && formData.email && formData.message;

  const fadeUp = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as never } },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#080B10] overflow-hidden"
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 translate-x-1/2 w-[400px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Header ── */}
        <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-indigo-500/60" />
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">Contact</span>
        </motion.div>

        <motion.h2
          variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
          style={{ fontFamily: "'Geist', 'DM Sans', sans-serif" }}
        >
          Let&apos;s build something{" "}
          <span style={{
            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            great.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="text-slate-500 text-[15px] max-w-xl mb-14 leading-relaxed"
        >
          Whether you have a role in mind, an idea to explore, or just want to connect — my inbox is open. I reply within 24 hours.
        </motion.p>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">

          {/* LEFT — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/[0.08] overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Form header */}
            <div
              className="flex items-center gap-2.5 px-6 py-4 border-b border-white/[0.06]"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-indigo-400"><ChatIcon /></span>
              <span className="text-[13px] font-semibold text-white">Send a message</span>
              <div className="ml-auto flex items-center gap-1.5 text-[11px] text-slate-600">
                <ClockIcon />
                <span>Replies within 24h</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center gap-5 p-12 text-center"
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full"
                    style={{
                      background: "rgba(52,211,153,0.12)",
                      border: "1px solid rgba(52,211,153,0.35)",
                      boxShadow: "0 0 32px rgba(52,211,153,0.2)",
                    }}
                  >
                    <span className="text-emerald-400"><CheckIcon /></span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Message sent!</h3>
                    <p className="text-[14px] text-slate-500 max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setFormState("idle"); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                    className="text-[13px] text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 flex flex-col gap-5"
                >
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Full name"
                      id="name"
                      value={formData.name}
                      onChange={set("name")}
                      placeholder="alex"
                      required
                      icon={<UserIcon />}
                    />
                    <FormInput
                      label="Email address"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={set("email")}
                      placeholder="alex@example.com"
                      required
                      icon={<EnvelopeIcon />}
                    />
                  </div>

                  {/* Subject chips */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] font-semibold text-slate-400 tracking-wide">
                      Subject
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {SUBJECTS.map((s) => (
                        <button
                          key={s}
                          onClick={() => set("subject")(formData.subject === s ? "" : s)}
                          className="px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 border"
                          style={{
                            background: formData.subject === s ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.03)",
                            borderColor: formData.subject === s ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)",
                            color: formData.subject === s ? "#a78bfa" : "rgba(255,255,255,0.4)",
                            boxShadow: formData.subject === s ? "0 0 0 3px rgba(99,102,241,0.1)" : "none",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <FormTextarea
                    label="Message"
                    id="message"
                    value={formData.message}
                    onChange={set("message")}
                    placeholder="Tell me about your project, role, or just say hello..."
                    required
                  />

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={!isValid || formState === "submitting"}
                    className="group relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-semibold text-white transition-all duration-300 overflow-hidden"
                    style={{
                      background: isValid
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "rgba(255,255,255,0.05)",
                      boxShadow: isValid
                        ? "0 0 0 1px rgba(99,102,241,0.4), 0 8px 32px rgba(99,102,241,0.25)"
                        : "none",
                      color: isValid ? "#fff" : "rgba(255,255,255,0.25)",
                      cursor: isValid ? "pointer" : "not-allowed",
                    }}
                    onMouseEnter={(e) => {
                      if (!isValid) return;
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 0 1px rgba(99,102,241,0.7), 0 12px 40px rgba(99,102,241,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isValid) return;
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 0 1px rgba(99,102,241,0.4), 0 8px 32px rgba(99,102,241,0.25)";
                    }}
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                          <SendIcon />
                        </span>
                        Send message
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-700">
                    No spam, ever. Your info stays private.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — channels + availability */}
          <div className="flex flex-col gap-5">

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl border"
              style={{
                background: "rgba(52,211,153,0.04)",
                borderColor: "rgba(52,211,153,0.2)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-[13px] font-semibold text-emerald-400">Available for work</span>
              </div>
              <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                Currently open to full-time roles and select freelance projects. Especially excited about developer tools, AI products, and high-growth startups.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Full-time", "Remote / Hybrid", "SF Bay Area"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Contact channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/[0.07] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="px-5 py-4 border-b border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.02)" }}>
                <span className="text-[13px] font-semibold text-white">Reach me anywhere</span>
              </div>
              <div className="flex flex-col gap-1 p-3">
                {CONTACT_CHANNELS.map(({ icon, label, value, href, accent, bg, border }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center gap-3.5 px-4 py-3.5 rounded-xl border border-transparent transition-all duration-200"
                    style={{ ["--accent" as never]: accent }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = bg;
                      (e.currentTarget as HTMLElement).style.borderColor = border;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    }}
                  >
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.07] bg-white/[0.03] transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {icon}
                    </span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[12px] text-slate-600">{label}</span>
                      <span className="text-[13px] text-slate-300 font-medium truncate group-hover:text-white transition-colors">
                        {value}
                      </span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-4 h-4 text-slate-700 group-hover:text-slate-400 transition-colors shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response time note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/[0.05] bg-white/[0.02]"
            >
              <span className="text-indigo-400 mt-0.5 shrink-0"><ClockIcon /></span>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                Typical response time is{" "}
                <span className="text-slate-400 font-medium">under 24 hours</span>{" "}
                on weekdays. For urgent matters, LinkedIn DMs are fastest.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}