import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Futuresection from "@/components/Future";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Towards from "@/components/Towards";
import React from "react";
import Headings from "@/components/Headings";
import Image from "next/image";
import Link from "next/link";
// import getCategories from "./api/categories/route";
import getCategories from "./libs/getCategories";

export default async function page() {
  // const categories = await getCategories();
  const names = [1, 2, 3, 4, 5];
  const categories = await getCategories();

  console.log(categories);
  return (
    <div className="container">
      <HeroSection />
      {categories.map((category) => {
        return (
          <div className="categories">
            <div className="feature-section">
              {/* {categories.map((category) => { */}
              <div className="category">
                <div className="featuredTop">
                  <div className="top-featured">
                    <Headings title={category.category} />
                  </div>
                  <div className="bottm-featured  ">
                    <div className="left-btmFeatured">
                      <Image
                        src={"/images/yoga.jpg"}
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
                <div className="category-cards">
                  {category.cat_details.map((detail) => (
                    <Link
                      href={`./category/${detail.slug}`}
                      className="categoryCard"
                    >
                      <Image
                        src={detail.image}
                        alt=""
                        width={380}
                        height={250}
                      />
                      <Headings subHeading={detail.name} />
                      {/* <h1>{detail.slug}</h1> */}
                    </Link>
                  ))}
                </div>
              </div>
              ;{/* })} */}
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
      })}

      {/* <Futuresection /> */}
      <Towards />
      {/* <Footer /> */}
    </div>
  );
}
