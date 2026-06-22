import { useEffect, useRef, useState } from "react";

/**
 * Tracks which section is currently most visible in the viewport.
 * Used to highlight the active nav link.
 *
 * IntersectionObserver callbacks only deliver entries whose threshold
 * crossed since the last check — not the full set of observed elements.
 * So we keep a running map of every section's latest intersection ratio
 * and recompute the "most visible" section from that complete map on
 * every callback, rather than just the partial batch of entries.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const ratiosRef = useRef(new Map());

  useEffect(() => {
    const ratios = ratiosRef.current;
    ratios.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveId(bestId);
        } else {
          // Nothing intersecting the band (e.g. between sections) — fall back to
          // whichever observed section is currently closest to the viewport center.
          let closestId = null;
          let closestDistance = Infinity;
          sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const distance = Math.abs(center - window.innerHeight / 2);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestId = id;
            }
          });
          if (closestId) setActiveId(closestId);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
