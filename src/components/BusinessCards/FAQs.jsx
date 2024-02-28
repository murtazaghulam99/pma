import React, { useState } from "react";
import { faqData } from "../../constants";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="container px-5 mx-auto w-full max-w-[900px] my-8">
        <h1 className="font-bold text-[28px] inter">
          Frequently Asked Questions
        </h1>
        {faqData.map((faq, index) => (
          <div key={index} className="pt-5 pb-3 border-b-2">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h1
                className={`text-[17px] inter pb-5 ${
                  activeIndex === index ? "font-bold" : "font-medium"
                }`}
              >
                {faq.question}
              </h1>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-1000 overflow-hidden ${
                activeIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-5">
                {faq.answer.map((paragraph, idx) => (
                  <p key={idx} className="inter text-[17px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FAQs;
