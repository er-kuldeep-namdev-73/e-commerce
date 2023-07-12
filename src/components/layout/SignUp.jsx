import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const SignUp = () => {

    const[userData,setUserData]=useState({})

    function handleChangeData(e){
        // console.log(e.target.name,e.target.value)
        // // e.target.name=e.target.value
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    function handleUserRegistration(e)
    {
        e.preventDefault();
        console.log(userData);
        e.target.reset();
        setUserData({})
    }

  return (
    <div>
        <Header/>
        <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6 fs-3'>
                <p className='text-center'>Register here...</p>
                <div>
                    <form className='form-control' onSubmit={handleUserRegistration}>
                        <label>Name : </label>
                        <input onChange={handleChangeData} type="text"  placeholder='Enter Your Name...' className='form-control' name='name'/>
                        <label>Contact No. : </label>
                        <input onChange={handleChangeData} type='text' placeholder='Enter the contact no.' className='form-control' pattern={'[0-9]+$'} name="phone"/>
                        <label>Email : </label>
                        <input onChange={handleChangeData} type='email' placeholder='Enter the Email' className='form-control' name="email"/>
                        <label>image : </label>
                        <input onChange={handleChangeData} type='file' className='form-control' name="image"/>
                        <label>Date Of Birth</label>
                        <input onChange={handleChangeData} type='date' className='form-control' name='dob'/>
                        <label>Gender : </label><br/>
                        Male<input onChange={handleChangeData} type='radio' className='form-check-input mx-1' name="gender" value={"male"}/> Female<input onChange={handleChangeData} type='radio' className='form-check-input mx-1' name='gender' value={"female"}/> Transgender<input onChange={handleChangeData} type='radio' className='form-check-input mx-1' name='gender' value={"transgender"}/> <br/>
                        <label>Address : </label>
                        <textarea placeholder='Enter the Address' className="form-control" name='address' onChange={handleChangeData}></textarea>
                        <label>State</label>
                        <input onChange={handleChangeData} type="text" placeholder='Enter Your State...' className='form-control' name='state'/>
                        <label>city</label>
                        <input onChange={handleChangeData} type="text" placeholder='Enter Your city...' className='form-control' name='city'/>
                        <label>District</label>
                        <input onChange={handleChangeData} type="text" placeholder='Enter Your District...' className='form-control' name='district'/>
                        <label>Pin Code</label>
                        <input onChange={handleChangeData} type="text" placeholder='Enter Your Pin Code...' className='form-control' name='pincode'/>
                        <label>Current Status :</label><br/>
                        Student <input onChange={handleChangeData} type='radio' className='form-check-input me-3' name='status' value={"student"}/> Unmarried <input onChange={handleChangeData} type='radio' className='form-check-input me-3' name='status' value={"unmarried"}/> Married <input onChange={handleChangeData} type='radio' className='form-check-input me-3' name='status' value={"married"}/>
                        <button className='btn btn-success mt-2 w-100'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='col-sm-3'></div>
        </div>
        <Footer/>
    </div>
  )
}

export default SignUp