import React from "react";
import { shopPapersAndTextures } from "../../constants";

const ShopPapersAndTextures = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="w-full max-w-[1200px] ml-auto">
          <div>
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Shop papers & textures
            </h1>

            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Get creative with this collection of attention-grabbing papers and
              materials.
            </p>
          </div>

          <div className="relative lg:justify-start justify-center overflow-hidden flex flex-wrap xl:gap-3 gap-5">
            {shopPapersAndTextures.map((post, index) => (
              <div
                key={index}
                className="py-3 hover-transition my-3 w-full max-w-[350px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
                  alt="social post"
                />
                <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                  Matte
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  Coated and classic, with a smooth, shine-free finish.
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

export default ShopPapersAndTextures;
