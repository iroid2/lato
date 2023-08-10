import getCategories from "@/app/libs/getCategories";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Headings from "./Headings";

import Products from "./Products";
import getProducts from "@/app/libs/getProducts";
export default async function Category() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <div className="categories">
      <div className="feature-section">
        {categories.map((category) => {
          return (
            <div className="category">
              <div className="featuredTop">
                <div className="top-featured">
                  <Headings title={category.title} />
                </div>
                <div className="bottm-featured  ">
                  <div className="left-btmFeatured">
                    <Image
                      src={"/images/YOHURT2.jpg"}
                      alt=""
                      width={300}
                      height={400}
                    />
                  </div>
                  <div className="right-btmFeatured  categoryDescrip">
                    <p className="descr">{category.description}</p>
                    <div className="features">
                      {category.products.map((product) => {
                        return <li>{product}</li>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <Products data={products} />
            </div>
          );
        })}
        //
      </div>

      {/* <FeaturedProducts
            data={categories}
            desc={
              "Discover a world of delicious delight with our Yoghut collection, carefully crafted for your health and happiness. From invigorating flavors to essential nutrients, each sip of our drinking yoghurts is a journey of indulgence, providing you with a refreshing and wholesome experience that adds a touch of goodness to your dynamic lifestyle."
            }
            title={"YORGHUT PRODUCTS"}
            img={
              "https://latomilk.com/wp-content/uploads/2022/07/PlainYoghurt-300x300.png"
            }
          /> */}
      {/* <FeaturedProducts
            title={"MILK PRODUCTS"}
            img={"/images/milk.png"}
            desc={
              "Embark on a journey of pure indulgence with our farm-fresh milk products, radiating natural richness and nourishment. From creamy whole milk to low-fat options, relish the finest dairy delights that not only satiate but also enrich your daily diet, capturing the essence of nature in every invigorating sip"
            }
          /> */}
    </div>
  );
}
