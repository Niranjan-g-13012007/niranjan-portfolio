import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiCpu, FiCloud, FiZap, FiAward, FiStar, FiBriefcase } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

const interests = [
  { icon: FiCpu, label: 'Full Stack Development' },
  { icon: FiZap, label: 'Artificial Intelligence' },
  { icon: FiBriefcase, label: 'IoT Systems' },
  { icon: FiCloud, label: 'Cloud Technologies' },
  { icon: FiStar, label: 'Problem Solving' },
  { icon: FiBook, label: 'Database Design' },
];

const stats = [
  { value: '9.34', label: 'CGPA', color: '#2563EB', bg: '#EFF6FF', icon: FiAward },
  { value: '4+', label: 'Projects', color: '#10B981', bg: '#F0FDF4', icon: FiCpu },
  { value: '4+', label: 'Achievements', color: '#F59E0B', bg: '#FFFBEB', icon: FiStar },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ background: '#F8FAFC' }} className="section">
      <div className="container" ref={ref}>

        {/* Header */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p className="section-badge">About Me</p>
          <h2 className="section-title">
            Passionate about technology,<br />
            <span className="gradient-text">driven by impact</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid-2" style={{ marginBottom: 48, alignItems: 'start' }}>

          {/* Left — Bio card */}
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={1}>
            <div style={{
              background: 'white', borderRadius: 24, padding: 32,
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9',
            }}>
              {/* Institution */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 16, flexShrink: 0,
                  background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FiBook size={22} color="#2563EB" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: 2 }}>
                    B.Tech Information Technology
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.875rem', color: '#2563EB', marginBottom: 2 }}>
                    Kongu Engineering College
                  </p>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#64748B' }}>2022 – 2026 · CGPA: 9.34</p>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: 12 }}>
                I am a final-year B.Tech Information Technology student at Kongu Engineering College, driven by a deep
                passion for creating technology that makes a difference. With a strong foundation in full-stack development,
                I enjoy transforming complex problems into elegant digital solutions.
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#475569', lineHeight: 1.8 }}>
                My academic journey has been marked by a CGPA of 9.34, multiple hackathon wins, and projects that bridge
                the gap between Artificial Intelligence, IoT, and real-world applications.
              </p>
            </div>
          </motion.div>

          {/* Right — Interests + quick facts */}
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={2}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            <div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: 16 }}>
                Areas of Interest
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {interests.map(({ icon: Icon, label }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 16px', borderRadius: 12, border: '1px solid #E2E8F0',
                    background: '#F8FAFC', fontFamily: 'Inter', fontWeight: 500,
                    fontSize: '0.875rem', color: '#334155',
                  }}>
                    <Icon size={14} color="#2563EB" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div style={{
              background: 'white', borderRadius: 20, padding: 24,
              border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}>
              <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.95rem', color: '#0F172A', marginBottom: 16 }}>Quick Facts</h4>
              {[
                { label: 'Degree', value: 'B.Tech Information Technology' },
                { label: 'Institution', value: 'Kongu Engineering College' },
                { label: 'CGPA', value: '9.34 / 10' },
                { label: 'Batch', value: '2022 – 2026' },
                { label: 'Status', value: 'Open to opportunities' },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0', borderBottom: '1px solid #F1F5F9',
                }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.85rem', color: '#64748B' }}>{label}</span>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem', color: '#0F172A' }}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          className="grid-3"
        >
          {stats.map(({ value, label, color, bg, icon: Icon }) => (
            <motion.div key={label} variants={fadeUp} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: 28, borderRadius: 20, border: '1px solid #E2E8F0',
              background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, marginBottom: 12,
                background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={22} color={color} />
              </div>
              <p style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2rem', color, lineHeight: 1, margin: 0 }}>{value}</p>
              <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.8rem', color: '#64748B', marginTop: 4, margin: '4px 0 0' }}>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
