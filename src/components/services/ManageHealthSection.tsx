import { manageHealthItems } from "../../data/data";
import FadeDown from "../animation/FadeDown";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/manage_health_section_img.png";

function ManageHealthSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-start items-start">
            <div className="  max-w-[600px] flex justify-start items-start flex-col">
              <FadeDown>
                <p className="bg-p1 py-3 px-5 rounded-full text-white ">
                  Healthcare
                </p>
              </FadeDown>
              <FadeLeft>
                <h1 className="display-4  pt-4 pb-6">
                  Manage Your Home Health Business.
                </h1>
              </FadeLeft>
              <FadeTop>
                <p className="text-bodyText pb-8">
                  Discover the freedom to oversee and optimize your home health
                  care operations from anywhere with AccuPay's mobile-friendly
                  management solutions.
                </p>
              </FadeTop>
              <ul className="grid grid-cols-2 gap-6">
                {manageHealthItems.map(({ id, icon, title }, idx) => (
                  <li key={id} className="col-span-1 ">
                    {" "}
                    <StaggerEffect id={idx}>
                      <div className="flex justify-start items-center gap-2">
                        <span className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl">
                          {icon}
                        </span>{" "}
                        {title}
                      </div>
                    </StaggerEffect>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-5 xxl:col-start-8 flex justify-center items-center">
          <FadeRight>
            <img src={img} alt="" />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default ManageHealthSection;
