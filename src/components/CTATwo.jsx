import React from "react";
import { ctaimgtwo } from "../assets";
import { NavLink } from "react-router-dom";

const CTATwo = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full py-5 mt-20">
        <div className="flex justify-around flex-wrap lg:flex-nowrap md:py-0 py-3 items-center px-2">
          <div className="flex mx-auto">
            <img
              src={ctaimgtwo}
              className="w-full lg:mt-[-7rem]"
              alt="call to action"
            />
          </div>
          <div className="space-y-3 flex flex-col items-start justify-start w-full max-w-[500px] mx-auto text-start md:pb-6 pb-12 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white montserrat md:pt-0 pt-5">
              Just Name Your Requirements!
            </h1>
            <p className="text-[15px] text-white font-normal montserrat pb-2">
              Need your brand logo and name printed on plastic bottles or maybe
              you need to print multiple brand catalogs to show off your
              portfolio? Whatever the case may be, Codex Prints has you covered.
            </p>
            <NavLink to="/signin">
              <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
                Create an account
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTATwo;
