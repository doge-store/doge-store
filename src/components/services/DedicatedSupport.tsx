import LinkButton from "../ui/LinkButton";
import img from "/images/dedicated_img.png";

function DedicatedSupport() {
  return (
    <section className="stp-30 sbp-30 bg-softBg1">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden">
          <img
            src={img}
            alt=""
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">
            Dedicated Support
          </p>
          <h2 className="display-4 pt-4 pb-6">Run a Smarter Dental Practice</h2>
          <p className=" text-bodyText pb-8">
            At Accupay, we don’t think payroll should feel like pulling teeth.
            That’s why we’ve made the process as painless as possible. But if
            you should have any questions, our best-in-class support team is
            just a call, chat, or email away.
          </p>
          <LinkButton link="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default DedicatedSupport;
