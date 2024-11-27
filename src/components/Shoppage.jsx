import Shop from "../components/Shop"
import ragged from "/src/assets/shop-images/ragged-jeans.png"
import leather from "/src/assets/leather-jacket.png";
import slim from "/src/assets/shop-images/slim-banquet-dress.png";
import denim from "/src/assets/denim.png";
import quartz from "/src/assets/shop-images/quartz-watch.png"
import jeans from "/src/assets/shop-images/denim-jeans.png"
import brown from "/src/assets/shop-images/brown-handbag.png"
import graphic from "/src/assets/shop-images/graphic-tshirts.png"
import bomber from "/src/assets/shop-images/bomber.png"
import shoe from "/src/assets/shop-images/leather-shoes.png"
import serpenti from "/src/assets/shop-images/serpenti-forever.png"
import unisex from "/src/assets/shop-images/unisex.png"
import cocktail from "/src/assets/shop-images/cocktail.png"
import off from "/src/assets/shop-images/Off-The-Shoulder.png"
import pleated from "/src/assets/shop-images/Airsense-pleated.png"
import smartwatch from "/src/assets/shop-images/smartwatch.png"
import zooshi from "/src/assets/shop-images/ZOOSHI-COBALT.png"
import knitted from "/src/assets/shop-images/knitted-sweater.png"
import pallazo from "/src/assets/pallazo.png"
import sweatshirts from "/src/assets/sweatshirts.png"
export default function Shoppage() {
  return (
    <>
     <div class="max-w-7xl mx-auto px-4 py-6">
    <div class="flex items-center ">
      <div class="flex flex-grow items-center  border-solid border-2 rounded-full px-9 p-2">
        <input type="text" placeholder="Search Products and categories"
          class="flex-grow py-2 text-gray-700 focus:outline-none" />
        <div className="border-[#928E8E] border-l-2 pl-[55px]">
        <select class="bg-white focus:outline-none p-1">
          <option value="category">Filter Category</option>
          <option value="jeans">Jeans</option>
          <option value="jackets">Jackets</option>
          <option value="dresses">Dresses</option>
        </select>
      </div>
      </div>
    </div>
  </div>
      <div className="container mx-auto">
        <div className="lg:flex  p-6 justify-between">
            <Shop name="Blue Rageed Jeans" img={ragged} price="Ksh 2,250"/>
            <Shop name="Brown Leather Jacket" img={sweatshirts} price="Ksh 2,250"/>
            <Shop name="Slim Banquet Dress" img={slim} price="Ksh 10,250"/>
            <Shop name="Blue Denims Jacket" img={denim} price="Ksh 2,250"/>
        </div>
        <div className="lg:flex p-6 justify-between">
            <Shop name="Blue Rageed Jeans" img={leather} price="Ksh 2,250"/>
            <Shop name="Quartz Men's Watch" img={quartz} price="Ksh 2,250"/>
            <Shop name="Womens Denim Jeans" img={jeans} price="Ksh 10,250"/>
            <Shop name="Beown handbag" img={brown} price="Ksh 2,250"/>
        </div>
        <div className="lg:flex p-6 justify-between">
            <Shop name="Unisex Graphic T-shirt" img={graphic} price="Ksh 2,250"/>
            <Shop name="Black Bomber Jacket" img={bomber} price="Ksh 2,250"/>
            <Shop name="Pleated pallozo Pants" img={pallazo} price="Ksh 10,250"/>
            <Shop name="Pure Leather Shoes" img={shoe} price="Ksh 2,250"/>
        </div>
        <div className="lg:flex p-6 justify-between">
            <Shop name="Purple Serpenti purse" img={serpenti} price="Ksh 2,250"/>
            <Shop name="Unisex Airforce Sneakers" img={unisex} price="Ksh 2,250"/>
            <Shop name="Blue Cocktail Dress" img={cocktail} price="Ksh 10,250"/>
            <Shop name="Off-Shoulder Crop Top" img={off} price="Ksh 2,250"/>
        </div>
        <div className="lg:flex gap-6 p-6 justify-between">
            <Shop name="Airsense Pleated Pants" img={pleated} price="Ksh 2,250"/>
            <Shop name="classy Smart Watch" img={smartwatch} price="Ksh 2,250"/>
            <Shop name="Blue Platform Heels" img={zooshi} price="Ksh 10,250"/>
            <Shop name="Strip Knitted Sweater" img={knitted} price="Ksh 2,250"/>
        </div>
      </div>
    </>
  );
}

