import React, { useEffect, useState } from 'react'
import { getAllProducts, getProductById } from '../api/products'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import { useSelector } from 'react-redux'

const Products = () => {
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState({})
    const [loadingProducts, setLoadingProducts] = useState(false)
    const [loadingProduct, setLoadingProduct] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const openSheetHandle = () => {
        setOpen(!open);
    }

    function onDismiss() {
        setOpen(false)
      }
    const {type} = useSelector((state) => state.type)
    const {category} = useSelector((state) => state.category)
    useEffect(() => {
        const getAll = async() => {
            try {
                setLoadingProducts(true)
                const res = await getAllProducts(type, category)
                setProducts(res.data)
            } catch (error) {
                setLoadingProducts(false)
                setProducts([])
            } finally {
                setLoadingProducts(false)
            }
        }
        getAll();
    }, [type, category])
  return (
    <div className='container mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
        {products[0] ? 
            products.map((product) => 
            <div onClick={() => {openSheetHandle(); setSelectedId(product.id)}} class="container p-9 bg-white cursor-pointer max-w-sm  overflow-y-auto rounded-2xl  shadow-xl hover:shadow-2xl transition duration-300">
                <img class="rounded-xl" src={product.imgUrl} alt="" />
                <div class="flex justify-between items-center">
                <div>
                    <h1 class="mt-5 text-2xl font-semibold">{product.name}</h1>
                    <p className='max-h-[100px] overflow-y-auto'>{product.description}</p>
                    <p class="mt-2 text-xl font-bold scrollable">{product.price}</p>
                </div>
                
                </div>
            </div>
            )
        : 
        <div className='w-full col-span-4 text-center font-bold text-gray-400'>
            Товаров не найдено
        </div>}
        {loadingProducts ? 
        <div className="w-full flex justify-center mt-5">
            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        : null}
        <BottomSheet onSpringStart={async (event) => {
        if (event.type === 'OPEN') {
            const getProduct = async (id) => {
                try {
                    setLoadingProduct(true)
                    const res = await getProductById(selectedId)
                    setProduct(res.data)
                } catch (error) {
                    setLoadingProduct(false)
                } finally {
                    setLoadingProduct(false)
                }
            }
            getProduct()
        }
      }} open={open} onDismiss={onDismiss}>
        {loadingProduct ? 
            <div className="w-full flex justify-center my-5">
                <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        : 
            product ? 
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                            <img class="w-full h-full object-contain bg-white rounded-xl" src={product.imgUrl} alt="Product Image"/>
                        </div>
                        <div class="flex -mx-2 mb-4">
                            <div class="w-full px-2">
                                <button class="w-full bg-orange-500 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-700">Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <span class="font-bold text-gray-700">Цена:</span>
                                <span class="text-gray-600 ml-2">{product.price}Р</span>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700">Кол-во:</span>
                                <span class="text-gray-600 ml-2">{product.quantity}</span>
                            </div>
                        </div>
                        <div class="mb-4">
                            <span class="font-bold text-gray-700">Тип:</span>
                            <div className="flex mt-2">
                                <div className='flex transition-colors justify-center items-center p-4 rounded-full shadow-inner whitespace-nowrap font-bold cursor-pointer hover:bg-orange-400'>{product.types}</div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <span class="font-bold text-gray-700">Категория:</span>
                            <div className="flex mt-2">
                                <div className='flex transition-colors justify-center items-center p-4 rounded-full shadow-inner whitespace-nowrap font-bold cursor-pointer hover:bg-orange-400'>{product.categories}</div>
                            </div>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700">Описание:</span>
                            <p class="text-gray-600 text-sm mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
        
            </div>
        : null
        }
      </BottomSheet>
    </div>
  )
}

export default Products