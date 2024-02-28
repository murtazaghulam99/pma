import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { socialMediaPosts } from "../constants";
import { ChevronLeft, ChevronRight } from "react-feather";

const SocialmediaPost = () => {
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
    <section className="w-full container mx-auto relative py-8">
      <h1 className="font-bold text-[24px] mt-7 pl-3 px-2 montserrat">
        You Design It, We Print It!
      </h1>
      <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
        Create your own unique design and watch how you convert your digital
        ideas into reality.
      </p>
      <div className="relative overflow-hidden">
        <Slider {...settings}>
          {socialMediaPosts.map((post, index) => (
            <div key={index} className="py-3 px-1">
              <img
                src={post.image}
                className="w-full max-w-[240px] hover-transition"
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
    </section>
  );
};

export default SocialmediaPost;
