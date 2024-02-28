import React from "react";
import { exploreCardOptions } from "../../constants";

const ExploreCardOptions = () => {
  return (
    <>
      <section className="w-full container ml-auto relative py-8">
        <div className="w-full max-w-[1200px] ml-auto">
          <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
            Explore all your card options
          </h1>
          <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
            From standard to standout papers, get the look you want.
          </p>
          <div className="flex flex-wrap relative overflow-hidden gap-3">
            {exploreCardOptions.map((post, index) => (
              <div
                key={index}
                className="py-3 my-5 hover-transition w-full max-w-[380px] h-full max-h-[520px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
                  alt="social post"
                />
                <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                  Postcards
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Hand out, mail or add these little attention-getters to
                  packaging.
                </p>
                <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                  25 starting at $14.99
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreCardOptions;
