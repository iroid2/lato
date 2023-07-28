"use client";
import React from "react";
import Headings from "./Headings";
import Link from "next/link";
import Image from "next/image";
import { toward } from "@/script";
export default function Towards() {
  //   const card = towardLink;
  console.log(toward);
  return (
    <div className="towardSetion">
      <div className="top-towards">
        <Headings
          subHeading={
            "Beyond enriching lives, we believe Lato Milk can play an important role in enriching communities, good causes and the environment."
          }
          title={"TOWARDS A HEALTHY FUTURE"}
        />
      </div>
      <div className="bottm-towards">
        {toward.map((card) => {
          return (
            <div className="towards-Card">
              <Image src={card.image} alt="" width={300} height={260} />
              <div className="towars-card-text">
                <h4 className="title">{card.title}</h4>
                <p>{card.desc}</p>
              </div>
              <Link href={"#"}>
                <p>SEE WORK</p>
              </Link>
            </div>
          );
        })}
        {/* <div className="towards-Card">
          <Image src={"/images/towCard1.jpg"} alt="" width={300} height={260} />
          <div className="towars-card-text">
            <h4 className="title">LATO HELP</h4>
            <p>
              An initiative to improve the lives of differently-abled children
              by providing access to their treatment free of charge.
            </p>
          </div>
          <Link href={"#"}>SEE WORK</Link>
        </div>
        <div className="towards-Card">
          <Image src={"/images/towCard1.jpg"} alt="" width={300} height={260} />
          <div className="towars-card-text">
            <h4 className="title">LATO HELP</h4>
            <p>
              An initiative to improve the lives of differently-abled children
              by providing access to their treatment free of charge.
            </p>
          </div>
          <Link href={"#"}>SEE WORK</Link>
        </div>
        <div className="towards-Card">
          <Image src={"/images/towCard1.jpg"} alt="" width={300} height={260} />
          <div className="towars-card-text">
            <h4 className="title">LATO HELP</h4>
            <p>
              An initiative to improve the lives of differently-abled children
              by providing access to their treatment free of charge.
            </p>
          </div>
          <Link href={"#"}>SEE WORK</Link>
        </div> */}
      </div>
    </div>
  );
}
