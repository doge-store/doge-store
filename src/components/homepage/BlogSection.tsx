import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { blogSection } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import LinkButton from "../ui/LinkButton";

function BlogSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end">
          <div className="  max-w-[600px] flex justify-end items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              News & Blog
            </p>
            <h1 className="display-4  pt-4 pb-6">
              Stay updates with Accupay News
            </h1>
            <p className="text-">
              Stay informed and empowered with our latest articles on
              accounting, payroll processing, and financial management.
            </p>
          </div>
          <div className="max-lg:hidden">
            <LinkButton link="/blog" text="See All Blog" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {blogSection.map(({ id, date, title, img, desc, category }, idx) => (
            <div
              key={id}
              className="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group "
            >
              <StaggerEffect id={idx}>
                <div className="flex flex-col justify-start items-start">
                  <div className="flex justify-between items-center w-full pb-5">
                    <p>
                      {date}, {new Date().getFullYear()}
                    </p>
                    <p className="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5">
                      {category}
                    </p>
                  </div>
                  <div className="flex justify-center items-center w-full overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="object-cover hover:scale-110 duration-500"
                    />
                  </div>
                  <h4 className="heading-4 text-mainTextColor pb-4 pt-6">
                    {title}
                  </h4>
                  <p className="pb-6">{desc}</p>
                  <Link
                    to={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`}
                    className="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500"
                  >
                    Read more
                    <HiArrowSmallRight />
                  </Link>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
        <div className="lg:hidden flex justify-center items-center stp-15">
          <LinkButton link="/blog" text="See All Blog" />
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
