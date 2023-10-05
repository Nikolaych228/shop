import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
    return (
    <section className="flex hero__section items-center w-full dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Welcome to Sushi Restaurant</h1>
        <p className="mb-8 my-10 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-10">
            <div className="bg-white inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center cursor-pointer text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                ABOUT
            </div>            
            <div onClick={()=>{navigate('/products')}} className="bg-white inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center cursor-pointer text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                MENU
            </div>  
        </div>
    </div>
</section>
  )
}

export default Main