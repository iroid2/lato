import React from "react";
import getProducts from "../libs/getProducts";

export default async function page({ params: { slug } }) {
  const products = await getProducts();
  const product = products.find((product) => {
    return product.slug == slug;
  });
  // console.log(products);
  return (
    <div className="buyer-details df">
      <div className="buyerForm">
        <h1>Please Enter Your Information to complete Transaction</h1>
        <form action="">
          <input type="text" className="" placeholder="Enter Your Name" />{" "}
          <br></br>
          <input type="email" className="" placeholder="Enter Your Email" />
          <br></br>
          <input
            type="number"
            className=""
            placeholder="Enter Your Phone Number"
          />{" "}
          <br></br>
          <input type="text" className="" placeholder="Enter Location" />
          <br></br>
          <button>Order</button>
        </form>
      </div>
      <div className="cart-item">{/* <h1>{product.title}</h1> */}</div>
    </div>
  );
}
