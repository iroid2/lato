import React from "react";
import Headings from "./Headings";
import FutureSectionCard from "./FutureSectionCard";
import Image from "next/image";
import { cardsLeft } from "@/futureCard";
import { cardsright } from "@/futureCard";

export default function Futuresection() {
  // console.log(cardsLeft);
  return (
    <div className="futureSectn ">
      <div className="top-future-sectn">
        <Headings
          subHeading={
            "We provide delicious, dairy products always offer the best possible nutrition for our customers.  Pure as from the source, tasty to ensure you enjoy and nutritious to give you a healthy balanced lifestyle."
          }
          title={"FUELING A SUSTAINABLE FUTURE "}
        />
      </div>
      <div className="bottm-future-sectn df">
        <div className="left-bottm-future">
          {cardsLeft.map((card) => (
            <div className="card">
              <div className="card-top-sectn df">
                <div className="icon center">
                  <Image src={card.icon} alt="" width={48} height={36} />{" "}
                </div>
                <h4 className="icon-details">{card.title}</h4>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
          {/* <div className="card">
            <div className="card-top-sectn">
              <div className="icon"></div>
              <h4 className="icon">Community Involvement</h4>
            </div>
            <p>
              We incorporate practices and initiatives that help create
              opportunities for people and develop the community we operate in.
            </p>
          </div>
          <div className="card">
            <div className="card-top-sectn">
              <div className="icon"></div>
              <h4 className="icon">Community Involvement</h4>
            </div>
            <p>
              We incorporate practices and initiatives that help create
              opportunities for people and develop the community we operate in.
            </p>
          </div>
          <div className="card">
            <div className="card-top-sectn">
              <div className="icon"></div>
              <h4 className="icon">Community Involvement</h4>
            </div>
            <p>
              We incorporate practices and initiatives that help create
              opportunities for people and develop the community we operate in.
            </p>
          </div> */}
        </div>
        <div className="mid-bottm-future">
          <Image
            src={"/images/futureimg.png"}
            alt=""
            width={220}
            height={300}
          />
        </div>
        <div className="right-bottm-future">
          {cardsright.map((card) => (
            <div className="card">
              <div className="card-top-sectn df">
                <div className="icon center">
                  <Image src={card.icon} alt="" width={48} height={36} />{" "}
                </div>
                <h4 className="icon-details">{card.title}</h4>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
