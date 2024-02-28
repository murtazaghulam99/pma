import React from "react";
import { NavLink } from "react-router-dom";
import { customsignctatwo } from "../../assets";

const CTATwo = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full py-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="flex justify-evenly md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 items-center px-2">
            <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[600px] text-start md:py-0 py-6 px-2">
              <h1 className="font-bold md:text-[40px] text-[22px] text-white inter">
                Business related Supplies
              </h1>
              <p className="text-[17px] text-white font-normal pb-2 inter">
                Gear up for success in your Business with signs, supplies and
                advertising from the campaign trail to the afterparty.
              </p>
              <NavLink to="#">
                <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
                  Explore
                </button>
              </NavLink>
            </div>
            <div className="">
              <img
                src={customsignctatwo}
                className="w-full"
                alt="call to action"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTATwo;
