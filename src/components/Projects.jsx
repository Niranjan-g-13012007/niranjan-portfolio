import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiZap, FiMap, FiUsers, FiBookOpen } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' } }),
};

const projects = [
  {
    id: 1, title: 'Smart Home Energy Monitoring System',
    description: 'IoT-based smart energy monitoring platform with real-time tracking, forecasting, billing insights, and remote control capabilities.',
    tech: ['ESP32', 'IoT', 'Dashboard', 'Analytics', 'Python'],
    icon: FiZap, color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', badge: 'IoT',
    github: 'https://github.com/Niranjan-g-13012007', demo: '#',
  },
  {
    id: 2, title: 'Medi Route',
    description: 'Smart ambulance traffic control system using GPS, IoT automation, and emergency response coordination to reduce response times.',
    tech: ['IoT', 'GPS', 'Real-Time Dashboard', 'Embedded Systems'],
    icon: FiMap, color: '#EF4444', bg: '#FEF2F2', border: '#FECACA', badge: 'IoT + GPS',
    github: 'https://github.com/Niranjan-g-13012007', demo: '#',
  },
  {
    id: 3, title: 'Civic Connect',
    description: 'Citizen issue reporting and resolution platform for civic administration enabling transparent tracking of infrastructure problems.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    icon: FiUsers, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', badge: 'Full Stack',
    github: 'https://github.com/Niranjan-g-13012007', demo: '#',
  },
  {
    id: 4, title: 'Study Mate',
    description: 'AI-powered PDF question-answering platform using IBM Granite and semantic search to get instant intelligent answers from academic PDFs.',
    tech: ['Streamlit', 'IBM Granite', 'FAISS', 'AI', 'Python'],
    icon: FiBookOpen, color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', badge: 'AI / LLM',
    github: 'https://github.com/Niranjan-g-13012007', demo: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 24, border: `1px solid ${hovered ? project.color : '#E2E8F0'}`,
        background: 'white', overflow: 'hidden',
        boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.1)` : '0 2px 12px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Top color strip */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, ${project.color}66)` }} />

      {/* Image area */}
      <div style={{
        height: 160, background: project.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 20, background: 'white',
          border: `1px solid ${project.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}>
          <Icon size={28} color={project.color} />
        </div>
        <span style={{
          position: 'absolute', top: 12, right: 12,
          padding: '4px 12px', borderRadius: 9999,
          background: project.color, color: 'white',
          fontFamily: 'Inter', fontWeight: 600, fontSize: '0.75rem',
        }}>
          {project.badge}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: 'Inter', fontWeight: 700, fontSize: '1.025rem',
          color: '#0F172A', marginBottom: 10, lineHeight: 1.35,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B',
          lineHeight: 1.7, marginBottom: 14, flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '4px 10px', borderRadius: 8,
              background: project.bg, color: project.color,
              border: `1px solid ${project.border}`,
              fontFamily: 'Inter', fontWeight: 500, fontSize: '0.75rem',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, padding: '10px 0', borderRadius: 12,
              fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem',
              color: '#0F172A', background: '#F8FAFC', border: '1px solid #E2E8F0',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#F1F5F9'}
            onMouseLeave={e => e.currentTarget.style.background = '#F8FAFC'}
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6, padding: '10px 0', borderRadius: 12,
              fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem',
              color: 'white', background: project.color, textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" style={{ background: '#F8FAFC' }} className="section">
      <div className="container" ref={ref}>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p className="section-badge">Featured Projects</p>
          <h2 className="section-title">
            Things I've built &<br />
            <span className="gradient-text">shipped</span>
          </h2>
          <p className="section-subtitle">A curated selection of projects spanning IoT, AI, and full-stack development.</p>
        </motion.div>

        <motion.div
          className="grid-4"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
        >
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={5}
          style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://github.com/Niranjan-g-13012007" target="_blank" rel="noopener noreferrer"
            className="btn-secondary" style={{ display: 'inline-flex', gap: 8 }}>
            <FiGithub size={16} /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
