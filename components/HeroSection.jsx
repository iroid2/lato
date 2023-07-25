"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <Swiper
        className="hero-section"
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <Image
            src={"/images/slide-img.jpg"}
            alt=""
            width={800}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slide"
            src={"/images/slide-img4.jpg"}
            alt=""
            width={800}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <Image
            className="slide"
            src={"/images/slide-img6.jpg"}
            alt=""
            width={800}
            height={300}
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
