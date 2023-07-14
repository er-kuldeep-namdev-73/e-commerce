import React, { useState } from 'react'
import axios from 'axios'


const CartItem = ({ element, setCartData, calcPrice }) => {

    const [qty, setQty] = useState(1)

    function handleIncrementQty() {
        if (qty >= 0) {
            setQty(qty + 1)
        }
        else {
            setQty(0)
        }
    }

    function handleDecrementQty() {

        if (qty === 1) {
            handleDeleteItem()
        }
        else {
            setQty(qty - 1)
        }
    }

    function handleDeleteItem() {
        axios.delete("http://localhost:8001/products/" + element.id).then((res) => {

            calcPrice.current = 0;

            axios.get("http://localhost:8001/products").then((res) => {
                setCartData(res.data)
                // console.log(res)
            }).catch(console.log)
        }).catch((err) => {
            console.log(err)
        })
        console.log(element.id)
    }

    return (
        <div>
            <div className='row border-1 border-dark border mt-2 rounded'>
                <div className='col-sm-3 p-2 border-2 border-end border-dark ms-2 my-2 float-start'>
                    <img src={`${element.image}`} alt="..." height="200px" width="100%" />
                </div>

                <div className='col-sm-8 float-start my-2 ms-2 p-2'>
                    <span className='fs-5'><b>Category : </b>{element.category}<br /></span>
                    <b>title : </b>{element.title}<br />
                    <span className='fw-bold'>
                        <b>Price : </b>&#8377; {element.price}
                    </span><br />

                    <span className='fw-bold'>qty : </span> <button className='btn btn-primary' onClick={handleDecrementQty} >-</button> <b className='fs-4 my-2'> {qty} </b><button className='btn btn-primary' onClick={handleIncrementQty}>+</button>
                    <button className='btn btn-outline-danger w-100 mt-2' onClick={handleDeleteItem} to="/cart">Delete Item</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem