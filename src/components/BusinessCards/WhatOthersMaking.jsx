import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { whatOthersMaking } from "../../constants";

const WhatOthersMaking = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="py-5">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Cut through the noise with a one-of-a-kind business card design.
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Want to make a standout first impression at events, meetings and
              more? Create business cards that you can confidently hand out to
              new customers and prospects. Pass them around at events to
              introduce yourself and your business, or add them to goodie bags,
              folders and more.
            </p>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              And with our selection of templates, business card printing
              doesn’t need to be time- consuming or difficult. Browse a variety
              of styles and customization options to find a business card design
              for your brand. You’ll also be able to add your contact info, a QR
              code, your brick- and-mortar location and more, in a few simple
              steps. So get creative and ready to network.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              See what other customers are making.
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Upload a photo with your new product. Tag @CodexPrints for a
              chance to be featured.
            </p>
          </div>
          <div className="relative overflow-hidden gap-3">
            <Slider {...settings}>
              {whatOthersMaking.map((post, index) => (
                <div
                  key={index}
                  className="py-3 w-full max-w-[400px] px-3 transition-colors outline-none rounded-2xl cursor-pointer"
                >
                  <img
                    src={post.image}
                    className="px-1 hover-transition rounded-2xl"
                    alt="social post"
                  />
                </div>
              ))}
            </Slider>
            <button
              className="absolute left-0 top-1/2 text-gray-800 hover:bg-[#1A7E91] transform -translate-y-1/2 bg-white rounded-full shadow p-2 "
              style={{ zIndex: 1 }}
              onClick={() => slider.slickPrev()}
            >
              <ChevronLeft size={24} className="hover:invert" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-[#1A7E91] "
              style={{ zIndex: 1 }}
              onClick={() => slider.slickNext()}
            >
              <ChevronRight size={24} className="hover:invert" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatOthersMaking;
