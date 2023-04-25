import React from 'react'

export const Input = ({id, placeholder, label, type, val, setVal}) => {
  return (
   <>
   <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className="w-[90%] focus:outline-none pl-3 border border-[#13131340] p-3 rounded-[3px]"
        placeholder={placeholder}
        onChange={(evt) => {
            setTimeout(() => {setVal(evt.target.value)}
            , 700)
        }}
      />
 </>
  )
}
