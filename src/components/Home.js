import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./style.css";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
    productState:{sort, byStock, byFastDeliver,searchQuery , byRating}
  } = CartState();

  // console.log(products);
  const transformProduct = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => 
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      )
      if(!byStock){
         sortedProducts = sortedProducts.filter((prod) => prod.inStock)
      }
      if(byFastDeliver){
        sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
      }
      if(byRating){
        sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
      }
      if(searchQuery){
        sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
      }

    }

    return sortedProducts

  }

  return (
    <div className="home">
      <Filters/>
      <div className="product-container">
        {transformProduct().map((prod) => {
          return <SingleProduct props={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;
