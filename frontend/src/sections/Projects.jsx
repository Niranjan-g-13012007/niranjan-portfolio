import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { ConnectionLines } from "../components/SectionBackgrounds";
import { projects, profile } from "../data/content";

const ACCENT_STYLES = {
  gold: {
    gradient: "from-gold/25 via-gold-light/15 to-transparent",
    chip: "bg-gold/15 text-[#8a6d1f] border-gold/30",
    glow: "bg-gold/20",
  },
  blue: {
    gradient: "from-blue/20 via-blue-light/15 to-transparent",
    chip: "bg-blue/10 text-blue border-blue/25",
    glow: "bg-blue/20",
  },
  red: {
    gradient: "from-red-light/20 via-red-light/10 to-transparent",
    chip: "bg-red-light/15 text-red border-red-light/30",
    glow: "bg-red-light/20",
  },
};

function ProjectVisual({ title, accent }) {
  const style = ACCENT_STYLES[accent];
  return (
    <div
      className={`relative h-44 sm:h-48 rounded-t-2xl bg-gradient-to-br ${style.gradient} bg-surface overflow-hidden flex items-center justify-center`}
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${style.glow} blur-3xl`} />
      <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${style.glow} blur-3xl`} />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <span className="relative font-display text-3xl sm:text-4xl font-bold text-ink/15 select-none px-6 text-center leading-tight">
        {title}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <ConnectionLines color="var(--color-blue)" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="npm run build:projects" title="Featured Projects" />

        <div className="grid sm:grid-cols-2 gap-7 mt-10">
          {projects.map((proj, i) => {
            const style = ACCENT_STYLES[proj.accent];
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full flex flex-col rounded-2xl bg-white border border-ink/8 shadow-sm hover:shadow-xl hover:border-gold/30 transition-shadow duration-300 overflow-hidden"
                >
                  <ProjectVisual title={proj.title} accent={proj.accent} />

                  <div className="flex flex-col flex-1 p-6 sm:p-7">
                    <h3 className="font-display text-xl font-semibold text-ink mb-2.5">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed mb-4">{proj.description}</p>

                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                      {proj.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-slate">
                          <HiCheckCircle className="text-blue text-sm mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${style.chip}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-gold hover:text-ink transition-all duration-300"
                      >
                        <FiGithub /> GitHub
                      </a>
                      {proj.demo ? (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-2 border-blue text-blue text-sm font-medium hover:bg-blue/10 transition-all duration-300"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      ) : (
                        <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-ink/10 text-slate/50 text-sm font-medium cursor-not-allowed">
                          <FiExternalLink /> Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="flex justify-center mt-14">
          <MagneticButton
            as="a"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.3}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-white font-medium shadow-lg shadow-ink/15 hover:shadow-xl transition-shadow duration-300"
          >
            More Projects
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiArrowRight className="text-lg group-hover:translate-x-0.5 transition-transform" />
            </motion.span>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
