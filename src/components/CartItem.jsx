import React from "react";

const CartItem = ({ imageSrc, name, price, cartCopy, setCartCopy }) => {
  function handleCartitems(action, product) {
    if (action === "increment") {
      const copy = [...cartCopy];
      copy.push(product);
      setCartCopy(copy);
    }
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
      {console.log(cartCopy)}
      <div className="flex items-center space-x-4">
        <img src={imageSrc} alt={name} className="w-[100px]" />
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded">
          <button className="px-2 py-1 text-[#928E8E]">-</button>
          <span className="px-4 py-1">
            {cartCopy &&
              cartCopy.filter((item) => item.name === name).length}
          </span>
          <button
            onClick={() =>
              handleCartitems("increment", { imageSrc, name, price })
            }
            className="px-2 py-1 text-[#928E8E]"
          >
            +
          </button>
        </div>
        <p className="text-lg font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
