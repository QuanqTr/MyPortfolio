import { useState, useEffect } from "react";

interface UseTypewriterProps {
  words: string[];
  delay?: number;
  speed?: number;
}

export function useTypewriter({ words, delay = 2000, speed = 100 }: UseTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, speed]);

  return currentText;
}