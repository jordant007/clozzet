import Category from "./Category";
import jacket from "/src/assets/jacket.png";
import handbag from "/src/assets/handbag.png";
import tshirt from "/src/assets/tshirt.png";
import dress from "/src/assets/dress.png";
import jeans from "/src/assets/jeans.png";
import shoe from "/src/assets/shoe.png";
import sweater from "/src/assets/sweater.png";

export default function Categories() {
  return (
    <>
    <div className="container mx-auto mt-20 mb-20">
      <div className="">
        <h2 className="text-center font-bold mb-10">Top Categories</h2>
      </div>
      <div className="flex lg:justify-between flex-wrap">
        <Category name="Jackets" img={jacket}/>
        <Category name="Handbags" img={handbag}/>
        <Category name="Shirts" img={tshirt}/>
        <Category name="Dresses" img={dress}/>
        <Category name="Jeans" img={jeans}/>
        <Category name="Shoes" img={shoe}/>
        <Category name="Sweaters" img={sweater}/>


      </div>
      </div>
    </>
  );
}
