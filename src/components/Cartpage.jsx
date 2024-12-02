import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function Cartpage({ cart, setCart }) {
  const [cartCopy, setCartCopy] = useState(null);

  useEffect(()=>{
    const cartCopyItem=JSON.parse(localStorage.getItem("cartCopy"));
    const CartItem=JSON.parse(localStorage.getItem("cart"))
    if(cartCopyItem){
        setCartCopy(cartCopyItem)
    }else{setCartCopy(CartItem)}
},[])
  // useEffect(() => {
  //   const copy = [...cart];
  //   setCartCopy(copy);
  // }, [cart]);

  useEffect(()=>{
    cartCopy && localStorage.setItem("cartCopy",JSON.stringify(cartCopy))
  },[cartCopy])

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {cart && cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-6 mt-20 p-10 bg-white rounded-lg shadow-lg text-center">
          <FaShoppingCart className="w-24 h-24 text-gray-300" />
          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>
          
          <button 
            onClick={() => {}}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg w-full">
          {cart.map((item) => (
            <CartItem
              key={item.name}
              name={item.name}
              price={item.price}
              imageSrc={item.img}
              cart={cart}
              setCartCopy={setCartCopy}
              cartCopy={cartCopy}
              setCart={setCart}
            />
          ))}
        </div>
      )}
      {cart && cart.length > 0 && <CartSummary cartItems={cartCopy} />}
    </div>
  );
}