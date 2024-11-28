import React from 'react';

const CartSummary = ({ cartItems }) => {
  
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  
  
  const deliveryFee = 450;
  
  
  const total = subtotal + deliveryFee;

  return (
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
        <span>KSh {subtotal.toLocaleString()}</span>
      </div>
      <div className="text-sm mb-4 flex justify-between">
        <span>Delivery Fee</span>
        <span>KSh {deliveryFee.toLocaleString()}</span>
      </div>
      <div className="text-lg font-bold mb-4 flex justify-between">
        <span>Total</span>
        <span>KSh {total.toLocaleString()}</span>
      </div>
      <button className="w-full bg-[#45C9A1] text-white py-2 rounded-md font-semibold hover:bg-teal-600">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;