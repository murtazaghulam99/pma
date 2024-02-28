import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { businesscardbanner } from "../../assets";
import Aside from "./Aside";

const Banner = () => {
  return (
    <>
      <section className="bg-[#1A7E91] px-5">
        <Aside />
        <div className="w-full max-w-[1200px] ml-auto px-2">
          <div className="flex justify-around md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 items-center px-2">
            <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[620px] text-start md:py-0 py-6 px-2">
              <h1 className="font-bold md:text-[54px] text-[22px] text-white montserrat">
                BUSINESS CARDS
              </h1>
              <p className="text-[17px] text-white font-normal pb-2 inter">
                THIS WEEK ONLY: Free standard shipping on all business cards.
                Enter code at checkout. Deal cannot be combined with other
                offers. Ends Feb. 19 | Code: SHIPBC
              </p>
              <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-3 lg:justify-center items-start justify-start lg:space-x-3 space-x-0 pt-3">
                <NavLink to="/signin">
                  <button className="hover-transition py-2 px-10 bg-black text-[14px] hover:bg-black/80 transition-colors inter text-white rounded-full font-semibold">
                    Browse designs
                  </button>
                </NavLink>
                <NavLink to="/signin">
                  <button className="hover-transition py-2 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    Upload design
                  </button>
                </NavLink>
                <NavLink to="#">
                  <button className="hover-transition py-2 px-14 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    Reorder
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="">
              <img
                src={businesscardbanner}
                className="w-full max-w-[440px]"
                alt="call to action"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
