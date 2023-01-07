
import Categories from "./components/Categories"
import Hero from "./components/Hero"
import { Navbar } from "./components/Navbar"
import Products from "./components/Products"
import Slider from "./components/Slider"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage"
import ProductPage from "./Pages/ProductPage"
import Cart from "./Pages/Cart"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Checkout from "./Pages/Checkout"
import SignUpForm from "./Pages/SignUpForm"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import ContactPage from "./Pages/ContactPage"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import OrderRecord from "./components/OrderRecord"
import CategoryLocalStorage from "./Pages/TestLocalStorage/CategoryLocalStorage"
import BestSellingProductsPage from "./Pages/BestSellingProductsPage"
import LatestProductsPage from "./Pages/LatestProductsPage"


function App() {
  const {activeNav,newactiveNav} = useSelector((state)=>state.products) 

  return (
    <>
	   <Router>
	   <Navbar  />
        <Routes>
          
            <>
                      <Route path="/" element={<Home />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/register" element={<SignUp />} />
                      <Route path="/login" element={<SignIn />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/category/:name/:id" element={<CategoryPage />} />
                      <Route path="/products/:id" element={<ProductPage />} />
                      <Route path="/category" element={<Categories />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/order-record" element={<OrderRecord />} />
                      <Route path="/localstorage" element={<CategoryLocalStorage />} />
                      <Route path="/latest-products" element={<LatestProductsPage />} />   
                      <Route path="/best-selling-products" element={<BestSellingProductsPage />} />   





                      </>
          


		 








        </Routes>
      </Router>
    </>
    
  )
}

export default App

