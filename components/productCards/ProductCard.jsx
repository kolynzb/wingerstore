import Image from "next/image";
import { BsSuitHeart, BsCart3 } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import calculateDiscount from "../../helpers/calculateDiscount";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../store/slices/wishlistSlice";
import { addToCart } from "../../store/slices/cartSlice";
const ProductCard = ({
  id,
  previewImage,
  productName,
  discount,
  categories,
  rating,
  price,
  newItem,
}) => {
  const dispatch = useDispatch();

  return (
    <div className=" rounded-md shadow-lg w-[270px] flex items-center justify-center flex-col mb-3 ml-3 ">
      <figure className=" group relative cursor-pointer w-[250px] h-[300px]  rounded-md  flex items-center justify-center transition-all delay-300 ease-in-out overflow-hidden">
        <Link href={`/shop/${id}`}>
          <Image
            className="object-fill w-[250px] h-[300px] hover:scale-125 transition-all delay-75 ease-in-out"
            src={previewImage}
            alt={productName}
            width={250}
            height={300}
          />
        </Link>
        {discount && (
          <div className="absolute top-0 left-0 bg-accent h-7  w-12 text-white  rounded-sm text-xs flex justify-center items-center">
            -{discount}%
          </div>
        )}
        <div className="group-hover:bottom-11 absolute -bottom-10 flex justify-between items-center  w-[125px] transition-all delay-100 ease-in-out">
          <div
            onClick={() => dispatch(addToWishlist(id))}
            className="text-white cursor-pointer bg-accent  w-10 h-10 rounded-md flex justify-center items-center text-[25px] transition-all delay-200 ease-in-out  hover:text-accent hover:border-accent hover:bg-transparent hover:border-2"
          >
            <BsSuitHeart />
          </div>
          <div
            onClick={() => dispatch(addToCart(id))}
            className="text-white  cursor-pointer bg-accent  w-10 h-10 rounded-md flex justify-center items-center text-[25px] transition-all delay-200 ease-in-out  hover:text-accent hover:border-accent hover:bg-transparent hover:border-2"
          >
            <BsCart3 />
          </div>
        </div>
      </figure>
      <section className=" w-[250px]">
        <div className="pt-2 pb-1 flex justify-between items-center ">
          <div>
            {categories.map((category, i) => (
              <span key={i} className="font-light text-sm self-left ">
                {category},
              </span>
            ))}
          </div>
          {newItem && <p className="text-green-500 ">New</p>}
        </div>
        <h1 className="font-normal text-[22px] tracking-wide pb-1">
          {productName}
        </h1>
        <div className="flex justify-between items-center  pb-3">
          <div className=" text-yellow-400 flex justify-center items-center text-lg">
            {[...Array(rating)].map((e, i) => (
              <AiFillStar key={i} />
            ))}
            {[...Array(5 - rating)].map((e, i) => (
              <AiOutlineStar key={i} />
            ))}
          </div>
          <div className="font-light text-sm">{rating} Review(s)</div>
        </div>
        <div className="pb-3">
          {discount ? (
            <div className="flex justify-between items-center">
              <div className="text-accent  font-medium text-xl">
                UGX {calculateDiscount(discount, price)}
              </div>
              <div className="font-light line-through text-md  ">
                UGX {price}
              </div>
            </div>
          ) : (
            <div className="text-accent  font-medium text-xl ">UGX {price}</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
