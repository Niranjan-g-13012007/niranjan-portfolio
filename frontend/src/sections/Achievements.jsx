import { motion } from "framer-motion";
import { HiTrophy } from "react-icons/hi2";
import { HiBadgeCheck, HiExternalLink } from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { achievements, certifications } from "../data/content";

const BG_POSITIONS = [
  { top: "8%", left: "5%" }, { top: "22%", left: "92%" },
  { top: "45%", left: "3%" }, { top: "68%", left: "94%" },
  { top: "88%", left: "8%" },
];

const ACHIEVEMENT_COLORS = {
  gold: { bg: "bg-gold/10", text: "text-gold-dark", border: "hover:border-gold/40", iconBg: "from-gold-dark to-gold-light" },
  red: { bg: "bg-red/10", text: "text-red", border: "hover:border-red/40", iconBg: "from-red to-red-light" },
  blue: { bg: "bg-blue/10", text: "text-blue", border: "hover:border-blue/40", iconBg: "from-blue to-blue-light" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "hover:border-emerald/40", iconBg: "from-emerald to-emerald-light" },
};

function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="group relative flex flex-col h-full rounded-2xl bg-white border border-ink/8 shadow-sm p-6 hover:shadow-lg hover:border-blue/30 transition-all duration-300 overflow-hidden"
      >
        {/* Faint certificate outline watermark */}
        <HiBadgeCheck className="pointer-events-none absolute -bottom-5 -right-5 text-7xl text-blue/[0.06]" />

        <div className="relative flex items-start justify-between mb-4">
          <motion.div
            initial={{ rotate: -18, scale: 0.7 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            whileHover={{ rotate: -8 }}
            transition={{ duration: 0.5, delay: index * 0.07 + 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            className="w-11 h-11 rounded-xl bg-blue/10 flex items-center justify-center shrink-0"
          >
            <HiBadgeCheck className="text-xl text-blue" />
          </motion.div>
          <HiExternalLink className="text-lg text-slate/40 group-hover:text-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>

        <h3 className="relative font-display text-base font-semibold text-ink leading-snug mb-1.5">
          {cert.title}
        </h3>
        <p className="relative text-xs font-mono font-medium text-blue mb-2.5">{cert.issuer}</p>
        <p className="relative text-sm text-slate leading-relaxed">{cert.description}</p>
      </motion.a>
    </motion.div>
  );
}

function AchievementCard({ item, index }) {
  const c = ACHIEVEMENT_COLORS[item.colorKey] || ACHIEVEMENT_COLORS.gold;
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative h-full rounded-2xl bg-ink text-white p-6 sm:p-7 overflow-hidden shadow-lg ${c.border} border border-transparent transition-all duration-300`}
      >
        <div className={`pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br ${c.iconBg} opacity-20 blur-2xl`} />

        <div className="relative flex items-center gap-3 mb-4">
          <motion.div
            initial={{ rotate: -15, scale: 0.6 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: index * 0.09 + 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center shadow-md shrink-0`}
          >
            <HiTrophy className="text-xl text-ink" />
          </motion.div>
          <span className="font-mono text-xs text-white/50">{item.year}</span>
        </div>

        <h3 className="relative font-display text-lg font-semibold mb-1.5 leading-snug">{item.title}</h3>
        <p className={`relative text-sm font-medium mb-2.5 ${c.text}`}>{item.org}</p>
        <p className="relative text-sm text-white/65 leading-relaxed">{item.detail}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden sm:block opacity-[0.07]">
        {BG_POSITIONS.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute text-6xl text-ink"
            style={pos}
            animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 7 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            <HiBadgeCheck />
          </motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="ls ./certifications --honors" title="Certifications & Achievements" />

        {/* Achievements subgroup */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate mb-5 flex items-center gap-2">
              <HiTrophy className="text-gold-dark" /> Achievements
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((item, i) => (
              <AchievementCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Certifications subgroup */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate mb-5 flex items-center gap-2">
              <HiBadgeCheck className="text-blue" /> Certifications
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <CertificateCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
