import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker, HiExternalLink } from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { AcademicPattern } from "../components/SectionBackgrounds";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <AcademicPattern />
      {/* Floating gradient blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="cat education.json" title="Education" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {education.map((edu, i) => (
            <Reveal key={edu.institution + edu.degree} delay={i * 0.1}>
              <motion.a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col h-full rounded-2xl bg-white border border-ink/8 shadow-sm p-7 hover:shadow-xl hover:border-gold/30 transition-all duration-300 overflow-hidden"
              >
                <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <HiAcademicCap className="text-xl text-gold-dark" />
                  </div>
                  <HiExternalLink className="text-lg text-slate/40 group-hover:text-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <span className="relative font-mono text-xs text-slate bg-surface w-fit px-3 py-1 rounded-full border border-ink/8 mb-3">
                  {edu.period}
                </span>

                <h3 className="relative font-display text-lg font-semibold text-ink mb-1.5 leading-snug">
                  {edu.institution}
                </h3>
                <p className="relative text-sm text-slate font-medium mb-1.5">{edu.degree}</p>

                <p className="relative flex items-center gap-1.5 text-xs text-slate/70 mb-4">
                  <HiLocationMarker className="text-red-light shrink-0" />
                  {edu.location}
                </p>

                <span className="relative mt-auto font-display font-bold text-xl text-gradient-blue">
                  {edu.score}
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
