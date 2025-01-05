import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { PiCaretDownFill, PiPuzzlePiece } from "react-icons/pi";
import { Link } from "react-router-dom";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import DropDownModal from "../components/ui/DropDownModal";
import { city_names, countryList } from "../data/countryCity";
import breadcrumpIllus from "/images/breadcrumb_img_16.png";
function CheckoutPage() {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("United States");
  const [state, setState] = useState("New York");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Checkout"
        pageDesc="Finalize your order seamlessly on our secure Checkout page. Review your selected services, enter billing information"
        pageTitle="Checkout"
      />

      <section className="container stp-30 sbp-30 grid grid-cols-12 gap-6">
        <div className=" col-span-12 border flex justify-between items-center text-bodyText px-6 py-8">
          <p className="flex justify-start items-center gap-2">
            {" "}
            <PiPuzzlePiece /> Have a coupon?
          </p>
          <button
            className=" hover:text-s2 duration-500"
            onClick={() => setShow((prev) => !prev)}
          >
            Click here
          </button>
        </div>

        <AnimateHeight
          height={show ? "auto" : 0}
          className="col-span-12 w-full"
        >
          <input
            type="text"
            className="outline-none placeholder:text-bodyText border px-6 py-8 text-bodyText w-full"
            placeholder="Please enter a coupon code."
          />
        </AnimateHeight>

        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-6 pt-4">
          <h4 className="heading-4 col-span-2">Billings Details</h4>
          <div className=" col-span-2 sm:col-span-1">
            <p className="pb-2">
              First Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="First Name"
            />
          </div>
          <div className=" col-span-2 sm:col-span-1">
            <p className="pb-2">
              Last Name <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="Last Name"
            />
          </div>
          <div className=" col-span-2">
            <p className="pb-2">Company Name (Optional)</p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="Company Name"
            />
          </div>
          <div className=" col-span-2 relative">
            <p className="pb-2">
              Country / Region <span className="text-red-600">*</span>
            </p>
            <p
              className=" border py-5 px-6 text-bodyText w-full flex justify-between items-center"
              onClick={() => setShowModal((prev) => !prev)}
            >
              {country}
              <PiCaretDownFill />
            </p>
            <DropDownModal
              items={countryList}
              setItem={setCountry}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </div>
          <div className=" col-span-2">
            <p className="pb-2">
              Street Address <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="Address line 1"
            />
          </div>
          <div className=" col-span-2">
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="Address line 2"
            />
          </div>
          <div className=" col-span-2">
            <p className="pb-2">
              Town / City <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="New York"
            />
          </div>
          <div className=" col-span-2 relative">
            <p className="pb-2">
              State <span className="text-red-600">*</span>
            </p>
            <p
              className=" border py-5 px-6 text-bodyText w-full flex justify-between items-center"
              onClick={() => setShowModal2((prev) => !prev)}
            >
              {state}
              <PiCaretDownFill />
            </p>
            <DropDownModal
              items={city_names}
              setItem={setState}
              setShowModal={setShowModal2}
              showModal={showModal2}
            />
          </div>
          <div className=" col-span-2">
            <p className="pb-2">Postcode / Zip (optional)</p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="1000"
            />
          </div>
          <div className=" col-span-2">
            <p className="pb-2">
              Phone <span className="text-red-600">*</span>
            </p>
            <input
              type="number"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="Pnone number"
            />
          </div>
          <div className=" col-span-2">
            <p className="pb-2">
              Email Address <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="State"
            />
          </div>

          <h4 className="heading-4">Additional Information's</h4>
          <div className=" col-span-2">
            <p className="pb-2">Order notes (optional)</p>
            <input
              type="text"
              className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
              placeholder="Notes about your order, e.g. special notes for delivery."
            />
          </div>
        </div>

        <div className=" col-span-12 lg:col-span-6">
          <div className="sticky top-32">
            <h4 className="heading-4 pb-6 lg:pb-8 pt-4">Your Order</h4>

            <div className=" shadow2 flex justify-between items-center gap-1 p-6 font-medium w-full">
              <div className=" border w-full">
                <p className=" py-3 px-2 sm:px-6 border-b">Product</p>
                <p className="py-3 px-2 sm:px-6 border-b text-bodyText">
                  Online Courses x 2
                </p>
                <p className="py-3 px-2 sm:px-6 border-b text-bodyText">
                  Subtotal
                </p>
                <p className="py-3 px-2 sm:px-6 font-semibold">Total</p>
              </div>
              <div className=" border sm:w-full">
                <p className=" py-3 px-2 sm:px-6 border-b">Subtotal</p>
                <p className="py-3 px-2 sm:px-6 border-b text-bodyText">
                  $900.00
                </p>
                <p className="py-3 px-2 sm:px-6 border-b text-bodyText">
                  $900.00
                </p>
                <p className="py-3 px-2 sm:px-6  font-semibold">$900.00</p>
              </div>
            </div>

            <div className="mt-8 bg-p1 p-6 w-full">
              <div className=" text-bodyText p-6 bg-white flex justify-start items-start gap-2">
                <div className="text-2xl">
                  <PiPuzzlePiece />
                </div>
                <p>
                  Sorry, it seems that there are no available payment methods
                  for your state. Please contact us if you require assistance or
                  wish to make alternate arrangements.
                </p>
              </div>
              <p className=" text-white py-6">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <Link
                to={"#"}
                className="bg-s2 border border-mainTextColor py-2 sm:py-3 font-medium text-mainTextColor hover:border-mainTextColor hover:bg-mainTextColor hover:text-white duration-500 block text-center"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;
