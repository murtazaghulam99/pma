import React from "react";
import { cardOptions } from "../../constants";
import { NavLink } from "react-router-dom";

const CardOptions = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8 px-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <h1 className="font-bold text-[28px] mt-0 pl-3 px-2 inter">
            Explore all your card options
          </h1>
          <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
            From standard to standout papers, get the look you want.
          </p>
          <div className="relative lg:justify-start justify-center flex overflow-hidden flex-wrap xl:gap-3 gap-8">
            {cardOptions.map((post, index) => (
              <div
                key={index}
                className="py-3 hover-transition w-full max-w-[340px] my-3 px-3 border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
                  alt="social post"
                />
                <h1 className="font-bold text-[24px] mt-4 pl-3 px-2 inter">
                  Traditional
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Our tried-and-true cards, available in a variety of papers,
                  finishes and shapes.
                </p>
                <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                  100 starting at $17.99
                </p>
                <NavLink to="#">
                  <button className="hover-transition border border-[#AFD2D9] hover:bg-[#AFD2D9]/60  py-4 px-8 text-[14px]  transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    See Options
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardOptions;
