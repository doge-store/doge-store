import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";
import img from "/images/save_time_money_section.png";

function SaveTimeMoneySection({ isImgRight }: { isImgRight?: boolean }) {
  return (
    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
      <div
        className={`${
          isImgRight
            ? "xxl:ml-[calc((100%-1296px)/2)]"
            : "xxl:mr-[calc((100%-1296px)/2)]"
        } max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32 `}
      >
        <div
          className={`col-span-12 lg:col-span-6  flex justify-start items-start self-stretch  ${
            isImgRight ? "order-2" : "max-lg:order-2"
          }`}
        >
          <img
            src={img}
            alt=""
            className={` ${isImgRight ? " " : " "} w-full h-full`}
          />
        </div>
        <div className=" col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
          <FadeDown>
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              Save time & money
            </p>
          </FadeDown>
          <FadeRight>
            <h2 className="display-4 pt-4 pb-6">
              Time-Saving Solutions for Business Growth
            </h2>
          </FadeRight>
          <FadeTop>
            <p className=" text-bodyText">
              Our built-in commission tool gets your agents paid quickly and
              accurately every time they close. Pay your salaried employees on
              AutoPilot, and easily approve hours for any support staff and
              contractors.
            </p>
          </FadeTop>
        </div>
      </div>
    </section>
  );
}

export default SaveTimeMoneySection;
