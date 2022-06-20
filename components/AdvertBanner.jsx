import React from "react";
import Image from "next/image";
const AdvertBanner = () => {
  return (
    <section className="relative w-full h-[350px]  rounded-md overflow-hidden m-auto ">
      <Image
        className="absolute inset w-full h-full object-cover object-center z-0 "
        src="https://res.cloudinary.com/kolynz-b/image/upload/v1638691448/wingerstore/pexels-dario-fernandez-ruz-9130516_fmtqxj.jpg"
        layout="fill"
      />
      <div className="absolute top-0 bottom-0 left-0 z-10 bg-gradient-to-r pl-10  from-white bg-opacity-50 w-full md:w-[20%] flex justify-center items-start flex-col h-full">
        <h1 className="capitalize  text-2xl mb-3 "> Smart Watch</h1>
        <p className="text-xs text-gray-400 font-light mb-3 ">
          Space Gray Aluminum Case with Black/Volt Real Sport Band
        </p>
        <button className=" btn-filled">Shop Now</button>
      </div>
    </section>
  );
};

export default AdvertBanner;
