import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Profile = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        let uuid = sessionStorage.getItem("uuid")
        axios.get("http://localhost:8000/users/"+uuid).then((res) => {
            // console.log(res.data[0].image)
            setUserData(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header />
            <div className='row mt-5'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6 my-5'>
                    <p className='text-center fs-3'>Your Profile</p>
                    <div className='row bg-light rounded'>
                        <div className='col-sm-4 m-1 p-1 border-end border-dark border-2'>
                            <img src={userData.image} alt="..." height={200} width={200} className='m-1' />
                        </div>
                        <div className='col-sm-7 p-1 m-1 fs-6'>
                            Name : {userData.name}<br/>
                            Phone : +91-{userData.phone}<br/>
                            Email : {userData.email}<br/>
                            Gender : {userData.gender}<br/>
                            Address : {userData.address} {userData.city} {userData.district}<br/>
                            State : {userData.state}<br/>
                            PinCode : {userData.pincode}<br/>
                            Status : {userData.status}
                        </div>
                    </div>
                </div>
                <div className='col-sm-3 mt-5'></div>
            </div>
            <Footer className="position-relative bottom-0 translate-middle"/>
        </div>
    )
}

export default Profile