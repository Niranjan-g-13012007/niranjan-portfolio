import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps children with a subtle 3D tilt that follows the cursor on hover —
 * a premium "card tilt" micro-interaction. Tilt range is intentionally
 * small to stay elegant rather than gimmicky.
 */
export default function TiltCard({ children, className = "", maxTilt = 8, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), springConfig);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
