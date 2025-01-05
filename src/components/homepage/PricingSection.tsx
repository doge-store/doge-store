import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { pricing } from "../../data/data";
import SectionHeadingCenter from "../global/SectionHeadingCenter";

const button = ["Monthly", "Yearly"];

function PricingSection({ isBgWhite }: { isBgWhite?: boolean }) {
  const [right, setRight] = useState(false);
  const [buttonToggle, setButtonToggle] = useState("Monthly");
  return (
    <section className={`${isBgWhite ? "" : "bg-softBg1"} stp-30 sbp-30`}>
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="  max-w-[600px] text-center flex justify-center items-center flex-col">
            <SectionHeadingCenter
              sectionName="Pricing"
              sectionTitle="Our Pricing"
              sectionDesc="At Accupay, we believe in providing clear and flexible pricing
          options tailored to your business needs."
            />
            <div
              className={`bg-mainTextColor mt-8 py-3 px-6 rounded-full relative after:absolute after:bg-s2 after:top-0 after:bottom-0  ${
                !right ? "after:left-[-1px]" : " after:left-1/2"
              } 
              after:w-1/2 after:rounded-full after:duration-500`}
            >
              <div className="relative z-10 flex gap-14">
                {button.map((item, idx) => (
                  <button
                    key={idx}
                    className={` ${
                      buttonToggle === item
                        ? " text-mainTextColor"
                        : " text-white"
                    } duration-500`}
                    onClick={() => {
                      setButtonToggle(item);
                      setRight(item === "Yearly");
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          {pricing.map(
            ({
              id,
              icon,
              planName,
              desc,
              isPopular,
              monthlyPrice,
              features,
            }) => (
              <div
                key={id}
                className="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative"
              >
                {isPopular && (
                  <div className="absolute top-9 py-1 right-4 uppercase text-[13px] text-white bg-s1 rotate-90 px-4 flex justify-center items-center ">
                    <p className="pr-2">popular</p>
                    <span className="rotate-90 text-7xl !leading-none absolute right-0 pb-16 group-hover:text-s2 duration-700">
                      <MdArrowDropDown />
                    </span>
                  </div>
                )}
                <div className="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl border-strokeColor group-hover:border-mainTextColor rounded-full">
                  {icon}
                </div>
                <h3 className="heading-3 pt-5 pb-4">{planName}</h3>
                <p className="text-bodyText pb-8">{desc}</p>
                <p className="pb-6">
                  <span className="display-4">
                    ${!right ? monthlyPrice : Number(monthlyPrice) * 12}
                  </span>{" "}
                  <span className="text-bodyText">- monthly</span>
                </p>
                <ul className="text-bodyText flex flex-col gap-5 pb-8">
                  {features.map((item, idx) => (
                    <li key={idx} className=" inline-flex gap-3">
                      {" "}
                      <span className="bg-p1 group-hover:bg-mainTextColor duration-500 text-white rounded-full text-2xl">
                        <IoIosCheckmark />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={"/contact"}
                  className="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
                >
                  Get Started <IoArrowForward className="text-xl" />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
