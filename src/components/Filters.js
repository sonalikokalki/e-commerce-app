import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import Rating from "./Rating";
import { CartState } from "../context/Context";
const Filters = () => {
  // const [rate, setRate] = useState(3);
  const {
    productState: { sort, byStock, byFastDeliver, byRating,searchQuery },
    productDispatch,
  } = CartState();
  console.log( sort, byStock, byFastDeliver, byRating,searchQuery );

  return (
    <div className="filters">
      <span className="filter-title">Filter products</span>
      <span>
        <Form.Check
          inline
          type="radio"
          id={`inline-1`}
          label="Ascending"
          name="group1"
          onChange={() => 
           productDispatch({
            type:'FILTER_BY_PRICE',
            payload:'lowToHigh',

           })
          }
          checked = {sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="radio"
          id={`inline-2`}
          label="Descending"
          name="group1"
          onChange={() => productDispatch({
            type:'FILTER_BY_PRICE',
            payload:'highToLow'
          })}
          checked = {sort === 'highToLow' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          id={`inline-3`}
          label="Include out of stock"
          name="group1"
          checked={byStock}
          onChange={() => productDispatch({
            type:'FILTER_BY_STOCK',
          })}
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          id={`inline-4`}
          label="Fast Delivery Only"
          name="group1"
          checked={byFastDeliver}
          onChange={()=>productDispatch({
            type:'FILTER_BY_DELIVERY'
          })}
        />
      </span>
      <span>
        <label style={{ paddingRight: "3px" }}>Rating : </label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) => productDispatch({
            type:'FILTER_BY_RATING',
            payload: i + 1
          })}
        />
      </span>
      <Button variant="light" onClick={()=>productDispatch({
        type:'CLEAR_FILTER'
      })}>Clear Filter</Button>
    </div>
  );
};

export default Filters;
