import { whyCooseUs } from "../../data/data";
import SectionHeadingCenter from "../global/SectionHeadingCenter";

function WhyChooseUs() {
  return (
    <section className={`sbp-30 stp-30`}>
      <div className="container">
        <SectionHeadingCenter
          sectionName="Why Choose Us"
          sectionTitle="Why Choose AccuPay for Dentist Services?"
          sectionDesc="AccuPay is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management,"
        />
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whyCooseUs.map(({ id, icon, title, desc }) => (
            <div
              key={id}
              className="col-span-12  md:col-span-4 flex justify-center items-center flex-col"
            >
              <div className="text-7xl text-s1">{icon}</div>
              <h4 className="heading-4 pb-4 pt-3 text-center">{title}</h4>
              <p className=" text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
