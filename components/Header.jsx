"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import { useState } from "react";
export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  function handleNavigation() {
    setShowNavigation(!showNavigation);
  }
  const navLinks = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "ABOUT US",
      path: "#",
    },
    {
      name: "MILK",
      path: "#",
    },
    {
      name: "YORGHURT",
      path: "#",
    },
    {
      name: "CONTACT US",
      path: "#",
    },
  ];
  return (
    <div className="header">
      <div className="top-header flex-end">
        <Link href={"#"}>
          {" "}
          <FaFacebookF />
        </Link>
        <Link href={"#"}>
          <BsTwitter />
        </Link>
        <Link href={"#"}>
          <BsInstagram />
        </Link>
        <Link href={"#"}>
          <TfiYoutube />
        </Link>
        <Link href={"#"}>
          <FaLinkedinIn />
        </Link>
      </div>
      <div className="nav-header center">
        <div className="nav-log center">
          <Image
            src={"/images/zilla-log.png"}
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className={showNavigation ? "nav-Links showNav " : "nav-Links"}>
          {navLinks.map((link) => (
            <Link href={link.path}>
              <span className="linkDot"> </span> {link.name}
            </Link>
          ))}
        </div>
        <div className="nav-actions center">
          <button>SignUp</button>
        </div>
        <div>
          <GrMenu onClick={handleNavigation} className="hameMen" />
        </div>
      </div>
    </div>
  );
}
