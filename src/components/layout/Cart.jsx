import React, { memo, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {

  const [cartData, setCartData] = useState([]);
  // const[price,setPrice]=useState(0)
  const calcPrice = useRef(0);
  useEffect(() => {
    axios.get("http://localhost:8001/products").then((res) => {
      // setCartData(res.data[0])
      setCartData(res.data)

    }).catch(console.log)
    
  }, [])

  function calculatePrice(currentPrice)
  {
    calcPrice.current+=currentPrice
  }

  
  return (

    <div>
      <Header />
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <p className='text-center fs-4 my-4'>Cart Items</p>
          {
            cartData.length != 0 &&
            cartData.map((element, index) => (
              <>
                <CartItem element={element} key={index} setCartData={setCartData} calcPrice={calcPrice} />
                {calculatePrice(element.price)}
              </>
            ))
          }
          {
            cartData.length !== 0 ? <><p>Total Price : {calcPrice.current.toFixed(2)}</p><Link className='btn btn-outline-warning w-100' to={"/order"}>Place Order</Link></> : null
          }
        </div>
        <div className='col-sm-3 my-5'></div>
      </div>
      <Footer />
    </div>
  )
}

export default memo(Cart)