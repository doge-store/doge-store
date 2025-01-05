import { PiCheckCircleFill } from "react-icons/pi";
import { accountantFeatures } from "../../data/data";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import img from "/images/account_section_img.png";

function AccountSection() {
  return (
    <section className=" bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <FadeLeft>
            <div className="  flex flex-col justify-start items-start">
              <p className="bg-p1 py-3 px-5 rounded-full text-white ">
                Accountant
              </p>
              <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                Time for a Proactive Accountant
              </h1>
              <p className=" text-bodyText pb-6 lg:pb-8">
                Feel neglected by your accountant? Experience the attentive and
                personalized service you deserve with AccuPay.
              </p>

              <ul className="flex flex-col gap-6 justify-start items-start w-full">
                {accountantFeatures.map(({ id, title, desc }, idx) => (
                  <li
                    key={id}
                    className={`flex justify-start items-start gap-3 pb-5 ${
                      idx + 1 === accountantFeatures.length ? "" : "border-b"
                    } w-full`}
                  >
                    <div className=" text-s1 text-3xl">
                      <PiCheckCircleFill />
                    </div>
                    <div className="">
                      <h4 className="heading-4">{title}</h4>
                      <p className=" text-bodyText pt-2">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeLeft>
        </div>
        <div className="xxl:col-start-8 col-span-12 lg:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
          <FadeRight>
            <img
              src={img}
              alt=""
              className="object-fit hover:scale-110 duration-500 w-full h-full"
            />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default AccountSection;
