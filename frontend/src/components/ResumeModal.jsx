import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { profile } from "../data/content";

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl h-[88vh] sm:h-[85vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-ink/8 bg-white">
              <div className="min-w-0">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink truncate">
                  {profile.name} — Resume
                </h3>
                <p className="text-xs text-slate font-mono">Preview before downloading</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-dark text-white text-sm font-medium hover:bg-ink transition-colors duration-300"
                >
                  <FiDownload className="text-base" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/15 text-ink text-sm font-medium hover:border-gold-dark hover:text-gold-dark transition-colors duration-300"
                >
                  <FiExternalLink className="text-base" />
                  Open in tab
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate hover:bg-surface hover:text-ink transition-colors duration-200"
                >
                  <HiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 bg-surface">
              <object
                data={`${profile.resumeUrl}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
                aria-label="Resume PDF preview"
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-8 text-center">
                  <p className="text-slate">
                    Your browser can't preview PDFs inline. Use the buttons above to open or download instead.
                  </p>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
