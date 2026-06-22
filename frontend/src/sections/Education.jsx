import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker, HiExternalLink } from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import { AcademicPattern } from "../components/SectionBackgrounds";
import { education } from "../data/content";

function TimelineNode({ index }) {
  return (
    <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      {/* Pulse rings */}
      <motion.span
        className="absolute inset-0 rounded-2xl border-2 border-gold-dark/40"
        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      />
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: index * 0.25 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-gold-dark shadow-md flex items-center justify-center"
      >
        <HiAcademicCap className="text-xl sm:text-2xl text-gold-dark" />
      </motion.div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <AcademicPattern />
      {/* Floating gradient blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="cat education.json" title="Education" />

        <div className="relative mt-14">
          {/* Animated drawing timeline */}
          <motion.div
            className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-dark via-gold/50 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <div key={edu.institution + edu.degree} className="relative flex gap-5 sm:gap-7">
                <TimelineNode index={i} />

                <motion.a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: i * 0.15 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative flex-1 min-w-0 rounded-2xl bg-white border border-ink/8 shadow-sm p-6 sm:p-7 hover:shadow-xl hover:border-gold/30 transition-shadow duration-300 overflow-hidden mt-1"
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-ink leading-snug">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-slate bg-surface px-3 py-1 rounded-full border border-ink/8">
                        {edu.period}
                      </span>
                      <HiExternalLink className="text-base text-slate/40 group-hover:text-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>

                  <p className="relative text-sm text-slate font-medium mb-2">{edu.degree}</p>

                  <p className="relative flex items-center gap-1.5 text-xs text-slate/70 mb-3">
                    <HiLocationMarker className="text-red-light shrink-0" />
                    {edu.location}
                  </p>

                  <span className="relative font-display font-bold text-lg sm:text-xl text-gradient-blue">
                    {edu.score}
                  </span>
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
