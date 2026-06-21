import { motion } from "framer-motion";

function FloatingSymbol({ symbol, top, left, size, duration, delay, color }) {
  return (
    <motion.span
      className="absolute select-none pointer-events-none font-mono font-medium"
      style={{
        top,
        left,
        fontSize: size,
        color,
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: [-10, -30, -50, -70] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {symbol}
    </motion.span>
  );
}

/**
 * Global ambient background: soft grid, floating brackets/binary, gradient mesh.
 * Kept at very low opacity throughout so it never competes with content.
 */
export default function AmbientBackground() {
  const symbols = [
    { symbol: "{ }", top: "8%", left: "6%", size: "2.2rem", duration: 9, delay: 0, color: "#D4AF37" },
    { symbol: "< >", top: "18%", left: "88%", size: "1.8rem", duration: 11, delay: 1.2, color: "#2563EB" },
    { symbol: "01", top: "32%", left: "3%", size: "1.4rem", duration: 8, delay: 0.6, color: "#475569" },
    { symbol: "=>", top: "46%", left: "92%", size: "1.6rem", duration: 10, delay: 2, color: "#D4AF37" },
    { symbol: "( )", top: "60%", left: "8%", size: "2rem", duration: 9.5, delay: 1, color: "#2563EB" },
    { symbol: "10", top: "72%", left: "85%", size: "1.4rem", duration: 7.5, delay: 0.3, color: "#475569" },
    { symbol: "[ ]", top: "85%", left: "12%", size: "1.7rem", duration: 10.5, delay: 1.8, color: "#D4AF37" },
    { symbol: "&&", top: "94%", left: "78%", size: "1.3rem", duration: 8.5, delay: 0.9, color: "#2563EB" },
    { symbol: "//", top: "12%", left: "45%", size: "1.5rem", duration: 9, delay: 2.4, color: "#475569" },
    { symbol: ";", top: "55%", left: "50%", size: "1.6rem", duration: 8, delay: 1.5, color: "#D4AF37" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Gradient mesh blobs */}
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[34rem] h-[34rem] rounded-full bg-blue/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-red-light/10 blur-[130px]" />

      {/* Floating brackets / binary / symbols, low opacity */}
      <div className="absolute inset-0 opacity-[0.07]">
        {symbols.map((s, i) => (
          <FloatingSymbol key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
