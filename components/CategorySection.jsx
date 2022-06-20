import React from "react";
import Image from "next/image";
const CategorySection = () => {
  return (
    <div className="   flex  flex-col items-center justify-between  px-[60px] md:flex-row flex-wrap">
      <Card
        previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638689610/wingerstore/pexels-ron-lach-9595073_ogtyyf.jpg"
        category="Accessories"
        subcategories={["watch", "phone covers", "head phones", "ornaments"]}
      />
      <Card
        previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638689610/wingerstore/pexels-ron-lach-9595073_ogtyyf.jpg"
        category="Accessories"
        subcategories={["watch", "phone covers", "head phones", "ornaments"]}
      />
      <Card
        previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638689610/wingerstore/pexels-ron-lach-9595073_ogtyyf.jpg"
        category="Accessories"
        subcategories={["watch", "phone covers", "head phones", "ornaments"]}
      />
      <Card
        previewImage="https://res.cloudinary.com/kolynz-b/image/upload/v1638689610/wingerstore/pexels-ron-lach-9595073_ogtyyf.jpg"
        category="Accessories"
        subcategories={["watch", "phone covers", "head phones", "ornaments"]}
      />
    </div>
  );
};

export default CategorySection;

const Card = ({ previewImage, category, subcategories }) => {
  return (
    <div className="border-[1px] border-gray-400 w-[300px] h-[200px] flex items-center rounded-md overflow-hidden mb-4">
      <div className="pl-2">
        <h1 className="text-2xl capitalize mb-3">{category}</h1>
        <ul>
          {subcategories.map((i) => (
            <li
              className="capitalize text-base font-light transition-all ease-in-out cursor-pointer hover:text-accent hover:pl-2"
              key={i}
            >
              {i}
            </li>
          ))}
        </ul>
        <button className="btn-transparent my-3">View All</button>
      </div>
      <figure className="relative left-1">
        <Image src={previewImage} width={200} height={300} />
      </figure>
    </div>
  );
};
