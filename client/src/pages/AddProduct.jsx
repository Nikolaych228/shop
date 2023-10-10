import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteItem, getAllProducts, getProductById } from '../api/products'
import 'react-spring-bottom-sheet/dist/style.css'
import { BottomSheet } from 'react-spring-bottom-sheet'

const AddProduct = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loadingProduct,setLoadingProduct] = useState(false)
    const [loadingProducts, setLoadingProducts] = useState(false)
    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const openSheetHandle = () => {
        setOpen(!open);
    }

    function onDismiss() {
        setOpen(false)
      }

    const deleteProductHandler = async(id) => {
        try{
            const res = await deleteItem(id)
            setOpen(false)
            window.location.reload()
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const getAll = async() => {
            try {
                setLoadingProducts(true)
                const res = await getAllProducts()
                setProducts(res.data)
            } catch (error) {
                setLoadingProducts(false)
            } finally {
                setLoadingProducts(false)
            }
        }
        getAll();
    }, [])
  return (
    <>
        <div onClick={() => {navigate(-1)}} className="fixed bottom-3 right-3">
            <button type="button" class="flex items-center bg-white justify-center  rounded-full w-14 h-14 shadow-lg">
            <svg className='w-6 h-6' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                <span class="sr-only">Open actions menu</span>
            </button>
        </div>
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                <div class="w-full p-4 bg-white  rounded-lg shadow sm:p-6 ">
                    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                        Продукты которые можно изменить
                    </h5>
                    <p class="text-sm font-normal text-gray-500 ">Кликни на продукт и откроется меню изменения.</p>
                    <ul class="my-4 space-y-3">
                        {products ? products.map((product) =>
                            <li key={product.id}>
                                <div  onClick={() => {openSheetHandle(); setSelectedId(product.id)}} key={product.id} class="flex cursor-pointer items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                                    <span class="flex-1 ml-3 whitespace-nowrap">{product.name}</span>
                                </div>
                            </li>
                        )
                        :
                        <div className='flex w-full p-2 bg-gray-100 font-bold'>Продуктов не найдено</div>}
                    </ul>
                </div>
                <div className="w-full p4 bg-white rounded-lg shadow sm:p-6">
                    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                        Добавить продукты
                    </h5>
                    <p class="text-sm font-normal text-gray-500 ">Кликни на кнопку и откроется меню добавления.</p>
                    <button onClick={() => {navigate('/addProduct/new')}} className='bg-green-500 w-full p-3 rounded-lg text-white font-bold flex justify-center mt-4'>Добавить</button>
                </div>
            </div>
        </div>
        <BottomSheet open={open} onDismiss={onDismiss}  onSpringStart={async (event) => {
        if (event.type === 'OPEN') {
            const getProduct = async () => {
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
      }}>
        <div class="grid gap-6 mt-3 mb-6 md:grid-cols-2 mx-2">
            <div сlassName=''>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Название</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={product.name} required/>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Описание</label>
                <textarea type="text"  id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={product.description} defaultValue={product.description} required/>
            </div>
            <div className="">
                <p>Фото</p>
                <img src={product.imgUrl} alt="" className='max-w-[300px] mx-auto my-2'/>
            </div>
            <div className="">
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 "><span class="font-semibold">Нажми</span> Чтобы загрузить</p>
                            <p class="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
                <button className='bg-orange-500 w-full p-3 rounded-lg text-white font-bold flex justify-center'>Обновить</button>
            </div>
            <button className='bg-green-500 w-full p-3 rounded-lg text-white font-bold flex justify-center'>Обновить</button>
            <button className='bg-red-500 w-full p-3 rounded-lg text-white font-bold flex justify-center' onClick={() => {deleteProductHandler(product.id)}}>Удалить</button>

        </div>
        
        </BottomSheet>
    </>
  )
}

export default AddProduct