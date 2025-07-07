import { useState, useEffect } from 'react';

export const useTypewriter = (
  texts: string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  pauseTime: number = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasFinishedCycle, setHasFinishedCycle] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    // If we've finished the cycle, stay on the last text
    if (hasFinishedCycle) {
      setDisplayText(texts[texts.length - 1]);
      setIsCompleted(true);
      return;
    }

    const currentText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing current text
          setIsCompleted(true);
          
          // If this is the last tagline, don't delete it
          if (currentIndex === texts.length - 1) {
            setHasFinishedCycle(true);
            return;
          }
          
          setTimeout(() => {
            setIsDeleting(true);
            setIsCompleted(false);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime, hasFinishedCycle]);

  return { displayText, isCompleted };
};