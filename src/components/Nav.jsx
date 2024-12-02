import {Link} from "react-router-dom"
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TfiAlignJustify } from "react-icons/tfi";

export default function Nav({cart, setCart}){
  
return(
    <>
    <nav>
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center ">
      <Link to="/"><img src="src/assets/logo.svg" alt="clozzet logo" width={100} /></Link>

        <ul className="hidden lg:flex ml-10 p-2 gap-6">
            <Link to="/"><li>Home</li></Link>
           <Link to="/About"> <li>About us</li></Link>
            <Link to="/Shop"><li>Shop</li></Link>
        </ul>
      </div>


      <div>
        <ul className="flex gap-6 items-center">
        <Link to="/Cart"><FiShoppingCart /></Link>
        <div className="bg-[#E3F9FB] absolute p-[2px] rounded-full ml-4 mt-[24px]"><p className="text-[15px]">{cart && cart.length}</p></div>
        <Link to="/Signup"><li>Signup</li></Link>
            <button>Login</button>
            <span  className="lg:hidden"><TfiAlignJustify/></span>

        </ul>
      </div>
    </div>  

    </nav>
    </>
)
}