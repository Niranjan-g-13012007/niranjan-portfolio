import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaGithub, FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiStreamlit,
} from "react-icons/si";
import { TbBinaryTree, TbApi } from "react-icons/tb";
import { VscSymbolStructure, VscVscode } from "react-icons/vsc";
import {
  HiCode, HiServer, HiDatabase, HiTerminal, HiCog, HiLightningBolt,
} from "react-icons/hi";
import SectionEyebrow from "../components/SectionEyebrow";
import { skillCategories } from "../data/content";

const ICONS = {
  Java: FaJava,
  Python: FaPython,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  "React.js": FaReact,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": VscVscode,
  Streamlit: SiStreamlit,
  DSA: TbBinaryTree,
  OOP: VscSymbolStructure,
  DBMS: FaDatabase,
  "REST APIs": TbApi,
};

// Category icon, used for the card header badge
const CATEGORY_ICONS = {
  Frontend: HiCode,
  Backend: HiServer,
  Database: HiDatabase,
  Languages: HiTerminal,
  Tools: HiCog,
  "Core Concepts": HiLightningBolt,
};

// Tailwind-safe explicit class maps per color key (avoids dynamic class string pitfalls)
const COLOR_STYLES = {
  blue: {
    text: "text-blue",
    bg: "bg-blue/10",
    border: "border-blue/30",
    glow: "shadow-blue/20",
    bar: "from-blue to-blue-light",
    chipHover: "hover:border-blue/40 hover:bg-blue/5",
    dot: "bg-blue",
  },
  red: {
    text: "text-red",
    bg: "bg-red/10",
    border: "border-red/30",
    glow: "shadow-red/20",
    bar: "from-red to-red-light",
    chipHover: "hover:border-red/40 hover:bg-red/5",
    dot: "bg-red",
  },
  gold: {
    text: "text-gold-dark",
    bg: "bg-gold/10",
    border: "border-gold/30",
    glow: "shadow-gold/20",
    bar: "from-gold-dark to-gold-light",
    chipHover: "hover:border-gold/40 hover:bg-gold/5",
    dot: "bg-gold",
  },
  purple: {
    text: "text-purple",
    bg: "bg-purple/10",
    border: "border-purple/30",
    glow: "shadow-purple/20",
    bar: "from-purple to-purple-light",
    chipHover: "hover:border-purple/40 hover:bg-purple/5",
    dot: "bg-purple",
  },
  emerald: {
    text: "text-emerald",
    bg: "bg-emerald/10",
    border: "border-emerald/30",
    glow: "shadow-emerald/20",
    bar: "from-emerald to-emerald-light",
    chipHover: "hover:border-emerald/40 hover:bg-emerald/5",
    dot: "bg-emerald",
  },
  orange: {
    text: "text-orange",
    bg: "bg-orange/10",
    border: "border-orange/30",
    glow: "shadow-orange/20",
    bar: "from-orange to-orange-light",
    chipHover: "hover:border-orange/40 hover:bg-orange/5",
    dot: "bg-orange",
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// Floating background icons unique to this section
const BG_ICONS = [FaReact, FaNodeJs, SiMongodb, FaPython, FaJava, SiJavascript, FaGitAlt, HiDatabase];
const BG_POSITIONS = [
  { top: "6%", left: "4%" }, { top: "14%", left: "92%" },
  { top: "32%", left: "2%" }, { top: "40%", left: "96%" },
  { top: "58%", left: "5%" }, { top: "68%", left: "93%" },
  { top: "84%", left: "8%" }, { top: "90%", left: "90%" },
];

function SkillCard({ cat, index }) {
  const style = COLOR_STYLES[cat.colorKey] || COLOR_STYLES.blue;
  const CatIcon = CATEGORY_ICONS[cat.title] || HiCode;
  // Decorative depth meter — illustrative breadth indicator, not a literal certification score
  const depthPct = 78 + (index % 3) * 6;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.92, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative h-full rounded-2xl bg-white border border-ink/8 shadow-sm p-6 sm:p-7 overflow-hidden hover:shadow-xl ${style.glow} transition-shadow duration-300`}
      >
        {/* Rotating gradient glow on hover */}
        <motion.div
          className={`pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full ${style.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl ${style.bg} flex items-center justify-center`}>
                <CatIcon className={`text-xl ${style.text}`} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink">{cat.title}</h3>
            </div>
            <span className={`w-2 h-2 rounded-full ${style.dot} animate-pulse`} />
          </div>

          {/* Decorative depth bar */}
          <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden mb-5">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${style.bar}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${depthPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap gap-2.5"
          >
            {cat.skills.map((skill) => {
              const Icon = ICONS[skill];
              return (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface border border-ink/8 text-sm font-medium text-ink transition-colors duration-200 ${style.chipHover}`}
                >
                  {Icon && <Icon className={`text-base ${style.text}`} />}
                  {skill}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Floating technology icons, very low opacity */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block opacity-[0.08]">
        {BG_ICONS.map((Icon, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl text-ink"
            style={BG_POSITIONS[i]}
            animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 7 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            <Icon />
          </motion.span>
        ))}
      </div>
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionEyebrow command="ls ./skills --all" title="Skills & Expertise" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((cat, ci) => (
            <SkillCard key={cat.title} cat={cat} index={ci} />
          ))}
        </div>
      </div>
    </section>
  );
}
