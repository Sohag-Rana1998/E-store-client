import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="h-[650px] w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[650px] w-full"
        >
          <SwiperSlide className="h-full">
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
              <div className="w-full md:w-[50%]">
                <div className="text-8xl font-medium">
                  <h1>Up To</h1>
                  <h1>
                    <span className="text-[#ff4135]">50%</span> Discount
                  </h1>
                </div>
                <div>
                  {" "}
                  <p className="text-4xl mt-4 font-semibold">
                    Summer Lookbook- 2024
                  </p>
                  <p className="text-2xl mt-4 font-semibold">
                    New Modern Stylist Fashionable Men's Wear Jeans Shirt.
                  </p>
                  <button className=" px-10 py-6  border-2 border-gray-700 mt-5 text-2xl font-semibold  hover:bg-[#ff4135] hover:text-white duration-500 ">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-full">
                <img
                  src="https://i.postimg.cc/8PC8pKtp/banner-image-1.png"
                  alt="banner Image"
                  className="w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
              <div className="w-full md:w-[50%]">
                <div className="text-8xl font-medium">
                  <h1>Up To</h1>
                  <h1>
                    <span className="text-[#ff4135]">50%</span> Discount
                  </h1>
                </div>
                <div>
                  {" "}
                  <p className="text-4xl mt-4 font-semibold">
                    Summer Lookbook- 2024
                  </p>
                  <p className="text-2xl mt-4 font-semibold">
                    New Modern Stylist Fashionable Men's Wear Jeans Shirt.
                  </p>
                  <button className=" px-10 py-6  border-2 border-gray-700 mt-5 text-2xl font-semibold  hover:bg-[#ff4135] hover:text-white duration-500 ">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-full">
                <img
                  src="https://i.postimg.cc/ZKsGC8Mr/banner-image-3.png"
                  alt="banner Image"
                  className="w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
              <div className="w-full md:w-[50%]">
                <div className="text-8xl font-medium">
                  <h1>Up To</h1>
                  <h1>
                    <span className="text-[#ff4135]">50%</span> Discount
                  </h1>
                </div>
                <div>
                  {" "}
                  <p className="text-4xl mt-4 font-semibold">
                    Summer Lookbook- 2024
                  </p>
                  <p className="text-2xl mt-4 font-semibold">
                    New Modern Stylist Fashionable Men's Wear Jeans Shirt.
                  </p>
                  <button className=" px-10 py-6  border-2 border-gray-700 mt-5 text-2xl font-semibold  hover:bg-[#ff4135] hover:text-white duration-500 ">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-full">
                <img
                  src="https://i.postimg.cc/wx28d854/banner-image-2.png"
                  alt="banner Image"
                  className="w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
