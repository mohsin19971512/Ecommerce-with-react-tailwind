
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


function App() {
  return (
    <>
	   <Router>
	   <Navbar  />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactPage />} />








        </Routes>
      </Router>
    </>
    
  )
}

export default App

