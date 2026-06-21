import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { navLinks, profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 bg-ink text-white overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-56 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Animated golden divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mb-12 origin-center"
        />

        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-display text-2xl font-semibold mb-2">
              {profile.name}
              <span className="text-gold">.</span>
            </p>
            <p className="text-white/50 text-sm font-mono">MERN Stack Developer</p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-white/60 hover:text-gold transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: profile.github },
                { icon: FaLinkedin, href: profile.linkedin },
                { icon: FiMail, href: `mailto:${profile.email}` },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, backgroundColor: "#D4AF37", color: "#0F172A" }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors"
                  >
                    <Icon className="text-base" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Niranjan G. All rights reserved.</p>
          <p className="font-mono">Designed & built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
