import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Logo appears (0-0.5s)
    // Phase 1: Line draws (0.5-1.1s)
    // Phase 2: Tagline appears (1.1-1.6s)
    // Phase 3: Name appears (1.6-2.1s)
    // Phase 4: Fade out (2.1-2.6s)
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 950),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2100),
      setTimeout(() => onComplete(), 2700),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-8"
          >
            {/* Outer ring */}
            <div className="absolute inset-[-12px] rounded-full border-2 border-blue-100 pulse-ring" />
            {/* Logo circle */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                NG
              </span>
            </div>
          </motion.div>

          {/* Animated line */}
          <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: phase >= 1 ? '100%' : 0 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #2563EB, #3B82F6)' }}
            />
          </div>

          {/* Tagline */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  color: '#64748B',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Building Intelligent Solutions
              </motion.p>
            )}
          </AnimatePresence>

          {/* Name */}
          <AnimatePresence>
            {phase >= 3 && (
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                }}
              >
                Niranjan Gobinathan
              </motion.h1>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
