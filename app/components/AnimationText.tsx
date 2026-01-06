import React, { useEffect, useRef } from 'react';
import { createTimeline, stagger } from 'animejs';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    // 1. Prepare the text (wrap letters in spans)
    element.innerHTML = text
      .split("")
      .map(char => char === " " 
        ? "&nbsp;" 
        : `<span class='letter' style='display: inline-block; opacity: 0;'>${char}</span>`
      )
      .join("");

    const letters = element.querySelectorAll('.letter');

    // 2. Define the animation logic
    const runAnimation = () => {
      const tl = createTimeline({
        loop: false, // Changed to false for "once" behavior
        defaults: { ease: 'outExpo' }
      });

      tl.add(letters, {
        translateX: [40, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: stagger(30, { start: 300 })
      });
      // Removed the second "exit" animation to keep the text visible
    };

    // 3. Intersection Observer Logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.unobserve(entry.target); // Stop observing after it triggers once
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the text is visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [text]);

  return (
    <h1 ref={textRef} className={`ml12 ${className}`} style={{ minHeight: '1.2em' }}>
      {text}
    </h1>
  );
};

export default AnimatedText;