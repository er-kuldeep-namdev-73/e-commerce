import React, { useEffect, useRef, useState } from 'react'
import "./Slider.css"
const Slider = () => {

    const [slide, setSlide] = useState(["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg","slider5.jpeg"])
    let[select,setSelect]=useState(0)
    let timer=useRef(null)
    useEffect(()=>{
        timer.current = setInterval(()=>{
            setSelect(select=> select < 3 ?  select+1 : 0)
        },4000)
    },[])

    function prevSlide(){
        console.log(select)
        if(select > 0)
           setSelect(select-1)
        else{
            setSelect(slide.length-1)
        }
        clearInterval(timer.current);
        timer.current = setInterval(()=>{
            setSelect(select=> select < 3 ?  select+1 : 0)
        },4000)
    }
    function nextSlide(){
        console.log(select)
       if(select < slide.length-1)
            setSelect(select+1)
        else
            setSelect(select=0)
        clearInterval(timer.current);
        timer.current = setInterval(()=>{
            setSelect(select=> select < 3 ?  select+1 : 0)
        },4000)
    }

    return (
        <div className='mt-1'>
                <img src={`./Image/Slider/${slide[select]}`} alt="..." width="100%" height={500}/>
            <button onClick={prevSlide} className='prev'>&#10094;</button>
            <button onClick={nextSlide} className='next'>&#10095;</button>
        </div>
    )
}
export default Slider