import { useEffect, useState } from "react";
import { PiPaperPlaneRightBold, PiQuotesFill } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "../components/blog/BlogSidebar";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import { blogList, socialLinks } from "../data/data";
import blogDetails2 from "/images/blog_details_img1.png";
import blogDetails3 from "/images/blog_details_img2.png";
import blogDetails1 from "/images/blog_details_img3.png";
import breadcrumpIllus from "/images/breadcrumb_img_18.png";
import commentPeopeleImg1 from "/images/comment_people_1.png";
import commentPeopeleImg from "/images/comment_people_2.png";

function BlogDetailsPage() {
  const { name } = useParams();
  const [bodyData, setBodyData] = useState(Object);

  useEffect(() => {
    const blogFilteredData = blogList.filter(
      (blog) => blog.title.replaceAll(" ", "-").toLowerCase() === name
    );
    setBodyData(blogFilteredData[0]);
  }, [name]);
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName=" "
        pageDesc="Dogecoin is free like the Internet is, the only single freely existing money, globally."
        pageTitle={"Doge space"}
      />

      <section className="container stp-30 sbp-30 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 overflow-hidden">
          <div className="flex justify-start items-center gap-3">
            <Link
              to={"#"}
              className="bg-p1 py-2 lg:py-3 px-3 lg:px-5 rounded-full text-white max-lg:text-sm"
            >
              Payroll Processing
            </Link>
            <p className="border-l pl-3 border-bodyText">
              Jan 15, {new Date().getFullYear()}
            </p>
          </div>

          <h2 className="display-4 pt-5 pb-10">
            {bodyData === undefined
              ? "Unlocking the Full Value of Payroll Processing"
              : bodyData.title}
          </h2>
          <div className=" overflow-hidden">
            <img
              src={bodyData === undefined ? blogDetails1 : bodyData.img}
              alt=""
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>

          <p className=" text-bodyText py-10">
            Embark on a journey of operational efficiency and employee
            satisfaction by unlocking the full value of our Payroll Processing
            Services. Beyond mere paycheck processing, our comprehensive
            solution ensures accuracy, compliance, and timely payments.
            Experience streamlined payroll operations, from automated
            calculations to precise tax withholdings. By entrusting us with your
            payroll,{" "}
          </p>

          <h3 className="heading-1">Assess Your Business Needs</h3>
          <p className="py-6 text-bodyText">
            Assessing your business needs is a pivotal step in achieving
            sustained success. Begin by comprehensively evaluating your current
            operations, identifying pain points, and setting clear objectives.
            Scrutinize financial processes, from accounting to payroll, ensuring
            they align with industry standards and legal requirements.
          </p>
          <p className=" text-bodyText pb-10">
            Finally, align your business needs with strategic goals. Whether
            it's optimizing operational efficiency, enhancing customer
            experiences, or expanding market reach, a thorough assessment
            ensures that your resources are strategically allocated. Regular
            reassessment allows for agility, enabling your business to pivot in
            response to emerging opportunities or challenges. By understanding
            and responding to your business needs, you pave the way for
            sustained growth and resilience in a dynamic marketplace.
          </p>
          <h4 className="heading-2 pb-6">Experience And Expertise</h4>
          <p className="pb-10">
            Our team brings a wealth of experience and expertise to deliver
            unparalleled financial services. With years of proven success, we
            navigate the intricate landscapes of accounting, taxation, and
            payroll processing. Our seasoned professionals stay abreast of
            industry changes, ensuring your business benefits from the latest
            insights and compliance standards. Trust in our dedicated team to
            leverage their comprehensive expertise,{" "}
          </p>
          <div className="flex justify-between items-center gap-6">
            <div className=" overflow-hidden">
              <img
                src={blogDetails2}
                alt=""
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div>
            <div className=" overflow-hidden">
              <img
                src={blogDetails3}
                alt=""
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div>
          </div>

          <p className="py-10">
            we navigate complex financial landscapes with precision and
            innovation. Whether streamlining accounting processes, ensuring tax
            compliance, or optimizing payroll operations, our team is dedicated
            to delivering unparalleled results. Trust us to transform your
            financial challenges into opportunities, backed by a track record of
            success and a commitment to fostering your business growth.
          </p>

          <div className="flex justify-start items-start gap-5 px-4 sm:px-8 lg:px-20 bg-s2 py-8 border border-mainTextColor">
            <div className=" text-2xl sm:text-6xl">
              <PiQuotesFill />
            </div>
            <div className="">
              <p className=" text-lg sm:text-xl md:text-2xl pb-3">
                "Incredible customer service. Their responsiveness and
                dedication to understanding our unique needs make them a trusted
                ally in our financial journey."
              </p>
              <p className=" text-xl sm:text-2xl">By: Steve Smith</p>
            </div>
          </div>

          <h4 className="heading-3 pt-10 pb-6">Technology And Software</h4>
          <p>
            Embrace the future of financial management with our cutting-edge
            technology and software solutions. Streamline your accounting and
            payroll processes with user-friendly interfaces and innovative tools
            designed for efficiency. Our advanced software leverages automation,
            ensuring accuracy and compliance while providing real-time insights.
          </p>

          <h4 className="heading-3 pt-10">Conclusion</h4>
          <p>
            Our commitment to excellence in accounting, taxation, and payroll
            processing is unwavering. With a team of experienced professionals
            and cutting-edge technology, we empower businesses to navigate the
            complexities
          </p>

          <div className="my-10 flex border-y py-6 justify-between items-center max-sm:flex-col gap-3">
            <p className=" text-bodyText">Payroll / Business / Finance</p>
            <div className=" flex justify-start items-center gap-2">
              <p className=" font-medium">Share: </p>
              <ul className="flex justify-start items-center gap-2">
                {socialLinks.map(({ id, link, icon }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      className=" text-bodyText p-3 rounded-full border duration-300 hover:text-white text-xl  block hover:bg-p1"
                    >
                      {icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" border-b pb-10 border-strokeColor">
            <h4 className="heading-4 pb-10">03 Comments</h4>

            <div className="grid grid-cols-8 gap-2 sm:gap-6">
              <div className=" col-span-1 pt-2">
                <img src={commentPeopeleImg} alt="" className=" rounded-full" />
              </div>

              <div className="col-span-7">
                <div className="flex justify-between items-center pb-3">
                  <h5 className="heading-5">Andera Piacquadio</h5>
                  <button className=" text-bodyText hover:text-white hover:bg-p1 border border-bodyText hover:border-p1 px-2 sm:px-4 sm:py-0.5 rounded-full duration-300">
                    Reply
                  </button>
                </div>
                <p className=" text-bodyText pb-6 sm:pb-10">
                  "Our payroll processing has never been smoother. Timely and
                  error-free – a testament to their commitment to excellence."
                </p>

                <div className="flex justify-between items-center bg-softBg rounded-full py-3 px-6">
                  <input
                    placeholder="Reply to Andera Piacquadio"
                    className="w-full placeholder:text-bodyText pr-6 bg-softBg outline-none "
                  />
                  <button className=" text-bodyText text-xl">
                    <PiPaperPlaneRightBold />
                  </button>
                </div>

                <div className="grid grid-cols-8 gap-6 mt-6 sm:mt-10">
                  <div className="col-span-1">
                    <img
                      src={commentPeopeleImg1}
                      alt=""
                      className=" rounded-full max-sm:max-w-[30px]"
                    />
                  </div>

                  <div className=" col-span-7">
                    <div className="flex justify-between items-center pb-3">
                      <h5 className="heading-5">Andera Piacquadio</h5>
                      <button className=" text-bodyText hover:text-white hover:bg-p1 border max-sm:text-sm border-bodyText hover:border-p1 px-2 sm:px-4 sm:py-0.5 rounded-full duration-300">
                        Reply
                      </button>
                    </div>
                    <p className=" text-bodyText pb-6 sm:pb-10">
                      "Our payroll processing has never been smoother. Timely
                      and error-free – a testament to their commitment to
                      excellence."
                    </p>

                    <div className="flex justify-between items-center bg-softBg rounded-full py-3 px-6">
                      <input
                        placeholder="Reply to Andera Piacquadio"
                        className="w-full placeholder:text-bodyText pr-6 bg-softBg outline-none "
                      />
                      <button className=" text-bodyText text-xl">
                        <PiPaperPlaneRightBold />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <h4 className="heading-4">Leave A Reply</h4>
            <p className=" text-bodyText pt-4">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="grid grid-cols-2 pt-5 gap-6">
              <div className="col-span-2">
                <p className="text-black pb-2">Comment*</p>
                <textarea className="h-[200px] w-full border outline-none p-2" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-black pb-2">Name*</p>
                <input
                  type="text"
                  className=" w-full border p-2 outline-none"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-black pb-2">Email*</p>
                <input
                  type="text"
                  className=" w-full border p-2 outline-none"
                />
              </div>

              <div className="col-span-2">
                <p className="text-black pb-2">Website*</p>
                <input
                  type="text"
                  className=" w-full border outline-none p-2"
                />
              </div>
              <div className="col-span-2 table-checkbox ">
                <label className="flex justify-start items-center gap-2 pb-5">
                  <input type="checkbox" className=" " />
                  <p>Subscribe to our newsletter.</p>
                </label>
                <button className="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500">
                  Post A Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-span-12 lg:col-span-4">
          <BlogSidebar />
        </div>
      </section>
    </main>
  );
}

export default BlogDetailsPage;
