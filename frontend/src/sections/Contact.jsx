import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

const CONTACT_ITEMS = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "niranjan-gobinathan", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "Niranjan-g-13012007", href: profile.github },
  { icon: FiMapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Frontend-only form: no backend wired up yet.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 2600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow command="curl -X POST /contact" title="Let's Connect" align="center" />
        <Reveal delay={0.1} className="text-center -mt-2 mb-12">
          <p className="text-slate max-w-xl mx-auto">
            Have an opportunity, project, or just want to talk tech? My inbox is open.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact info */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-ink text-white p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gold/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-blue/15 blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-white/60 text-sm mb-8">
                  Reach out directly or use the form — happy to discuss roles, collaborations, or ideas.
                </p>
                <div className="space-y-5">
                  {CONTACT_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-4 group">
                        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors duration-300 shrink-0">
                          <Icon className="text-lg" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-wider text-white/40 font-mono">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium truncate group-hover:text-gold-light transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl bg-white border border-ink/8 shadow-sm p-8 sm:p-10 relative"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mb-4"
                    >
                      <FiCheck className="text-3xl text-blue" />
                    </motion.div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-1.5">Message Ready</h3>
                    <p className="text-sm text-slate">
                      Thanks for reaching out — connect a backend or email link to send this live.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl bg-surface border-2 outline-none transition-all duration-200 text-ink placeholder:text-slate/40 ${
                            focused === "name" ? "border-gold shadow-[0_0_0_4px_rgba(212,175,55,0.12)]" : "border-transparent"
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-surface border-2 outline-none transition-all duration-200 text-ink placeholder:text-slate/40 ${
                            focused === "email" ? "border-gold shadow-[0_0_0_4px_rgba(212,175,55,0.12)]" : "border-transparent"
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about the opportunity or idea..."
                        className={`w-full px-4 py-3 rounded-xl bg-surface border-2 outline-none transition-all duration-200 text-ink placeholder:text-slate/40 resize-none ${
                          focused === "message" ? "border-gold shadow-[0_0_0_4px_rgba(212,175,55,0.12)]" : "border-transparent"
                        }`}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-white font-medium hover:bg-gold hover:text-ink transition-colors duration-300"
                    >
                      Send Message <FiSend />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
