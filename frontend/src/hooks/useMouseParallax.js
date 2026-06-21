import { useEffect, useState } from "react";

/**
 * Returns normalized mouse position (-0.5 to 0.5) relative to the window,
 * used for subtle parallax / mouse-tracking effects.
 */
export function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame;
    const handleMove = (e) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        setPos({ x, y });
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return pos;
}
