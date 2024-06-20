import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({ children: slides }) {
  const autoSlideInterval = 3000;
  const [i, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${i * 100}%)`,
        }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prevSlide}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
