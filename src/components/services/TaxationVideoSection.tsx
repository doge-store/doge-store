import { useState } from "react";
import { PiPlayFill } from "react-icons/pi";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";

function TaxationVideoSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className=" bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 lg:col-span-6">
          <FadeLeft>
            <div className=" flex justify-center items-start flex-col">
              <h2 className="display-4">
                How Small Business Tax Returns Are Prepared
              </h2>
              <p className=" font-medium py-5">
                They help clients meet deadlines, maintain proper documentation,
                and fulfill reporting requirements, including income tax, sales
                tax, payroll tax,{" "}
              </p>
              <p className=" text-bodyText">
                They help clients meet deadlines, maintain proper documentation,
                and fulfill reporting requirements, including income tax, sales
                tax, payroll tax, and other applicable taxes. In the event of a
                tax audit or examination by tax authorities, taxation services
                provide support and representation.{" "}
              </p>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-start-8  ">
          <FadeRight>
            <div className=" relative flex justify-center items-center bg-[url('/images/taxation_video_img.png')] bg-no-repeat bg-cover  max-[400px]:h-[250px] max-[500px]:h-[300px] h-[370px] sm:h-[400px]">
              <button
                onClick={() => setOpen(true)}
                className=" bg-softBg1 text-s1 p-4 lg:p-6 rounded-full text-3xl lg:text-4xl hover:bg-s2 hover:text-white duration-500  z-20 relative"
              >
                <PiPlayFill />
              </button>
            </div>
          </FadeRight>
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

export default TaxationVideoSection;
