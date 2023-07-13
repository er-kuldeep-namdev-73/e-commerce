import React from 'react'
import { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Input from './Form/formControl'
import axios from 'axios'
const Contact = () => {

  const [contactData, setContactData] = useState({})

  function handleSubmitData(e){
    e.preventDefault();
    // console.log(contactData)
    e.target.reset();
    setContactData({})

    axios
            .post("http://localhost:8080/contact", { ...contactData, id: contactData.id + 1 })
            .then((res) => {
              // console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });

  }

  function handleChangeData(e) {
    setContactData({ ...contactData, [e.target.name]: e.target.value })
  }

  return (
    <div className='bg-warning'>
      <Header />
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
          <p className='text-center fs-2 p-2 mt-5'>Contact Form</p>
          <form className='form-control mt-5 p-3 bg-light' onSubmit={handleSubmitData}>
            <label className='p-1 mt-2'>Name : </label>
            <Input type="text" onChange={handleChangeData} placeholder="Enter Your Name" name="name" className="form-control" />
            <label className='p-1 mt-2'>Email : </label>
            <Input type="email" onChange={handleChangeData} placeholder="Enter Your Email" name="email" className="form-control" />

            <label className='p-1 mt-2'>Phone : </label>
            <Input type="text" onChange={handleChangeData} placeholder="Enter Your Phone" name="phone" className="form-control" />
            <label className='p-1 mt-2'>Address : </label>
            <Input type="text" onChange={handleChangeData} placeholder="Enter Your Address " name="address" className="form-control" />

            <label className='p-1 mt-2'>Message : </label>
            <textarea onChange={handleChangeData} placeholder='Enter Your Message Here...' name='message' className='form-control' required></textarea>
            <button className='btn btn-warning w-100 mt-2'>Submit</button>
          </form>
        </div>
        <div className='col-sm-3'></div>
        <div className='row'>
          <div className='col-sm-12 mt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.74555725761!2d80.93628306517994!3d26.89757912649641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957cbf43233f5%3A0x3a22b7c8a77962f0!2sAliganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689244540686!5m2!1sen!2sin" width="100%" height="450" style={{ border: '2' }} referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Contact