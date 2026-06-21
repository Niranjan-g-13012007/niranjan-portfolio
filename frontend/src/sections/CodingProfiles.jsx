import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { SymbolField } from "../components/SectionBackgrounds";
import { codingProfiles } from "../data/content";

const ICONS = {
  github: FaGithub,
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
  linkedin: FaLinkedin,
  codeforces: SiCodeforces,
  codolio: FaCodepen,
};

const ACCENTS = {
  github: { bg: "bg-ink/5", icon: "text-ink", ring: "hover:border-ink/30" },
  leetcode: { bg: "bg-orange/10", icon: "text-orange", ring: "hover:border-orange/40" },
  gfg: { bg: "bg-emerald/10", icon: "text-emerald", ring: "hover:border-emerald/40" },
  linkedin: { bg: "bg-blue/10", icon: "text-blue", ring: "hover:border-blue/40" },
  codeforces: { bg: "bg-red/10", icon: "text-red", ring: "hover:border-red/40" },
  codolio: { bg: "bg-purple/10", icon: "text-purple", ring: "hover:border-purple/40" },
};

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative py-24 sm:py-32 overflow-hidden">
      <SymbolField symbols={["{ }", "< >", "( )", "[ ]"]} color="var(--color-ink)" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="git remote -v" title="Developer Profiles" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {codingProfiles.map((p, i) => {
            const Icon = ICONS[p.icon];
            const accent = ACCENTS[p.icon];
            return (
              <Reveal key={p.platform} delay={i * 0.08}>
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative block h-full rounded-2xl bg-white border border-ink/8 shadow-sm p-7 overflow-hidden hover:shadow-xl ${accent.ring} transition-shadow duration-300`}
                >
                  {/* Shine sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

                  {/* Floating icon ghost */}
                  <motion.div
                    className={`pointer-events-none absolute -bottom-4 -right-4 text-7xl ${accent.icon} opacity-[0.06]`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon />
                  </motion.div>

                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${accent.bg} flex items-center justify-center`}>
                      <Icon className={`text-2xl ${accent.icon}`} />
                    </div>
                    <HiArrowUpRight className="text-xl text-slate/40 group-hover:text-gold-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="relative font-display text-xl font-semibold text-ink mb-1.5">{p.platform}</h3>
                  <p className={`relative text-sm font-medium mb-3 ${accent.icon}`}>{p.description}</p>
                  <p className="relative text-sm text-slate leading-relaxed">{p.summary}</p>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
