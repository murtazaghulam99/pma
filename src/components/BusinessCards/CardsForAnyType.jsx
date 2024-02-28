import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { cardsForAnytype } from "../../constants";

const CardsForAnyType = () => {
  const [curr, setCurr] = useState(cardsForAnytype.length - 10);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 50000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="w-full bg-[#E1EEF1] relative z-0 px-2">
        <div className="w-full container mx-auto relative z-0 px-2">
          <div className="pb-6 w-full max-w-[1200px] ml-auto">
            <div>
              <h1 className="font-bold text-[28px] py-6 montserrat">
                Cards for any type of business
              </h1>
              <p className="text-[17px] inter">
                Looking for something specific? Check out these on-trend
                templates for top industries.
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold inter">
                See more business card templates
              </p>
            </div>
            <div>
              <Slider ref={sliderRef} {...settings}>
                {cardsForAnytype.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col justify-center items-center my-5"
                  >
                    <img
                      src={item.image}
                      className="hover-transition max-w-full max-h-full rounded-full overflow-hidden mx-auto w-[250px] h-[250px] flex justify-center items-center"
                      alt="product image"
                    />
                    <p className="text-center font-bold pt-3 text-[17px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white text-gray-800  hover:bg-[#1A7E91] absolute top-1/2 mt-3 left-2 transform -translate-y-1/2"
        >
          <ChevronLeft size={30} className="hover:invert" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white text-gray-800  hover:bg-[#1A7E91] absolute top-1/2 mt-3 right-2 transform -translate-y-1/2"
        >
          <ChevronRight size={30} className="hover:invert" />
        </button> */}
      </section>
    </>
  );
};

export default CardsForAnyType;
