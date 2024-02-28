import React from "react";
import { arrow, country, footerlogo } from "../assets";
import {
  footerContent,
  letUsHelpItems,
  ourCompanyItems,
  socialMediaIcons,
} from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#151515] bg-cover w-full md:py-20 py-6 px-5">
        <div className="flex justify-between flex-wrap xl:flex-nowrap md:py-0 py-16 space-y-8 items-center px-2">
          <div className="text-start w-full max-w-[320px] space-y-3">
            <img src={footerlogo} alt="" />
            <h1 className="font-medium text-[18px] text-[#F8F8F8] underline hover:no-underline cursor-pointer transition-colors hover:text-[#1A7E91]">
              Absolutely Guaranteed.
            </h1>
            <p className="text-[14px] text-[#F8F8F8] pb-5">
              Every time. Any reason. Or we'll make it right.
            </p>
          </div>
          <div className="flex justify-start lg:justify-around w-full md:max-w-[700px] space-x-6">
            <div className="text-start space-y-3">
              <h1 className="font-semibold text-[14px] text-white">
                Let Us Help
              </h1>
              <ul className="list-none text-[14px] text-white space-y-1">
                {letUsHelpItems.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer transition-colors hover:text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-start space-y-3">
              <h1 className="font-semibold text-[14px] text-white">
                Our Company
              </h1>
              <ul className="list-none text-[14px] text-white space-y-1">
                {ourCompanyItems.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer transition-colors hover:text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-12 xl:pt-40">
            {socialMediaIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.image}
                className="hover:invert cursor-pointer transition-colors hover-transition w-full max-w-[30px]"
                alt="social links"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-black bg-cover flex flex-col md:flex-row justify-between w-full py-10 px-5">
        <div className="md:w-1/1 space-y-2">
          <ul className="list-none flex text-white text-[12px] gap-3 font-light md:flex-row flex-col">
            {footerContent.slice(0, 5).map((item, index) => (
              <li
                key={index}
                className="underline hover:no-underline cursor-pointer transition-colors hover:text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
          {footerContent.slice(5).map((item, index) => (
            <p key={index} className="text-white font-light text-[12px]">
              {item}
            </p>
          ))}
        </div>

        <div className="flex justify-center space-x-2 md:justify-end items-center mt-8 md:mt-0">
          <img src={country} width={35} height={35} alt="country" />
          <img src={arrow} alt="dropdown arrow" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
