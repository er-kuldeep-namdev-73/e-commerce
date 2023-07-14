import React, { useEffect, useState } from 'react'

import Header from '../header/Header'
import axios from 'axios'
import Slider from './Slider/Slider'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
const Home = ({handleCountData,counter}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function handleAddToCart(element)
    {
        axios
        .post("http://localhost:8001/products", { ...element })
        .then((res) => {
            // sessionStorage.setItem("uuid", res.cartData.id)
            console.log(res);
            // location("/cart")
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <Header counter={counter}/>
            <Slider/>
            <center className='fs-1 border-bottom border-dark border-3'><span className='text-warning'>Our</span><u className='text-danger'> Prod</u>ucts</center>
            <div className='row'>
                {
                    data.length !== 0 && data.map((element, index) => {
                        return (
                            <div className='col-sm-3 mt-1' key={index}>
                                <div className='card'>
                                    <div className="card-body">
                                        <img src={`${element.image}`} width="100%" height="250px"/>

                                        <div style={{height:"100px",overflowY:'auto'}}><p><b>description : </b>{element.description}</p></div>
                                        <div className='mt-2'>
                                            <span><b>Category : </b>{element.category}</span>
                                            <button className='btn btn-primary w-100 mt-1'>Price : &#8377; {element.price}</button>
                                            <button className='btn btn-warning my-1 me-1'>Rating&#9733; :{element.rating.rate}</button>
                                            <button className='btn btn-warning'>Count: {element.rating.count}</button>
                                            <Link className='btn btn-success ms-5 mt-1' onClick={()=>handleAddToCart(element)}>Add to Cart [+]</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Home;