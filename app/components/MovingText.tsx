import React, { useEffect, useRef } from 'react';
import { createTimeline, stagger } from 'animejs';

interface MovingLineTextProps {
  text: string;
  className?: string;
}

const MovingLineText: React.FC<MovingLineTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current || !lineRef.current || !containerRef.current) return;

    // 1. Split text into spans
    const textContent = textRef.current.textContent || "";
    textRef.current.innerHTML = textContent
      .split("")
      .map(char => char === " " 
        ? "&nbsp;" 
        : `<span class='letter' style='display: inline-block; opacity: 0;'>${char}</span>`
      )
      .join("");

    const letters = textRef.current.querySelectorAll('.letter');
    
    // 2. Define the Reveal Animation
    const runAnimation = () => {
      const textWidth = textRef.current?.getBoundingClientRect().width || 0;
      const tl = createTimeline({
        loop: false,
        defaults: { ease: 'outExpo' }
      });

      tl
      .add(lineRef.current, {
        scaleY: [0, 1],
        opacity: [0.5, 1],
        duration: 700
      })
      .add(lineRef.current, {
        // Move line from left to right based on text width
        translateX: [0, textWidth + 10],
        duration: 700,
        delay: 100
      })
      .add(letters, {
        opacity: [0, 1],
        duration: 600,
        // Using a negative start time in v4 to overlap with line movement
        delay: stagger(34, { start: -700 }) 
      });
    };

    // 3. Intersection Observer (Trigger Once)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className={`relative inline-block overflow-hidden ${className}`}>
      <span className="relative inline-block py-1">
        {/* The Moving Line */}
        <span 
          ref={lineRef}
          className="absolute left-0 top-0 bottom-0 w-[0px] bg-blue-500 origin-top opacity-0"
        />
        {/* The Text Container */}
        <span ref={textRef} className="letters  tracking-tight text-3xl md:text-5xl">
          {text}
        </span>
      </span>
    </div>
  );
};

export default MovingLineText;