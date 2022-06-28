import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductSelector } from "../products/productslices";
import {
  AsideCart,
  CartCircle,
  CartTotal,
  ListContent,
  OrderAddress,
  OrderInfo,
} from "../ui/styles";
import ListProducts from "./ListProducts";

const Cart = () => {
  const products = useSelector(getProductSelector);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = products.reduce(
      (total: any, product: any) => total + product.price,
      0
    );
    setTotalPrice(total);
  }, [products]);

  return (
    <AsideCart>
      <div className="headAsideCart ">
        <i className="icon-user"></i>
        <CartCircle>{products.length}</CartCircle>
      </div>
      <div className="orderInfo">
        <h1>My order</h1>

        <OrderInfo>
          <div className="direction">
            <p>625 St. Marks Ave</p>
            <p className="btn">Edit</p>
          </div>
          <div className="orderTime">
            <i className="icon-clock"></i>
            <p>35min</p>
            <p className="btn">Choose Time</p>
          </div>
        </OrderInfo>

        <ListContent>
          {products.map((product: any) => {
            return (
              <div className="orderList ">
                <div className="imageProd">
                  <img src={product.image} alt="" />
                </div>
                <div className="infoProd">
                  <p>{product.name}</p>
                </div>
                <div className="priceProd">
                  <p>${product.price}</p>
                </div>
              </div>
            );
          })}
        </ListContent>

        <CartTotal>
          <h3>Total</h3>
          <h3>${totalPrice}</h3>
        </CartTotal>
      </div>
    </AsideCart>
  );
};

export default Cart;
