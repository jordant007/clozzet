import Featuredlist from "./Featuredlist";

import leather from "/src/assets/leather-jacket.png";
import sweatshirts from "/src/assets/sweatshirts.png";
import pallazo from "/src/assets/pallazo.png"
import denim from "/src/assets/denim.png";

export default function Featured() {
  return (
    <>
      <div className="container mx-auto mt-20 mb-20">
        <div>
          <h2>Featured Collection</h2>
        </div>

        <div className="flex lg:justify-between flex-wrap">
        <Featuredlist name="Brown Leather Jacket" img={leather} price="Ksh 2,250"/>
        <Featuredlist name="Round-neck Sweatshirts" img={sweatshirts} price="Ksh 2,000"/>
        <Featuredlist name="Pleated Pallazo Trousers" img={pallazo} price="Ksh 1,800"/>
        <Featuredlist name="M-22 Denim Jacket" img={denim} price="Ksh 1,250"/>
        </div>
      </div>
    </>
  );
}
