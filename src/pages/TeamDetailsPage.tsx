import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link, useParams } from "react-router-dom";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import LinkButton from "../components/ui/LinkButton";
import NumberCounter from "../components/ui/NumberCounter";
import { teamContactDetails, teamList, teamSkills } from "../data/data";
import breadcrumpIllus from "/images/breadcrumb_img_12.png";
import teamImg from "/images/team_member_full_img.png";

function TeamDetailsPage() {
  const { name } = useParams();
  const [bodyData, setBodyData] = useState(Object);

  useEffect(() => {
    const teamFilteredData = teamList.filter(
      (team) => team.name.replaceAll(" ", "-").toLowerCase() === name
    );
    setBodyData(teamFilteredData[0]);
  }, [name]);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Team Details"
        pageDesc="Meet our dedicated team of experts committed to delivering unparalleled accounting and payroll services."
        pageTitle={bodyData === undefined ? "Team Details" : bodyData.name}
      />

      <section className="stp-30 lg:sbp-30 relative  xxl:h-[1400px] flex justify-end items-center overflow-hidden max-lg:flex-col">
        <div className=" xxl:absolute top-28 left-0 bg-strokeColor">
          <img src={teamImg} alt="" />
        </div>

        <div className="container flex justify-end items-center -mt-[250px] sm:max-lg:-mt-[500px] lg:max-xxl:mt-0 xxl:mt-10">
          <div className=" flex justify-end items-center relative z-10 bg-white p-6 sm:p-10 xl:p-20 xxxl:p-30 md:mt-10">
            <div className="flex justify-start items-start flex-col  max-w-[600px]">
              <p className="bg-p1 py-3 px-5 rounded-full text-white ">
                Our Team
              </p>
              <h2 className="display-4 pt-3 pb-6">
                {bodyData === undefined ? "David Warner" : bodyData.name}
              </h2>
              <p className=" text-bodyText">
                Welcome to the heart of Accupay. Our dedicated team of
                accounting and payroll professionals is committed to providing
                unparalleled services to meet your financial needs. Get to know
                the individuals who make up our dynamic team
              </p>
              <ul className="flex flex-col gap-3 pt-8">
                {teamContactDetails.map(({ id, name, link, icon }) => (
                  <li
                    key={id}
                    className="flex justify-start items-center gap-3"
                  >
                    <div className=" bg-softBg1 border border-p1/20 p-3 rounded-full text-p1 text-3xl">
                      {icon}
                    </div>
                    <Link to={link} className="">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-6 lg:pt-10">
                <LinkButton link="/contact" text="Gen In Touch" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container stp-15 lg:max-xxl:-mt-20 xxl:pt-15 sbp-30">
        <h2 className="heading-1">Personal experience</h2>
        <p className=" text-bodyText pt-6 pb-6 lg:pb-10">
          {" "}
          Each team member at Accupay brings a unique blend of professional
          expertise and personal commitment to our clients. With a shared
          passion for accounting and payroll excellence, we understand the
          intricacies of financial management. Our collaborative approach
          ensures that each client receives personalized attention and solutions
          tailored to their specific needs. We don't just offer services; we
          build lasting partnerships. That commitment to personalized service
          defines our team and contributes to the success stories we create for
          our clients every day.
        </p>

        <div className="grid grid-cols-12 gap-6 pb-6 lg:pb-10">
          <div
            className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start gap-8"
            ref={ref}
          >
            {teamSkills.map(({ id, name, percentage }) => (
              <div className="w-full" key={id}>
                <div className="flex font-medium justify-between items-center">
                  <p>{name}</p>
                  <p>
                    <NumberCounter start={1} end={percentage} />%
                  </p>
                </div>
                <div className="w-full pt-4">
                  <div className={`h-0.5 bg-strokeColor  w-full  relative`}>
                    {inView ? (
                      <div
                        style={{ width: `${percentage}%` }}
                        className="h-[6px] bg-p1 absolute lineAnimation left-0 -top-0.5 "
                      ></div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center items-start ">
            <h3 className="heading-2">Why Chooses Our Team</h3>
            <p className=" text-bodyText pt-6">
              Choosing our team at Accupay means partnering with a dedicated
              group of accounting and payroll professionals committed to your
              financial success.
            </p>
            <p className="pt-6">
              With years of collective experience, we bring a deep understanding
              of industry intricacies and stay at the forefront of regulatory
              changes. Our client-centric approach ensures personalized
              solutions tailored to your unique needs.
            </p>
          </div>
        </div>

        <h4 className="heading-3">Why Chooses Our Team</h4>
        <p className=" text-bodyText pt-6">
          Choosing our team at Accupay means partnering with a dedicated group
          of accounting and payroll professionals committed to your financial
          success. With years of collective experience, we bring a deep
          understanding of industry intricacies and stay at the forefront of
          regulatory changes. Our client-centric approach ensures personalized
          solutions tailored to your unique needs.{" "}
        </p>
      </section>
      <CTASectiont />
    </main>
  );
}

export default TeamDetailsPage;
