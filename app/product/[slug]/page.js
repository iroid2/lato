// "use client";
import Headings from "@/components/Headings";
import Image from "next/image";

import { FiTruck } from "react-icons/fi";
import { MdAssignmentReturned } from "react-icons/md";

import getProducts from "@/app/libs/getProducts";
import Swipper from "@/components/Swipper";
import Link from "next/link";

export default async function page({ params: { slug } }) {
  const products = await getProducts();
  const product = products.find((product) => {
    return product.slug == slug;
  });
  // console.log(products);
  return (
    <div className="detailed-page">
      <div className="detailed-product-sectn df">
        <div className="left-detailed-page">
          <Swipper />
        </div>
        <div className="right-detailed-page ">
          <div className="product-details">
            <Headings title={product.title} />
            <p className="desc">{product.detailed_description}</p>
          </div>
          <div className="product-pricing ">
            <h4 className="current-price">UGX {product.currentPrice}</h4>
            <p className="initial-price">{product.initialPrice}</p>
          </div>
          <div className="product-counter-section ">
            <div className="counter df">
              <div className="minus center">-</div>
              <span className="counter-value center">1</span>
              <div className="plus center">+</div>
            </div>
            <p className="left-qty">
              only <span className="qty">12 cartons</span>left <br></br> dont
              miss out
            </p>
          </div>
          <div className="cart-btns">
            <Link href={"/buyer-form/"}>
              <button>Buy Now</button>
            </Link>
            <Link href={`/buyer-form/${slug}`}>
              <button className="border-btn">Add to Cart</button>
            </Link>
          </div>
          <div className="buyer-incentives">
            <div className="derivery incentive df">
              <div className=" center incentive-icon">
                <FiTruck />
              </div>
              <div className="incentive-details">
                <p>Free Derivery</p>
                <p>Enter Your Personal Number for Derivery</p>
              </div>
            </div>
            <div className=" return incentive df">
              <div className=" center incentive-icon">
                {" "}
                <MdAssignmentReturned />
              </div>
              <div className=" incentive-details">
                <p>Return Derivery</p>
                <p>Enter Your Personal Number for Derivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
