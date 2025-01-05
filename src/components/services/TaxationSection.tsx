import { taxationFeatures } from "../../data/data";
import FadeLeft from "../animation/FadeLeft";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/taxation_services_img.png";

function TaxationSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5">
          <FadeLeft>
            <div className=" flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white ">
                Taxation
              </p>
              <h2 className="display-4 pt-4 pb-6">
                AccuPay's Taxation Expertise
              </h2>
              <p className=" text-bodyText pb-10">
                Feel neglected by your accountant? Experience the attentive and
                personalized service you deserve with AccuPay.
              </p>
              <div className="flex justify-center items-center w-full overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="hover:scale-110 duration-500 w-full h-full"
                />
              </div>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center">
          {taxationFeatures.map(({ id, title, desc, icon }, idx) => (
            <div className="" key={id}>
              <StaggerEffect id={idx}>
                <div key={id} className="flex justify-start items-start gap-4">
                  <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 ">
                    {icon}
                  </div>
                  <div className="">
                    <h4 className="heading-4">{title}</h4>
                    <p className=" text-bodyText pt-3">{desc}</p>
                  </div>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaxationSection;
