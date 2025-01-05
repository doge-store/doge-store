import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { AiOutlineMinus } from "react-icons/ai";
import { faqs } from "../../data/data";
import SectionHeadingCenter from "../global/SectionHeadingCenter";
import faqIllus from "/images/faq_illus.png";
import sliceIcon from "/images/sliceIcon.png";

function FaqSection() {
  const [show, setShow] = useState(0);
  return (
    <section className="stp-30 sbp-30 relative ">
      <img
        src={sliceIcon}
        alt=""
        className="absolute top-0 left-0 -rotate-90 max-md:h-[80px]"
      />
      <div className="container ">
        <SectionHeadingCenter
          sectionName="FAQS"
          sectionTitle="Frequently asked questions answers"
          sectionDesc="Explore our FAQ section for quick answers to common queries about our Accounting & Payroll Processing Services. "
        />
        <div className="grid grid-cols-12 stp-15 max-xl:gap-6">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden">
            <img
              src={faqIllus}
              alt=""
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-start-7 flex flex-col gap-4 md:gap-6">
            {faqs.map(({ id, question, answer }, idx) => (
              <div
                key={id}
                className={`flex justify-between items-start gap-2 p-3 md:p-5 xl:p-6 border ${
                  show === idx
                    ? "border-mainTextColor bg-s2"
                    : "border-strokeColor"
                } duration-500 cursor-pointer`}
                onClick={() => setShow(idx === show ? NaN : idx)}
              >
                <div className="">
                  <h4 className="heading-4">{question}</h4>
                  <AnimateHeight height={show === idx ? "auto" : 0}>
                    <p className="pt-5">{answer}</p>
                  </AnimateHeight>
                </div>
                <div className="relative">
                  <AiOutlineMinus />
                  <span
                    className={`absolute top-0 right-0 ${
                      show === idx
                        ? "invisible duration-500"
                        : " -rotate-[450deg] "
                    } duration-700`}
                  >
                    <AiOutlineMinus />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
