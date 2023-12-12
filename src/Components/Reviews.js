import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Review1 from "../Assets/Review1.jpg";
import Review2 from "../Assets/Review2.jpg";
import Review3 from "../Assets/Review3.jpg";
import Review4 from "../Assets/Review4.jpg";
import Review5 from "../Assets/Review5.jpg";
import Review6 from "../Assets/Review6.jpg";

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: Review1 },
    { url: Review2 },
    { url: Review3 },
    { url: Review4 },
    { url: Review5 },
    { url: Review6 },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="max-w-[1400] h-[780px] w-full m-auto py-16 px-4 relative bg-[rgb(171,175,124)] flex flex-col items-center justify-center">
      <p className="text-4xl pb-4 font-bold text-yellow-400">
        What the customers say:
      </p>
      <div
        style={{
          backgroundImage: `url(${slides[currentSlide].url})`,
          backgroundSize: "35%",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer "
          onClick={handlePrevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>

        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer "
          onClick={handleNextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
