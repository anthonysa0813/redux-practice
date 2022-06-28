import React from "react";
import { MainGrid } from "../ui/styles";
import Cart from "./Cart";
import Header from "./Header";
import Hero from "./Hero";
import ListProducts from "./ListProducts";
import ListRestaurants from "./ListRestaurants";

const MainPage = () => {
  return (
    <MainGrid>
      <div className="main ">
        <Header />
        <Hero />
        <ListRestaurants />
        <ListProducts />
      </div>
      <div className="sidebar ">
        <Cart />
      </div>
    </MainGrid>
  );
};

export default MainPage;
