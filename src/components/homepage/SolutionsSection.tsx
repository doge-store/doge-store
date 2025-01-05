import { solutionsFeatures } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import SectionHeadingCenter from "../global/SectionHeadingCenter";
import LinkButton from "../ui/LinkButton";
import circleIcon from "/images/circleIcon.png";
import sliceIcon from "/images/sliceIcon.png";
import solutionIllus from "/images/solution_illustrations.png";
function SolutionsSection() {
  return (
    <section className="stp-30 sbp-30 relative">
      <img
        src={circleIcon}
        alt=""
        className="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40 "
      />
      <img
        src={sliceIcon}
        alt=""
        className="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]"
      />
      <div className="container z-10 relative">
        <div className="flex justify-center items-center">
          <SectionHeadingCenter
            sectionName="Solutions"
            sectionTitle="The global payroll solution"
            sectionDesc="When it comes to payroll solutions, we have a variety of options
            that benefit both your company and your contractor."
          />
        </div>
        <div className="grid grid-cols-12 stp-15 max-lg:gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-center items-center overflow-hidden self-stretch">
              <img
                src={solutionIllus}
                alt=""
                className=" hover:scale-110 duration-500 w-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start lg:items-center flex-col">
            <h1 className="heading-1 pb-5 ">Consolidate Payroll Processing</h1>
            <p className="text-bodyText">
              We have designed a fast and effective payroll system that
              streamlines your payment process.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 py-6 lg:py-10 w-full">
              {solutionsFeatures.map(({ id, name, icon }, idx) => (
                <div className=" group col-span-2 sm:col-span-1" key={id}>
                  <StaggerEffect id={idx}>
                    <div className="flex justify-start items-center gap-5">
                      <span className="rounded-full border border-strokeColor bg-softBg p-3 sm:p-5 text-3xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500">
                        {icon}
                      </span>
                      <p className="text-lg font-medium group-hover:text-s1 duration-500">
                        {name}
                      </p>
                    </div>
                  </StaggerEffect>
                </div>
              ))}
            </div>
            <div className=" flex justify-start items-start w-full">
              <LinkButton link="/contact" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
