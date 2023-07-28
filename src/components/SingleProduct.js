import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ props }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
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

          {cart.some((p) => p.id === props.id) ? (
            <Button variant="danger" style={{ marginRight: "15px" }} onClick={() => {
              dispatch({
                type:'REMOVE_FROM_CART',
                payload:props
              })
            }}>
              Remove from cart
            </Button>
          ) : (
            <Button disabled={!props.inStock} style={{ fontSize: "15px" }} onClick={() => {
              dispatch({ 
                type:'ADD_TO_CART',
                payload:props
              })
            }}>
              {!props.inStock ? "Out of stock" : "Add to cart"}
            </Button>
          )} 
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
