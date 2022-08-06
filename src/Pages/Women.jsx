
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Card from '../components/Card'

const Container=styled.div`
  // background-color: #c28dc2;
  display: grid;
  // height:100px
  // width:100px
  // grid-template-row:repeat(4,1fr)
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
`
const Women = () => {

  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  useEffect(()=>{
    setLoading(true)
    fetchdata()
  },[])

  const fetchdata=async()=>{
    try {
      
      let res=await axios.get("http://localhost:3000/womenshirts")
      setLoading(false)
      setError(false)
      setData(res.data)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  return (
    <Container>
    {data?.map((singleData)=>
      <Card key={singleData.id} singleData={singleData}/>

    )}
    
  </Container>
  )
}

export default Women




