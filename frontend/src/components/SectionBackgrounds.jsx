import { motion } from "framer-motion";

/**
 * Lightweight, absolutely-positioned ambient layer for a single section.
 * Distinct from the global AmbientBackground — each section gets a
 * thematically appropriate variant (particles, icons, symbols, lines, etc.)
 * Always low-opacity and pointer-events-none so it never competes with content.
 */

const DEFAULT_POSITIONS = [
  { top: "10%", left: "6%" }, { top: "20%", left: "90%" },
  { top: "35%", left: "3%" }, { top: "48%", left: "94%" },
  { top: "62%", left: "8%" }, { top: "74%", left: "88%" },
  { top: "86%", left: "12%" }, { top: "92%", left: "80%" },
  { top: "5%", left: "48%" }, { top: "55%", left: "50%" },
];

export function ParticleField({ count = 10, color = "var(--color-gold)", size = 4 }) {
  const dots = Array.from({ length: count }, (_, i) => DEFAULT_POSITIONS[i % DEFAULT_POSITIONS.length]);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.16]">
      {dots.map((pos, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ ...pos, width: size, height: size, backgroundColor: color }}
          animate={{ y: [0, -22, 0], opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        />
      ))}
    </div>
  );
}

export function SymbolField({ symbols = ["{ }", "< >", "( )", "[ ]"], color = "var(--color-ink)" }) {
  const items = Array.from({ length: 8 }, (_, i) => ({
    symbol: symbols[i % symbols.length],
    ...DEFAULT_POSITIONS[i % DEFAULT_POSITIONS.length],
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="absolute font-mono font-semibold text-2xl select-none"
          style={{ top: item.top, left: item.left, color }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}

export function ConnectionLines({ color = "var(--color-blue)" }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.09]"
      preserveAspectRatio="none"
      viewBox="0 0 1000 600"
    >
      {[
        "M50,80 Q300,180 550,90 T950,140",
        "M80,400 Q350,300 600,420 T980,360",
        "M20,250 Q280,220 520,260 T940,230",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

export function RotatingGradientOrbs({ colors = ["var(--color-gold)", "var(--color-blue)"] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[100px] opacity-[0.13]"
        style={{ backgroundColor: colors[0] }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[100px] opacity-[0.13]"
        style={{ backgroundColor: colors[1] }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function AcademicPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 1px, transparent 32px)",
        }}
      />
    </div>
  );
}
