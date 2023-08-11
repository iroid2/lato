import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
export default function Header() {
  const navLinks = [
    {
      name: "Home",
      path: "#",
      dot: ".",
    },
    {
      name: "ABOUT US",
      path: "#",
      dot: ".",
    },
    {
      name: "MILK",
      path: "#",
      dot: ".",
    },
    {
      name: "YORGHURT",
      path: "#",
      dot: ".",
    },
    {
      name: "CONTACT US",
      path: "#",
      dot: ".",
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
        <div className="nav-Links  ">
          {navLinks.map((link) => (
            <Link href={link.path}>
              <span className="linkDot">{link.dot} </span> {link.name}
            </Link>
          ))}
        </div>
        <div className="nav-actions center">
          <button>SignUp</button>
        </div>
        <div>
          <GrMenu className="hameMen" />
        </div>
      </div>
    </div>
  );
}
