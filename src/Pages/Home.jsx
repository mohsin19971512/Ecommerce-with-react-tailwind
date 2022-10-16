import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
