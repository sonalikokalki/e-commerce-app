import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ props }) => {
  return (
    <div className="products">
      <Card>
        <CardImg variant="top" src={props.image} alt={props.name} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <span>INR {props.price}</span>
            {props.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Deliver in 4 days</div>
            )}
            <Rating rating={props.ratings} />
          </Card.Text>
          <Button variant="danger" style={{ marginRight: "15px" }}>
            Remove from cart
          </Button>
          <Button disabled={!props.inStock} style={{ fontSize: "15px" }}>
            {!props.inStock ? "Out of stock" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
