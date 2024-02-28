import React from "react";
import { turnHeads } from "../../constants";

const TurnHeads = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8 px-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Turn heads on the road or in your store
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Every window, door (even the floor!) is a chance to get noticed.
              Take advantage with these durable options.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-start justify-center relative overflow-hidden gap-3">
            {turnHeads.map((post, index) => (
              <div
                key={index}
                className="py-3 my-5 hover-transition w-full max-w-[380px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
                  alt="social post"
                />
                <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                  Car Magnets
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Get your errands done and your message noticed.
                  Repositionable.{" "}
                </p>
                <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                  2 starting at <span className="line-through">$8.49 </span>
                  <span className="text-[#0A806B] pl-1">$5.09</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TurnHeads;
