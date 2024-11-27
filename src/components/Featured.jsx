import Featuredlist from "./Featuredlist";

import leather from "/src/assets/leather-jacket.png";
import sweatshirts from "/src/assets/sweatshirts.png";
import pallazo from "/src/assets/pallazo.png"
import denim from "/src/assets/denim.png";

export default function Featured({cart,setCart}) {

  
  return (
    <>
      <div className="container mx-auto mt-20 mb-20">
        <div>
          <h2>Featured Collection</h2>
        </div>

        <div className="flex lg:justify-between flex-wrap">
        <Featuredlist  cart={cart} setCart={setCart}name="Brown Leather Jacket" img={leather} price= {2250} />
        <Featuredlist  cart={cart} setCart={setCart}name="Round-neck Sweatshirts" img={sweatshirts} price={2000}/>
        <Featuredlist  cart={cart} setCart={setCart}name="Pleated Pallazo Trousers" img={pallazo} price={1800} />
        <Featuredlist  cart={cart} setCart={setCart}name="M-22 Denim Jacket" img={denim} price={1250}/>
        </div>
      </div>
    </>
  );
}
