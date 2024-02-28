import React from "react";
import { officeWalls } from "../../constants";

const OfficeWalls = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Let your office walls do the talking
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Your walls are one of the largest areas of your store or office.
              Make the most of them with customizable signage.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-start justify-center relative overflow-hidden gap-3">
            {officeWalls.map((post, index) => (
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
                  <span className="text-[#0A806B]">$5.09</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeWalls;
