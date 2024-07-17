import React from 'react'
import Navbar from '../homepageComponents/navbar'
import Products from './products'
import Checkout from './checkout'
import Coupon from './coupon'

function MainContent() {
    const changePrice = (perc)=>{
        
    }
  return (
    <>
    <Navbar/>
    <Products/>
    <Coupon/>
    <Checkout/>
    </>
  )
}

export default MainContent
