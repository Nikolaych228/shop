import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import foto from '../Rectangle 9.jpg'
import { getProducts } from '../api/products'

const Products = () => {
  const [products,setProducts] = useState(null)
  useEffect (()=>{
    const get = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }
  get()  
  },[])
    return (
    <Menu component_name={'products'}>
        <div className='text-[3.125rem] text-black ml-8 sm:ml-0'>
            <p>SUSHI FOOD</p>
            <div className='w-[18rem] h-[0.3125rem] bg-[#F1D5BB]'></div>
        </div>
        
        <div className='grid grid-cols-1 mx-8 sm:mr-10 sm:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'> 
            {products? products.map((product)=><article class="relative min-h-[20rem] max-w-full overflow-hidden rounded-lg hover:scale-105 cursor-pointer shadow transition hover:shadow-lg mt-9">        
            <img alt="Office"src={product.imgUrl} class="w-full object-cover"/>
        <div class="w-full p-3 bg-black">
            
                <h3 class="mt-0.5 text-lg text-white">
                    {product.name}
                </h3>
                <time datetime="2022-10-10" class="block text-xs text-white/90">
                    {product.updateAt.split('T')[0]}
                </time>
            </div>
        </article>) :null}
        </div>
        <div className='flex text-[1.5625rem] justify-center w-full mb-8'>
            <p className='bg-black text-white cursor-pointer mt-10 py-2 px-8'>LOAD MORE</p>
        </div>
        
    </Menu>
  )
}

export default Products