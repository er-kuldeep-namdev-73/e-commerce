import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const Products = ({counter}) => {
  return (
    <div>
        <Header counter={counter}/>
        Products
        <Footer/>
    </div>
  )
}

export default Products