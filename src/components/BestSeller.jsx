import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bestSellerItems } from "../constants";
import { ChevronLeft, ChevronRight } from "react-feather";

const BestSeller = () => {
  const [numItemsPerPage, setNumItemsPerPage] = useState(3);
  const [scrollX, setScrollX] = useState(0);
  const itemWidth = 260;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const itemsPerPage = screenWidth >= 768 ? 5 : 2;
      setNumItemsPerPage(itemsPerPage);
      setScrollX(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: numItemsPerPage,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    const newX = scrollX + itemWidth * numItemsPerPage;
    setScrollX(Math.min(newX, 0));
  };

  const handleNext = () => {
    const newX = scrollX - itemWidth * numItemsPerPage;
    const maxScroll = -itemWidth * (bestSellerItems.length - numItemsPerPage);
    setScrollX(Math.max(newX, maxScroll));
  };

  return (
    <section className="w-full container mx-auto relative">
      <h1 className="font-bold text-[24px] py-6 px-2 pl-6 montserrat">
        Our Best Sellers
      </h1>
      <div className="relative overflow-hidden">
        <Slider {...settings} style={{ transform: `translateX(${scrollX}px)` }}>
          {bestSellerItems.map((item, index) => (
            <div key={index} className="py-2 mr-4 px-2">
              <img
                src={item.image}
                className="w-full max-w-[230px] hover-transition"
                alt="best sellers"
              />
              <p className="pl-6 pt-3 text-[16px] inter">{item.text}</p>
            </div>
          ))}
        </Slider>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 text-gray-800 hover:bg-[#1A7E91] transform -translate-y-1/2 bg-white rounded-full shadow p-2 "
        >
          <ChevronLeft size={24} className="hover:invert" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-[#1A7E91] "
        >
          <ChevronRight size={24} className="hover:invert" />
        </button>
      </div>
    </section>
  );
};

export default BestSeller;
