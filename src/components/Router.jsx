import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Notfound from "../pages/Notfound"
import Layout from "../pages/Layout"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Addnewproduct from "./Addnewproduct"
import Singleproduct from "./Singleproduct"
import {useState} from "react"
export default function Router(){
    const[cart,setCart]=useState([])
console.log(cart)
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout cart={cart} setCart={setCart}><Home cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="/about" element={<Layout><About/></Layout>}/>
        <Route path="*" element={<Layout><Notfound/></Layout>}/>
        <Route path="signup" element={<Layout><Signup/></Layout>}/>
        <Route path="login" element={<Layout><Login/></Layout>}/>
        <Route path="/cart" element={<Layout><Cart  cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="/addnewproduct" element={<Layout><Addnewproduct/></Layout>}/>
        <Route path="/singleproduct" element={<Layout><Singleproduct/></Layout>}/>
    </Routes>
    </BrowserRouter>
    )
}