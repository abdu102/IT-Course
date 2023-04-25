import React, { useRef } from 'react';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Posts } from './pages/Posts/Posts';
import { User } from './pages/User/User';
function App() {
    return (
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
        </>
    )
}

export default App
