import { Link } from "react-router-dom";
import StaggerEffect from "../components/animation/StaggerEffectOne";
import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import { socialLinks, teamList } from "../data/data";
import breadcrumpIllus from "/images/breadcrumb_img_11.png";

function OurTeam() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Our Team"
        pageDesc="Meet our dedicated team of accounting and payroll experts. Committed to delivering excellence."
        pageTitle="Our Team"
      />

      <section className="stp-30 overflow-hidden">
        <div className="container grid grid-cols-12 gap-6 md:gap-16 xl:gap-20 xxl:gap-24 pr-10">
          {teamList.map(({ id, name, designation, img }, idx) => (
            <div className="col-span-12 md:col-span-6 xl:col-span-4" key={id}>
              <StaggerEffect id={idx}>
                <div className="  relative group" key={id}>
                  <div className=" overflow-hidden relative z-20 max-xl:mr-6  ">
                    <img
                      src={img}
                      alt=""
                      className="rounded-lg object-cover w-full"
                    />
                    <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                      <p className=" font-medium">{designation}</p>
                      <Link
                        to={`/team/${name.toLowerCase().replaceAll(" ", "-")}`}
                        className="heading-4"
                      >
                        {name}
                      </Link>
                    </div>
                  </div>

                  <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg]  invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl ">
                    <ul className="flex justify-start flex-col items-center gap-2 text-white group  absolute top-6 right-4">
                      {socialLinks.slice(0, 3).map(({ id, icon }) => (
                        <li key={id}>
                          <Link
                            to={"#"}
                            className=" rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor  hover:bg-p1  duration-500 hover:-translate-y-1 block"
                          >
                            {icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </section>

      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default OurTeam;
