

export default function Cartpage() {
  return (
    <div className="flex">

<div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">

    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
      <div class="flex items-center space-x-4">
        <img src="src/assets/shop-images/knitted-sweater.png" alt="Strip Knitted Sweater" class="w-[100px]"/>
        <div>
          <h3 className="text-lg font-medium">Strip Knitted <br /> Sweater</h3>
          <p className="text-gray-500 text-sm">Size: XL</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded">
          <button className="px-2 py-1 text-[#928E8E]">-</button>
          <span className="px-4 py-1">1</span>
          <button className="px-2 py-1 text-[#928E8E]">+</button>
        </div>
        <p className="text-lg font-semibold">KSh 2,250</p>
      </div>
    </div>



    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
      <div className="flex items-center space-x-4">
        <img src="src/assets/shop-images/unisex.png" alt="Unisex Airforce Sneakers" class="w-[100px]"/>
        <div>
          <h3 className="text-lg font-medium">Unisex Airforce <br /> Sneakers</h3>
          <p className="text-gray-500 text-sm">Size: 40</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded">
          <button className="px-2 py-1 text-[#928E8E]">-</button>
          <span className="px-4 py-1">1</span>
          <button className="px-2 py-1 text-[#928E8E]">+</button>
        </div>
        <p className="text-lg font-semibold">KSh 2,000</p>
      </div>
    </div>


  
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
      <div className="flex items-center space-x-4">
        <img src="src/assets/shop-images/slim-banquet-dress.png" alt="Slim Banquet Dress" class="w-[100px]"/>
        <div>
          <h3 className="text-lg font-medium">Slim Banquet <br /> Dress</h3>
          <p className="text-gray-500 text-sm">Size: M</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded">
          <button className="px-2 py-1 text-[#928E8E]">-</button>
          <span className="px-4 py-1">1</span>
          <button className="px-2 py-1 text-[#928E8E]">+</button>
        </div>
        <p className="text-lg font-semibold">KSh 10,250</p>
      </div>
    </div>


  
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="src/assets/shop-images/denim-jeans.png" alt="Women Denim Jeans" class="w-[100px]"/>
        <div>
          <h3 className="text-lg font-medium">Women Denim <br /> Jeans</h3>
          <p className="text-gray-500 text-sm">Size: L</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded">
          <button className="px-2 py-1 text-[#928E8E]">-</button>
          <span className="px-4 py-1">1</span>
          <button className="px-2 py-1 text-[#928E8E]">+</button>
        </div>
        <p className="text-lg font-semibold">KSh 10,250</p>
      </div>
    </div>

  </div>

  <div className="max-w-sm  border rounded-lg shadow-md p-4">
  <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
  <p for="promo-code" class="block text-sm font-medium mb-1">
    Have a promo code? Apply here
  </p>
  <div className="flex items-center mb-4">
    <input
      type="text"
      id="promo-code"
      placeholder="Promo Code (optional)"
      className="w-full border rounded-l-md p-2 focus:outline-none "
    />
    <button
      className="bg-[#45C9A1] text-white px-4 py- rounded-r-md hover:bg-[#45C9A1]"
    >
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
  <button
    class="w-full bg-[#45C9A1] text-white py-2 rounded-md font-semibold hover:bg-teal-600"
  >
    Checkout
  </button>
</div>

    </div>
  );
}
