import React from 'react'

const Input = ({type, placeholder, onChange, name, pattern, className,value}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={onChange} className={className} name={name} pattern={pattern} value={value} required/>
    </div>
  )
}

export default Input;