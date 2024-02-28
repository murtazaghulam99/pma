import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brandServiceItems } from "../constants";
import { ChevronLeft, ChevronRight } from "react-feather";

const BuildBrand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
    <section className="w-full container mx-auto relative">
      <h1 className="font-bold text-[24px] py-6 mt-6 pl-3 px-2 montserrat">
        Premium Printing on Your Budget
      </h1>
      <div className="relative overflow-hidden">
        <Slider {...settings} className="">
          {brandServiceItems.map((item, index) => (
            <div key={index} className="py-3">
              <img
                src={item.image}
                className="w-full max-w-[230px] hover-transition px-2"
                alt="product image"
              />
              <p className="pl-2 pt-3 text-[17px] inter">{item.text}</p>
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
    </section>
  );
};

export default BuildBrand;
