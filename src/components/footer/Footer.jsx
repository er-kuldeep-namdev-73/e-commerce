import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid my-2'>
            <div className='row bg-warning rounded text-center fs-5'>
                <div className='col-sm-3 border-end border-dark border-2 my-3'>
                    <b className='border-bottom border-danger border-2'>Our Services</b><br />
                    <p>Cash on Delivery <br />
                        Fast Delivery<br />
                        24*7 Time Available<br />
                    </p>
                </div>
                <div className='col-sm-3 border-end border-dark border-2 my-3'>
                    <b className='border-bottom border-danger border-2'>About</b><br />
                    <p>
                        Contact Us<br />
                        About Us<br />
                        Carrer<br />
                    </p>
                </div>
                <div className='col-sm-3 border-end border-dark border-2 my-3'>
                    <b className='border-bottom border-danger border-2'>Office</b><br />
                    <p>
                        Near the Post-Office Muskara<br />
                        Muskara, distt : Hamirpur <br/>
                        Pincode : 210506<br />
                    </p>
                </div>
                <div className='col-sm-3 my-3'>
                    <b className='border-bottom border-danger border-2'>Contact No.</b><br />
                    <p>
                        helpline : 0000-0000-0000<br />
                        contact : +91-0000000000,<br />
                        +91-1111111111<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer