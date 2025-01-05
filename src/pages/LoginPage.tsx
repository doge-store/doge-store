import {
  PiArrowLeft,
  PiArrowRight,
  PiEnvelopeFill,
  PiLockFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import google from "/images/google.png";
import img from "/images/login_bg_img.png";
import logo from "/images/logo.png";
// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/data";
import {SyntheticEvent, useState} from "react";

import * as role from "../models/Role.ts";
import * as auth from "../net/auth.ts";

import Input from "../common/form/inputs/text";
// import Password from "../common/form/inputs/password";
// import Wrapper from "../common/form/inputs/wrapper";

function LoginPage() {

interface Form {
  login: string | undefined;
  pw: string | undefined;
}
const nav = useNavigate();

const [form, setForm] = useState<Form>({ login: undefined, pw: undefined });
// const [errors, setErrors] = useState<{ [k: string]: string[] } | undefined>(undefined);
  // const [email, setEmail] = useState("");

// const emailChange = (v: string) => {
//     setForm({ ...form, pw: v });
    // if (validateEmail(v)) {
    //   setVisible(undefined);
    //   return;
    // }
    //
    // setVisible("invisible");
// };

const login = (e: SyntheticEvent) => {
  e.preventDefault();

  auth.login(form).then(() => {
    const r = window.localStorage.getItem("role");

    switch (r) {
      case role.Role.CUSTOMER:
        nav("/app/profile");
        return;

      case role.Role.ADMINISTRATOR:
        nav("/app/publish");
        return;

      default:
          nav("/app/profile"); // @todo: where to navigate guest and admin?
        }//switch
   });//auth.login

  };//login

  return (
    <main>
      <section className="flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col ">
        <div className=" relative lg:max-h-screen lg:min-h-screen  overflow-hidden max-xl:order-2">
          <img src={img} alt="" className=" object-cover h-full" />

          <div className="absolute bottom-10 xl:bottom-20 left-4 xl:left-16 lg:max-xxl:mr-8  xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden">
            <Swiper
              className="!flex !justify-center !items-center relative"
              modules={[FreeMode, Autoplay, Navigation]}
              spaceBetween={24}
              navigation={{
                nextEl: ".ara-next",
                prevEl: ".ara-prev",
              }}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
            >
              {testimonials.map(({ id, name, designation, review }) => (
                <SwiperSlide key={id}>
                  <div className="relative">
                    <p className=" text-lg sm:text-xl ">"{review}"</p>
                    <div className="flex gap-3 pt-3 justify-between">
                      <div className="">
                        <p className=" text-lg sm:text-2xl font-medium">
                          {name}
                        </p>
                        <p className=" max-sm:text-xs">{designation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20">
                <button className=" bg-mainTextColor rounded-full text-white p-3 ara-prev">
                  <PiArrowLeft />
                </button>
                <button className=" bg-mainTextColor rounded-full text-white p-3  ara-next">
                  <PiArrowRight />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        <div className=" max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-30">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <h2 className="display-4 py-5">Login</h2>
          <p className=" text-bodyText pb-6 lg:pb-10">
            Grow with expert consulting support.
          </p>
          <button className="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full">
            {" "}
            <span>
              <img src={google} alt="" />
            </span>{" "}
            Sign up with Google
          </button>

          <div className=" py-6 lg:py-8 text-center">
            <p className="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor  after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor  max-md:before:content-none max-md:after:content-none before:w-[40%]">
              Or Sign In With
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 py-4 px-8 border  flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <PiEnvelopeFill />
              </span>

            <Input value={form.login} onChange={(v) => setForm({ ...form, login: v })}/>

              {/*<input value={form.login}*/}
              {/*  type="text"*/}
              {/*  placeholder="Type email address"*/}
              {/*  className=" placeholder:text-bodyText w-full outline-none"*/}
              {/*/>*/}
            </div>
            <div className="col-span-2 py-4 px-8 border  flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <PiLockFill />
              </span>
              {/*<input value={form.pw}*/}
              {/*  type="password"*/}
              {/*  placeholder="Password"*/}
              {/*  className=" placeholder:text-bodyText w-full outline-none"*/}
              {/*/>*/}

              <Input value={form.pw} onChange={(v) => setForm({ ...form, pw: v })} />

            </div>
            <div className="col-span-2 table-checkbox flex justify-between items-center">
              <label className="flex justify-start items-center gap-2">
                <input type="checkbox" className=" " />
                <p>Remember me</p>
              </label>
              <Link to={"/contact"} className=" font-medium">
                Forget Password?
              </Link>
            </div>
            <div className="col-span-2">
              <Link to={"/contact"} onClick={login} className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
