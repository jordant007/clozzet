export default function Shoppage(){
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
  
  <div className="border rounded-lg shadow-sm p-4 bg-[#FFF1F1]">
    <img src={props.img} class="w-full h-48 object-cover mb-4 rounded-md"/>
    <h3 class="text-lg font-semibold  mb-2">{props.name}</h3>
    <p class="text-[#45C9A1] font-medium">{props.price}</p>
  </div>
  
  
  {/* <div className="border rounded-lg shadow-sm p-4 bg-[#FFF1F1]">
    <img src="src/assets/leather-jacket.png" alt="Brown Leather Jacket" class="w-full h-48 object-cover mb-4 rounded-md"/>
    <h3 class="text-lg font-semibold  mb-2">Brown Leather Jacket</h3>
    <p class="text-[#45C9A1] font-medium">KSh 2,250</p>
  </div>
  
 
  <div className="border rounded-lg shadow-sm p-4 bg-[#FFF1F1]">
    <img src="src/assets/shop-images/slim-banquet-dress.png" alt="Slim Banquet Dress" class="w-full h-48 object-cover mb-4 rounded-md"/>
    <h3 class="text-lg font-semibold  mb-2">Slim Banquet Dress</h3>
    <p class="text-[#45C9A1] font-medium">KSh 10,250</p>
  </div>
  

  <div className="border rounded-lg shadow-sm p-4 bg-[#FFF1F1]">
    <img src="src/assets/denim.png" alt="Blue Denim Jacket" class="w-full h-48 object-cover mb-4 rounded-md"/>
    <h3 class="text-lg font-semibold  mb-2">Blue Denim Jacket</h3>
    <p class="text-[#45C9A1] font-medium">KSh 2,250</p>
  </div> */}
</div>

        </>
    )
}