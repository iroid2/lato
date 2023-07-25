import React from "react";
import Headings from "./Headings";
import FutureSectionCard from "./FutureSectionCard";
import Image from "next/image";

export default function Futuresection() {
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
          <FutureSectionCard />
          <FutureSectionCard />
          <FutureSectionCard />
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
          <FutureSectionCard />
          <FutureSectionCard />
          <FutureSectionCard />
        </div>
      </div>
    </div>
  );
}
