import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import Rating from "./Rating";
const Filters = () => {
    const [rate, setRate] = useState(3)

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
        />
      </span>
      <span>
        <Form.Check
          inline
          type="radio"
          id={`inline-2`}
          label="Descending"
          name="group1"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          id={`inline-3`}
          label="Include out of stock"
          name="group1"
        />
      </span>
      <span>
        <Form.Check
          inline
          type="checkbox"
          id={`inline-4`}
          label="Fast Delivery Only"
          name="group1"
        />
      </span>
      <span>
    <label style={{paddingRight:'3px'}}>Rating : </label>
      <Rating rating={rate} style={{cursor:'pointer'}} onClick={(i) => setRate(i+1)}/>
      </span>
      <Button variant="light">Clear Filter</Button>
    </div>
  );
};

export default Filters;
