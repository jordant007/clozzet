import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





export default function Footer(){
    return(
        <>
<section className=" bg-gray-500 p-8 text-center" >
    <h1 className="text-3xl">Subscribe & get up to 30% OFF </h1>
    <div>
        <div>
        <input type="text" placeholder="Enter your email" className="p-3 pr-16 rounded-full border-solid border-2 border-[#45C9A1] " />
        <button className="p-3 ml-3 rounded-full text-white bg-[#45C9A1] my-5">subscribe</button>
        </div>

         <div className="container mx-auto ">
        <div className="  justify-between  lg:flex ">
            <div className="text-justify">
                <img src="src/assets/logo.svg" alt="clozzet logo" width={100}/>
                <p className="text-wrap my-3">Offering a unique and <br/> stylish perspective on <br /> fashion is our number <br /> one priority. Confuse <br /> your mirror by our <br /> trendy outfits</p>
            </div>

            <div className="text-justify">
                <h2 className="font-bold">Store</h2>
                <p className="my-3">Women's Fashion</p>
                <p className="my-3">Men's Fashion</p>
                <p className="my-3">Store Sale</p>
                <p className="my-3">Collections</p>
            </div>

            <div className="text-justify">
                <h2 className="font-bold">Help</h2>
                <p className="my-3">Customer Support</p>
                <p className="my-3">Terms & Conditions</p>
                <p className="my-3">Privacy Policy</p>
                <p className="my-3">Track Your Order</p>
            </div>
          
            <div className="text-justify">
                <h2 className="font-bold">Contact Us</h2>
                <div className="flex gap-3 items-center my-3">
                <MdOutlineEmail />
                <p>contact@clozzet.com</p>
                </div>
                <div className="flex gap-3 items-center my-3"> 
               <FaPhone />
                <p>254-700-333-333</p>
               </div>
               <div className="items-start text-justify">
                <p>Follow Us</p>
                <div className="flex gap-2 my-3">
                <FaFacebook />
                <FaInstagramSquare />
                <FaXTwitter />
                </div>

               </div>
            </div>
        </div>
    </div>
    </div>
</section>
        </>
    )
}