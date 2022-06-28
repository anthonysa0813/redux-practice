import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  name: string;
  id: string;
  price: number;
  image: string;
}

const initialState = [
  {
    id: "afdvavdp",
    name: "Pizza :D",
    price: 14,
    image:
      "https://res.cloudinary.com/dzgbz8lvg/image/upload/v1656405274/pexels-photo-156114_erybob.jpg",
  },
  {
    id: "affaeasa",
    name: "Hamburguer",
    price: 18,
    image:
      "https://res.cloudinary.com/dzgbz8lvg/image/upload/v1656405274/pexels-photo-376464_ee0lc8.jpg",
  },
  {
    id: "afnvac2e",
    name: "Pizza Cheese",
    price: 20,
    image:
      "https://res.cloudinary.com/dzgbz8lvg/image/upload/v1656405274/pexels-photo-461198_lw4jrq.jpg",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addProduct } = productsSlice.actions;

export const getProductSelector = (state: any) => state.products;

export default productsSlice.reducer;
