import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { navLinks } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTION_IDS = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const handleResumeClick = () => {
    setMobileOpen(false);
    onOpenResume?.();
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,23,42,0.06)] border-b border-ink/5"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center lg:justify-between">
        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 font-medium text-[13px] xl:text-sm mx-auto">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 xl:px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${
                    isActive ? "text-ink" : "text-slate hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gold/15 border border-gold/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-2xl text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-ink/5"
          >
            <ul className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                        isActive ? "bg-gold/15 text-ink" : "text-slate hover:bg-surface"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <button
                  onClick={handleResumeClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ink text-white font-medium"
                >
                  <FiEye /> Preview Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
