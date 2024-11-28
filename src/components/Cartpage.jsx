import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function Cartpage({ cart, setCart }) {
  const [cartCopy, setCartCopy] = useState([]);

  useEffect(() => {
    const copy = [...cart];
    setCartCopy(copy);
  }, []);

  return (
    <div className="flex">
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        {cart &&
          cart.map((item) => (
            <CartItem
              key={item.name}
              name={item.name}
              price={item.price}
              imageSrc={item.img}
              cart={cart}
              setCartCopy={setCartCopy}
              cartCopy={cartCopy}
            />
          ))}
      </div>
      <CartSummary cartItems={cartCopy} />
    </div>
  );
}