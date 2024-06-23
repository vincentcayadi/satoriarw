import { useState, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

export default function Carousel({ children: slides }) {
  const autoSlideInterval = 5000;
  const [i, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  // const prevSlide = () => {
  //   setCurrentSlide((i) => (i === 0 ? slides.length - 1 : i - 1));
  // };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden max-w-[2000px] max-h-[1125px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${i * 100}%)`,
        }}
      >
        {slides}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
        <button
          onClick={prevSlide}
          className="z-40"
          aria-label="Previous Slide"
        >
          <ArrowLeftCircle className="w-4 h-4 duration-200 md:w-10 md:h-10 hover:scale-110 stroke-neutral-200/80" />
        </button>
        <button onClick={nextSlide} className="z-40" aria-label="Next Slide">
          <ArrowRightCircle className="w-4 h-4 duration-200 md:w-10 md:h-10 hover:scale-110 stroke-neutral-200/80" />
        </button>
      </div> */}
    </div>
  );
}
