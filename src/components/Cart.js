import React from "react";
import { CartState } from "../context/Context";
import ListGroup from "react-bootstrap/ListGroup";
// import { Button } from "bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import Rating from "./Rating";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <div className="home">
        <div className="product-container">
          <ListGroup as="ol" numbered>
            {cart.map((item) => {
              return (
                <ListGroup.Item as="li" key={item.id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} rounded fluid/>
                    </Col>
                    <Col md={2}>{item.name}</Col>
                    <Col md={2}>₹ {item.price}</Col>
                    <Rating rating={item.ratings} onClick={() => {}} />
                    {/* <Col md={2}>
                      <Form.Control value={item.qty}>
                        {[...Array(item.inStock).keys()].map((x) => {
                          return (<option key={x + 1}>{x + 1}</option>);
                        })}
                      </Form.Control>
                    </Col> */}
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                        }}
                      >
                      <AiFillDelete
                        fontSize={"25px"}
                        style={{ cursor: "pointer" }}
                      />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <div className="filters summary">
          <span className="filter-title">Subtotal ({cart.length}) items</span>
          <p>Total : ₹ {total}</p>
          <Button type="button" disabled={cart.length === 0}>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
