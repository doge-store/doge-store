import { PiCaretDownFill } from "react-icons/pi";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import img from "/images/appointment_form_bg.png";
import breadcrumpIllus from "/images/breadcrumb_img_8.png";

import { SyntheticEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropDownModal from "../components/ui/DropDownModal";
const notify = () => toast("Thanks for requesting!");
const interestedItems = [
  "Accounting Service",
  "Payroll Service",
  "Tax Service",
  "Real State Service",
  "Dentist Service",
];

function AppointmentPage() {
  const [interested, setInterested] = useState("Payroll Service");
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    notify();
  }

  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Appointment"
        pageDesc="At AccuPay, we understand the importance of personalized service. Book an appointment with our experts to discuss your accounting."
        pageTitle="Appointment"
      />

      <section className="container stp-30 sbp-30 grid grid-cols-12">
        <div className=" col-span-12 max-md:sbp-15">
          <img src={img} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="col-span-12 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3 bg-p1 p-6 sm:p-10 text-white relative md:mt-[-200px] lg:mt-[-400px] z-10"
        >
          <h2 className="display-4 relative after:absolute after:w-[100px] after:h-[3px] after:bg-white after:-bottom-4 after:left-0">
            Get A Free Quote Today
          </h2>
          <div className="grid grid-cols-12 gap-3 sm:gap-6 stp-15  ">
            <div className="col-span-12 sm:col-span-6">
              <p className="pb-3">Name</p>
              <input
                type="text"
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="pb-3">Phone</p>
              <input
                type="text"
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full"
                placeholder="Enter your number"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="pb-3">Email</p>
              <input
                type="text"
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="pb-3">Business Name</p>
              <input
                type="text"
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full"
                placeholder="Enter your business name"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="pb-3">Appointment Date</p>
              <input
                type="date"
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-span-12 sm:col-span-6 relative ">
              <p className="pb-3">I'm Interested in</p>
              <p
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText  w-full flex justify-between items-center cursor-pointer"
                onClick={() => setShowModal((prev) => !prev)}
              >
                {interested} <PiCaretDownFill />
              </p>
              <DropDownModal
                items={interestedItems}
                setItem={setInterested}
                setShowModal={setShowModal}
                showModal={showModal}
              />
            </div>
            <div className="col-span-12">
              <p className="pb-3">Your Message</p>
              <textarea
                className="bg-white outline-none py-3 sm:py-4 px-4 sm:px-8 text-bodyText placeholder:text-bodyText w-full h-[200px]"
                placeholder="Write your message here..."
                required
              />
            </div>
            <button className="col-span-12 py-4 bg-s2 border border-mainTextColor text-mainTextColor font-medium hover:bg-mainTextColor hover:text-white duration-700">
              Request A Quote
            </button>
          </div>
        </form>
        <ToastContainer position="bottom-left" />
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744699546!3d40.69763123333061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1706173862928!5m2!1sen!2sbd"
          height="450"
          className=" w-full mb-[-220px]"
        ></iframe>
      </section>

      <CTASectiont />
    </main>
  );
}

export default AppointmentPage;
