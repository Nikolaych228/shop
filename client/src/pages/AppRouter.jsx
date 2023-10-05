import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import Products from './Products'
import Cart from './Cart'
import Login from './Login'
import Register from './Register'
import Pagelog from './Pagelog'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>  
        <Route path='/register' element={<Register/>}/>
        <Route path='/pagelog' element={<Pagelog/>}/>
    </Routes>
  )
}

export default AppRouter