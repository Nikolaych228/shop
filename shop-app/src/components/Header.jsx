import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Quit } from '../helpers/QuitHandler'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loggedIn} = useSelector((state) => state.login)
  return (
    <>
    <header class="bg-transparent absolute z-50 top-0 left-0 w-full transition duration-500">
        <nav class="flex items-center max-w-screen-xl mx-auto px-6 py-3">
            <div class="flex flex-grow">
                <p className='text-xl font-bold '>Shop</p>
            </div>
            {loggedIn ? 
            <div class="flex items-center justify-end space-x-6">
                <button onClick={() => {navigate('/profile')}} className='bg-red-400 font-bold px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105'>Профиль</button>
                <button onClick={() => {Quit(dispatch)}} className='poppins font-bold'>Выйти</button>
            </div>
            :
            <div class="flex items-center justify-end space-x-6">
                <button onClick={() => {navigate('/signin')}} class="poppins font-bold">Войти</button>
                <button onClick={() => {navigate('/signup')}} class=" bg-red-400 font-bold px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">Зарегистрироваться</button>
            </div>
            }
            
            
        </nav>
    </header>
    <section class="header-banner h-96 w-full bg-yellow-50">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">Лучший магазин еды</h1>
            <div class="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                <input type="text" class=" rounded-full px-4 focus:outline-none w-full bg-transparent" placeholder="Search here ......."/>
                <button class="text-sm bg-red-400 py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">Search</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header