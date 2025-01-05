import { ourValues } from "../../data/data";
import SectionHeadingCenter from "../global/SectionHeadingCenter";

function OurValues() {
  return (
    <section className=" stp-30 sbp-30 bg-softBg1">
      <div className="container">
        <SectionHeadingCenter
          sectionName="Our Values"
          sectionTitle="Our Values"
          sectionDesc="At AccuPay, our values are the foundation of everything we do. They reflect our commitment to excellence, integrity, and client success."
        />
        <div className="grid grid-cols-12 gap-6 stp-15">
          {ourValues.map(({ id, icon, title, desc }) => (
            <div
              key={id}
              className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col"
            >
              <div className="text-6xl text-s1">{icon}</div>
              <h4 className="heading-4 pb-4 pt-3">{title}</h4>
              <p className="pb-5 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
