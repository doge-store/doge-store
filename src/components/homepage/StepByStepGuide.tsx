import { stepByStepCard } from "../../data/data";
import SectionHeadingCenter from "../global/SectionHeadingCenter";
import stepArrow1 from "/images/stepArrow1.png";
import stepArrow2 from "/images/stepArrow2.png";

function StepByStepGuide() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <SectionHeadingCenter
          sectionName="How it works"
          sectionTitle="A Step-by-Step Guide to Our Platform"
          sectionDesc="Explore our platform with ease! Sign up, select your industry, and
              seamlessly integrate our tailored payment solutions."
        />
        <div className="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col">
          <img
            src={stepArrow1}
            alt=""
            className="absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"
          />
          <img
            src={stepArrow2}
            alt=""
            className="absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden"
          />
          {stepByStepCard.map(({ id, title, desc, icon }) => (
            <div
              className="flex justify-center items-center text-center flex-col max-w-[350px]"
              key={id}
            >
              <div className="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl">
                {icon}
              </div>
              <h4 className="heading-4 pt-8 pb-6">{title}</h4>
              <p className="text-bodyText">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepByStepGuide;
