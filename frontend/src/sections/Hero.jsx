import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FiDownload, FiMail } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import { profile, heroKeywords } from "../data/content";
import Typewriter from "../components/Typewriter";
import { useMouseParallax } from "../hooks/useMouseParallax";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const KEYWORD_POSITIONS = [
  { top: "6%", left: "8%" },
  { top: "14%", left: "78%" },
  { top: "28%", left: "2%" },
  { top: "38%", left: "88%" },
  { top: "52%", left: "10%" },
  { top: "62%", left: "82%" },
  { top: "76%", left: "5%" },
  { top: "84%", left: "75%" },
  { top: "20%", left: "45%" },
  { top: "92%", left: "42%" },
];

export default function Hero({ onOpenResume }) {
  const mouse = useMouseParallax();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-24 overflow-hidden"
    >
      {/* Floating keyword field */}
      <div className="absolute inset-0 pointer-events-none select-none hidden sm:block">
        {heroKeywords.map((kw, i) => (
          <motion.span
            key={kw}
            className="absolute font-mono text-sm md:text-base text-ink/[0.07] font-medium"
            style={KEYWORD_POSITIONS[i % KEYWORD_POSITIONS.length]}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {kw}
          </motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-ink/10 shadow-sm font-mono text-xs text-slate mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for internships
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-slate font-medium mb-2">
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-3"
          >
            <span className="text-gradient-gold">Niranjan G</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate font-medium mb-1">
            {profile.role}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="font-mono text-base sm:text-lg text-blue font-medium h-8 mb-6"
          >
            <Typewriter words={profile.rolesTypewriter} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            {profile.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-medium text-sm shadow-lg shadow-ink/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
              <HiArrowDown className="rotate-[-90deg] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              type="button"
              onClick={() => onOpenResume?.()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-gold-dark text-ink font-medium text-sm hover:bg-gold-dark/10 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              <FiDownload />
              Download Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-ink font-medium text-sm border border-ink/15 hover:border-blue hover:text-blue hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiMail />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative w-[260px] sm:w-[340px] lg:w-[420px]"
            style={{
              transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Ambient glow layers behind image */}
            <div className="absolute -inset-10 rounded-full bg-gold/25 blur-[60px] animate-float-slow" />
            <div className="absolute -inset-6 -translate-x-8 translate-y-6 rounded-full bg-blue/20 blur-[55px] animate-float-slower" />
            <div className="absolute -inset-4 translate-x-10 -translate-y-4 rounded-full bg-red-light/15 blur-[50px] animate-float-slow" />

            {/* Floating bracket accents */}
            <motion.span
              className="absolute -top-6 -left-6 font-mono text-3xl text-gold/40 font-bold"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {"{"}
            </motion.span>
            <motion.span
              className="absolute -bottom-4 -right-2 font-mono text-3xl text-blue/40 font-bold"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              {"}"}
            </motion.span>
            <motion.span
              className="absolute top-1/2 -right-10 font-mono text-2xl text-red-light/50 font-bold"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {"</>"}
            </motion.span>

            {/* Image - no frame, soft mask blend */}
            <motion.img
              src={profileImg}
              alt="Niranjan G"
              className="relative w-full h-auto object-cover"
              style={{
                maskImage:
                  "radial-gradient(ellipse 78% 85% at 50% 42%, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 85% at 50% 42%, black 60%, transparent 100%)",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-slate/60 hover:text-slate transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <HiArrowDown />
      </motion.a>
    </section>
  );
}
