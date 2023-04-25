import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn/SignIn';
import { Admin } from '../pages/Admin/Admin';
import { Order } from '../pages/Order/Order';
import { SignUp } from '../pages/SignUp/SignUp';
import { Post } from '../pages/Post/Post';
import { Error } from '../pages/Error/Error';
import { Main } from '../pages/Main/Main'
import { Settings } from '../pages/Settings/Settings';
import { AddUser } from '../pages/AddUser/AddUser';
import { Orders } from '../pages/Orders/Orders';
export const RouterLinks = () => {
  return (
    <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>


    <Route path='/main' element={<Main/>}>
    <Route path='/main/admin' element={<Admin/>}/>
    <Route path='/main/order' element={<Order/>}/>
    <Route path='/main/posts/:id' element={<Post/>}/>
    <Route path='/main/settings' element={<Settings/>}/>
    <Route path='/main/adduser' element={<AddUser/>}/>
    <Route path='/main/orders' element={<Orders/>}/>
    </Route>
    <Route path='*' element={<Error/>}/> 
</Routes>
  )
}
