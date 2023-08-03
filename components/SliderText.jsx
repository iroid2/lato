import getCategories from "@/app/libs/getCategories";
import Image from "next/image";
import React from "react";

export default async function SliderText() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="heroText">
      <Image src={"/images/milk.png"} alt="" width={200} height={200} />
      <h1>Milk Product</h1>
    </div>
  );
}
