import { dentistSectionFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/dentist_section_img.png";

function DentistSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">Dentist</p>
          <h2 className="display-4 pt-4 pb-6">
            Tailored Solutions for Dentists
          </h2>
          <p className=" text-bodyText pb-6 lg:pb-10">
            AccuPay is dedicated to supporting the financial health of your
            dental practice. From payroll solutions for dental professionals to
            compliance management,
          </p>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <img
              src={img}
              alt=""
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center pb-6 xl:pb-12">
          {dentistSectionFeatures.map(({ id, title, desc, icon }, idx) => (
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

export default DentistSection;
