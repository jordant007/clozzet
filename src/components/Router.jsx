import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Layout from "../pages/Layout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Shop from "../pages/shop";
import Addnewproduct from "./Addnewproduct";
import Singleproduct from "./Singleproduct";
import { useEffect, useState } from "react";
export default function Router() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    cart.length !== 0 && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    cartData && setCart(cartData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Notfound />
            </Layout>
          }
        />
        <Route
          path="signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/addnewproduct"
          element={
            <Layout>
              <Addnewproduct />
            </Layout>
          }
        />
        <Route
          path="/singleproduct"
          element={
            <Layout>
              <Singleproduct />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
