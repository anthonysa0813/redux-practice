import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addProduct, getProductSelector } from "../products/productslices";
import { useAppDispatch } from "../store.hooks";
import { productsData } from "../products/data";
import { CardContainer } from "../ui/styles";
interface ProductListProps {}

const ListProducts: React.FC<ProductListProps> = ({}) => {
  // const products = useSelector(getProductSelector);
  const products = productsData;
  const dispatch = useAppDispatch();
  console.log({ products });
  return (
    <>
      <CardContainer>
        {products.map((product: any) => (
          <div className="productCard " key={product.id}>
            <div className="cardImage">
              <img src={product.image} alt="" />
            </div>
            <div className="cardInfo">
              <div className="infoLeft">
                <h4>{product.name}</h4>
                <span>${product.price}</span>
              </div>
              <div className="infoRight">
                <button
                  onClick={() => {
                    dispatch(addProduct(product));
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </CardContainer>
    </>
  );
};

export default ListProducts;
