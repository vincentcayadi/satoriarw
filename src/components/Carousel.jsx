import { useState, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

export default function Carousel({ children: slides }) {
  const autoSlideInterval = 5000;
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
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${i * 100}%)`,
        }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
        <button onClick={prevSlide} className="z-40">
          <ArrowLeftCircle className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 duration-200 stroke-neutral-300" />
        </button>
        <button onClick={nextSlide} className="z-40">
          <ArrowRightCircle className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 duration-200 stroke-neutral-300" />
        </button>
      </div>
    </div>
  );
}
