import { motion } from "framer-motion";

/**
 * Wraps children with a consistent fade-up reveal animation triggered on scroll.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  once = true,
  className = "",
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
