import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import BlogSidebar from "../components/blog/BlogSidebar";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import { blogList } from "../data/data";
import breadcrumpIllus from "/images/breadcrumb_img_17.png";

function BlogPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Blog"
        pageDesc="Explore our insightful blog for expert perspectives on accounting, taxation, and payroll processing."
        pageTitle="Our Blog"
      />

      <section className="container grid grid-cols-12 gap-6 stp-30 sbp-30">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 lg:gap-10">
          {blogList.map(({ id, img, title, desc, date, tag }) => (
            <div className="" key={id}>
              <div className="flex justify-start items-center gap-3">
                <Link
                  to={"#"}
                  className="bg-p1 py-2 lg:py-3 px-3 lg:px-5 rounded-full text-white max-lg:text-sm"
                >
                  {tag}
                </Link>
                <p className="border-l pl-3 border-bodyText">
                  {date}, {new Date().getFullYear()}
                </p>
              </div>
              <h2 className="heading-3 pt-5 pb-6">{title}</h2>
              <div className=" overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="hover:scale-110 duration-500 w-full h-full"
                />
              </div>
              <p className="pt-6 pb-6 text-bodyText">{desc}</p>
              <div className="flex justify-start items-center">
                <Link
                  to={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`}
                  className="flex justify-start items-center gap-1 border-b border-mainTextColor hover:border-s2 duration-300 group font-medium"
                >
                  Read More{" "}
                  <span className="text-xl group-hover:translate-x-1 duration-500">
                    <PiArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className=" col-span-12 lg:col-span-4">
          <BlogSidebar />
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
