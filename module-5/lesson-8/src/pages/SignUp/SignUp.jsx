import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export const SignUp = () => {
    const name = useRef();
    const username = useRef();
    const password= useRef();
    const error = useRef();

  return (
    <section>
    <div className="container">
      <div className="signIn flex flex-col justify-center items-center w-[350px] sm:w-[430px] md:w-[550px] shadow-lg mx-auto mt-[100px] p-5 gap-y-3">
        <div className="signIn__title p-1">
          <h2 className='text-[#4763E4] md:text-[30px] text-[24px] font-bold'>ADMIN DASHBOARD</h2>
        </div>
        <form className="signIn__form flex flex-col gap-y-2 w-[70%]">
          <label htmlFor="name" className='text-[#333] font-semibold'>Enter your name</label>
          <input type="text" id="name" className='focus:outline-none border border-[#5C73DB] p-2 rounded-[12px] pl-[16px]' onChange={() => { console.log(name.current.value)}} ref={name} placeholder='Enter your name'/>


          <label htmlFor="userName" className='text-[#333] font-semibold'>Create username</label>
          <input type="text" id="userName" className='focus:outline-none border border-[#5C73DB] p-2 rounded-[12px] pl-[16px]' ref={username} placeholder='Create username'/>


          <label htmlFor="passowrd" className='text-[#333] font-semibold'>Create password (min:3, max:8)</label>
          <input type="password" id="password" className='focus:outline-none border border-[#5C73DB] p-2 rounded-[12px] pl-[16px]' ref={password}  placeholder='Create password'/>
        <p className='text-red' ref={error}></p>
        </form>
        <div className='flex flex-col gap-y-3 py-3 w-[70%]'>
          <NavLink to='/admin' className='w-full bg-[#4763E4] p-2 rounded-[12px] text-center text-white active:bg-[#2941bb]'>Yaratish</NavLink>
          <span className='w-full flex justify-between items-center'>
            <NavLink to='/'  className='w-[35%] p-3 bg-[#4763E4] rounded-[12px] text-center text-white'>Sign In</NavLink>
           <a href="#" className='text-center text-[#4763E4]'>muammo bo’yicha murojat</a>
           </span>
        </div>
      </div>
    </div>
  </section>
  )
}
