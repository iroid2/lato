import React from "react";
import getProducts from "../app/libs/getProducts";
import Link from "next/link";
import Headings from "./Headings";
import Image from "next/image";
export default async function Products({ title, data }) {
  return (
    <div className="product-cards df ">
      {data.splice(0, 4).map((product) => {
        return (
          <Link href={`./product/${product.slug}`} className="productCard">
            <Image src={product.image} alt="" width={200} height={250} />
            <Headings subHeading={product.title} />
            {/* <h1>{detail.slug}</h1> */}
          </Link>
        );
      })}
    </div>
  );
}
