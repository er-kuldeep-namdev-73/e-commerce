import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Order = () => {
  return (
    <div>
        <Header/>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <p>Order </p>
                </div>
                <div className='col-sm-3'></div>
            </div>
        <Footer/>
    </div>
  )
}

export default Order