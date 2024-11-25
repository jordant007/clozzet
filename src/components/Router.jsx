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

export default function Router(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/About" element={<Layout><About/></Layout>}/>
        <Route path="*" element={<Layout><Notfound/></Layout>}/>
        <Route path="Signup" element={<Layout><Signup/></Layout>}/>
        <Route path="Login" element={<Layout><Login/></Layout>}/>
        <Route path="Cart" element={<Layout><Cart/></Layout>}/>
        <Route path="Addnewproduct" element={<Layout><Addnewproduct/></Layout>}/>
        <Route path="Singleproduct" element={<Layout><Singleproduct/></Layout>}/>
    </Routes>
    </BrowserRouter>
    )
}