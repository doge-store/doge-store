import { useEffect, useState } from "react";
import { PiMinus, PiPlus, PiStar, PiStarFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import LinkButton from "../components/ui/LinkButton";
import ProductCard from "../components/ui/ProductCard";
import { shopPage, socialLinks } from "../data/data";
import { addToCartButton } from "../redux/features/productCartSlice";
import { AppDispatch } from "../redux/store";
import breadcrumpIllus from "/images/breadcrumb_img_14.png";
import productImg from "/images/product_img.png";

const tabBtn = ["Description", "Reviews (0)"];

function ShopDetailsPage() {
  const [inputQty, setInputQty] = useState(1);
  const [active, setActive] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const { name } = useParams();
  const [bodyData, setBodyData] = useState(Object);

  useEffect(() => {
    const productFilteredData = shopPage.filter(
      (product) => product.name.replaceAll(" ", "-").toLowerCase() === name
    );
    setBodyData(productFilteredData[0]);
  }, [name]);

  const handleAddToCart = (
    id: string,
    name: string,
    price: number,
    inputQty: number
  ) => {
    dispatch(addToCartButton({ id, name, price, inputQty }));
  };

  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Shop Details"
        pageDesc="Explore our Shop for essential accounting and payroll tools. From innovative software to expert-guided courses, empower your business"
        pageTitle="Shop Details"
      />

      <section className="container stp-30 sbp-15 grid grid-cols-12 gap-6">
        <div className=" col-span-12 md:col-span-6 flex justify-center items-center overflow-hidden">
          <img
            src={productImg}
            alt=""
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 flex flex-col justify-center items-start">
          <h2 className="display-4 pb-2 lg:pb-5">
            {bodyData === undefined ? "Online Courses" : bodyData.name}
          </h2>
          <div className="flex justify-start items-center gap-1 text-s2 pb-2">
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
            <PiStarFill />
          </div>
          <div className="flex justify-start items-center gap-5">
            <h3 className="heading-3">
              $ {bodyData === undefined ? "430" : bodyData.price}.00 USD{" "}
            </h3>
            <h3 className="heading-3 relative line-through">$ 799.00 USD</h3>
          </div>
          <div className=" flex justify-start items-center gap-3 pt-3 lg:pt-5">
            <p className="bg-softBg rounded-full px-3 py-2">Course</p>
            <p className="bg-softBg1 rounded-full px-3 py-2">On Sale</p>
          </div>
          <p className="text-xl pt-4 lg:pt-6 font-medium">Item Description</p>
          <p className=" text-bodyText pt-3 pb-3 lg:pb-6 border-b">
            Empower your business with our cutting-edge Payroll Processing
            Tools, designed to streamline your payroll operations and ensure
            accuracy and compliance.
          </p>
          <div className="">
            <p className="text-xl pt-3 lg:pt-6 font-medium pb-3">Quantity</p>
            <div className="flex justify-start items-center gap-5">
              <div className="flex justify-between items-center text-xl sm:text-2xl border border-strokeColor w-[140px] px-3">
                <button
                  className=" pr-2"
                  onClick={() => setInputQty(inputQty > 1 ? inputQty - 1 : 1)}
                >
                  <PiMinus />
                </button>
                <div className="flex justify-center items-center">
                  <input
                    type="number"
                    value={inputQty}
                    onChange={(e) => setInputQty(Number(e.target.value))}
                    className="w-[50px] outline-none border-x pl-4 py-1 sm:py-2"
                  />
                </div>
                <button
                  className="pl-2"
                  onClick={() => setInputQty(inputQty + 1)}
                >
                  <PiPlus />
                </button>
              </div>
              <div
                className=""
                onClick={() =>
                  handleAddToCart(
                    bodyData.id,
                    bodyData.name!,
                    bodyData.price!,
                    inputQty
                  )
                }
              >
                <button className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="  pt-6 lg:pt-6">
            <h5 className="heading-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-[20px] after:h-[2px] after:bg-p1">
              Follow Us
            </h5>
            <ul className="flex justify-start items-center gap-2 text-white group pt-5">
              {socialLinks.map(({ id, icon }) => (
                <li key={id}>
                  <Link
                    to={"#"}
                    className="bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 block"
                  >
                    {icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container stp-15 sbp-30">
        <div className="flex justify-start items-center gap-20 border-b">
          {tabBtn.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`heading-4 pb-3  border-b-[3px]  mb-[-2px] ${
                idx === active ? "border-p1" : "border-b-transparent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {active === 0 ? (
          <p className=" text-bodyText pt-8">
            Enrich your knowledge and skills with our comprehensive Online
            Courses on accounting and payroll management. Tailored for
            professionals and businesses, our courses cover topics such as tax
            compliance, payroll optimization, and financial reporting. Access
            engaging content, expert insights, and practical case studies at
            your own pace. Stay ahead in the financial landscape and empower
            yourself or your team with the essential skills needed for success.
          </p>
        ) : (
          <div className="text-bodyText pt-8">
            <p>There are no reviews yet.</p>
            <p className="py-4">Be the first to review “Online Courses”</p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <p className="text-mainTextColor pt-8">Rate this item</p>
            <div className="flex justify-start items-center gap-1 text-xl text-s2">
              <PiStar />
              <PiStar />
              <PiStar />
              <PiStar />
              <PiStar />
            </div>

            <div className="grid grid-cols-2 pt-5 gap-6">
              <div className="col-span-2">
                <textarea
                  className="h-[200px] w-full border outline-none p-2 border-strokeColor bg-softBg"
                  placeholder="Write your review*"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  className=" w-full border p-4 outline-none border-strokeColor bg-softBg"
                  placeholder="Name*"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  className=" w-full border p-4 outline-none border-strokeColor bg-softBg"
                  placeholder="Email"
                />
              </div>

              <div className="col-span-2 table-checkbox ">
                <label className="flex justify-start items-center gap-2 pb-5">
                  <input type="checkbox" className=" min-w-4 " />
                  <p>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </label>
                <button className="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="container sbp-30">
        <div className="flex justify-between items-center">
          <h3 className="display-4">Recent Products</h3>
          <LinkButton link="/shop" text="Show more" />
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          {shopPage.slice(0, 3).map(({ price, ...props }, idx) => (
            <ProductCard key={idx} price={Number(price)} {...props} idx={idx} />
          ))}
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default ShopDetailsPage;
