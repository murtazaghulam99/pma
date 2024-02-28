import React from "react";
import { shopByBusinessUse } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";

const ShopByBusinessUse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 montserrat">
              Shop by business use
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Check out creative ways you can use business cards to connect with
              customers.
            </p>
          </div>
          <div className="relative overflow-hidden gap-3">
            <Slider {...settings}>
              {shopByBusinessUse.map((post, index) => (
                <div
                  key={index}
                  className="py-3 hover-transition my-3 w-full max-w-[400px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
                >
                  <img
                    src={post.image}
                    className="px-1 rounded-2xl"
                    alt="social post"
                  />
                  <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                    NFC Cards with VistaConnect
                  </h1>
                  <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                    Custom business cards that link online via smart technology.
                  </p>
                  <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                    100 starting at $30.99
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
      </section>
    </>
  );
};

export default ShopByBusinessUse;
