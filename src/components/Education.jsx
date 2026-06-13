import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' } }),
};

const educationData = [
  {
    id: 1, level: 'Undergraduate', period: '2022 – 2026',
    degree: 'B.Tech Information Technology',
    institution: 'Kongu Engineering College',
    score: 'CGPA: 9.34', icon: FiBook, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
    highlights: ['Top 5% of the department', 'Merit Scholarship Awardee', 'IEEE & Hackathon participant'],
  },
  {
    id: 2, level: 'Higher Secondary (XII)', period: '2020 – 2022',
    degree: 'Higher Secondary Education',
    institution: 'Tamil Nadu State Board',
    score: '84.6%', icon: FiAward, color: '#10B981', bg: '#F0FDF4', border: '#A7F3D0',
    highlights: ['Science stream', 'Mathematics & Computer Science focus'],
  },
  {
    id: 3, level: 'Secondary (X)', period: '2019 – 2020',
    degree: 'Secondary School Education',
    institution: 'Tamil Nadu State Board',
    score: '68.4%', icon: FiBook, color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A',
    highlights: ['Strong foundation in Sciences', 'Active in extracurricular activities'],
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" style={{ background: '#F8FAFC' }} className="section">
      <div className="container" ref={ref}>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p className="section-badge">Education</p>
          <h2 className="section-title">
            Academic<br />
            <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {educationData.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.id}
                initial="hidden" animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp} custom={i}
              >
                <motion.div
                  style={{
                    background: 'white', borderRadius: 24, padding: 28,
                    border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ y: -3, boxShadow: `0 12px 28px rgba(0,0,0,0.08)`, borderColor: edu.color }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                    {/* Icon */}
                    <div style={{
                      width: 48, height: 48, borderRadius: 16, flexShrink: 0,
                      background: edu.bg, border: `1px solid ${edu.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} color={edu.color} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                        <span style={{
                          padding: '3px 12px', borderRadius: 9999,
                          background: edu.bg, color: edu.color, border: `1px solid ${edu.border}`,
                          fontFamily: 'Inter', fontWeight: 600, fontSize: '0.75rem',
                        }}>
                          {edu.level}
                        </span>
                        <span style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>
                          {edu.period}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: 4 }}>
                        {edu.degree}
                      </h3>
                      <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.875rem', color: '#64748B', marginBottom: 12 }}>
                        {edu.institution}
                      </p>

                      {/* Score chip */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        padding: '6px 14px', borderRadius: 10, marginBottom: 14,
                        background: edu.bg, border: `1px solid ${edu.border}`,
                      }}>
                        <FiAward size={13} color={edu.color} />
                        <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.875rem', color: edu.color }}>
                          {edu.score}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {edu.highlights.map(h => (
                          <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: edu.color, flexShrink: 0 }} />
                            <span style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#64748B' }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
