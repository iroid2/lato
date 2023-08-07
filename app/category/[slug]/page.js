import getCategories from "@/app/libs/getCategories";
import Products from "@/components/Products";
import Image from "next/image";
import React from "react";

export default async function page({ category, title, slug }) {
  const categories = await getCategories();
  const cat = categories.find((cat) => {
    return cat.slug == slug;
  });
  // console.log(category);
  return (
    <div className="category-page">
      <Products />
      <h1>{slug}</h1>
    </div>
  );
}
