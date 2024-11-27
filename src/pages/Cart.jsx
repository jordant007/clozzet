import Cartpage from "../components/Cartpage";

export default function Cart({ cart, setCart }){
    return(
        <>
        <Cartpage cart={cart} setCart={setCart}/>

        </>
    )
}