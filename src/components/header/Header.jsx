import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header container-fluid bg-dark text-light p-3 text-center'>
        <div className='row'>
            <div className='col-sm-3'>logo</div>
            <div className='col-sm-6'>
                <div className='row'>
                    <div className='col-sm-12 fs-5'>
                        <Link className='m-1' to="/home">Home</Link>
                        <Link className='m-1' to="/products">Products</Link>
                        <Link className='m-1' to="/about">About Us</Link>
                        <Link className='m-1' to="/contact">Contact Us</Link>
                        <Link className='m-1' to="/signup">Sign Up</Link>
                        <Link className='m-1' to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>Cart</div>
        </div>
    </div>
  )
}

export default Header