import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/productCartSlice";
import { AppDispatch } from "../../redux/store";
import StaggerEffect from "../animation/StaggerEffectOne";

type Props = {
  id: string;
  idx: number;
  img: string;
  name: string;
  price: number;
};

function ProductCard({ id, idx, img, name, price }: Props) {
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (id: string, name: string, price: number) => {
    dispatch(addToCart({ id, name, price }));
  };

  return (
    <div className="col-span-12 min-[450px]:col-span-6 md:col-span-4 relative group">
      <StaggerEffect id={idx}>
        <div className=" relative overflow-hidden">
          <img
            src={img}
            alt=""
            className="hover:scale-110 duration-500 w-full h-full"
          />
          {!addedToCart ? (
            <button
              className="bg-p1 text-white font-medium py-2 lg:py-3 px-4 lg:px-6 absolute bottom-6 right-6 hover:bg-s2 hover:border-mainTextColor border border-p1 hover:text-mainTextColor duration-500"
              onClick={() => {
                handleAddToCart(id, name, price);
                setAddedToCart(true);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button className="  font-medium py-2 lg:py-3 px-4 lg:px-6 absolute bottom-6 right-6 bg-s2  border-mainTextColor border  text-mainTextColor duration-500">
              Added to Cart
            </button>
          )}
        </div>
        <div className="">
          <Link
            to={`/shop/${name.toLowerCase().replaceAll(" ", "-")}`}
            className="heading-3 pt-6 pb-2 block hover:underline"
          >
            {name}
          </Link>
          <p className=" font-medium text-lg">${price}.000</p>
        </div>
      </StaggerEffect>
    </div>
  );
}

export default ProductCard;
