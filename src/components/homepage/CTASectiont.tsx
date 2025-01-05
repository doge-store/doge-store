import { SyntheticEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "/images/sliceIcon.png";
const notify = () => toast("Thanks for subscribing!");

function CTASectiont() {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState<boolean | null>(null);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    if (email) {
      notify();
      setEmail("");
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }
  return (
    <section className="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2">
      <div className="container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10">
        <img
          src={icon}
          alt=""
          className="absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90"
        />
        <p className="display-3 text-center text-white !leading-[130%]">
          Make Accupay Part Of Your Work And Get Daily Update
        </p>
        <form onSubmit={handleSubmit} className=" pt-6 sm:pt-10  relative">
          <div className="flex justify-center items-center gap-3 max-[500px]:flex-col">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full  lg:w-2/4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="border border-mainTextColor bg-s2 py-3 sm:py-4 px-4 md:px-8 font-medium">
              Subscribe Now
            </button>
          </div>
          <p
            className={` text-s3 text-center pt-2 ${
              isEmpty ? "visible opacity-100 z-0 " : " invisible opacity-0"
            } duration-500`}
          >
            Please enter your email
          </p>
        </form>
      </div>
      <ToastContainer position="bottom-left" />
    </section>
  );
}

export default CTASectiont;
