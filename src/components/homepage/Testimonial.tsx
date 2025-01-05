// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliceIcon from "/images/sliceIcon.png";
import { testimonials } from "../../data/data";

function Testimonial() {
  return (
    <section className="stp-30 sbp-30 relative">
      <div className=" overflow-hidden">
        <img
          src={sliceIcon}
          alt=""
          className="absolute top-0 right-2 -rotate-90 max-md:h-[80px]"
        />
      </div>
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              Testimonial
            </p>
            <h1 className="display-4  pt-4 ">Accupay Customer Stories</h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
            Startups thrive with AccuPay. Their flexible payroll solutions have
            been instrumental in our journey, providing the support
          </p>
        </div>
      </div>
      <div className="sponsors stp-15">
        <Swiper
          className="!flex !justify-center !items-center"
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
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: false,
            },
            674: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
        >
          {testimonials.map(({ id, img, name, designation, review }) => (
            <SwiperSlide key={id}>
              <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                <p className="text-bodyText text-center">"{review}"</p>
                <div className="flex gap-3 pt-3">
                  <div className="">
                    <img src={img} alt="" className=" rounded-full" />
                  </div>
                  <div className="">
                    <p className="text-lg font-medium">{name}</p>
                    <p>{designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sponsors pt-6">
        <Swiper
          className="!flex !justify-center !items-center"
          modules={[FreeMode, Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          slidesPerView="auto"
          loop={true}
          speed={6000}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: false,
            },
            674: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
        >
          {testimonials.map(({ id, img, name, designation, review }) => (
            <SwiperSlide key={id}>
              <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                <p className="text-bodyText text-center">"{review}"</p>
                <div className="flex gap-3 pt-3">
                  <div className="">
                    <img src={img} alt="" className=" rounded-full" />
                  </div>
                  <div className="">
                    <p className="text-lg font-medium">{name}</p>
                    <p>{designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
