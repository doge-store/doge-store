import { PiMinus, PiPlus, PiTrashFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import {
  addToCart,
  emptyCart,
  removeFromTheCart,
  removeProducts,
} from "../redux/features/productCartSlice";
import { AppDispatch, useAppSelector } from "../redux/store";
import breadcrumpIllus from "/images/breadcrumb_img_9.png";
import productImg from "/images/product_cart_img.png";

function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, itemPrice } = useAppSelector(
    (state) => state.productCartReducer.value
  );

  const handleAddToCart = (id: string, name: string, price: number) => {
    dispatch(addToCart({ id, name, price }));
  };

  const handleRemoveProducts = (id: string, name: string, price: number) => {
    dispatch(removeProducts({ id, name, price }));
  };

  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Cart"
        pageDesc="Optimize your financial journey by reviewing your selections on our secure cart page. Streamline the checkout process."
        pageTitle="Cart"
      />

      <section className="stp-30 container overflow-hidden">
        {cartItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className=" min-w-[774px] w-full  whitespace-nowrap">
              <thead className="">
                <tr className=" w-full border-b">
                  <th className="text-start  pb-4">Product</th>
                  <th className="text-start pb-4">Name</th>
                  <th className="text-start pb-4">Unit Price</th>
                  <th className="text-start pb-4">Quantity</th>
                  <th className="text-start pb-4">Subtotal</th>
                  <th className="text-start pb-4"></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map(({ id, name, qty, price }) => (
                  <tr className=" w-full border-b" key={id}>
                    <td className="py-3">
                      <img src={productImg} alt="" />
                    </td>
                    <td className="text-start">{name}</td>
                    <td className="text-start">${price}.00</td>
                    <td className="text-start">
                      <div className="flex justify-between items-center text-lg  border border-strokeColor w-[130px] px-3">
                        <button
                          className=" pr-2"
                          onClick={() => handleRemoveProducts(id, name, price)}
                        >
                          <PiMinus />
                        </button>
                        <div className="flex justify-center items-center">
                          <p className="w-[50px] outline-none border-x pl-4 py-1 sm:py-2">
                            {qty}
                          </p>
                        </div>
                        <button
                          className="pl-2"
                          onClick={() => handleAddToCart(id, name, price)}
                        >
                          <PiPlus />
                        </button>
                      </div>
                    </td>
                    <td className="text-start">${(price * qty!).toFixed(2)}</td>
                    <td className="text-start">
                      <span
                        onClick={() => dispatch(removeFromTheCart(id))}
                        className=" cursor-pointer"
                      >
                        <PiTrashFill />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="">
            <h2 className="heading-2 pt-10 pb-30 text-center">
              Please add products to your cart!
            </h2>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center pt-6 gap-6 w-full max-sm:flex-col-reverse">
            <div className="flex justify-start items-center sm:w-2/3">
              <input
                type="text"
                className="border outline-none px-2 md:px-8 py-2 sm:py-3  text-bodyText placeholder:text-bodyText max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]"
                placeholder="Coupon Code"
              />
              <button className="bg-p1 border border-p1 py-2 sm:py-3 px-2 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500">
                Coupon Code
              </button>
            </div>
            <button
              className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
              onClick={() => dispatch(emptyCart())}
            >
              Empty Cart
            </button>
          </div>
        )}
      </section>

      {cartItems.length > 0 && (
        <section className="stp-15 grid grid-cols-12 container sbp-30">
          <div className="border p-8 col-span-12 md:col-span-6 md:col-start-4">
            <div className=" flex justify-between items-center pb-6 border-b text-bodyText">
              <p>Subtotal</p>
              <p>${itemPrice}</p>
            </div>
            <div className=" flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8">
              <p>Subtotal</p>
              <p>${itemPrice}</p>
            </div>
            <Link
              to={"/checkout"}
              className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
            >
              Proceed To Checkout
            </Link>
          </div>
        </section>
      )}

      <CTASectiont />
    </main>
  );
}

export default CartPage;
