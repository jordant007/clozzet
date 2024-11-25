import Collectionlist from "./Collectionlist"

import mens from "/src/assets/mens.png";
import hbags from "/src/assets/hbags.png"
import watches from "/src/assets/watches.png"
import ladies from "/src/assets/ladies.png"

export default function Collection(){
    return(
        <>
    <div className="container mx-auto">
        <div className="grid grid-row-3 grid-cols-2 gap-5 p-4">
        <Collectionlist classes="bg-slate-500 row-start-1 row-end-3 col-start-1 col-end-2" title="Men's Collection" img={mens} subtitle="Casual Collection" shop="Shop Now"/>
        <Collectionlist classes="bg-[#FFF1F1]  row-start-3 row-end-4 col-start-1 col-end-2" title="Designer Handbads" img={hbags} subtitle="Casual Collection" shop="Shop Now"/>
        <Collectionlist classes="bg-[#E3F9FB] row-start-1 row-end-2 col-start-2 col-end-3" title="Luxury Watches" img={watches} subtitle="Casual Collection" shop="Shop Now"/>
        <Collectionlist classes="bg-[#FEDBDB] row-start-2 row-end-4 col-start-2 col-end-3" title="Ladies Collection" img={ladies} subtitle="Casual Collection" shop="Shop Now"/>
        </div>
    </div>
    </>
    )
}