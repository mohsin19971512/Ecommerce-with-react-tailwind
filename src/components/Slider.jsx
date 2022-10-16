import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Slider.css";
import {ApiSlides} from '../componentApi/SliderApi';
const Slider = () => {
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
      console.log(activeSlide)
    } else {
      setActiveSlide(activeSlide - 1);
      console.log(activeSlide)

    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
      console.log(activeSlide)

    } else {
      setActiveSlide(activeSlide + 1);
      console.log(activeSlide)

    }
  };
  return (
    <div className="slider h-[540px] z-30 bg-white flex items-center justify-between mobile:hidden ">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-[100%] z-0 h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background} key={index}>
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                <img
                  className =' h-[100%]  object-cover '
                  src={slide.src}
                  alt="man"
                />
                </div>
                <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className=" text-[30px]">{slide.content.p}</p>
                  <button className="btn text-white hover:text-green-900">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;