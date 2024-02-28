import React from "react";
import { eventTradeshow } from "../../constants";

const EventTradeshow = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8 px-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Event or tradeshow coming up?
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Your booth is your first interaction with event-goers. Make it a
              good one with eye-catching tablecloths and signs.
            </p>
          </div>
          <div className="flex md:justify-start justify-center flex-wrap relative overflow-hidden gap-3">
            {eventTradeshow.map((post, index) => (
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

export default EventTradeshow;
