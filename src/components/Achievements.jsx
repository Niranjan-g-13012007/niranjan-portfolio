import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiStar, FiZap, FiBookOpen, FiCpu } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' } }),
};

const achievements = [
  {
    id: 1, title: 'Merit Scholarship', subtitle: 'Academic Excellence', year: '2023',
    description: 'Awarded merit scholarship for consistently ranking in the Top 5% of students based on academic performance.',
    icon: FiStar, color: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', badge: 'Top 5%',
  },
  {
    id: 2, title: 'First Prize – Mini Hackathon', subtitle: 'Hackathon Winner', year: '2024',
    description: 'Secured first place at the college-level Mini Hackathon by developing an innovative tech solution under time constraints.',
    icon: FiZap, color: '#10B981', bg: '#F0FDF4', border: '#A7F3D0', badge: '🥇 First Place',
  },
  {
    id: 3, title: 'First Prize – DevForge Hackathon', subtitle: 'National Hackathon', year: '2024',
    description: 'Won first place at DevForge Hackathon with the Medi Route project — a smart ambulance traffic control system using IoT and GPS.',
    icon: FiCpu, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', badge: '🥇 First Place',
  },
  {
    id: 4, title: 'IEEE Paper Presentation Finalist', subtitle: 'National Level', year: '2025',
    description: 'Selected as a finalist at the IEEE National-Level Technical Paper Presentation competition for research on intelligent systems.',
    icon: FiBookOpen, color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', badge: 'National Finalist',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" style={{ background: '#FFFFFF' }} className="section">
      <div className="container" ref={ref}>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p style={{ background: '#FEF3C7', color: '#D97706' }} className="section-badge">Achievements</p>
          <h2 className="section-title">
            Recognition &<br />
            <span className="gradient-text">milestones</span>
          </h2>
          <p className="section-subtitle">A few highlights from my academic and competitive journey.</p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          className="grid-4"
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
        >
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.id} variants={fadeUp} custom={i}
                style={{
                  padding: 24, borderRadius: 24, border: '1px solid #E2E8F0',
                  background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 16px 32px rgba(0,0,0,0.09)`,
                  borderColor: ach.color,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  {/* Icon */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 16, flexShrink: 0,
                    background: ach.bg, border: `1px solid ${ach.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} color={ach.color} />
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
                      <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A', lineHeight: 1.35 }}>
                        {ach.title}
                      </h3>
                      <span style={{
                        flexShrink: 0, padding: '3px 10px', borderRadius: 9999,
                        background: ach.bg, color: ach.color, border: `1px solid ${ach.border}`,
                        fontFamily: 'Inter', fontWeight: 600, fontSize: '0.72rem', whiteSpace: 'nowrap',
                      }}>
                        {ach.badge}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.8rem', color: ach.color, marginBottom: 8 }}>
                      {ach.subtitle} · {ach.year}
                    </p>
                    <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7 }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary banner */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={5}
          style={{
            marginTop: 40, padding: '28px 40px', borderRadius: 24,
            background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)',
            border: '1px solid #BFDBFE',
            display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'center',
          }}>
          {[
            { label: 'Scholarships', value: '1', color: '#F59E0B' },
            { label: 'Hackathon Wins', value: '2', color: '#10B981' },
            { label: 'National Recognition', value: '1', color: '#7C3AED' },
            { label: 'Total Awards', value: '4+', color: '#2563EB' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2rem', color, lineHeight: 1 }}>{value}</span>
              <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.8rem', color: '#64748B', marginTop: 4 }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
