import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiEye, FiFileText, FiUser, FiBriefcase, FiCode, FiAward } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

const highlights = [
  { icon: FiUser, label: 'Profile', value: 'IT Student & Developer', color: '#2563EB' },
  { icon: FiBriefcase, label: 'Experience', value: 'Projects & Internships', color: '#10B981' },
  { icon: FiCode, label: 'Tech Stack', value: 'React, Node, Python, IoT', color: '#7C3AED' },
  { icon: FiAward, label: 'CGPA', value: '9.34 / 10.0', color: '#F59E0B' },
];

const Resume = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" style={{ background: '#FFFFFF' }} className="section">
      <div className="container" ref={ref}>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p className="section-badge">Resume</p>
          <h2 className="section-title">
            My professional<br />
            <span className="gradient-text">resume</span>
          </h2>
          <p className="section-subtitle">A snapshot of my skills, experience, and academic achievements.</p>
        </motion.div>

        {/* Card */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={1}
          style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{
            borderRadius: 28, border: '1px solid #E2E8F0',
            background: 'white', overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}>
            {/* Top strip */}
            <div style={{ height: 6, background: 'linear-gradient(90deg, #2563EB, #1D4ED8, #3B82F6)' }} />

            <div style={{ padding: 36 }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 20,
                  background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                  border: '1px solid #BFDBFE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FiFileText size={28} color="#2563EB" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.15rem', color: '#0F172A', margin: 0 }}>
                    Niranjan Gobinathan
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B', margin: '4px 0' }}>
                    B.Tech Information Technology · Kongu Engineering College
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399' }} />
                    <span style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: '#10B981', fontWeight: 500 }}>
                      Available for opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28,
              }}>
                {highlights.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: 14, borderRadius: 14, background: '#F8FAFC', border: '1px solid #F1F5F9',
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: `${color}18`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={16} color={color} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500, margin: 0 }}>{label}</p>
                      <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#0F172A', fontWeight: 600, margin: 0 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
                <a href="/resume.pdf" download className="btn-primary" style={{ width: '100%', padding: '14px 0' }}>
                  <FiDownload size={16} /> Download Resume
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                  className="btn-secondary" style={{ width: '100%', padding: '14px 0' }}>
                  <FiEye size={16} /> Preview Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={2}
          style={{ textAlign: 'center', marginTop: 20, fontFamily: 'Inter', fontSize: '0.8rem', color: '#94A3B8' }}>
          Resume updated as of June 2026 · PDF format
        </motion.p>
      </div>
    </section>
  );
};

export default Resume;
