import React from "react";
import { ctaimgone } from "../assets";
import { NavLink } from "react-router-dom";

const CTAOne = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full lg:mt-32">
        <div className="flex justify-evenly md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 border items-center px-2">
          <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[500px] text-start md:py-0 py-6 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white montserrat">
              We Print on Everything!
            </h1>

            <p className="text-[15px] text-white font-normal pb-2 montserrat">
              Copies, books, magazines, and anything else you can name, we can
              print on all of them! Whatever your requirements are, know that
              Codex Prints has all the printing solutions for your individual
              and business needs.
            </p>
            <NavLink to="/signin">
              <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
                Create an account
              </button>
            </NavLink>
          </div>
          <div className="">
            <img
              src={ctaimgone}
              className="w-full lg:mt-[-7rem]"
              alt="call to action"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAOne;
