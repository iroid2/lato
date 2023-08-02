import Headings from "./Headings";
import Image from "next/image";
import Link from "next/link";
import getMilkProducts from "@/app/libs/getMilkProducts";

export default async function FeaturedProducts() {
  const categories = await getMilkProducts();
  return (
    <div className="feature-section">
      <div className="featuredTop">
        <div className="top-featured">
          <Headings title={"title"} />
        </div>
        <div className="bottm-featured  ">
          <div className="left-btmFeatured">
            <Image src={"/images/yoga.jpg"} alt="" width={300} height={400} />
          </div>
          <div className="right-btmFeatured  categoryDescrip">
            <p className="descr">{"desc"}</p>
            <div className="features">
              <li>Apricot Flavoured Yoghurt</li>
              <li>Butterscotch Flavoured Yoghurt</li>
              <li>Coconut Flavoured Yoghurt</li>
              <li>Peach Flavoured Yoghurt</li>
              <li>Peach Flavoured Yoghurt</li>
            </div>
          </div>
        </div>
      </div>
      <div className="category-cards">
        <Link href={"#"} className="categoryCard">
          {/* <Image src={img} alt="" width={380} height={420} /> */}
          <Headings subHeading={"VANILLA YORGUT"} />
        </Link>
        <Link href={"#"} className="categoryCard">
          {/* <Image src={img} alt="" width={380} height={420} /> */}
          <Headings subHeading={"VANILLA YORGUT"} />
        </Link>
        <Link href={"#"} className="categoryCard">
          {/* <Image src={img} alt="" width={380} height={420} /> */}
          <Headings subHeading={"VANILLA YORGUT"} />
        </Link>
        <Link href={"#"} className="categoryCard">
          {/* <Image src={img} alt="" width={380} height={420} /> */}
          <Headings subHeading={"VANILLA YORGUT"} />
        </Link>
      </div>
    </div>
  );
}
