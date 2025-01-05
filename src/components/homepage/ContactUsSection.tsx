import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";
import LinkButton from "../ui/LinkButton";
import contactIllus from "/images/contact_illus.png";

function ContactUsSection() {
  return (
    <div className=" bg-p1 pt-15">
      <div className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col ">
        <div className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
          <FadeDown>
            <p className="text-lg font-medium underline">Experience AccuPay</p>
          </FadeDown>
          <FadeRight>
            <h1 className="display-4 pb-6 pt-4">
              We’ve got everything you need?
            </h1>
          </FadeRight>
          <FadeTop>
            <p className="pb-8">
              We save you from all that boring paperwork! From global hiring, to
              instant payments, and taxes, we’ve got your back.
            </p>
          </FadeTop>
          <LinkButton link="/contact" text="Contact Us" />
        </div>
        <div className="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10">
          <img src={contactIllus} alt="" className=" object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
