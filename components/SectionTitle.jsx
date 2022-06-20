import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <header className="w-full flex items-center justify-center flex-col my-4">
      <h1 className="text-bkgBlue text-4xl capitalize">{title} </h1>
      <div className="bg-accent h-1 w-[5%] rounded-full"></div>
      <h3 className="font-light text-xs text-center w-[400px]">{subtitle}</h3>
    </header>
  );
};

export default SectionTitle;
