import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseTime = 1600,
  className = "",
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-gold ml-1 align-middle animate-blink" />
    </span>
  );
}
