import React from "react";
import { shopByShape } from "../../constants";

const ShopByShape = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8 px-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
            Explore all your card options
          </h1>
          <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
            From standard to standout papers, get the look you want.
          </p>
          <div className="relative lg:justify-start justify-center overflow-hidden flex-wrap flex xl:gap-3 gap-8">
            {shopByShape.map((post, index) => (
              <div
                key={index}
                className="py-3 hover-transition my-3 w-full max-w-[340px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
                  alt="social post"
                />
                <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                  Standard
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Rectangular dimensions give you a recognizable look.
                </p>
                <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                  100 starting at $17.99
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByShape;
