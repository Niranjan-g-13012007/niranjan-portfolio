import { motion } from "framer-motion";
import { HiTrophy } from "react-icons/hi2";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow command="git log --tags" title="Achievements" />

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-10">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="relative flex items-start gap-6">
                  {/* Icon node */}
                  <div className="relative z-10 shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      className="w-[56px] h-[56px] rounded-2xl bg-gradient-to-br from-gold to-gold-light shadow-lg shadow-gold/25 flex items-center justify-center"
                    >
                      <HiTrophy className="text-2xl text-ink" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 sm:max-w-[50%] ${
                      i % 2 === 0 ? "sm:ml-auto sm:pr-14 sm:text-right" : "sm:mr-auto sm:pl-14"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-white border border-ink/8 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300 p-6"
                    >
                      <span className="inline-block font-mono text-xs text-gold font-medium mb-2">
                        {a.year}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink mb-1">{a.title}</h3>
                      <p className="text-sm font-medium text-blue mb-2">{a.org}</p>
                      <p className="text-sm text-slate leading-relaxed">{a.detail}</p>
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
