
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

import React, { useEffect, useState } from 'react'
import styled from "styled-components"


const Container = styled.div`
  // border: 1px solid red;
  // display:flex;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  text-align: center;
`;
const Img = styled.img`
heigh:100px;
width:200px;
`;
const Title = styled.p``;
const Price = styled.h3``;
const CartCard=styled.div`
  // border:1px solid pink;
`

const Cart = () => {
  const {cartData}=useContext(CartContext)

  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)



  return (
    <Container>

    {cartData?.map((singleData)=>
      <CartCard>
        <Img src={singleData.image}/>
        <Price>$ {singleData.price}</Price>
      </CartCard>

    )}
    
  </Container>
  )
}

export default Cart




