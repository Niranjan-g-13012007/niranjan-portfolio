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
import { GiStack } from "react-icons/gi";
import SectionEyebrow from "../components/SectionEyebrow";
import Reveal from "../components/Reveal";
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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow command="ls ./skills --all" title="Skills & Expertise" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.08}>
              <div className="h-full rounded-2xl bg-white border border-ink/8 shadow-sm p-6 sm:p-7 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                  <GiStack className="text-gold text-lg" />
                  <h3 className="font-display font-semibold text-lg text-ink">{cat.title}</h3>
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
                        whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(212,175,55,0.18)" }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface border border-ink/8 text-sm font-medium text-ink hover:border-gold/40 transition-colors duration-200"
                      >
                        {Icon && <Icon className="text-blue text-base" />}
                        {skill}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
