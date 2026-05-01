import React, { useEffect, useState } from "react";
import "./Carousel.css";
import cover from "../../assets/Cover.png";
import sukriti_poster_3d from "../../assets/sukriti_poster_3d_20260428.png";
import sukriti_posterOriginal from "../../assets/sukriti_posterOriginal_20260428.png";

const images = [cover, sukriti_poster_3d, sukriti_posterOriginal];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} />
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
