import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <div className="products-container">
      <h1>Items in this Category</h1>
      <div className="product-cards">
        <div className="product">
          <div className="like"></div>
          <Image
            src={
              "https://latomilk.com/wp-content/uploads/2018/12/Chocolate_Milk.jpg"
            }
            alt=""
            width={230}
            height={300}
          />
          <div className="item-details spaceBtn ">
            <h3 className="product-name">Vanilla</h3>
            <h4 className="product-price center ">UGX 20,000</h4>
          </div>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <button>Add to cart</button>
        </div>
        <div className="product">
          <div className="like"></div>
          <Image
            src={
              "https://latomilk.com/wp-content/uploads/2018/12/Chocolate_Milk.jpg"
            }
            alt=""
            width={230}
            height={300}
          />
          <div className="item-details spaceBtn ">
            <h3 className="product-name">Vanilla</h3>
            <h4 className="product-price center ">UGX 20,000</h4>
          </div>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <button>Add to cart</button>
        </div>
        <div className="product">
          <div className="like"></div>
          <Image
            src={
              "https://latomilk.com/wp-content/uploads/2018/12/Chocolate_Milk.jpg"
            }
            alt=""
            width={230}
            height={300}
          />
          <div className="item-details spaceBtn ">
            <h3 className="product-name">Vanilla</h3>
            <h4 className="product-price center ">UGX 20,000</h4>
          </div>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <button>Add to cart</button>
        </div>
        <div className="product">
          <div className="like"></div>
          <Image
            src={
              "https://latomilk.com/wp-content/uploads/2018/12/Chocolate_Milk.jpg"
            }
            alt=""
            width={230}
            height={300}
          />
          <div className="item-details spaceBtn ">
            <h3 className="product-name">Vanilla</h3>
            <h4 className="product-price center ">UGX 20,000</h4>
          </div>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
