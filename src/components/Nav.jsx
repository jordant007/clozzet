
import { FiShoppingCart } from "react-icons/fi";
import { TfiAlignJustify } from "react-icons/tfi";

export default function Nav(){
return(
    <>
    <nav>
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center ">
        <img src="src/assets/logo.svg" alt="clozzet logo" width={100} />

        <ul className="hidden lg:flex ml-10 p-2 gap-6">
            <li>Home</li>
            <li>About us</li>
            <li>Shop</li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-6 items-center">
        <FiShoppingCart />
            <li>Signup</li>
            <button>Login</button>
            <span  className="lg:hidden"><TfiAlignJustify/></span>

        </ul>
      </div>
    </div>  

    </nav>
    </>
)
}