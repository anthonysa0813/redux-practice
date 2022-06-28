import React from "react";

const ListRestaurants = () => {
  const menuCart = [
    {
      iconName: "icon-atention",
      title: "All",
    },
    {
      iconName: "icon-pizza",
      title: "Pizza",
    },
    {
      iconName: "icon-paste",
      title: "Asian",
    },
    {
      iconName: "icon-pine",
      title: "Burguer",
    },
    {
      iconName: "icon-hamburguer",
      title: "Barbecue",
    },
    {
      iconName: "icon-beef",
      title: "Beef",
    },
    {
      iconName: "icon-cake",
      title: "Dessers",
    },
    {
      iconName: "icon-pine",
      title: "Fruit",
    },
  ];

  return (
    <div className="listRestaurantContainer ">
      <div className="headListRestaurant">
        <h2>
          Restaurants
          <i className="icon-hamburguer-color"></i>
        </h2>
        <button>
          <i className="icon-clock"></i>
          Delivery: <span>Now</span> <i className="icon-arror-right"></i>
        </button>
      </div>
      <div className="menuList ">
        {menuCart.map((cart) => {
          return (
            <div className="menuBox">
              <div className="iconBox">
                <i className={cart.iconName}></i>
              </div>
              <div className="menuTitle">
                <span>{cart.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListRestaurants;
