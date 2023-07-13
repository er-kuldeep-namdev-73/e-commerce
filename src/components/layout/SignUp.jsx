import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Input from './Form/formControl'
import { toast } from 'react-toastify'

const SignUp = () => {

    const [userData, setUserData] = useState({})
    const location = useNavigate();

    function handleChangeData(e) {
        if (e.target.name === 'image') {
            let file = e.target.files[0];

            let rstream = new FileReader();

            rstream.readAsDataURL(file);

            rstream.onload = function () {
                setUserData({ ...userData, [e.target.name]: rstream.result })
            }
            return;
        }
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    function handleUserRegistration(e) {
        e.preventDefault();
        toast.success("Registeration Successfully");
        axios
            .post("http://localhost:8000/users", { ...userData, id: userData.id + 1 })
            .then((res) => {
                //console.log(res.data.id);
                sessionStorage.setItem("uuid", res.data.id)
                location("/profile")
            })
            .catch((err) => {
                console.log(err);
            });
        e.target.reset();
        setUserData({})
        console.log(userData)
    }

    return (
        <div>
            <Header />
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6 fs-3 mb-5'>
                    <p className='text-center'>Register here...</p>
                    <div>
                        <form className='form-control' onSubmit={handleUserRegistration} method="post" encType='multipart/form-data'>
                            <label>Name : </label>
                            <Input onChange={handleChangeData} type="text" placeholder='Enter Your Name...' className='form-control' name='name' pattern={"[a-zA-Z ]+$"} />

                            <label>Contact No. : </label>
                            <Input onChange={handleChangeData} type='text' placeholder='Enter the contact no.' className='form-control' pattern={'[0-9]+$'} name="phone" />

                            <label>Email : </label>
                            <Input onChange={handleChangeData} type='email' placeholder='Enter the Email' className='form-control' name="email" />

                            <label>Password : </label>
                            <Input onChange={handleChangeData} type='password' placeholder='Enter the Password' className='form-control' name="password" />

                            <label>image : </label>
                            <Input onChange={handleChangeData} type='file' className='form-control' name="image" />

                            <label>Date Of Birth</label>
                            <Input onChange={handleChangeData} type='date' className='form-control' name='dob' />

                            <div className='my-1'>
                                <label className='me-4 float-start'>Gender : </label>

                                <label className=' float-start'>Male</label><Input onChange={handleChangeData} type='radio' className='form-check-input ms-2 float-start me-2' name="gender" value={"male"} />

                                <label className='me-2 float-start'>Female</label><Input onChange={handleChangeData} type='radio' className='form-check-input ms-2 float-start me-2' name='gender' value={"female"} />

                                <label className='float-start me-2'>Transgender</label><Input onChange={handleChangeData} type='radio' className='form-check-input ms-2' name='gender' value={"transgender"} />
                            </div>
                            <label>Address : </label>
                            <textarea placeholder='Enter the Address' className="form-control" name='address' onChange={handleChangeData}></textarea>

                            <label>State</label>
                            <Input onChange={handleChangeData} type="text" placeholder='Enter Your State...' className='form-control' name='state' />

                            <label>city</label>
                            <Input onChange={handleChangeData} type="text" placeholder='Enter Your city...' className='form-control' name='city' />

                            <label>District</label>
                            <Input onChange={handleChangeData} type="text" placeholder='Enter Your District...' className='form-control' name='district' />

                            <label>Pin Code</label>
                            <Input onChange={handleChangeData} type="text" placeholder='Enter Your Pin Code...' className='form-control' name='pincode' />

                            <label className='float-start me-5 my-2'>Current Status :</label>

                            <label className='me-3 my-2 float-start'>Student </label><Input onChange={handleChangeData} type='radio' className='form-check-input me-3 my-3 float-start' name='status' value={"student"} />

                            <label className='me-3 my-2 float-start'>Unmarried </label><Input onChange={handleChangeData} type='radio' className='form-check-input me-3 my-3 float-start' name='status' value={"unmarried"} />

                            <label className='me-3 my-2 float-start'>Married </label><Input onChange={handleChangeData} type='radio' className='form-check-input me-3 my-3' name='status' value={"married"} />

                            <button className='btn btn-success mt-2 w-100'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='col-sm-3'></div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp