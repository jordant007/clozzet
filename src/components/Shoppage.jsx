import Shop from "./Shop"
export default function Shoppage() {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Product and Categorories" />
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            <Shop name="Blue Rageed Jeans" img={ragged-jeans} price="Ksh 2,250"/>

            <Shop name="Brown Leather Jacket" img={leather-jacket} price="Ksh 2,250"/>
        </div>
      </div>
    </>
  );
}
