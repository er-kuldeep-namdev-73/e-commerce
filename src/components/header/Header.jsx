import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({count}) => {
  return (
    <div className='header container-fluid bg-dark text-light p-3 text-center'>
        <div className='row'>
            <div className='col-sm-2'>logo</div>
            <div className='col-sm-8'>
                <div className='row'>
                    <div className='col-sm-12 fs-5'>
                        <Link className='m-1' to="/home">Home</Link>
                        <Link className='m-1' to="/products">Products</Link>
                        <Link className='m-1' to="/about">About Us</Link>
                        <Link className='m-1' to="/contact">Contact Us</Link>
                        <Link className='m-1' to="/signup">Sign Up</Link>
                        <Link className='m-1' to="/signin">Sign In</Link>
                        <Link className='m-1' to="/profile">Your Profile</Link>
                    </div>
                </div>
            </div>
            <Link className='col-sm-2 rounded fs-5 p-1 text-end text-light text-decoration-none' to="/cart">&#128722;{count}</Link>

        </div>
    </div>
  )
}

export default Header