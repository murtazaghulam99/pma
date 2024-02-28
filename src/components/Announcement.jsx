import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { announcements } from "../constants/index";
import { arrowleft, arrowright } from "../assets";

const Announcement = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="w-full relative z-0 px-2">
      <div className="w-full bg-[#1A7E91]/10 p-3 my-8 flex justify-between items-center relative">
        {/* <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-[#1A7E91] absolute top-1/2 left-0 transform -translate-y-1/2"
        >
          <img src={arrowleft} alt="" />
        </button> */}
        <div className="mx-auto container">
          <Slider ref={sliderRef} {...settings}>
            {announcements.map((announcement, id) => (
              <div key={id} className="text-center">
                <p className="inter font-semibold md:text-[14px] text-[11px]">
                  {announcement}
                  <span className="underline pl-1 cursor-pointer font-normal hover:no-underline">
                    Shop now
                  </span>
                </p>
              </div>
            ))}
          </Slider>
        </div>
        {/* <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-[#1A7E91] absolute top-1/2 right-0 transform -translate-y-1/2"
        >
          <img src={arrowright} alt="" />
        </button> */}
      </div>
    </section>
  );
};

export default Announcement;
