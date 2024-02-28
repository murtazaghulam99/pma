import React from "react";
import { values } from "../constants";

const Value = () => {
  return (
    <>
      <section className="w-full container mx-auto relative px-5">
        <div className="flex mx-auto items-center justify-evenly px-2 md:gap-2 gap-5 md:flex-row flex-col my-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="hover-transition flex items-center justify-center w-full max-w-[240px]  hover:border-[#1A7E91] transition-colors border rounded-2xl space-x-5 px-6 py-3"
            >
              <img
                src={value.image}
                className="w-full max-w-[40px]"
                alt="values"
              />
              <p className="text-[13px] inter">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Value;
