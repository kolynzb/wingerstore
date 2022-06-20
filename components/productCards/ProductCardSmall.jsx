import Image from "next/image";
import { BsSuitHeart, BsCart3 } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import calculateDiscount from "../../helpers/calculateDiscount";
import Link from "next/link";
import { useState } from "react";
import { removeFromCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
const ProductCardSmall = ({
  id,
  previewImage,
  productName,
  discount,
  categories,
  rating,
  price,
  newItem,
  number,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    quantity < number && setQuantity((quantity += 1));
  };
  const decreaseQuantity = () => {
    quantity !== 0 && setQuantity((quantity -= 1));
  };
  return (
    <div className=" border-b pb-3 rounded-md hover:shadow-lg w-[500px] h-[100px] flex items-center justify-center  mb-3 ml-3">
      <figure className=" group relative  w-[100px] h-[100px]  rounded-md  flex items-center justify-center transition-all delay-300 ease-in-out overflow-hidden">
        <Link href={`shop/${id}`}>
          <Image
            className="absolute  object-cover object-center cursor-pointer w-[250px] h-[300px] hover:scale-125 transition-all delay-75 ease-in-out"
            src={previewImage}
            alt={productName}
            layout="fill"
          />
        </Link>
      </figure>
      <section className=" w-[400px] pl-4 pr-4">
        <h1 className="font-normal text-[22px] tracking-wide pb-1">
          {productName}
        </h1>

        <div className="pb-3">
          {discount ? (
            <div className="text-accent  font-medium text-md">
              UGX {calculateDiscount(discount, price)}
            </div>
          ) : (
            <div className="text-accent  font-medium text-md ">UGX {price}</div>
          )}
        </div>
      </section>
      <div className="border  bg-white text-3xl w-20 rounded-md flex items-center justify-between h-10">
        <button
          className=" text-3xl pb-1 flex items-center justify-between"
          onClick={incrementQuantity}
        >
          +
        </button>
        <span className="font-light text-2xl">{quantity}</span>
        <button
          className=" text-4xl  pr-2 pb-1  flex items-center justify-between"
          onClick={decreaseQuantity}
        >
          -
        </button>
      </div>
      <section className="flex flex-col  items-center justify-between h-full py-3">
        <Link href={`/shop/${id}`}>
          <button className="text-green-500 text-sm border-[1px] hover:scale-95 transition-all ease-in-out rounded-md px-1  border-green-500">
            View
          </button>
        </Link>
        <button
          className="text-red-500 text-sm border-[1px] hover:scale-95 transition-all ease-in-out rounded-md  px-1 border-red-500"
          // onClick={() => console.log(id)}
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </button>
      </section>
    </div>
  );
};

export default ProductCardSmall;
