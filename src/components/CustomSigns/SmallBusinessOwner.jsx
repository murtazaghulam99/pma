import React from "react";
import { smallBusinessOwners } from "../../constants";

const SmallBusinessOwner = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Small business owner favorites
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              These are bestsellers for a reason. Stock up on some of our
              most-loved business signs.
            </p>
          </div>
          <div className="flex md:justify-start justify-center flex-wrap relative overflow-hidden gap-3">
            {smallBusinessOwners.map((post, index) => (
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
                  Banners
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Hang these attention-grabbers outside your store or event.
                </p>
                <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                  2 starting at <span className="line-through">$8.49</span>
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

export default SmallBusinessOwner;
