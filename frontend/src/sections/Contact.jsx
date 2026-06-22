import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionEyebrow from "../components/SectionEyebrow";
import { profile } from "../data/content";
import emailjs from "@emailjs/browser";

const CONTACT_ITEMS = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, colorKey: "blue" },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, colorKey: "emerald" },
  { icon: FaLinkedin, label: "LinkedIn", value: "niranjan-gobinathan", href: profile.linkedin, colorKey: "blue" },
  { icon: FaGithub, label: "GitHub", value: "Niranjan-g-13012007", href: profile.github, colorKey: "purple" },
  { icon: FiMapPin, label: "Location", value: profile.location, href: null, colorKey: "red" },
];

const ITEM_COLORS = {
  blue: "group-hover:bg-blue",
  emerald: "group-hover:bg-emerald",
  purple: "group-hover:bg-purple",
  red: "group-hover:bg-red",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!form.name || !form.email || !form.message) return;

      try {
        await emailjs.send(
        "service_7tugx6x",   //service id
        "template_7vcis6p",   //template id
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "B71fn5bJZHKJr314H"   //public key
      );

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      },7000);

    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue/10 blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-red-light/8 blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="curl -X POST /contact" title="Let's Connect" align="center" />

        {/* Memorable centered CTA with word-by-word reveal and glow */}
        <div className="relative text-center -mt-2 mb-16 py-6">
          {/* Floating particles around the CTA */}
          {[
            { top: "10%", left: "8%" }, { top: "70%", left: "5%" },
            { top: "15%", left: "92%" }, { top: "75%", left: "94%" },
            { top: "0%", left: "50%" },
          ].map((pos, i) => (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-gold-dark hidden sm:block"
              style={pos}
              animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}

          <h3 className="relative font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight max-w-3xl mx-auto leading-tight">
            {"Let's Build Something Meaningful Together".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-[0.28em] ${word === "Meaningful" ? "text-gradient-gold" : ""}`}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-slate max-w-xl mx-auto mt-4">
              Have an opportunity, project, or just want to talk tech? My inbox is open.
            </p>
          </motion.div>

          {/* Soft glow highlight behind the CTA */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gold/10 blur-[80px] -z-10 pointer-events-none" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full rounded-3xl bg-ink text-white p-8 sm:p-10 relative overflow-hidden"
            >
              <motion.div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gold/15 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-blue/15 blur-3xl" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-white/60 text-sm mb-8">
                  Reach out directly or use the form — happy to discuss roles, collaborations, or ideas.
                </p>
                <div className="space-y-5">
                  {CONTACT_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const hoverBg = ITEM_COLORS[item.colorKey];
                    const content = (
                      <motion.div
                        className="flex items-center gap-4 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:text-ink transition-colors duration-300 shrink-0 ${hoverBg}`}>
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
                      </motion.div>
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
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
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
                    <h3 className="font-display text-xl font-semibold text-ink mb-1.5">Message Sent Successfully</h3>
                    <p className="text-sm text-slate">
                      Thank you for reaching out. I'll get back to you soon.
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
                            focused === "name" ? "border-gold-dark shadow-[0_0_0_4px_rgba(184,134,11,0.12)]" : "border-transparent"
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
                            focused === "email" ? "border-gold-dark shadow-[0_0_0_4px_rgba(184,134,11,0.12)]" : "border-transparent"
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
                          focused === "message" ? "border-gold-dark shadow-[0_0_0_4px_rgba(184,134,11,0.12)]" : "border-transparent"
                        }`}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-white font-medium hover:bg-gold-dark transition-colors duration-300"
                    >
                      Send Message <FiSend />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
