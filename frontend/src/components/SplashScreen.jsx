import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   LANGUAGE DATA  (Sequence 1)
───────────────────────────────────────────── */
const LANGUAGES = [
  { text: "நிரஞ்சன்",  lang: "Tamil" },
  { text: "निरंजन",    lang: "Hindi" },
  { text: "నిరంజన్",  lang: "Telugu" },
  { text: "ನಿರಂಜನ್",  lang: "Kannada" },
  { text: "നിരഞ്ജൻ",  lang: "Malayalam" },
  { text: "নিরঞ্জন",  lang: "Bengali" },
  { text: "નિરંજન",   lang: "Gujarati" },
  { text: "ਨਿਰੰਜਨ",  lang: "Punjabi" },
  { text: "ନିରଞ୍ଜନ",  lang: "Odia" },
  { text: "निरंजन",   lang: "Marathi" },
  { text: "نیرنجن",   lang: "Urdu" },
  { text: "NIRANJAN", lang: "English" },
];

/* ─────────────────────────────────────────────
   FLOATING CODE SYMBOLS
───────────────────────────────────────────── */
const SYMBOL_LIST = ["<", ">", "{", "}", "[", "]", "(", ")", ";", "/", "=>", "&&", "||", "//", "**"];

function FloatingSymbols() {
  const items = useRef(
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      symbol: SYMBOL_LIST[i % SYMBOL_LIST.length],
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      size: 10 + Math.random() * 10,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 8,
      opacity: 0.04 + Math.random() * 0.06,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute font-mono select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            color: "#C19A2E",
            opacity: item.opacity,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 8, -6, 4, 0],
            opacity: [item.opacity, item.opacity * 1.6, item.opacity, item.opacity * 1.3, item.opacity],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FLOATING PARTICLES
───────────────────────────────────────────── */
function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 8 + Math.random() * 16,
      delay: Math.random() * 10,
      opacity: 0.08 + Math.random() * 0.18,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, #D4AF37, #C19A2E)",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -40, -10, -60, 0],
            x: [0, 6, -4, 8, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity * 0.5, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BURST PARTICLES  (Sequence 2)
───────────────────────────────────────────── */
function BurstParticles({ active }) {
  const particles = useRef(
    Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2;
      const dist = 80 + Math.random() * 60;
      return { id: i, angle, dist };
    })
  ).current;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {particles.map((p) => (
        <AnimatePresence key={p.id}>
          {active && (
            <motion.div
              className="absolute rounded-full"
              style={{ width: "3px", height: "3px", background: "#D4AF37" }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos(p.angle) * p.dist,
                y: Math.sin(p.angle) * p.dist,
                opacity: 0,
                scale: 0.2,
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   LIGHT SWEEP  (Sequence 2)
───────────────────────────────────────────── */
function LightSweep({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute top-0 bottom-0"
            style={{
              width: "60px",
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)",
              filter: "blur(4px)",
            }}
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   ANIMATED GRID BACKGROUND
───────────────────────────────────────────── */
function AnimatedGrid() {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(193,154,46,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(193,154,46,0.055) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
      }}
      animate={{ backgroundPosition: ["0px 0px", "52px 52px"] }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    />
  );
}

/* ─────────────────────────────────────────────
   EXIT PARTICLES  (dissolve on ENTER)
───────────────────────────────────────────── */
function ExitParticles({ active }) {
  const particles = useRef(
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 200,
      vy: (Math.random() - 0.5) * 200,
      size: 2 + Math.random() * 4,
    }))
  ).current;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <AnimatePresence key={p.id}>
          {active && (
            <motion.div
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: "radial-gradient(circle, #D4AF37, #C19A2E80)",
              }}
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{ x: p.vx, y: p.vy, opacity: 0, scale: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ENTER BUTTON
───────────────────────────────────────────── */
function EnterButton({ onClick }) {
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const btnRef = useRef(null);

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    onClick?.();
  };

  return (
    <motion.button
      ref={btnRef}
      id="splash-enter-btn"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "13px 48px",
        border: "1px solid",
        borderColor: hovered ? "#D4AF37" : "rgba(193,154,46,0.55)",
        borderRadius: "3px",
        background: hovered ? "rgba(193,154,46,0.12)" : "rgba(193,154,46,0.06)",
        cursor: "pointer",
        fontFamily: "'Cinzel', serif",
        fontSize: "0.78rem",
        letterSpacing: "0.38em",
        color: hovered ? "#F7E7A9" : "#D4AF37",
        textTransform: "uppercase",
        transition: "border-color 0.3s, background 0.3s, color 0.3s",
        boxShadow: hovered
          ? "0 0 30px rgba(212,175,55,0.28), 0 0 60px rgba(212,175,55,0.10), inset 0 0 20px rgba(212,175,55,0.05)"
          : "0 0 16px rgba(212,175,55,0.14)",
      }}
    >
      {/* Breathing glow ring */}
      <motion.div
        className="absolute inset-0"
        style={{ borderRadius: "3px", border: "1px solid rgba(212,175,55,0.3)" }}
        animate={{
          boxShadow: hovered
            ? ["0 0 0px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"]
            : ["0 0 0px rgba(212,175,55,0)", "0 0 10px rgba(212,175,55,0.2)", "0 0 0px rgba(212,175,55,0)"],
        }}
        transition={{ duration: hovered ? 1.2 : 2.5, repeat: Infinity }}
      />

      {/* Ripples */}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: r.x,
            top: r.y,
            transform: "translate(-50%, -50%)",
            background: "rgba(212,175,55,0.3)",
            width: "8px",
            height: "8px",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 18, opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      ENTER
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   MAIN SPLASH SCREEN
───────────────────────────────────────────── */
const LANG_INTERVAL = 600; // ms per language

export default function SplashScreen({ onFinish }) {
  const [langIndex, setLangIndex] = useState(0);
  const [sequence, setSequence] = useState(0); // 0=lang cycling, 1=english expanded
  const [burstActive, setBurstActive] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);
  const [titlePhase, setTitlePhase] = useState(0); // 0=none,1=Dev,2=PS,3=TE,4=combined
  const [taglinePhase, setTaglinePhase] = useState(0); // 0=none,1=bldg,2=welcome
  const [enterVisible, setEnterVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [exitParticles, setExitParticles] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);
  const timers = useRef([]);

  const addTimer = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let t = 0;

    // Cycle through each language
    LANGUAGES.forEach((_, i) => {
      addTimer(() => setLangIndex(i), t);
      t += LANG_INTERVAL;
    });

    const afterLang = t + 80;

    // Sequence 2: English expand + burst + sweep
    addTimer(() => {
      setSequence(1);
      setBurstActive(true);
      setSweepActive(true);
    }, afterLang);
    addTimer(() => setBurstActive(false), afterLang + 1400);
    addTimer(() => setSweepActive(false), afterLang + 1400);

    // Sequence 3: identity titles (combined line, direct fade)
    addTimer(() => setTitlePhase(4), afterLang + 1000);

    // Sequence 4: tagline
    addTimer(() => setTaglinePhase(2), afterLang + 2200);

    // Sequence 5: ENTER button
    addTimer(() => setEnterVisible(true), afterLang + 3400);

    return () => {
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    setExitParticles(true);
    setTimeout(() => {
      setSplashVisible(false);
      setTimeout(() => {
        document.body.style.overflow = "";
        onFinish?.();
      }, 300);
    }, 900);
  }, [exiting, onFinish]);

  const currentLang = LANGUAGES[langIndex];
  const isEnglishLang = langIndex === LANGUAGES.length - 1;

  return (
    <AnimatePresence>
      {splashVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: "#0F1115" }}
          initial={{ opacity: 1 }}
          animate={exiting ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }}
          transition={exiting ? { duration: 0.95, ease: [0.22, 1, 0.36, 1] } : {}}
        >
          {/* ── Background layers ── */}
          <AnimatedGrid />
          <FloatingParticles />
          <FloatingSymbols />
          {exitParticles && <ExitParticles active={exitParticles} />}

          {/* Radial center glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(193,154,46,0.10) 0%, transparent 70%)",
            }}
          />

          {/* ══════════════ STAGE 0 — Language cycling ══════════════ */}
          {sequence === 0 && (
            <div className="relative flex flex-col items-center gap-4 select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={langIndex}
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Native script name */}
                  <span
                    style={{
                      fontFamily: isEnglishLang
                        ? "'Cinzel', 'Cormorant Garamond', Georgia, serif"
                        : "'Noto Sans', sans-serif",
                      fontSize: isEnglishLang
                        ? "clamp(3rem, 8vw, 5.5rem)"
                        : "clamp(2.8rem, 7vw, 5rem)",
                      fontWeight: isEnglishLang ? 700 : 500,
                      letterSpacing: isEnglishLang ? "0.18em" : "0.06em",
                      background:
                        "linear-gradient(135deg, #8a6210 0%, #C19A2E 40%, #D4AF37 65%, #F7E7A9 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      filter: "drop-shadow(0 0 18px rgba(212,175,55,0.35))",
                      lineHeight: 1.15,
                      display: "block",
                    }}
                  >
                    {currentLang.text}
                  </span>

                  {/* Language label */}
                  <motion.span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.62rem, 1.4vw, 0.78rem)",
                      letterSpacing: "0.3em",
                      color: "rgba(212,175,55,0.5)",
                      textTransform: "uppercase",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    ( {currentLang.lang} )
                  </motion.span>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex gap-1.5 mt-5">
                {LANGUAGES.map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      height: "3px",
                      background: i <= langIndex ? "#D4AF37" : "rgba(212,175,55,0.2)",
                    }}
                    animate={{ width: i === langIndex ? 20 : 5 }}
                    transition={{ duration: 0.25 }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════ STAGE 1+ — English NIRANJAN expanded ══════════════ */}
          {sequence >= 1 && (
            <div className="relative flex flex-col items-center gap-5 select-none px-6">
              <LightSweep active={sweepActive} />

              {/* NIRANJAN heading */}
              <div className="relative">
                <BurstParticles active={burstActive} />
                <motion.h1
                  initial={{ opacity: 0, letterSpacing: "0.5em", scale: 0.88 }}
                  animate={{ opacity: 1, letterSpacing: "0.18em", scale: 1 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(3.2rem, 10vw, 7rem)",
                    fontWeight: 700,
                    margin: 0,
                    background:
                      "linear-gradient(135deg, #8a6210 0%, #C19A2E 30%, #D4AF37 55%, #F7E7A9 75%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    filter: "drop-shadow(0 0 28px rgba(212,175,55,0.45))",
                    lineHeight: 1.1,
                  }}
                >
                  NIRANJAN
                </motion.h1>

                {/* Underline glow */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    bottom: "-6px",
                    width: "70%",
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* ── Identity titles — combined line, simple fade ── */}
              <AnimatePresence>
                {titlePhase === 4 && (
                  <motion.p
                    key="combined"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.65rem, 1.6vw, 0.88rem)",
                      letterSpacing: "0.25em",
                      color: "rgba(212,175,55,0.85)",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Developer
                    <span style={{ color: "rgba(212,175,55,0.35)", margin: "0 8px" }}>•</span>
                    Problem Solver
                    <span style={{ color: "rgba(212,175,55,0.35)", margin: "0 8px" }}>•</span>
                    Tech Enthusiast
                  </motion.p>
                )}
              </AnimatePresence>

              {/* ── Tagline ── */}
              <AnimatePresence>
                {taglinePhase === 2 && (
                  <motion.p
                    key="tagline-welcome"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 300,
                      letterSpacing: "0.06em",
                      fontStyle: "italic",
                      margin: 0,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    Welcome to My Portfolio
                  </motion.p>
                )}
              </AnimatePresence>

              {/* ── ENTER button ── */}
              <AnimatePresence>
                {enterVisible && (
                  <motion.div
                    className="flex flex-col items-center gap-2 mt-2"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <EnterButton onClick={handleEnter} />

                    {/* Animated chevron arrow */}
                    <motion.svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      style={{ color: "rgba(212,175,55,0.45)" }}
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path
                        d="M1 1L8 8L15 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
