import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import Women from './Pages/Women'
import Man from './Pages/Man'
import Cart from './Pages/Cart'
import MenCargo from "./Pages/MenCargo"
import AddProduct from './Pages/AddProduct'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Man" element={<Man />} />
            <Route path="/MenCargo" element={<MenCargo />} />
            <Route path="/shoppingcart" element={<Cart />} />
            <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
    </div>
  )
}

export default AllRoutes