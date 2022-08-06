import React from 'react'
import styled from "styled-components"
const Container=styled.div`
  // textAlign :center;
  width: 95%;
  margin-left:470px;
  // margin: auto;
`;

const Home = () => {
  return (

    <Container>
     <h1>Welcome In My Shop</h1>
     <img className='sunny' src="https://ca.slack-edge.com/T02QFJUB5DF-U02RJL8KMLZ-8831c1f22191-512"></img>
  
    </Container>
  )
}

export default Home