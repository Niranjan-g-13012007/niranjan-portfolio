import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker } from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
import AnimatedCounter from "../components/AnimatedCounter";
import { ParticleField } from "../components/SectionBackgrounds";
import { about, counters, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <ParticleField count={10} color="var(--color-gold)" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="cat about.md" title="About Me" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-10">
          {/* Left: Info card */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="relative rounded-3xl bg-white border border-ink/8 shadow-[0_8px_40px_rgba(15,23,42,0.06)] p-8 sm:p-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-[3rem] rounded-tr-3xl -z-0" />
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="font-mono text-xs text-gold uppercase tracking-widest mb-1">Name</p>
                  <p className="font-display text-2xl font-semibold text-ink">{profile.name}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-gold uppercase tracking-widest mb-1">Role</p>
                  <p className="text-slate font-medium">{profile.role}</p>
                </div>
                <div className="flex items-start gap-3">
                  <HiAcademicCap className="text-blue text-xl mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-gold uppercase tracking-widest mb-1">College</p>
                    <p className="text-slate font-medium">{about.college}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="text-red-light text-xl mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-gold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-slate font-medium">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Description + counters */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={0.2}>
              <p className="text-slate text-lg leading-relaxed mb-10">
                {about.description}
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
              {counters.map((c, i) => (
                <Reveal key={c.label} delay={0.3 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl bg-white border border-ink/8 shadow-sm p-6 text-center hover:shadow-md hover:border-gold/30 transition-all"
                  >
                    <p className="font-display text-3xl sm:text-4xl font-bold text-gradient-blue mb-1">
                      <AnimatedCounter
                        value={c.value}
                        suffix={c.suffix}
                        decimals={c.decimals || 0}
                      />
                    </p>
                    <p className="text-xs sm:text-sm text-slate font-medium">{c.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
