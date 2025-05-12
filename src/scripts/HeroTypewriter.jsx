import { useEffect, useState } from 'react';

export default function HeroTypewriter({ title = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [finished, setFinished] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (index >= title.length) {
      setFinished(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + title.charAt(index));
      setIndex((prev) => prev + 1);
    }, 120);

    return () => clearTimeout(timeout);
  }, [index, title]);

  // Cursor blink only while typing
  useEffect(() => {
    if (finished) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [finished]);

  return (
    <h1 className="text-white dark:text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg transition-colors duration-500 text-center">
      {displayText}
      <span
        className={`inline-block w-1 ${showCursor || finished ? 'bg-white' : 'bg-transparent'} ml-1`}
      >
        &nbsp;
      </span>
    </h1>
  );
}
