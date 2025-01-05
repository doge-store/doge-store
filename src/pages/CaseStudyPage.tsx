import { PiArrowRight, PiArrowUpRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import StaggerEffect from "../components/animation/StaggerEffectOne";
import SectionHeadingCenter from "../components/global/SectionHeadingCenter";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import { caseStudies } from "../data/data";
import breadcrumpIllus from "/images/breadcrumb_img_9.png";
function CaseStudyPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Case Study"
        pageDesc="Dive into real-world success stories. Our case studies showcase how our accounting and payroll solutions have transformed businesses"
        pageTitle="Case Study"
      />
      <section className="container stp-30 sbp-30">
        <SectionHeadingCenter
          sectionName="Case Study"
          sectionTitle="Explore Our Recently Completed Cases"
          sectionDesc="Explore how AccuPay has partnered with businesses like yours to deliver tailored accounting and payroll solutions. "
        />
        <div className="grid grid-cols-12 gap-6 stp-15">
          {caseStudies.map(({ id, img, name }, idx) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-4" key={id}>
              <StaggerEffect id={idx}>
                <div className="  border border-mainTextColor flex flex-col justify-start items-start relative group">
                  <div className="w-full self-stretch overflow-hidden ">
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-full hover:scale-110 duration-500  h-full"
                    />
                  </div>
                  <p className="bg-p1 text-white heading-2 py-3 px-4 absolute top-6 right-6 group-hover:bg-s2 duration-500 group-hover:text-mainTextColor">
                    0{idx + 1}
                  </p>
                  <div className="p-6 flex flex-col justify-start items-start">
                    <h4 className="heading-4 pb-6">{name}</h4>
                    <Link
                      to={"/case-study/case-study-details"}
                      className="bg-p1 py-3 px-5  font-medium text-white flex justify-start items-center gap-1 group-hover:bg-s2 border border-p1 group-hover:border-mainTextColor duration-500 group-hover:text-mainTextColor"
                    >
                      Learn More <PiArrowUpRightBold />
                    </Link>
                  </div>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>

        <div className="stp-15">
          <ul className="flex justify-center items-center gap-2">
            <li className="text-lg font-medium text-white border border-p1 bg-p1 w-[45px] h-[50px] flex justify-center items-center">
              1
            </li>
            <li className="text-lg font-medium  border border-strokeColor  w-[45px] h-[50px] flex justify-center items-center hover:bg-p1 hover:text-white hover:border-p1 duration-500">
              2
            </li>
            <li className="text-lg font-medium  border border-strokeColor  w-[45px] h-[50px] flex justify-center items-center">
              <PiArrowRight />
            </li>
          </ul>
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default CaseStudyPage;
