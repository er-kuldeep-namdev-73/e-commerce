import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Input from './Form/formControl'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {

  const [data, setData] = useState({})
  const location = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    // console.log(data);
    axios.get("http://localhost:8000/users").then((res) => {
      let isUserExist = res.data.filter(element=>(
        element.email === data.email && element.password === data.password
      ))
      
      if(isUserExist.length==0)
      {
        toast.error("Credentials Not Matched!");
      }
      else
      {
        sessionStorage.setItem("uuid", isUserExist[0].id); 
        location("/profile")
        toast.success("Login Successfully");
      }
     

    }).catch((err) => {
      console.log(err)
    })
    e.target.reset();
    setData({})
  }

  function handleChangeData(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 mb-5'>
          <p className='fs-3 text-center'>Login here...</p><br />
          <form className='form-control' onSubmit={handleSubmit}>
            <label className='fs-5'>Email</label>
            <Input type='email' className='form-control' placeholder='Enter your Email id...' name="email" onChange={handleChangeData} />

            <label>Password : </label>
            <Input type='password' className='form-control' placeholder='Enter the Password' name="password" onChange={handleChangeData} />
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