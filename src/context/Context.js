import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "./Reducers";
import { faker } from "@faker-js/faker";

const Cart = createContext();
const url = "https://fakestoreapi.com/products";

const Context = ({ children }) => {
  const products = [...Array(21)].map(() => ({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "fashion" }),
    inStock: faker.number.int({ min: 0, max: 7 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.number.int({ min: 1, max: 5 }),
  }));
  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
