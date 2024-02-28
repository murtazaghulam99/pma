import React from "react";
import { moreWays } from "../../constants";

const MoreWays = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="w-full max-w-[1180px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 montserrat">
              More ways to get your logo seen
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              From in-store displays to street marketing and more, these
              customizable products are ready to work for you.
            </p>
          </div>
          <div className="relative flex flex-wrap py-3 overflow-hidden gap-3">
            {moreWays.map((post, index) => (
              <div
                key={index}
                className="py-3 hover-transition w-full max-w-[380px] h-full max-h-[520px] max px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl w-full"
                  alt="social post"
                />
                <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                  Gift Card Holders
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Make receiving your gift cards even more special with a custom
                  holder.
                </p>
                <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                  50 starting at $89.9950 starting at $19.99
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreWays;
