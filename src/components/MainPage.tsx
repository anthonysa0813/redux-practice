import React from "react";
import Cart from "./Cart";
import Header from "./Header";
import Hero from "./Hero";
import ListProducts from "./ListProducts";
import ListRestaurants from "./ListRestaurants";

const MainPage = () => {
  return (
    <div className="mainGrid">
      <div className="main ">
        <Header />
        <Hero />
        <ListRestaurants />
        <ListProducts />
      </div>
      <div className="sidebar ">
        <Cart />
      </div>
    </div>
  );
};

export default MainPage;
