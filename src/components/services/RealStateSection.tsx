import { realStateFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/real_state_section_img.png";

function RealStateSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">
            Real-estate
          </p>
          <h2 className="display-4 pt-4 pb-6">
            Real estate payroll, real simple
          </h2>
          <p className=" text-bodyText pb-6 lg:pb-10">
            With reliable commission payments and support for both employees and
            independent contractors, Gusto takes the complexity out of payroll
            for real estate.
          </p>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <img
              src={img}
              alt=""
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center ">
          {realStateFeatures.map(({ id, title, desc, icon }, idx) => (
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

export default RealStateSection;
