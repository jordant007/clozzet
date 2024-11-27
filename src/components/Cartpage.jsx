import CartItem from "./CartItem";
import {useState,useEffect} from "react"



export default function Cartpage({cart, setCart}) {
  const [cartCopy,setCartCopy]=useState([])
  
  useEffect(()=>{
    const copy =[...cart]
    setCartCopy(copy)
  
    },[])

  return (
    
    <div className="flex">
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        {cart &&
          cart.map((item) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                imageSrc={item.img}
                cart={cart}
                setCartCopy={setCartCopy}
                cartCopy={cartCopy}
               
              />
            );
          })}
      </div>

      <div className="max-w-sm border rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
        <p className="block text-sm font-medium mb-1">
          Have a promo code? Apply here
        </p>
        <div className="flex items-center mb-4">
          <input
            type="text"
            id="promo-code"
            placeholder="Promo Code (optional)"
            className="w-full border rounded-l-md p-2 focus:outline-none "
          />
          <button className="bg-[#45C9A1] text-white px-4 py- rounded-r-md hover:bg-[#45C9A1]">
            Apply
          </button>
        </div>
        <div className="text-sm mb-2 flex justify-between">
          <span>Subtotal</span>
          <span>KSh 16,000</span>
        </div>
        <div className="text-sm mb-4 flex justify-between">
          <span>Delivery Fee</span>
          <span>KSh 450</span>
        </div>
        <div className="text-lg font-bold mb-4 flex justify-between">
          <span>Total</span>
          <span>KSh 16,450</span>
        </div>
        <button className="w-full bg-[#45C9A1] text-white py-2 rounded-md font-semibold hover:bg-teal-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
