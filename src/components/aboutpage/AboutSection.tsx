import { useState } from "react";
import { PiPlayFill } from "react-icons/pi";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import BreadCrumb from "../ui/BreadCrumb";
import vector from "/images/about_vector.png";
import circleIcon from "/images/circleIcon.png";
function AboutSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="pt-24 lg:pt-30 sbp-30 bg-softBg1 relative">
      <img
        src={circleIcon}
        alt=""
        className="absolute top-60 -left-20 max-lg:h-[400px] max-sm:hidden"
      />
      <img
        src={vector}
        alt=""
        className="absolute top-36 right-0 xl:right-28 max-lg:hidden"
      />
      <div className="container pb-10">
        <BreadCrumb pageName="About Us" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24">
          <div className="  max-w-[600px] text-center flex justify-center items-center flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">About</p>
            <h1 className="display-4  pt-4 pb-6">dogecoin store</h1>
            <p className="text-bodyText">
              Welcome to doge store, where financial excellence meets personalized
              service. We understand the intricacies of accounting
              and payroll processing.
            </p>
          </div>
        </div>
        <div className="bg-[url('/images/aboutVideoImg.png')] stp-30 sbp-30 w-[80%] h-[300px] bg-cover md:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[800px] flex justify-center items-center z-10 relative after:absolute after:inset-0 after:bg-black/20 ">
          <button
            onClick={() => setOpen(true)}
            className=" bg-softBg1 text-p1 p-6 lg:p-7 rounded-full text-3xl lg:text-4xl hover:bg-s2 hover:text-white duration-500 relative z-20"
          >
            <PiPlayFill />
          </button>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="ERyzAnU62hU"
        onClose={() => setOpen(false)}
      />
    </section>
  );
}

export default AboutSection;
