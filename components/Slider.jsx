import Link from "next/link";
import React from "react";

export default function SliderText() {
  return (
    <div className="slideText">
      <h1>ZILLA</h1>
      <h2>StrawBery Yorguht</h2>
      {/* <Image src={"/images/viz.png"} alt="" width={130} height={280} /> */}
      <p>
        Lorem ipsum dolor sit amet lore10 Lorem ipsum, dolor sit amet
        consectetur adipisicing elit.
      </p>
      <Link href={`product/${product.slug}`}>
        <button>Order Now</button>
      </Link>
    </div>
  );
}
