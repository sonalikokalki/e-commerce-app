import React from "react";
import { Badge, Container, Dropdown, FormControl, Navbar, NavbarBrand } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <a href="/">E-Commerce</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            placeholder="Search the product"
            style={{ width: 500 }}
          ></FormControl>
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FaShoppingCart/>
            <Badge>5</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{minWidth:370}}>
           <span style={{padding:10}}>Cart is empty</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
