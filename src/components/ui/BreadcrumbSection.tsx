import { PiCaretRight, PiHouseSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import FadeDown from "../animation/FadeDown";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import breadcrumbIcon from "/images/breadcrump_icon.png";

function BreadcrumbSection({
  pageTitle,
  middlePage,
  pageDesc,
  img,
  pageName,
}: {
  pageTitle: string;
  middlePage?: string;
  pageDesc: string;
  img: string;
  pageName: string;
}) {
  return (
    <section className="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
      <img
        src={breadcrumbIcon}
        alt=""
        className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
      />
      <div className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10">
        <div className="col-span-12 md:col-span-6 flex justify-center items-start flex-col">
          <FadeDown>
            <ul className="flex justify-start items-center gap-1 flex-wrap ">
              <li>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-1 "
                >
                  <PiHouseSimpleLight />{" "}
                  <span className="hover:text-s2 duration-300">Home</span>
                </Link>
              </li>
              {middlePage && (
                <li>
                  <Link
                    to={`/${middlePage.toLowerCase().replaceAll(" ", "-")}`}
                    className="flex justify-start items-center gap-1 "
                  >
                    <PiCaretRight />{" "}
                    <span className="hover:text-s2 duration-300">
                      {middlePage}
                    </span>
                  </Link>
                </li>
              )}
              <li className="flex justify-start items-center gap-1">
                <PiCaretRight /> {pageName}
              </li>
            </ul>
          </FadeDown>
          <FadeRight>
            <h1 className="display-3 pt-4">{pageTitle}</h1>
          </FadeRight>
          <FadeLeft>
            {" "}
            <p className=" text-bodyText pt-6">{pageDesc}</p>
          </FadeLeft>
        </div>
        <div className="col-span-12 md:col-span-6  flex justify-center items-center">
          <FadeRight>
            <img
              src={img}
              alt=""
              className=" object-fit max-sm:max-h-[300px]"
            />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default BreadcrumbSection;
