import React from "react";
import { ctaimg } from "../assets";

const CTAThree = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full">
        <div className="flex justify-center flex-wrap lg:flex-nowrap md:py-0 py-6 items-center px-2">
          <div className="flex mx-auto py-3">
            <img
              src={ctaimg}
              className="w-full max-w-[700px] hover-transition"
              alt="call to action"
            />
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center mb-6 w-full max-w-[600px] mx-auto text-center md:pb-0 pb-12">
            <h1 className="font-bold md:text-[30px] inter text-[22px] text-white">
              Join us to win exciting prizes and deals!
            </h1>
            <p className="md:text-[20px] inter font-semibold text-[14px] text-white pb-5">
              Get yourself a 15% discount just by signing up for our emails and
              newsletters.
            </p>
            <input
              type="text"
              name="subscription"
              className="outline-none placeholder:italic inter rounded-lg w-full font-extralight py-1.5 px-3"
              placeholder="Subscription email"
            />
            <p className="text-[14px] text-white font-light inter">
              Yes, I'd like to receive special offer emails from our website ,
              as well as news about products, services and my designs in
              progress. Read our
            </p>
            <a
              href="#"
              className="underline text-white text-[14px] font-light pb-3 inter"
            >
              Privacy and Cookie policy.
            </a>
            <button className="hover-transition py-2 px-14 bg-white hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAThree;
