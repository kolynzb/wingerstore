import React, { useState } from "react";
import ProductCard from "../../components/productCards/ProductCard";
import ProductCardLarge from "../../components/productCards/ProductCardLarge";
import data from "../../dummyData/dummyData";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
const Shop = () => {
  const [showListView, setShowListView] = useState(false);
  return (
    <div className="bg-bkgWhite flex items-center justify-center flex-col ">
      <Navbar setShowListView={setShowListView} />
      <div className="  flex items-center justify-between w-full px-[60px]  pb-20">
        <SideBar />
        <div className="">
          <SectionRight
            showListView={showListView}
            setShowListView={setShowListView}
          />
        </div>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <aside className="hidden sm:flex flex-col items-start justify-start self-start ">
      <div className="h-[200px] w-[250px] bg-white rounded-md  mb-8"></div>
      <div className="h-[200px] w-[250px] bg-white rounded-md  mb-8"></div>
      <div className="h-[200px] w-[250px] bg-white rounded-md  mb-8"></div>
      <div className="h-[200px] w-[250px] bg-white rounded-md  mb-8"></div>
    </aside>
  );
};
const Navbar = ({ setShowListView }) => {
  return (
    <div className="hidden sm:flex bg-white items-center justify-between h-[8vh] my-10 px-5 rounded-md w-[90%]">
      <div></div>
      <div className="flex items-center justify-between  w-20">
        <span
          onClick={() => setShowListView(true)}
          className="hover:border-accent hover:scale-95 transition-all ease-in-out hover:text-accent rounded-md w-8 h-8 text-gray-700 border-2 flex items-center justify-center text-2xl "
        >
          <AiOutlineUnorderedList />
        </span>
        <span
          onClick={() => setShowListView(false)}
          className="hover:border-accent hover:scale-95 transition-all ease-in-out hover:text-accent rounded-md w-8 h-8 text-gray-700 border-2 flex items-center justify-center text-2xl "
        >
          <IoGrid />
        </span>
      </div>
    </div>
  );
};
const SectionRight = ({ showListView, setShowListView }) => {
  return (
    <section className="w-[90%]  flex items-center justify-start">
      <Products showListView={showListView} />
    </section>
  );
};
export default Shop;

const Products = ({ showListView }) => {
  return (
    <div
      className={
        showListView
          ? "flex  flex-wrap items-start justify-start w-[70vw] sm:ml-10 "
          : "flex flex-wrap items-center  justify-between sm:ml-4"
      }
    >
      {!showListView
        ? data.map((product, i) => (
            <ProductCard
              key={i}
              id={product.id}
              previewImage={product.previewImage}
              productName={product.productName}
              discount={product.discount}
              categories={product.categories}
              rating={product.rating}
              price={product.price}
              newItem={true}
              large={true}
            />
          ))
        : data.map((product, i) => (
            <ProductCardLarge
              key={i}
              id={product.id}
              previewImage={product.previewImage}
              productName={product.productName}
              discount={product.discount}
              categories={product.categories}
              rating={product.rating}
              price={product.price}
              newItem={true}
              large={true}
            />
          ))}
    </div>
  );
};
