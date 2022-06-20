import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  // md:absolute md:bottom-0
  return (
    <footer className=" flex items-center justify-center flex-col w-full sm:h-[65vh] border-t bg-bkgBlue text-white">
      <Top />
      <Middle />
      <Bottom />
    </footer>
  );
};

export default Footer;

const Top = () => {
  return (
    <section className="border-b flex flex-col sm:flex-row items-center justify-between w-[90%] pb-8 mb-6 ">
      <div className="text-5xl hidden lg:block">LOGO</div>
      <div className=" pb-2 sm:pb-0">
        <h1 className="font-semibold text-lg"> Subscribe to our Newsletter</h1>
        <p className="font-light text-base">
          Get all the latest Offers & Updates first
        </p>
      </div>
      <form className="" action="">
        <input
          className="bg-tranpBlue border-2 rounded-md h-[40px] w-[250px] mr-1 outline-none "
          type="text"
          placeholder="Email Address......"
        />
        <button className="btn-filled h-[40px] hover:border-3">
          Subscribe
        </button>
      </form>
    </section>
  );
};
const Middle = () => {
  return (
    <section className=" flex items-center flex-col  justify-between border-b  w-[90%] mb-4 pb-5 sm:h-[35vh] sm:flex-row">
      <MiddleSect />
      <MiddleSect />
      <MiddleSect />
      <MiddleSect />
    </section>
  );
};
const MiddleSect = () => {
  return (
    <section className="pb-5 sm:pb-0 ">
      <h1 className="capitalize text-xl ">sectionTitle</h1>
      <div className="bg-accent h-1 w-[60%] rounded-full mb-2 "></div>
      <li className="list-none  text-gray-400 capitalize text-base pb-1 font-light transition-all ease-in-out cursor-pointer hover:text-accent hover:pl-2">
        lorem ipsun
      </li>
      <li className="list-none text-gray-400  capitalize text-base pb-1 font-light transition-all ease-in-out cursor-pointer hover:text-accent hover:pl-2">
        lorem ipsun
      </li>
      <li className="list-none text-gray-400  capitalize text-base pb-1 font-light transition-all ease-in-out cursor-pointer hover:text-accent hover:pl-2">
        lorem ipsun
      </li>
      <li className="list-none  text-gray-400 capitalize text-base pb-1 font-light transition-all ease-in-out cursor-pointer hover:text-accent hover:pl-2">
        lorem ipsun
      </li>
    </section>
  );
};

const Bottom = () => {
  return (
    <section className="flex items-center justify-between w-[90%] flex-col sm:flex-row ">
      <p className="pb-3 sm:pb-0">
        <span className="">We Accept :</span>
      </p>
      <p className="font-light pb-3 sm:pb-0">Wingerstore Copyright (c) 2020</p>
      <p className="flex">
        <span className="hidden sm:block">Our Socials :</span>
        <div className="text-2xl pl-2 hover:text-accent transition-all ease-in-out hover:scale-105">
          <FaFacebookF />
        </div>
        <div className="text-2xl pl-2 hover:text-accent transition-all ease-in-out hover:scale-105">
          <FaTwitter />
        </div>
        <div className="text-2xl pl-2 hover:text-accent transition-all ease-in-out hover:scale-105">
          <FaInstagram />
        </div>
        <div className="text-2xl pl-2 hover:text-accent transition-all ease-in-out hover:scale-105">
          <SiGmail />
        </div>
      </p>
    </section>
  );
};
