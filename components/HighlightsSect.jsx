import React from "react";
import calculateDiscount from "../helpers/calculateDiscount";
import Image from "next/image";
const HighlightsSect = () => {
  return (
    <div className="flex items-center justify-between px-[60px] flex-col flex-wrap sm:flex-row">
      <Highlight sectionTitle="new Arrivals" />
      <Highlight sectionTitle="new Arrivals" />
      <Highlight sectionTitle="new Arrivals" />
      <Highlight sectionTitle="new Arrivals" />
      <Highlight sectionTitle="new Arrivals" />
    </div>
  );
};

export default HighlightsSect;
const Card = ({ productName, price, discount, previewImage }) => {
  return (
    <section className="flex mb-2">
      <figure className="relative w-[50px] h-[50px] mr-2">
        <Image
          className="absolute inset object-cover object-center "
          src={previewImage}
          layout="fill"
        />
      </figure>
      <div className="flex  justify-between flex-col ">
        <h1 className="text-xs capitalize">{productName}</h1>
        <h1 className="text-sm text-accent">
          UGX{discount ? calculateDiscount(discount, price) : price}
        </h1>
      </div>
    </section>
  );
};

const Highlight = ({ sectionTitle }) => {
  return (
    <div className=" mb-4">
      <h1 className="capitalize">{sectionTitle}</h1>
      <div className="bg-accent h-1 w-[50%] rounded-full mb-2"></div>
      <div className="">
        <Card
          productName="Cola all black"
          price={10000}
          discount={20}
          previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638697824/wingerstore/pexels-olenka-sergienko-3819969_cnzi8z.jpg"
        />
        <Card
          productName="Cola all black"
          price={20000}
          discount={20}
          previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638697824/wingerstore/pexels-olenka-sergienko-3819969_cnzi8z.jpg"
        />
        <Card
          productName="Cola all black"
          price={10000}
          discount={10}
          previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638697824/wingerstore/pexels-olenka-sergienko-3819969_cnzi8z.jpg"
        />
      </div>
    </div>
  );
};
