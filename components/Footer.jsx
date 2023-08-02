import { FaArrowCircleRight } from "react-icons/fa";
import React from "react";
import { siteMap, products, contact } from "@/script";
import Image from "next/image";
import { instaLink } from "@/script";
import Link from "next/link";

export default function Footer() {
  // console.log(siteMap);
  // console.log(products);
  return (
    <div className="footer  ">
      <div className="siteMap ">
        <h1 className="title btmLine">SITEMAP</h1>
        <div className="links df">
          <div className="left-site-links df gp3">
            {siteMap.left.map((link) => {
              return (
                <Link href={"#"}>
                  <FaArrowCircleRight /> {link}
                </Link>
              );
            })}
            {/* <Link href={"#"}>
              <BsFillArrowRightCircleFill /> lorem
            </Link>
            <p>
              <BsFillArrowRightCircleFill /> lorem
            </p>
            <p>
              <BsFillArrowRightCircleFill /> lorem
            </p> */}
          </div>
          <div className="right-site-links df gp3">
            {siteMap.right.map((link) => {
              return (
                <Link href={"#"}>
                  <FaArrowCircleRight /> {link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="products">
        <h1 className="footer-title btmLine">{products.title}</h1>
        <div className="links df gp3">
          {products.links.map((link) => {
            return (
              <Link href={"#"}>
                <FaArrowCircleRight /> {link}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="lato Instagram Feed">
        <h1 className="footer-title btmLine">Instagram Feed</h1>
        <div className="inst-links">
          {instaLink.link.map((link) => (
            <Link href={"#"}>
              <Image src={link} alt="" width={80} height={80} />
            </Link>
          ))}
        </div>
        <button className="loadBtn">Load More</button>
      </div>
      <div
        className="
contact"
      >
        <h1 className="footer-title btmLine">Quick Contact</h1>
        {contact.map((detail) => {
          return (
            <div className="contact-details">
              <p>{detail.location}</p>
              <p>{detail.number}</p>
              <p>{detail.email}</p>
            </div>
            // <p>{location}</p>
          );
        })}
      </div>
    </div>
  );
}
