"use client";
import Headings from "@/components/Headings";
import Image from "next/image";

import { FiTruck } from "react-icons/fi";
import { MdAssignmentReturned } from "react-icons/md";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="detailed-page">
      <div className="detailed-product-sectn df">
        <div className="left-detailed-page">
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide className="swiper-slide">
                <img src="/images/viz.png" width={200} height={400} />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  width={200}
                  height={400}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="right-detailed-page ">
          <div className="product-details">
            <Headings title={"MILK CHOCOLATE"} />
            <p className="desc">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="product-pricing">
            <h4 className="price">UGX 16500</h4>
            <p className="desc">
              Lorem formation on its origins, as well as a random Lipsum
              generator.
            </p>
          </div>
          <div className="product-counter-section ">
            <div className="counter df">
              <div className="minus center">-</div>
              <span className="counter-value center">1</span>
              <div className="plus center">+</div>
            </div>
            <p className="left-qty">
              only <span className="qty">12 cartons</span>left <br></br> dont
              miss out
            </p>
          </div>
          <div className="cart-btns">
            <button>Buy Now</button>
            <button className="border-btn">Add to Cart</button>
          </div>
          <div className="buyer-incentives">
            <div className="derivery incentive df">
              <div className=" center incentive-icon">
                <FiTruck />
              </div>
              <div className="incentive-details">
                <p>Free Derivery</p>
                <p>Enter Your Personal Number for Derivery</p>
              </div>
            </div>
            <div className=" return incentive df">
              <div className=" center incentive-icon">
                {" "}
                <MdAssignmentReturned />
              </div>
              <div className=" incentive-details">
                <p>Return Derivery</p>
                <p>Enter Your Personal Number for Derivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
