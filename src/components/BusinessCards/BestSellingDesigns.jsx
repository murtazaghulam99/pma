import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { bestSellingDesigns } from "../../constants";
import { arrowblack } from "../../assets";

const BestSellingDesigns = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-[#1A7E91]/10">
        <div className="w-full  container mx-auto relative py-8">
          <div className="w-full max-w-[1200px] ml-auto">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
              <div className="w-full md:w-auto">
                <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 montserrat">
                  Bestselling designs
                </h1>
                <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
                  See popular designs that our customers are loving right now.
                </p>
              </div>
              <div className="flex gap-2 items-center justify-center md:justify-end w-full md:w-auto hover:underline md:py-0 py-5">
                <p className="font-semibold text-[14px]">See more designs </p>
                <img src={arrowblack} className="w-6 h-6" alt="" />
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Slider {...settings} className="px-3 gap-3">
                {bestSellingDesigns.map((post, index) => (
                  <div
                    key={index}
                    className="px-10 mr-2 py-10 w-full max-w-[350px] flex flex-col border gap-3 rounded-3xl bg-white space-y-5"
                  >
                    <img
                      src={post.image}
                      className="hover-transition rounded-lg"
                      alt="social post"
                    />
                    <p className="text-[14px] inter font-bold">
                      Standard (3.5" x 2")
                    </p>
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
        </div>
      </section>
    </>
  );
};

export default BestSellingDesigns;
