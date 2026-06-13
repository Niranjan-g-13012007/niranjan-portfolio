import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload, FiCode } from 'react-icons/fi';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 60%, #EFF6FF 100%)',
      }}
    >
      {/* Background dot grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: 80, right: 40, width: 300, height: 300,
        borderRadius: '50%', opacity: 0.07,
        background: 'radial-gradient(circle, #2563EB, transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 80, left: 40, width: 220, height: 220,
        borderRadius: '50%', opacity: 0.05,
        background: 'radial-gradient(circle, #10B981, transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: 112, paddingBottom: 64 }}>
        <div className="flex-row-layout">

          {/* ── LEFT CONTENT ── */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 9999,
                background: '#EFF6FF', border: '1px solid #BFDBFE',
                color: '#2563EB', fontFamily: 'Inter', fontSize: '0.8rem',
                fontWeight: 500, marginBottom: 24,
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: '#34D399',
                display: 'inline-block', animation: 'pulse-ring 2s infinite',
              }} />
              Open to Internship & Placement Opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              style={{
                fontFamily: 'Inter', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                lineHeight: 1.12, color: '#0F172A',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Niranjan</span>
              <br />Gobinathan
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              style={{
                fontFamily: 'Inter', fontWeight: 500, fontSize: '1.05rem',
                color: '#2563EB', marginBottom: 16, letterSpacing: '-0.01em',
              }}
            >
              Full Stack Developer · AI Enthusiast · Database & IoT Systems Explorer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              style={{
                fontFamily: 'Inter', fontWeight: 400, fontSize: '1rem',
                color: '#475569', lineHeight: 1.8, marginBottom: 32,
                maxWidth: 520,
              }}
            >
              Passionate Information Technology student focused on building scalable
              web applications, AI-powered systems, and IoT solutions that solve
              real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}
            >
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                <FiCode size={16} />
                View Projects
              </button>
              <a className="btn-secondary" href="/resume.pdf" download>
                <FiDownload size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              style={{ display: 'flex', alignItems: 'center', gap: 16 }}
            >
              <span style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>
                Find me on
              </span>
              <a
                href="https://github.com/Niranjan-g-13012007"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: '#475569', fontFamily: 'Inter', fontSize: '0.875rem',
                  fontWeight: 500, transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#0F172A'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
              >
                <FiGithub size={17} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: '#2563EB', fontFamily: 'Inter', fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                <FiLinkedin size={17} /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT AVATAR ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.34, 1.2, 0.64, 1] }}
            style={{ flexShrink: 0 }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {/* Avatar card */}
              <div
                className="float-animation"
                style={{
                  width: 300, height: 300,
                  borderRadius: 32, overflow: 'hidden',
                  boxShadow: '0 24px 48px rgba(37,99,235,0.15), 0 8px 16px rgba(0,0,0,0.08)',
                  border: '4px solid white',
                  background: 'linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 88, height: 88, borderRadius: 20,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                    boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
                    color: 'white', fontWeight: 800, fontSize: '2rem',
                    fontFamily: 'Inter', letterSpacing: '-0.02em',
                  }}>
                    NG
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'Inter', fontWeight: 700, color: '#0F172A', fontSize: '1.1rem', margin: 0 }}>Niranjan</p>
                    <p style={{ fontFamily: 'Inter', fontWeight: 400, color: '#64748B', fontSize: '0.8rem', margin: 0 }}>B.Tech IT · Kongu EC</p>
                  </div>
                </div>
              </div>

              {/* Floating CGPA card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                style={{
                  position: 'absolute', right: -20, top: 24,
                  background: 'white', borderRadius: 16,
                  padding: '12px 18px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  border: '1px solid #EFF6FF',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.4rem', color: '#2563EB', margin: 0, lineHeight: 1 }}>9.34</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.7rem', color: '#64748B', margin: 0, marginTop: 2 }}>CGPA</p>
              </motion.div>

              {/* Floating Projects card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                style={{
                  position: 'absolute', left: -20, bottom: 32,
                  background: 'white', borderRadius: 16,
                  padding: '12px 18px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  border: '1px solid #F0FDF4',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.4rem', color: '#10B981', margin: 0, lineHeight: 1 }}>4+</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.7rem', color: '#64748B', margin: 0, marginTop: 2 }}>Projects</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo('about')}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          cursor: 'pointer',
        }}
      >
        <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#94A3B8', letterSpacing: '0.12em', fontWeight: 500 }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={15} color="#94A3B8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
