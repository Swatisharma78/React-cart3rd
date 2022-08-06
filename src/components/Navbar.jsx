import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const Nav=styled.div`
    background-color: teal;
    padding:10px;
    display:flex;
    font-size:30px;
    justify-content: space-around;
    overflow: hidden;
`
const sam={
  color:"white",
  textDecoration:"none"
}

const Navbar = () => {
  const {quantity}=useContext(CartContext)

  return (
    <Nav>
        <NavLink style={sam} to="/">Home</NavLink>
        <NavLink style={sam} to="/Women">Women-Shirts</NavLink>
        <NavLink style={sam} to="/Man">Men-Shirts</NavLink>
        <NavLink style={sam} to="/MenCargo">Men-Cargo</NavLink>
        <NavLink style={sam} to="/shoppingcart">

        <Badge badgeContent={quantity} color="success">
          <ShoppingCartOutlinedIcon color="red" />
        </Badge>
        </NavLink>
      
    </Nav>
  );
};

export default Navbar;
