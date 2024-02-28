import React from "react";
import { businesscardctaone } from "../../assets";
import { NavLink } from "react-router-dom";

const CTAOne = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full py-3 mt-20">
        <div className="w-full max-w-[1300px] ml-auto">
          <div className="flex justify-around flex-wrap lg:flex-nowrap md:py-0 py-3 items-center px-2">
            <div className="flex mx-auto">
              <img
                src={businesscardctaone}
                className="w-full"
                alt="call to action"
              />
            </div>
            <div className="space-y-3 flex flex-col items-start justify-start w-full max-w-[600px] mx-auto text-start md:pb-6 pb-12 px-2">
              <h1 className="font-bold md:text-[40px] text-[22px] text-white montserrat md:pt-0 pt-5">
                Stand out with a custom, budget- friendly design.
              </h1>
              <p className="text-[17px] text-white font-normal montserrat pb-2">
                Give your business card a professional finish. Fill out a quick
                brief to receive concepts from our in-house designer within 24
                hours.
              </p>
              <NavLink to="/signin">
                <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
                  Request your free Kit
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAOne;
