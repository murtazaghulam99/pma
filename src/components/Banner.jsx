import React, { useState, useEffect } from "react";
import { bannerimg } from "../assets";
import { ChevronLeft, ChevronRight } from "react-feather";
import { slides } from "../constants";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="w-full container mx-auto relative px-2 z-0">
      <div className="home-banner bg-cover bg-left md:bg-center rounded-xl w-full bg-no-repeat my-6 relative">
        <div className="flex justify-between lg:flex-row flex-col md:py-6 lg:py-0 py-16 items-center">
          <div className="space-y-5 pl-10 w-full max-w-[620px]">
            <h1 className="font-bold montserrat uppercase text-[28px] md:text-[36px] lg:text-[42px] text-white pr-2">
              {slides[curr].title}
            </h1>
            <p className="md:text-[18px] text-[17px] text-white inter pb-5">
              {slides[curr].description}
            </p>
            <NavLink to="/signin">
              <button className="hover-transition hover:bg-black cursor-pointer py-3 md:px-6 px-4 text-[14px] bg-white hover:bg-white/80 transition-colors rounded-full inter font-semibold relative z-10">
                Create an account
              </button>
            </NavLink>
          </div>
          <div>
            <img
              src={bannerimg}
              className="w-full max-w-[700px] pt-10"
              alt="printing agency"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-1 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-20"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-20"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
