"use client";
import React from "react";
import { cardsLeft, cardsright } from "@/futureCard";
export default function FutureSectionCard() {
  console.log(cardsLeft.title);

  return (
    <div className="card">
      <div className="card-top-sectn df">
        <div className="icon center">icon</div>
        <h4 className="icon-details">{cardsLeft.title}</h4>
      </div>
      <p>
        We incorporate practices and initiatives that help create opportunities
        for people and develop the community we operate in.
      </p>
    </div>
  );
}
