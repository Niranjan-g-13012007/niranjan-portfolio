import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { codingProfiles } from "../data/content";

const ICONS = {
  github: FaGithub,
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
  linkedin: FaLinkedin,
};

const ACCENTS = {
  github: { bg: "bg-ink/5", icon: "text-ink" },
  leetcode: { bg: "bg-gold/10", icon: "text-gold" },
  gfg: { bg: "bg-blue/10", icon: "text-blue" },
  linkedin: { bg: "bg-blue/10", icon: "text-blue" },
};

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow command="git remote -v" title="Coding Profiles" />

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {codingProfiles.map((p, i) => {
            const Icon = ICONS[p.icon];
            const accent = ACCENTS[p.icon];
            return (
              <Reveal key={p.platform} delay={i * 0.1}>
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative block rounded-2xl bg-white border border-ink/8 shadow-sm p-7 sm:p-8 overflow-hidden hover:shadow-xl hover:border-gold/30 transition-shadow duration-300"
                >
                  {/* Shine sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${accent.bg} flex items-center justify-center`}>
                      <Icon className={`text-2xl ${accent.icon}`} />
                    </div>
                    <HiArrowUpRight className="text-xl text-slate/40 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink mb-1.5">{p.platform}</h3>
                  <p className="text-sm font-medium text-gold mb-3">{p.description}</p>
                  <p className="text-sm text-slate leading-relaxed">{p.summary}</p>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
