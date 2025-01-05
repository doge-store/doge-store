import { Link } from "react-router-dom";
import { neverWorry } from "../../data/data";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import img from "/images/never_worry_img.png";

function NerverWorrySection() {
  return (
    <section className=" bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center max-lg:order-2 max-lg:stp-15 overflow-hidden ">
          <FadeLeft>
            <img
              src={img}
              alt=""
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </FadeLeft>
        </div>

        <div className="xxl:col-start-7 col-span-12 lg:col-span-6">
          <FadeRight>
            <h1 className="display-4 ">
              Never Worry About Your Accounting Again
            </h1>
            <p className="pt-6 text-bodyText pb-6 xl:pb-8">
              Experience peace of mind with AccuPay. Our comprehensive
              accounting services ensure accuracy and compliance, so you can
              focus on growing your business
            </p>
            <div className="flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12">
              {neverWorry.map(({ id, title, desc, icon }) => (
                <div key={id} className="flex justify-start items-center gap-4">
                  <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white">
                    {icon}
                  </div>
                  <div className="">
                    <h4 className="heading-4">{title}</h4>
                    <p className=" text-bodyText pt-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to={"/contact"} className="bg-s2 rounded-full py-3 px-4">
              {" "}
              Contact Us
            </Link>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default NerverWorrySection;
