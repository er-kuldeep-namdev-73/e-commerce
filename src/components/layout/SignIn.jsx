import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const SignIn = () => {
  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
        <span className='fs-3 text-center'>Login here...</span><br />
          <form className='form-control'>
            <label className='fs-5'>Email</label>
            <input type='email' className='form-control' placeholder='Enter your Email id...' />
            <label>Password : </label>
            <input type='password' className='form-control' placeholder='Enter the Password'/>
            <button className='btn btn-success mt-1 w-100'>Log in</button>
          </form>
        </div>
        <div className='col-sm-4'></div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignIn