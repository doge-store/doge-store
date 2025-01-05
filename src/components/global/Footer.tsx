import { Link } from "react-router-dom";
import { footerLinks, getInTouch, socialLinks } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";
import logo from "/images/logo_white.png";
function Footer() {
  return (
    <footer className=" bg-mainTextColor  text-white/60">
      <div className="container grid grid-cols-12  stp-30 sbp-30 gap-6 max-xxl:pr-4">
        <div className=" col-span-12 min-[450px]:col-span-6 lg:col-span-3 flex flex-col gap-6 lg:gap-8">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <p className="">
            Your trusted partner in accounting and payroll solutions. We deliver
            precision, efficiency, and tailored services
          </p>
          <ul className="flex justify-start items-center gap-2">
            {socialLinks.map(({ id, link, icon }, idx) => (
              <li key={id} className="  ">
                <StaggerEffect id={idx}>
                  <Link
                    className="bg-s1/50 p-3 rounded-full
                     hover:bg-s1 duration-500 hover:-translate-y-1 block text-white"
                    to={link}
                  >
                    {icon}
                  </Link>
                </StaggerEffect>
              </li>
            ))}
          </ul>
        </div>
        {footerLinks.map(({ id, name, links }) => (
          <div
            className=" xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3"
            key={id}
          >
            <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
              {name}
            </h4>
            <ul className="flex flex-col gap-4 md:gap-5">
              {links.map((item, idx) => (
                <li key={idx}>
                  <StaggerEffect id={idx}>
                    <Link
                      to={item.link}
                      className=" flex justify-start items-center gap-2 hover:text-white  hover:translate-x-2 duration-500"
                    >
                      {item.name}
                    </Link>
                  </StaggerEffect>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {getInTouch.map(({ id, name, links }) => (
          <div
            className="col-span-12 min-[450px]:col-span-6  lg:col-span-3 xl:pl-30 "
            key={id}
          >
            <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500 text-white">
              {name}
            </h4>
            <ul className="flex flex-col gap-4 md:gap-3">
              {links.map((item, idx) => (
                <li key={idx}>
                  <StaggerEffect id={idx}>
                    {item.isLink ? (
                      <Link
                        to={item.link ? item.link : "#"}
                        className=" flex justify-start items-center gap-2 hover:text-white  hover:translate-x-2 duration-500"
                      >
                        <span className="text-2xl pt-2">{item.icon}</span>
                        {item.name}
                      </Link>
                    ) : (
                      <p className=" flex justify-start items-center gap-2 hover:text-white  hover:translate-x-2 duration-500">
                        {" "}
                        <span className="text-2xl pt-2">{item.icon}</span>{" "}
                        {item.name}
                      </p>
                    )}
                  </StaggerEffect>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 flex justify-between items-center max-md:flex-col gap-6">
          <p className=" max-sm:text-center">
            Accupay © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex justify-end items-center">
            <Link
              to={"/privacy-policy"}
              className="border-r-2 border-white/60 pr-3 hover:text-white duration-500 leading-none"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-conditions"}
              className="pl-3 hover:text-white duration-500 leading-none"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
