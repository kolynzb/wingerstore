import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="flex  justify-between items-center w-full md:w-[85%] m-auto  h-[55vh] flex-col sm:flex-row">
      {/* <Slider /> */}
      <Slider3d />
      <div className=" h-full   justify-between flex-col hidden md:flex ">
        <div className="relative rounded-md shadow-lg overflow-hidden w-[300px] h-[190px] mb-2">
          <Image
            className="object-cover object-bottom absolute inset "
            src="https://res.cloudinary.com/kolynz-b/image/upload/v1638635746/wingerstore/Screenshot_2021-12-04_193413_czbikc.png"
            layout="fill"
          />
        </div>
        <div className="relative rounded-md shadow-lg overflow-hidden w-[300px] h-[180px]">
          <Image
            className="object-cover object-center absolute inset "
            src="https://res.cloudinary.com/kolynz-b/image/upload/v1638636179/wingerstore/Screenshot_2021-12-04_194232_s3ys7z.png"
            layout="fill"
          />
          <div className="absolute inset-0 p-2">
            <h1 className="text-white text-3xl">Sales</h1>
            <p className="text-white font-light text-sm w-[200px] my-6">
              Save up to 30% ,0ff discount items this week this week
            </p>
            <Link href="/shop">
              <button className="white-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      lazy={true}
      // pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="w-[90%] md:w-[64%]  "
    >
      <SwiperSlide>
        <div className="swiperContainer z-10">
          <Image
            src="https://res.cloudinary.com/kolynz-b/image/upload/v1638527756/wingerstore/hero_image_s6u8ex.png"
            width={730}
            height={365}
          />
          <div className="swipperContent top-28 left-9 ">
            <h1 className="text-accent text-4xl font-semibold pb-3">
              Lorem ipsum dolor sit
            </h1>
            <p className="text-sm text-white font-light pb-3 w-[550px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <button className="btn-transparent">Lorem</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperContainer  z-20">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperContainer  z-30">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperContainer  z-40">Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
};

const Slider3d = () => {
  return (
    <div className="swiperContainer3d">
      <iframe
        className="absolute object-cover object-center "
        title="Adidas Ozelia"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        width="800"
        height="420"
        // height="370" this is the best size
        src="https://sketchfab.com/models/bd99ae674f724ca690198f22764081f8/embed?autospin=1&autostart=1&ui_theme=dark&dnt=1"
      ></iframe>
    </div>
  );
};
