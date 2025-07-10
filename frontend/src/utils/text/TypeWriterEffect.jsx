import React, { useState, useEffect } from 'react';


const TypewriterEffect = ({ text, speed = 100, loop = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // For a typewriter-like effect

  useEffect(() => {
    let timer;
    if (!isDeleting && currentIndex < text.length) {
      timer = setInterval(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setInterval(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, speed);
    } else if (loop && isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
    } else if (!isDeleting && currentIndex === text.length) {
      if (loop) {
        setTimeout(() => setIsDeleting(true), 1500); // Delay before deleting
      }
    }

    return () => clearInterval(timer); // Cleanup on component unmount or re-render
  }, [displayedText, currentIndex, isDeleting, text, speed, loop]);

  return (
    <div>
      {displayedText}
    </div>
  );
}


export default TypewriterEffect;