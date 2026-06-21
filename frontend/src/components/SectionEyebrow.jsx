import Reveal from "./Reveal";

/**
 * Signature element used at the top of every section: a small mono-font
 * "build log" line, e.g. `$ section: about` — ties the developer identity
 * into the structure of the page itself rather than as decoration.
 */
export default function SectionEyebrow({ command, title, align = "left" }) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-3 mb-4 ${alignClass}`}>
      <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate/70">
        <span className="text-gold">$</span>
        <span>{command}</span>
        <span className="inline-block w-[7px] h-[14px] bg-ink/40 animate-blink" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
    </Reveal>
  );
}
