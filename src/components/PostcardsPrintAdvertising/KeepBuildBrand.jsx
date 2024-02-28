import React from "react";
import { buildBrand } from "../../constants";

const KeepBuildBrand = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8 px-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 montserrat">
              Keep building your business brand
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              From signage to packaging, create a standout look with details
              that get remembered.
            </p>
          </div>
          <div className="relative flex flex-wrap overflow-hidden gap-3">
            {buildBrand.map((post, index) => (
              <div
                key={index}
                className="py-3 hover-transition my-4 w-full max-w-[380px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
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
          <div className="px-2 py-5 w-full max-w-[900px]">
            <h1 className="font-bold text-[28px] inter">
              Step up your branding game with custom marketing materials for
              small business.
            </h1>
            <div className="py-5">
              <div className="space-y-2">
                <p className="inter text-[17px]">
                  Looking for a way to build brand recognition and attract new
                  customers? Custom marketing products are a great way to set
                  your business up for success. Whether you’re running a
                  restaurant, a gift shop or work in real estate, you can find
                  the right product to get the word out.
                </p>
                <p className="inter text-[17px]">
                  Come prepared to business meetings, tradeshows, events and
                  more with a matching set of marketing materials that'll set
                  you apart from the competition. Vistaprint also offers you a
                  selection of fully customizable packaging materials so you can
                  create a cohesive look and give customers a unique unboxing
                  experience
                </p>
                <p className="inter text-[17px]">
                  Explore our designs available for a wide range of industries
                  and customize to make them your own. Whether you’re creating a
                  small postcard or detailed brochure, we’re here to make the
                  process as simple as possible – with expert design help ready
                  if you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeepBuildBrand;
