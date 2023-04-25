// @ts no-check

import React from 'react'
import './Main.css';
import { Link, NavLink } from 'react-router-dom';
export const SideBar = () => {
  return (
    <aside className='w-[236px] flex flex-col  pt-8 gap-y-6 h-[100vh] shadow-lg'>
        <div className="sidebar__title">
            <h2 className='text-center text-[#013CC6] text-[24px] font-medium'>A-EXPRESS.UZ</h2>
        </div>
        <ul className='flex flex-col justify-between h-[65%]'>
            <li className= 'w-full  h-[60px]'>
           <NavLink to='/main/admin' className='w-full h-full flex items-center gap-x-2 pl-[40px] p-3' style={({ isActive }) => ({
    color: isActive ? '#0B63F8' : '#545e6f',
    borderLeft: isActive ? '2px solid #0B63F8' : '#000',
  })}>
           <i className='bx bxs-dashboard text-[21px]'></i>
            Dashboard
           </NavLink>
               
            </li>
            <li className= 'w-full  h-[60px]'>
           <NavLink to='/main/adduser' className='w-full h-full flex items-center gap-x-2 pl-[40px] p-3' style={({ isActive }) => ({
    color: isActive ? '#0B63F8' : '#545e6f',
    borderLeft: isActive ? '2px solid #0B63F8' : '#000',
  })}>
            <i className='bx bx-edit text-[21px]'></i>
            Hodim qo’shish
           </NavLink>
               
            </li>
            <li className= 'w-full  h-[60px]'>
           <NavLink to='/main/order' className='w-full h-full flex items-center gap-x-2 pl-[40px] p-3' style={({ isActive }) => ({
    color: isActive ? '#0B63F8' : '#545e6f',
    borderLeft: isActive ? '2px solid #0B63F8' : '#000',
  })}>
           <i className='bx bx-edit text-[21px]'></i>
            Yangi buyurtma
           </NavLink>
               
            </li>
            <li className= 'w-full  h-[60px]'>
           <NavLink to='/main/orders' className='w-full h-full flex items-center gap-x-2 pl-[40px] p-3' style={({ isActive }) => ({
    color: isActive ? '#0B63F8' : '#545e6f',
    borderLeft: isActive ? '2px solid #0B63F8' : '#000',
  })}>
          <i className='bx bx-shopping-bag text-[21px]'></i>
            Buyurtmalar
           </NavLink>
               
            </li>
            <li className= 'w-full  h-[60px]'>
           <NavLink to='/main/settings' className='w-full h-full flex items-center gap-x-2 pl-[40px] p-3' style={({ isActive }) => ({
    color: isActive ? '#0B63F8' : '#545e6f',
    borderLeft: isActive ? '2px solid #0B63F8' : '#000',
  })}>
            <i className='bx bx-cog text-[21px]' ></i>
            Settings
           </NavLink>
               
            </li>
        </ul>
    </aside>
    
  )
}
