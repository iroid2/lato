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
      name: "🏠",
      path: "#",
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
        <h1>
          <GrMenu className="hameMen" />
        </h1>
        <div className="nav-log">
          <Image
            src={"/images/zilla-log.png"}
            alt=""
            width={800}
            height={200}
          />
        </div>
        <div className="nav-Links center ">
          {navLinks.map((link) => (
            <Link href={link.path}>
              <span className="linkDot">{link.dot} </span> {link.name}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Image src={"/images/action1.png"} alt="" width={100} height={40} />
          <Image src={"/images/action2.png"} alt="" width={100} height={40} />
          <Image src={"/images/action3.png"} alt="" width={200} height={40} />
        </div>
      </div>
    </div>
  );
}
