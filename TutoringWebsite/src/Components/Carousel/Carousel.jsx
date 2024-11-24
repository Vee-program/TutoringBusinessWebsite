import React, { useState, useRef, useEffect } from "react";
import styling from "./Carousel.module.css";

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const loremWords = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]; // Example data

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
      return () =>
        carouselRef.current.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`${styling.corouselContainer}`} ref={carouselRef}>
      {loremWords.map((word, index) => {
        const scale = 1 - Math.abs(scrollPosition - index * 300) / 1000;
        return (
          <div
            key={index}
            className={`${styling.corouselCard}`}
            style={{ transform: `scale(${scale})` }}>
            {word}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
