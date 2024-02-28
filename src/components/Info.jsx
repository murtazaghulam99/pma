import React from "react";

const Info = () => {
  return (
    <>
      <section className="w-full mx-auto relative">
        <div className="bg-[#F8F8F8] w-full md:py-24 py-18">
          <div className="flex justify-around flex-wrap space-x-3 lg:flex-nowrap md:py-0 py-16 items-center px-2">
            <div className="text-start space-y-5 w-full max-w-[520px] px-2">
              <h1 className="font-bold leading-none md:text-[44px] text-[28px] text-black inter">
                Codex Prints <br /> Printing All Your Needs
              </h1>
              <p className="md:text-[17px] text-[14px] text-black pb-5 inter">
                At Codex Prints, we have but one goal - to become a single
                source printing solution for individuals and businesses all over
                the world. We aim to offer the most reliable, affordable, and
                on-time experience in the industry and will always go the extra
                mile to ensure 100% customer satisfaction.
              </p>
            </div>
            <div className="text-start w-full max-w-[500px]">
              <h1 className="font-bold text-[18px] text-black inter">
                Quick Turnaround
              </h1>
              <p className="text-[17px] text-black pb-5 inter">
                When you work with our in-house pros, you don’t have to wait
                around too much to get your vision turned into digital designs.
                Once you approve, the printing begins immediately.
              </p>
              <h1 className="font-bold text-[18px] text-black inter">
                One Design for All
              </h1>
              <p className="text-[17px] text-black pb-5 inter">
                You bet our advanced machinery can easily print the same designs
                in the same way on different material, fabric, and objects.
              </p>
              <h1 className="font-bold text-[18px] text-black inter">
                Satisfaction Guaranteed
              </h1>
              <p className="text-[17px] text-black pb-5 inter">
                We can guarantee one thing for sure – you won’t ever regret
                hiring our printing services. We haven’t failed a client yet,
                and we aren’t about to start now.
                <a
                  className="underline inter hover:text-[#1A7E91] hover:no-underline pl-1"
                  href="#"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
