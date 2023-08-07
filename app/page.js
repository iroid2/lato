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
import Category from "@/components/Category";
import getProducts from "./libs/getProducts";

export default async function page() {
  const categories = await getCategories();
  const products = await getProducts();
  // const yorgut_products = console.log(categories);
  return (
    <div className="container">
      <HeroSection data={products} />
      <Category />
      {/* <Futuresection /> */}
      <Towards />
      {/* <Footer /> */}
    </div>
  );
}
