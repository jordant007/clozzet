export default function Featuredlist({ name, price, img, cart, setCart }) {
  function addToCart(e, product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      const cartItems = [...cart];
      cartItems.push(product);
      setCart(cartItems);
      e.target.textContent = "added to cart";
      e.target.style.background ="gray"
    }
  }

  return (
    <div className="flex flex-col  w-fit">
      {console.log(cart)}
      <div className="bg-[#F0EFEF]  p-4 w-[250px] h-[300px] relative">
        <img src={img} />
        <div class="absolute inset -2 flex items-end justify-center opacity-0 hover:opacity-100 px ">
          <button
            class="bg-[#45C9A1] text-white px-[70px] py-2 rounded-lg"
            onClick={(e) => addToCart(e, { name, price, img })}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-justify mt-[10px]">
        <p>{name}</p>
        <p>Ksh.{price.toLocalstring()}</p>
      </div>
    </div>
  );
}
