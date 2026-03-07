import { useEffect, useState } from 'react';

export function useTypewriter(words, speed = 100, pause = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        const nextText = isDeleting
          ? currentWord.slice(0, displayText.length - 1)
          : currentWord.slice(0, displayText.length + 1);

        setDisplayText(nextText);

        if (!isDeleting && nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && nextText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, pause, speed, wordIndex, words]);

  return displayText;
}
