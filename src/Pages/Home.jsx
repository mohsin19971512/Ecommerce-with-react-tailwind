import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import Products from "../components/Products";
import Slider from "../components/Slider";
import CategoryLocalStorage from "./TestLocalStorage/CategoryLocalStorage";

function Home() {
  const {activeNav,newactiveNav} = useSelector((state)=>state.products) 

  const { isLoading} = useSelector(
    (state) => state.products
  );

  return (
    <>
      <Slider />
     <Categories />
     <Products />
      <hr />
      <Footer />

    </>
  );
}

export default Home;
