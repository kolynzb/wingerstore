import React, { useEffect, useState } from "react";
import data from "../../dummyData/dummyData";
import Image from "next/image";
import calculateDiscount from "../../helpers/calculateDiscount";
import { useRouter } from "next/router";
import { addToWishlist } from "../../store/slices/wishlistSlice";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = data.filter((product) => product.id.toString() == id)[0];

  return (
    <div className="bg-bkgWhite flex  items-center justify-between flex-col  ">
      <ProductSect item={item} />
    </div>
  );
};

const ProductSect = ({ item }) => {
  return (
    <section className=" flex bg-white items-center justify-between flex-col w-[95%] md:[75%] p-1 lg:flex-row my-12  lg:h-[450px]">
      <Courasel item={item} />
      <ProductContent item={item} />
    </section>
  );
};
const Courasel = ({ item }) => {
  const [image, setImage] = useState(item.previewImage);
  // useEffect(() => {
  //   setImage(item.previewImage);
  // }, [image]);

  return (
    <section className="mb-6 sm:mb-0 ">
      <figure className="relative w-[350px] h-[200px] sm:w-[500px] sm:h-[300px] border-2 rounded-md mb-2 ">
        <Image
          className="absolute inset object-cover object-center rounded-md "
          src={image}
          layout="fill"
        />
      </figure>
      <div className="flex item-center justify-between w-[350px] sm:w-[500px] ">
        {item?.images.map((product, i) => (
          <figure
            key={i}
            className="relative w-[60px] h-[60px] sm:w-[95px] sm:h-[75px]  border-2 rounded-md transition-all ease-in-out hover:scale-105"
            onClick={() => setImage(product)}
          >
            <Image
              className="absolute inset object-cover object-center rounded-md"
              src={product}
              layout="fill"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
const ProductContent = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    quantity < item.quantity && setQuantity((quantity += 1));
  };
  const decreaseQuantity = () => {
    quantity !== 0 && setQuantity((quantity -= 1));
  };
  const dispatch = useDispatch();
  return (
    <section className="w-[350px]  sm:w-[500px] h-[400px]  sm:h-[360px] flex items-start justify-between flex-col ml-3">
      <h1 className=" font-semibold text-3xl pr-4">{item?.productName}</h1>
      <div className="text-xl">
        {item.categories.map((item) => (
          <span className="text-xl font-light pr-3">{item}</span>
        ))}
      </div>
      <p>
        {item.discount ? (
          <>
            <span className=" font-semibold text-2xl pr-4">
              UGX{calculateDiscount(item.discount, item.price)}
            </span>
            <span className="line-through  text-2xl pr-4 text-gray-700">
              UGX{item?.price}
            </span>
          </>
        ) : (
          <span className=" font-semibold text-2xl pr-4">UGX{item.price}</span>
        )}
      </p>

      <div className="line"></div>
      <p className="font-light text-base  w-80   pb-4 mb-3 border-gray-400">
        {item?.descrption}
      </p>
      <div className="flex items-center justify-between w-[350px]   mb-3 md:mb-0">
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
        <div>
          <select className="h-10 rounded-md border-gray-300 ring-none outline-none focus:ring-accent focus:border-accent">
            <option value="">Color</option>
            {item.colors.map((item, i) => (
              <option className="capitalize hover:bg-red-400" value="">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between w-[350px] mt-3">
        <button
          className="btn-transparent  h-[45px]"
          onClick={() => dispatch(addToCart(item.id))}
        >
          Add To Cart
        </button>
        <button
          className="btn-transparent h-[45px]"
          onClick={() => dispatch(addToWishlist(item.id))}
        >
          Add To Wishlist
        </button>
      </div>
    </section>
  );
};
export default ProductPage;
