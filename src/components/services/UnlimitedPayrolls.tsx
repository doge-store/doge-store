import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import img from "/images/unlimited_payrolls_img.png";

function UnlimitedPayrolls() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <FadeLeft>
            <div className="  flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white ">
                Unlimited Payrolls
              </p>
              <h2 className="display-4 pt-4 pb-6">
                Covering Payroll Hourly, Salaried, or Commission
              </h2>
              <p className=" text-bodyText">
                Our built-in commission tool gets your agents paid quickly and
                accurately every time they close. Pay your salaried employees on
                AutoPilot, and easily approve hours for any support staff and
                contractors.
              </p>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:col-start-8">
          <FadeRight>
            <div className=" flex justify-center items-center">
              <img src={img} alt="" />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default UnlimitedPayrolls;
