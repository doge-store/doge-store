import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { awardsData } from "../../data/data";
import starElement from "/images/award_element.png";
import awardIcon from "/images/award_icon.png";

function AwardsSection() {
  const [modal, setModal] = useState("");
  const [text, setText] = useState("");
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 ">
        <div className="flex flex-col justify-star items-start col-span-12 min-[500px]:col-span-6 lg:col-span-5 max-[500px]:pb-15">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">Our Awards</p>
          <h2 className="display-4 pt-3">Award & Achievement</h2>
          <div className="  flex flex-col justify-end items-start lg:items-end relative w-full">
            <img
              src={starElement}
              alt=""
              className="absolute min-[500px]:-bottom-14 lg:bottom-0 min-[500px]:right-0 xl:right-20 bottom-0 right-4"
            />
            <p className="text-[60px] md:text-[100px] xl:text-[150px] font-bold !leading-none text-outline -rotate-12 min-[500px]:-rotate-45 min-[500px]:pt-28 pt-8 lg:pt-40">
              Award
            </p>
            <p className="text-s1 text-[60px] md:text-[100px] xl:text-[150px] font-bold leading-none -rotate-12 min-[500px]:-rotate-45 min-[500px]:max-lg:pt-6  lg:pr-0 xl:pr-11">
              Award
            </p>
          </div>
        </div>
        <div className="col-span-12 min-[500px]:col-span-6 lg:col-start-7 flex flex-col justify-start items-start gap-6 lg:gap-10 relative">
          {awardsData.map(({ id, name, desc }) => (
            <div
              className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative"
              key={id}
              onMouseEnter={() => {
                setModal(id);
                setText(name);
              }}
              onMouseLeave={() => setModal("")}
            >
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  {name}
                </p>
                <p>{desc}</p>
              </div>
              <Link
                to={"#"}
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500"
              >
                <PiArrowUpRight />
              </Link>
              <div
                className={`absolute top-4 lg:top-0 left-10 xl:left-1/2  w-[150px] lg:w-[250px] bg-s2 py-10  flex flex-col justify-center items-center border border-mainTextColor ${
                  modal === id
                    ? "visible opacity-100 z-10 translate-y-4"
                    : "invisible opacity-0 "
                } -translate-y-4 duration-500`}
              >
                <img src={awardIcon} alt="" />
                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  {text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
