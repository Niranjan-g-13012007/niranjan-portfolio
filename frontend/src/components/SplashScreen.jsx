import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_DURATION = 2800; // ms

export default function SplashScreen({ onFinish }) {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setStage(1), 200);   // line draws
    const t2 = setTimeout(() => setStage(2), 700);   // NG appears
    const t3 = setTimeout(() => setStage(3), 1300);  // name
    const t4 = setTimeout(() => setStage(4), 1800);  // role
    const t5 = setTimeout(() => setStage(5), 2300);  // tagline
    const t6 = setTimeout(() => setVisible(false), TOTAL_DURATION);
    const t7 = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish?.();
    }, TOTAL_DURATION + 700);

    return () => {
      [t1, t2, t3, t4, t5, t6, t7].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0E17] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          {/* Subtle radial backdrop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(212,175,55,0.10) 0%, rgba(10,14,23,0) 60%)",
            }}
          />
          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative flex flex-col items-center gap-6 px-6">
            {/* Animated golden line */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={
                stage >= 1 ? { width: "min(70vw, 280px)", opacity: 1 } : {}
              }
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* NG initials */}
            <motion.div
              className="font-display text-6xl sm:text-7xl font-semibold tracking-tight"
              initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.3em" }}
              animate={
                stage >= 2
                  ? { opacity: 1, scale: 1, letterSpacing: "0.05em" }
                  : {}
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "linear-gradient(120deg, #B8901F 0%, #D4AF37 45%, #F7E7A9 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              NG
            </motion.div>

            {/* Name */}
            <AnimatePresence mode="wait">
              {stage >= 3 && (
                <motion.h1
                  key="name"
                  className="font-display text-2xl sm:text-3xl font-medium text-white tracking-wide"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  Niranjan G
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Role */}
            <AnimatePresence mode="wait">
              {stage >= 4 && (
                <motion.p
                  key="role"
                  className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D4AF37]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  MERN Stack Developer
                </motion.p>
              )}
            </AnimatePresence>

            {/* Tagline */}
            <AnimatePresence mode="wait">
              {stage >= 5 && (
                <motion.p
                  key="tagline"
                  className="text-xs sm:text-sm text-white/50 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Building Intelligent Digital Solutions
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
