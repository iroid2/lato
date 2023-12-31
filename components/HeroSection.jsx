"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../app/styles/style.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function HeroSection({ data }) {
  // console.log(data);
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="heroSwiper"
      >
        {data.map((product) => {
          return (
            <SwiperSlide className="swiperSlide df">
              <div className="slideText">
                {/* <h1>{product.slug}</h1> */}
                <h2>{product.title}</h2>
                <p>{product.detailed_description}</p>
                <Link href={`product/${product.slug}`}>
                  <button>Order Now</button>
                </Link>
              </div>
              <img src={product.image} />
            </SwiperSlide>
          );
        })}
        <div className="btns">
          <BsFillArrowLeftCircleFill className="swiper-button-prev" />
          <BsFillArrowRightCircleFill className="swiper-button-next" />
        </div>
      </Swiper>
    </>
  );
}
