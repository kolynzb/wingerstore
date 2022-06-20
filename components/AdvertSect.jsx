import React from "react";
import Image from "next/image";
const AdvertSect = () => {
  return (
    <section className="px-[60px] flex items-center justify-between flex-col md:flex-row md:w-90%">
      <Card
        productName="SmartWatch"
        previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638691448/wingerstore/pexels-dario-fernandez-ruz-9130516_fmtqxj.jpg "
        description="Space Gray Aluminum Case with
        Black/Volt Real Sport Band
        
        "
      />
      <Card
        productName="SmartWatch"
        previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638691448/wingerstore/pexels-dario-fernandez-ruz-9130516_fmtqxj.jpg "
        description="Space Gray Aluminum Case with
        Black/Volt Real Sport Band
        
        "
      />
    </section>
  );
};

export default AdvertSect;

const Card = ({ productName, previewImage, description }) => {
  return (
    <div className="flex items-center justify-center h-[300px] rounded-md overflow-hidden mb-4 mr-1 shadow-md">
      <div className=" mx-[3px] pl-3">
        <h1 className="capitalize  text-2xl mb-4"> {productName}</h1>
        <p className="text-xs text-gray-400 font-light mb-4">{description}</p>

        <button className="btn-filled">View Details</button>
      </div>
      <figure className="relative w-[300px] h-full ">
        <Image
          className="absolute inset object-cover object-center"
          src={previewImage}
          layout="fill"
        />
      </figure>
    </div>
  );
};
