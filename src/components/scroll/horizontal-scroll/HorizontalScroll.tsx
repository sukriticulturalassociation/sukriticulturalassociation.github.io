import React, { useEffect } from "react";
import "./HorizontalScroll.css";

interface Props {
  children: React.ReactNode;
  title?: string | null;
}

const HorizontalScroll: React.FC<Props> = ({ children, title }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="carousel-container">
      {title && (
        <div className="title-container">
          <h2 className="gradient-title">{title}</h2>
        </div>
      )}
      <div className="scroll-group">
        <div className="group">
          <div className="scroll-content">{children}</div>
          <div className="scroll-content">{children}</div>
        </div>
        <div aria-hidden="true" className="group">
          <div className="scroll-content">{children}</div>
          <div className="scroll-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
