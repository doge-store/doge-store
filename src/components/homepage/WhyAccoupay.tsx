import { whyAccupayCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function WhyAccoupay() {
  return (
    <section className=" bg-softBg1 stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              Why Accupay
            </p>
            <h1 className="display-4  pt-4 ">
              A platform for your global team
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
            Your dependable guide to achieving freedom from manual HR work and
            building that perfect workplace you have always aspired to build.
            Your dependable guide to achieving freedom.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whyAccupayCard.map(({ id, img, title }, idx) => (
            <div key={id} className="col-span-12 sm:col-span-6 lg:col-span-4  ">
              <StaggerEffect id={idx}>
                <div className="bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
                  <div className="">
                    <img src={img} alt="" />
                  </div>
                  <h4 className="pt-8 heading-4">{title}</h4>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAccoupay;
