import { accountingServices } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import SectionHeadingCenter from "../global/SectionHeadingCenter";

function AccountingServicesSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <SectionHeadingCenter
          sectionName="Accounting Services"
          sectionTitle="Explore Our Accounting Services"
          sectionDesc="At AccuPay, our Accounting Services are designed to provide you with a comprehensive and accurate financial picture. "
        />
        <div className="grid grid-cols-12 stp-15 gap-6">
          {accountingServices.map(({ id, icon, title, desc }, idx) => (
            <div className="col-span-12 sm:col-span-6 xl:col-span-3" key={id}>
              <StaggerEffect id={idx}>
                <div
                  className=" flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
                  key={id}
                >
                  <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                    {icon}
                  </div>
                  <h4 className="heading-4 pb-5 pt-8">{title}</h4>
                  <p className=" text-bodyText lg:pr-4">{desc}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountingServicesSection;
