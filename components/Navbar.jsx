import React, { useState } from "react";
import {
  FiSearch,
  FiTwitter,
  FiFacebook,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <header>
      <Top />
      <Middle />
      <Bottom />
      {router.pathname !== "/" && <BreadCrumb router={router} />}
    </header>
  );
};

export default Navbar;

const Top = () => {
  const user = useSelector((state) => state.user.user);
  // onClick={() => dispatch(logOut())
  const [currency, setCurrency] = useState("UGX");
  return (
    <nav className="bg-bkgBlue font-light h-[10vh]  w-full text-white flex justify-center items-center flex-col transition-all ease-in-out   md:flex-row md:justify-between md:px-[60px] md:h-[7vh]">
      <div className="relative  group text-white   flex items-center cursor-pointer">
        {currency} <BiChevronDown />
        <ul className="absolute scale-0 group-hover:scale-100 cursor-pointer bg-white text-black  top-5 h-20 w-20 p-1 font-light rounded-lg shadow-md transition-all ease-in-out origin-top">
          <li
            className="hover:text-bkgBlue  hover:font-semibold transition-all ease-in-out hover:pl-1"
            onClick={() => setCurrency("USD")}
          >
            USD
          </li>
          <li
            className="hover:text-bkgBlue hover:font-semibold transition-all ease-in-out hover:pl-1"
            onClick={() => setCurrency("UGX")}
          >
            UGX
          </li>
          <li
            className="hover:text-bkgBlue hover:font-semibold transition-all ease-in-out hover:pl-1"
            onClick={() => setCurrency("KSH")}
          >
            KSH
          </li>
        </ul>
      </div>

      {user.length == 0 ? (
        <div className="flex items-center ">
          <div className="rounded-full bg-white h-8 w-8 mr-1 overflow-hidden object-center flex justify-center items-center text-bkgBlue text-xl">
            {user.profilePic ? (
              <Image src={user?.profilePic} width={300} height={300} />
            ) : (
              <FiUser />
            )}
          </div>
          <p>Hello ,{user?.username}</p>
        </div>
      ) : (
        <div className="text-white flex items-center justify-between  md:text-md">
          <Link href="/signin">
            <p className="transition-all ease-in-out cursor-pointer hover:text-accent">
              Sign In
            </p>
          </Link>
          <div className="h-5 md:h-7 bg-gray-500 w-[1px] rounded-md mx-2"></div>
          <Link href="/register" className="hover:text-accent">
            <p className="transition-all ease-in-out cursor-pointer hover:text-accent">
              Register
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};
const Middle = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <nav className="px-[40px] h-[10vh] border-b-[1px] border-gray-200   flex items-center justify-between   transition-all ease-in-out md:px-[60px]">
      <Link href="/">
        <div className="logo">
          <h1 className="text-5xl ">LOGO</h1>
        </div>
      </Link>
      <div className="hidden h-10 w-96 border-2 border-gray-400 rounded-md   md:flex items-center justify-between ">
        <input
          className="border-none rounded-md outline-none p-1 w-full h-full"
          classtype="text"
          name=""
          id=""
          placeholder="Search"
        />
        <button className="relative left-[1px] text-2xl text-white bg-accent h-10 rounded-md w-[50px] flex justify-center items-center hover:bg-opacity-80">
          <FiSearch />
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <Link href="/wishlist">
          <Icon icon={<AiOutlineHeart />} items={wishlist.length} />
        </Link>
        <div className="p-1"></div>
        <Link href="/cart" passHref>
          <Icon icon={<AiOutlineShoppingCart />} items={cartItem.length} />
        </Link>
      </div>
    </nav>
  );
};
const Bottom = () => {
  return (
    <nav className="flex items-center  justify-between border-b-[1px] border-gray-200 px-[40px] md:px-[60px] h-[8vh]">
      <div className="flex items-center justify-between   md:w-[70%] sm:w-[90%] lg:w-[60%] xl:w-[50%]">
        <div className="flex items-center justify-between  sm:w-[80%] md:w-[45%] lg:w-[35%] ">
          <div className="text-3xl">
            <FiMenu />
          </div>
          <p className="text-l md:text-xl hidden md:block ">All Categories</p>
        </div>
        <div className="h-11 bg-gray-200 w-[1px] rounded-md mx-2 opacity-95 hidden md:block"></div>
        <ul className=" justify-between items-center w-[300px] text-xl hidden md:flex lg:text-xl">
          <Link href="/">
            <li className="text-accent cursor-pointer transition-all ease-in-out hover:text-accent">
              Home
            </li>
          </Link>
          <Link href="/shop">
            <li className="flex items-center cursor-pointer transition-all ease-in-out justify-between hover:text-accent">
              Shop
            </li>
          </Link>
          <Link href="/help">
            <li className="flex items-center cursor-pointer transition-all ease-in-out justify-between hover:text-accent">
              Help
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center transition-all ease-in-out delay-300">
        <p className="font-light pr-1 hidden lg:block ">Follow Us: </p>
        <div className="rounded-full text-lg cursor-pointer  text-gray-400 border-gray-300 h-9 w-9 border-[1px] flex items-center justify-center ml-1 hover:bg-accent hover:text-white hover:border-accent  ">
          <AiOutlineInstagram />
        </div>
        <div className="rounded-full text-lg cursor-pointer  text-gray-400 border-gray-300 h-9 w-9 border-[1px] flex items-center justify-center ml-1 hover:bg-accent hover:text-white hover:border-accent  ">
          <FiFacebook />
        </div>
        <div className="rounded-full text-lg cursor-pointer  text-gray-400 border-gray-300 h-9 w-9 border-[1px] flex items-center justify-center ml-1 hover:bg-accent hover:text-white hover:border-accent  ">
          <FiTwitter />
        </div>
      </div>
    </nav>
  );
};

const Icon = ({ icon, items }) => (
  <div className="relative rounded-full transition-all ease-in-out text-lg cursor-pointer text-gray-400 border-gray-300 h-9 w-9 border-[1px] flex items-center justify-center ml-1 hover:bg-accent hover:text-white hover:border-accent  ">
    <Link href="/cart">{icon}</Link>

    <div className="absolute top-[-5px] -right-2 bg-bkgBlue rounded-full text-white h-5 w-5 flex items-center justify-center text-xs">
      {items}
    </div>
  </div>
);

const BreadCrumb = ({ router }) => {
  const page = router.pathname.split("/")[1];
  return (
    <section className="px-[40px] h-[8vh] border-b-[1px] border-gray-200   flex items-center justify-between   transition-all ease-in-out md:px-[60px]">
      <h1 className="capitalize text-xl ">{page}</h1>
      <p className="flex items-center font-light capitalize">
        <Link href="/"> Home</Link> <BiChevronRight />
        {router.pathname.split("/")[1]}
      </p>
    </section>
  );
};
