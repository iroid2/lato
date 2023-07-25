import React from "react";

export default function Headings({ subHeading, title }) {
  return (
    <div>
      <h1 className="headings">{title}</h1>
      <p className="subHeading">{subHeading}</p>
    </div>
  );
}
