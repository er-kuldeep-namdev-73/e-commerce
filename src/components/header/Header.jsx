import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({counter}) => {
  return (
    <div className='header container-fluid bg-dark text-light p-3 text-center'>
        <div className='row'>
            <div className='col-sm-2'>logo</div>
            <div className='col-sm-8'>
                <div className='row'>
                    <div className='col-sm-12 fs-5'>
                        <Link className='m-1 text-decoration-none text-light' to="/home">Home</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/products">Products</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/about">AboutUs</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/contact">ContactUs</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/order">Order</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/signup">SignUp</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/signin">SignIn</Link>
                        <Link className='m-1 text-decoration-none text-light' to="/profile">YourProfile</Link>
                    </div>
                </div>
            </div>
            <Link className='col-sm-2 rounded fs-5 p-1 text-end text-light text-decoration-none' to="/cart">&#128722;{counter}</Link>
        </div>
    </div>
  )
}

export default Header