import { SyntheticEvent, useState } from "react";
import {
  PiEnvelopeFill,
  PiMapPinFill,
  PiPencilSimpleFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import { contactPageCard } from "../data/data";
import breadcrumpIllus from "/images/breadcrumb_img_21.png";
import locationImg from "/images/contact_page_img.png";

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => toast("Message send successfully!");

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    notify();
    setFirstName("");
    setLastName("");
    setSubject("");
    setEmail("");
    setMessage("");
  }

  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Course"
        pageDesc="Connect with us for expert accounting and payroll services. Reach out via the form or contact information below."
        pageTitle="Connect With Us"
      />

      <section className="container grid grid-cols-12 stp-30 sbp-30">
        <div className=" col-span-12 lg:col-span-8 lg:col-start-3 grid grid-cols-12 gap-4 lg:gap-6">
          {contactPageCard.map(
            ({ id, icon, name, link, address, linkText }) => (
              <div
                className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group"
                key={id}
              >
                <div
                  key={id}
                  className=" bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500"
                >
                  {icon}
                </div>
                <h4 className="heading-4 pt-5 pb-2">{name}</h4>
                {link && <Link to={link}>{linkText}</Link>}
                {address && <p>{address}</p>}
              </div>
            )
          )}
        </div>

        <div className=" col-span-12 lg:col-span-8 lg:col-start-3 border p-4 sm:p-6 lg:p-10">
          <h4 className="heading-4 pb-6">Fill the From Below</h4>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <div className=" col-span-2 sm:col-span-1">
              <input
                type="text"
                placeholder="First Name"
                className=" placeholder:text-bodyText py-4 px-8 border w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <input
                type="text"
                placeholder="Last Name"
                className=" placeholder:text-bodyText py-4 px-8 border w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className=" col-span-2 sm:col-span-1 py-4 px-8 border  flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <PiEnvelopeFill />
              </span>
              <input
                type="text"
                placeholder="Type email address"
                className=" placeholder:text-bodyText w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className=" col-span-2 sm:col-span-1 py-4 px-8 border  flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <PiPencilSimpleFill />
              </span>
              <input
                type="text"
                placeholder="Subject"
                className=" placeholder:text-bodyText w-full outline-none"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="col-span-2 py-4 px-8 border  flex justify-start items-center gap-2">
              <textarea
                placeholder="Type Your message..."
                className=" placeholder:text-bodyText w-full outline-none h-[200px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="col-span-2 table-checkbox flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start gap-5">
              <label className="flex justify-start items-center gap-2">
                <input type="checkbox" className=" " />
                <p>Subscribe to our newsletter.</p>
              </label>
              <button className="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500">
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer position="bottom-left" />
      </section>

      <section className="container grid grid-cols-12 gap-6 sbp-30">
        <div className=" col-span-12 md:col-span-5 xl:col-span-4 flex flex-col justify-center items-start">
          <h2 className="display-4 pb-5">Our Office</h2>
          <p className=" text-bodyText pb-8 lg:pb-15">
            If you prefer an in-person meeting, our office is open during
            business hours.
          </p>

          <ul className="flex flex-col gap-6 lg:gap-10">
            <li className="flex justify-start items-start gap-3  ">
              <div className="bg-mainTextColor text-white text-3xl p-3 rounded-full">
                <PiMapPinFill />
              </div>
              <div className="">
                <h4 className="heading-4 pb-1">New York, USA:</h4>
                <p>29 Park Avenue New York, New York 172</p>
              </div>
            </li>

            <li className="flex justify-start items-start gap-3  ">
              <div className="bg-mainTextColor text-white text-3xl p-3 rounded-full">
                <PiMapPinFill />
              </div>
              <div className="">
                <h4 className="heading-4 pb-1">Switzerland, Bern:</h4>
                <p>30 Stamford Street,London SE1 9LQ</p>
              </div>
            </li>

            <li className="flex justify-start items-start gap-3  ">
              <div className="bg-mainTextColor text-white text-3xl p-3 rounded-full">
                <PiMapPinFill />
              </div>
              <div className="">
                <h4 className="heading-4 pb-1">New York, USA:</h4>
                <p>891 Daudkandi, Chattogram 58201</p>
              </div>
            </li>
          </ul>
        </div>

        <div className=" col-span-12 md:col-span-7 xl:col-start-6 overflow-hidden">
          <img
            src={locationImg}
            alt=""
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default ContactPage;
