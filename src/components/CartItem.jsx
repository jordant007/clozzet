import React from "react";

const CartItem = ({ imageSrc, name, price, cartCopy, setCartCopy }) => {
  function handleCartitems(action, product) {
    if (action === "increment") {
      const copy = [...cartCopy];
      copy.push(product);
      setCartCopy(copy);
    }
    if(action==="decrement"){
      const copy=[...cartCopy];
      let productIndex=copy.indexOf(product);
      copy.find((item,index)=>{
        if(item.name===name){
          productIndex=index
        }
      })

      copy.splice(productIndex,1);
      setCartCopy (copy);
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
          <button onClick={() =>
              handleCartitems("decrement", { imageSrc, name, price })
            } className="px-2 py-1 text-[#928E8E]" disabled={cartCopy.filter(item=>item.name===name).length===1}>-</button>
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
          </button >
        </div>
        <p className="text-lg font-semibold">{cartCopy && cartCopy.filter(item=>item.price===price).reduce((acc,curr)=>acc+curr.price,0)}</p>
      </div>
    </div>
  );
};

export default CartItem;
