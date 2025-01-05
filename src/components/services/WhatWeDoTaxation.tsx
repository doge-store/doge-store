import { whtaWeDoTaxationData } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function WhatWeDoTaxation() {
  return (
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              What We Do
            </p>
            <h1 className="display-4  pt-4 ">
              Why Choose AccuPay for Taxation Services?
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
            Accounting, Taxation & Payroll Processing Services refer to a range
            of professional services provided by accounting firms or specialized
            firms that assist businesses
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whtaWeDoTaxationData.map(({ id, icon, title, desc }, idx) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4" key={id}>
              <StaggerEffect id={idx} key={id}>
                <div
                  className=" bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start"
                  key={id}
                >
                  <div className="text-4xl text-s1 p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full">
                    {icon}
                  </div>
                  <h4 className="heading-4 pb-5 pt-8">{title}</h4>
                  <p className="text-bodyText">{desc}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoTaxation;
