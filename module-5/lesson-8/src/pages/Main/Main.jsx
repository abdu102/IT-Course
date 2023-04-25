import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { RouterLinks } from '../../router/RouterLinks'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <main className='flex'>
        <SideBar/>
        <section className='main rounded-lg m-2 w-full p-5'>
            <Outlet/>
        </section>
    </main>
  )
}
