import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiCplusplus, SiPython, SiHtml5, SiReact,
  SiNodedotjs, SiFlask, SiMysql, SiMongodb, SiGit, SiGithub,
} from 'react-icons/si';
import { FiCode, FiWifi, FiLayers, FiTerminal } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' } }),
};

const skillCategories = [
  {
    name: 'Programming Languages',
    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
    skills: [
      { name: 'C', icon: FiCode, level: 85 },
      { name: 'C++', icon: SiCplusplus, level: 80 },
      { name: 'Java', icon: FiTerminal, level: 78 },
      { name: 'Python', icon: SiPython, level: 88 },
    ],
  },
  {
    name: 'Frontend',
    color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
    skills: [
      { name: 'HTML', icon: SiHtml5, level: 92 },
      { name: 'CSS', icon: FiLayers, level: 85 },
      { name: 'React', icon: SiReact, level: 82 },
    ],
  },
  {
    name: 'Backend',
    color: '#0EA5E9', bg: '#F0F9FF', border: '#BAE6FD',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 78 },
      { name: 'Flask', icon: SiFlask, level: 75 },
    ],
  },
  {
    name: 'Database',
    color: '#10B981', bg: '#F0FDF4', border: '#A7F3D0',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 78 },
    ],
  },
  {
    name: 'Tools & Other',
    color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
      { name: 'AI Tools', icon: BsRobot, level: 80 },
      { name: 'IoT', icon: FiWifi, level: 75 },
    ],
  },
];

const SkillCard = ({ skill, color, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={delay}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '18px 12px', borderRadius: 18, border: '1px solid #E2E8F0',
        background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        cursor: 'default', transition: 'all 0.25s ease',
      }}
      whileHover={{ y: -4, boxShadow: `0 12px 24px rgba(0,0,0,0.09)`, borderColor: color }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14, marginBottom: 10,
        background: `${color}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={24} color={color} />
      </div>
      <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem', color: '#0F172A', marginBottom: 8, textAlign: 'center' }}>
        {skill.name}
      </p>
      {/* Progress bar */}
      <div style={{ width: '100%', height: 4, background: '#F1F5F9', borderRadius: 9999, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay * 0.06 + 0.3, ease: 'easeOut' }}
          style={{
            height: '100%', borderRadius: 9999,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
      <p style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#94A3B8', marginTop: 4, fontWeight: 500 }}>
        {skill.level}%
      </p>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" style={{ background: '#FFFFFF' }} className="section">
      <div className="container" ref={ref}>

        {/* Header */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p className="section-badge">Technical Skills</p>
          <h2 className="section-title">
            Tools & technologies<br />
            <span className="gradient-text">I work with</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={catIdx}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: cat.bg, border: `1px solid ${cat.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.7rem', color: cat.color,
                  fontFamily: 'Inter',
                }}>
                  {cat.name[0]}
                </div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>
                  {cat.name}
                </h3>
                <div style={{ flex: 1, height: 1, background: '#F1F5F9' }} />
              </div>

              {/* Skill cards grid */}
              <motion.div
                className="skill-grid"
                variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {cat.skills.map((skill, idx) => (
                  <SkillCard key={skill.name} skill={skill} color={cat.color} delay={catIdx * 2 + idx} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
