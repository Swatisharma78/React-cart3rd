import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Container = styled.div`
  // border
  padding: 10px;
  // height:100px;
  // width:50px;
  text-align: center;
`;
const Img = styled.img`
height:300px`;
const Title = styled.p``;
const Price = styled.h3``;
const Card = ({singleData}) => {
  const {addToCart}=useContext(CartContext)


  return (
    <Container>
      <Img src={singleData.image} alt="sangam" />

      <Title>{singleData.name}</Title>
      <Price>$ {singleData.price}</Price>
      <Button onClick={()=>addToCart(singleData)} variant="contained" startIcon={<AddShoppingCartIcon />}>
        Add To Cart
      </Button>
    </Container>
  );
};

export default Card;
