import React from 'react'

const FormGroup = ({name, type, label, value, placeholder}) => {
  return (
    <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input name={name} id={name} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default FormGroup