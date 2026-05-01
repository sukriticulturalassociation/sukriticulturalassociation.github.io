import React, { useEffect, useState } from "react";
import "./CarouselV2.css";

interface Props {
  images: string[];
  interval?: number;
}

const CarouselV2: React.FC<Props> = ({ images, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const next = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ✅ Auto slide using setTimeout (no ref)
  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, interval);

    return () => clearTimeout(timer);
  }, [index, interval]);

  return (
    <div className="hero-carousel">
      {/* Background layers */}
      <div
        className="carousel-bg prev"
        style={{ backgroundImage: `url(${images[prevIndex]})` }}
      />
      <div
        className="carousel-bg active"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* Image layers */}
      <div className="carousel-content">
        <img src={images[prevIndex]} className="carousel-img prev" alt="prev" />
        <img
          src={images[index]}
          className="carousel-img active"
          alt="current"
        />
      </div>

      {/* Controls */}
      <button className="carousel-btn prev" onClick={prev}>
        ❮
      </button>
      <button className="carousel-btn next" onClick={next}>
        ❯
      </button>
    </div>
  );
};

export default CarouselV2;
