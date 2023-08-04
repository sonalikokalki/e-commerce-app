import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import './style.css'
// import style from '.app.css'

const Header = () => {
 const {state:{cart}, dispatch, productDispatch} = CartState();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">E-Commerce</Link>
          {/* <a href="/">E-Commerce</a> */}
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            placeholder="Search the product"
            // style={{ minWidth: 500 }}
            onClick={(e) => productDispatch({
              type:'FILTER_BY_SEARCH',
              payload:e.target.value
            })}
          ></FormControl>
        </Navbar.Text>
        <Dropdown >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge style={{margin:'3px'}}>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu className = 'dropdown-menu'style={{ width: 260 , marginTop:10, backgroundColor: '#DCDCDC'}}>
            {
              cart.length > 0 ? (
                <>
                {cart.map((item) => 
                    <span className="cart-item" key={item.id}>
                      <img className="cart-item-img" src={item.image} alt={item.name}/>
                      <div className="cart-item-details">
                        <span>{item.name}</span>
                        <span>₹ {item.price.split('.')[0]}</span>

                      </div>
                      <AiFillDelete fontSize={'25px'} style={{cursor:'pointer'}} onClick={() => {
                        dispatch({
                          type:'REMOVE_FROM_CART',
                          payload:item
                        })
                      }}/>
                    
                    </span>
                )}
                <Link to={'/cart'}>
                  <Button style={{width:'95% ', margin: '5px'}}>Go To Cart</Button>
                </Link>
                </>
              ) : (  <span style={{ padding: 10 }}>Cart is empty</span>)
            }
          
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
