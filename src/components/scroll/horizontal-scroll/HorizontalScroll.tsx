import React, { useEffect, useRef } from "react";
import "./HorizontalScroll.css";

interface Props {
  children: React.ReactNode;
  speed?: number;
}

const HorizontalScroll: React.FC<Props> = ({ children, speed = 0.5 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  const autoScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (!isPaused.current) {
      container.scrollLeft += speed;

      const maxScroll = container.scrollWidth / 2;

      // 🔥 Seamless reset (no visible jump)
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft -= maxScroll;
      }
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className="carousel-container test-border"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div className="group" ref={scrollRef}>
        <div className="scroll-content">
          {/* 🔁 Duplicate for infinite effect */}
          {children}
        </div>
      </div>
      <div aria-hidden className="group" ref={scrollRef}>
        <div className="scroll-content">
          {/* 🔁 Duplicate for infinite effect */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
