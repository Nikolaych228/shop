import React from 'react'
import Types from '../components/Types'
import Categoryes from '../components/Categoryes'
import Products from '../components/Products'
import Comments from '../components/Comments'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
        <Header/>
        <Types/>
        <Categoryes/>
        <Products/>
        <Comments/>
    </>
  )
}

export default Home