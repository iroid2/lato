import React from "react";
import getProducts from "../../libs/getProducts";
import Image from "next/image";
import Link from "next/link";
import Form from "@/components/Form";

export default async function page({ params: { slug } }) {
  const products = await getProducts();
  const product = products.find((product) => {
    return product.slug == slug;
  });

  return (
    <div className="buyer-details df">
      <div className="buyerForm">
        <h1>Please Enter Your Information to complete Transaction</h1>
        <Form />
      </div>
      <div className="cart-item">
        <h3>Product Ordered</h3>
        <h1>{product.title}</h1>
        <Image src={product.image} alt="" width={300} height={300} />
      </div>
      <div className="contacts"></div>
    </div>
  );
}
