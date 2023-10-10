import React, { useEffect, useState } from 'react'
import { addNewProduct, getCategoryes, getTypes } from '../api/products'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {
    // "name" : "Iphone 11 128gb",
    // "price" : "30000",
    // "quantity" : "1",
    // "createAt" : "2023-09-06",
    // "updateAt" : "2023-09-06",
    // "types" : "devices",
    // "categories" : "phones",
    // "description" : "Смартофн тыры пыры хуе мое",
    // "imgUrl" : "https://github.com/manihateu/nest.js-learn/blob/main/server/uploads/empty-img.png"
    const navigate = useNavigate()
    const [categoryes, setCategoryes] = useState({})
    useEffect(() => {
        const getNesCategoryes = async() => {
            try{
                const res = await getCategoryes()
                setCategoryes(res.data)
            }
            catch(e){
                alert(e)
            }
        }
            getNesCategoryes()
        }
    , [])
    const [types, setTypes] = useState({})
    useEffect(() => {
        const getNesTypes = async() => {
            try{
                const res = await getTypes()
                setTypes(res.data)
            }
            catch(e){
                alert(e)
            }
        }
        getNesTypes()
        }
    , [])

    // addproduct logic
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const addNew = async () => {
        try{
            const res = await addNewProduct(name, price, category, type, description, imgUrl)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
        
    }
  return (
    <>
        <div onClick={() => {navigate(-1)}} className="fixed bottom-3 right-3">
            <button type="button" class="flex items-center bg-white justify-center  rounded-full w-14 h-14 shadow-lg">
            <svg className='w-6 h-6' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                <span class="sr-only">Open actions menu</span>
            </button>
        </div>
        <div className='container mx-auto h-screen flex justify-center items-center'>
            <div className="rounded-lg p-3 shadow-lg flex-col flex gap-y-2">
                <p className='text-2xl font-bold'>Добавить продукт</p>
                <div className="">
                    <label htmlFor="" className='text-base font-bold'>Название</label>
                    <input type="text" onChange={(e) => {setName(e.target.value)}} class="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Бургер"/>
                </div>
                <div className="">
                    <label htmlFor="" className='text-base font-bold'>Описание</label>
                    <textarea type="text" onChange={(e) => {setDescription(e.target.value)}} class="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder=""/>
                </div>
                <div className="">
                    <label htmlFor="" className='text-base font-bold'>Цена</label>
                    <input type="number" onChange={(e) => {setPrice(e.target.value)}} class="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder=""/>
                </div>
                <div className="">
                    <label htmlFor="" className='text-base font-bold'>Ссылка на изображение</label>
                    <input type="link" onChange={(e) => {setImgUrl(e.target.value)}} class="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder=""/>
                </div>
                <div className="">
                    <label htmlFor="" className='text-base font-bold'>Тип</label>
                    <select onChange={(e) => {setCategory(e.target.value)}} class="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="">
                    {Object.keys(categoryes).length !== 0 ? Object.entries(categoryes).map(([key, value]) => (
                        <option key={key} value={value}>
                            {value}
                        </option>
                    )) : null}
                    </select>
                </div>
                <div className="">
                    <label htmlFor="" className='text-base font-bold'>Категория</label>
                    <select onChange={(e) => {setType(e.target.value)}} class="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="">
                        {Object.keys(types).length !== 0 ? Object.entries(types).map(([key, value]) => (
                            <option key={key} value={value}>
                                {value}
                            </option>
                        )) : null}
                    </select>
                </div>
                <button className="w-full flex justify-center items center p-3 rounded-xl bg-green-300" onClick={addNew}>Добавить</button>
            </div>
        </div>
    </>

  )
}

export default NewProduct