import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <ScrollTopBtn />
      <Footer />
    </>
  );
};

export default Layout;

const ScrollTopBtn = (props) => {
  const [showBtn, setShowBtn] = useState(false);
  function handleScrol() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const pageScrolled = () => {
    window.scrollY > 150 ? setShowBtn(true) : setShowBtn(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", pageScrolled);
  }, []);

  return (
    <button className="scrolltotop" onClick={handleScrol}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
      </svg>
      <style jsx>{`
        .scrolltotop {
          visibility: ${showBtn ? "visible" : "hidden"};
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10%;
          background-color: red;
          border: none;
          z-index: 1000;
          transition: all 0.2s ease-in-out;
        }
        .scrolltotop > svg {
          color: white;
          font-size: 25px;
        }
      `}</style>
    </button>
  );
};
