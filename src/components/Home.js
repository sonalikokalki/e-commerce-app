import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="home">
      {/* <Filter/> */}
      <div className="product-container">
        {products.map((prod) => {
          return <SingleProduct props={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;
