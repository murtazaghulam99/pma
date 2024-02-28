import React, { useState, useEffect } from "react";
import { fivestars } from "../assets";
import { testimonialData } from "../constants";
import { ChevronLeft, ChevronRight } from "react-feather";

const Testimonials = () => {
  const [curr, setCurr] = useState(0);
  const testimonialsPerPage = window.innerWidth >= 768 ? 3 : 1;

  const prev = () => {
    const newIndex =
      curr === 0
        ? Math.ceil(testimonialData.length / testimonialsPerPage) - 1
        : curr - 1;
    setCurr(newIndex);
  };

  const next = () => {
    const newIndex =
      (curr + 1) % Math.ceil(testimonialData.length / testimonialsPerPage);
    setCurr(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  const startIdx = curr * testimonialsPerPage;
  const endIdx = (curr + 1) * testimonialsPerPage;

  return (
    <section className="w-full bg-[#EAF3F5] mx-auto relative py-5">
      <div className="py-20 w-full max-w-[1100px] mx-auto">
        <div className="flex gap-5 justify-center testimonials-container my-8 relative">
          {testimonialData.slice(startIdx, endIdx).map((testimonial, index) => (
            <div
              key={startIdx + index}
              className="testimonial-item flex justify-start items-start"
            >
              <div className="hover-transition w-full max-w-[300px] space-y-6 h-[400px] overflow-hidden bg-[#F2F2F2] rounded-2xl border hover:shadow-xl hover:border-black/20 p-5">
                <div className="flex space-x-5">
                  <img
                    src={testimonial.image}
                    className="w-full max-w-[60px]"
                    alt="profile image"
                  />
                  <div>
                    <h1 className="font-semibold text-[20px] montserrat">
                      {testimonial.name}
                    </h1>
                    <p className="font-light text-[#212833] text-[15px] open-sans">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                <img
                  src={fivestars}
                  className="w-full max-w-[90px]"
                  alt="5 stars review"
                />
                <div className="testimonial-content">
                  <p className="text-[15px] font-medium open-sans">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={prev}
            className="absolute rounded-full shadow bg-white text-gray-800 hover:bg-[#1A7E91] top-1/2 mt-3 left-14 transform -translate-y-1/2"
          >
            <ChevronLeft size={30} className="hover:invert" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 mt-3 right-14 transform -translate-y-1/2 rounded-full shadow bg-white text-gray-800 hover:bg-[#1A7E91]"
          >
            <ChevronRight size={30} className="hover:invert" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
