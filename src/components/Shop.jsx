
export default function Shop({img,name,price}){
    return(
        <>
  <div class="">
  <div className="">
        <div className="bg-[#F0EFEF]  p-4 w-[250px] h-[300px] relative">
          <img src={img} />
          <div class="absolute inset-2 flex items-end justify-center opacity-0 hover:opacity-100">
    <button class="bg-[#45C9A1] text-white px-[70px] py-2 rounded-lg">Add to Cart</button>
  </div>
        </div>
        <div className="text-justify mt-[10px]">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      </div>
</div>
        </>
    )
}