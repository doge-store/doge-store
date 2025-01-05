// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "/images/logo1.png";
import logo2 from "/images/logo2.png";
import logo3 from "/images/logo3.png";
import logo4 from "/images/logo4.png";

const sponsorsImg = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4];

function CompanySlider() {
  return (
    <section className="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor">
      <div className="col-span-12 sm:col-span-6 xl:col-span-4">
        <p className="text-xl lg:text-2xl text-bodyText relative after:absolute after:top-[55%] after:right-0 after:w-[50px] after:h-[2px] after:bg-bodyText max-xxl:after:content-none">
          <span className="font-bold text-mainTextColor">15,000+</span>{" "}
          businesses from small startups to household names
        </p>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-8 flex pt-4">
        <Swiper
          className="!flex !justify-center !items-center sponsors"
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          loop={true}
          speed={6000}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: true,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
        >
          {sponsorsImg.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Link to={"#"} className=" flex justify-center items-center">
                <img src={item} alt="sponsor image" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CompanySlider;
