import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onSaleItems } from "../constants";
import { ChevronLeft, ChevronRight } from "react-feather";

const OnSale = () => {
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
      <h1 className="font-bold text-[24px] py-3 mt-6 pl-3 px-2">
        What's On Sale?
      </h1>
      <Slider {...settings} className="flex justify-around mx-auto">
        {onSaleItems.map((item, index) => (
          <div key={index}>
            <div className="py-3 px-1">
              <img
                src={item.image}
                className="w-full max-w-[250px] hover-transition"
                alt="on sale item"
              />
              <p className="pl-2 pt-3 text-[16px] inter">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 hover:bg-[#1A7E91] bg-white rounded-full shadow p-2 z-10"
        style={{ zIndex: 10 }}
        onClick={() => slider.slickPrev()}
      >
        <ChevronLeft size={24} className="hover:invert" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 hover:bg-[#1A7E91] bg-white rounded-full shadow p-2 z-10"
        style={{ zIndex: 10 }}
        onClick={() => slider.slickNext()}
      >
        <ChevronRight size={24} className="hover:invert" />
      </button>
    </section>
  );
};

export default OnSale;
