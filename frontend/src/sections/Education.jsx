import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow command="cat education.json" title="Education" />

        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-blue/20 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <Reveal key={edu.institution + edu.degree} delay={i * 0.12}>
                <div className="relative flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative z-10 shrink-0 w-[56px] h-[56px] rounded-2xl bg-white border-2 border-gold shadow-sm flex items-center justify-center"
                  >
                    <HiAcademicCap className="text-2xl text-gold" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    className="flex-1 rounded-2xl bg-white border border-ink/8 shadow-sm hover:shadow-lg hover:border-blue/25 transition-all duration-300 p-6 sm:p-7"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-xs text-slate bg-surface px-3 py-1 rounded-full border border-ink/8">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate font-medium mb-3">{edu.degree}</p>
                    <span className="inline-flex items-center gap-1.5 font-display font-bold text-lg text-gradient-blue">
                      {edu.score}
                    </span>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
