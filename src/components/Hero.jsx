

export default function Hero(){
    return(
        <>
        <div className="flex justify-between">
        <div className="flex flex-col lg:mt-20 lg:ml-20 p-4">
            <h1 className="text-3xl lg:text-5xl font-bold ">Choose the look <br /> that <span className="text-[#45C9A1]">suits</span> your best</h1>
            <p className="mt-6">Every day is a fashion show & the world is your runway.<br/> Colzzet will elevete your wardrobe with the best collections <br/> Be exclusive, Be yourself. Explore outfits that will <br/> make your comfortably beautiful. True style never dies </p>
             

             <div className="lg:items-center lg:w-fit">
             <div className="mt-6 text-center">
            <button className="rounded-full bg-[#45C9A1] py-1 px-8 border-solid border-2 border-[#45C9A1] font-bold text-white">Shop Now</button>
            <button className="rounded-full text-[#45C9A1] py-1 px-8 border-solid border-2 border-[#928E8E] font-bold ml-5">About Us</button>
            </div>

           <div className="text-center"> 
            <input className="rounded-full  py-1 px-8 border-solid border-2 border-[#928E8E] mt-2" type="text" placeholder="Search" />
            </div>
            </div>
        </div>

        <div className="lg:bg-[url('src/assets/hero-background.png')] ">
            <img src="src/assets/hero-image.png" alt="Hero image" className="hidden sm:block" />
        </div>
        </div>
        </>
    )
}