import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { featuresCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function Features() {
  return (
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">Features</p>
            <h1 className="display-4  pt-4 ">
              Blockchain solution for your business
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
            DOGE is own bank in a pocket
            benefits and equity to working visas and equipment. It’s one
            platform made to get you set up.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {featuresCard.map(({ id, icon, name, desc }, idx) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 " key={id}>
              <StaggerEffect id={idx}>
                <div className="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                  <div className="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500">
                    {icon}
                  </div>
                  <h4 className="heading-4 pb-5">{name}</h4>
                  <p className="text-bodyText pb-6">{desc}</p>
                  <Link
                    to={"/contact"}
                    className="flex justify-start items-center gap-2 font-medium"
                  >
                    Learn more <GoArrowRight />
                  </Link>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
