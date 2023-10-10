import React, { useEffect, useState } from 'react'
import burger_1 from '../assets/burger_1.png'
import cake_2 from '../assets/cake_2.png'
import cofee_3 from '../assets/cofee_3.png'
import pancake_4 from '../assets/pancake_4.png'
import carrot_4 from '../assets/carrot_4.png'
import { getCategoryes } from '../api/products'
import { useDispatch, useSelector } from 'react-redux'
import { removeType, setType } from '../store/Actions/FiltersActions'

const Types = () => {
    const [categoryes, setCategoryes] = useState({})
    const [selected, setSelected] = useState(null)
    const [selectedName, setSelectedName] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getHomeCategoryes = async() => {
            try {
                setLoading(true)
                const res = await getCategoryes();
                setCategoryes(res.data)
            } catch (error) {
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        getHomeCategoryes()
    },[])
    const dispatch = useDispatch()
    const {type} = useSelector((state) => state.type)
  return (
    <div className='container mx-auto mt-3'>
        <p className='text-xl font-bold'>Типы</p>
        <div className="overflow-x-auto flex gap-x-4 mx-2 scrollable py-2">
            {categoryes ? Object.values(categoryes).map((category, index) => 
                <div key={index} onClick={() => {index === selected ? setSelected(null) : setSelected(index); type == category ? dispatch(removeType()) : dispatch(setType(category))}} class={`block cursor-pointer max-w-sm p-6 min-w-[200px] ${selected === index ? 'bg-orange-400 border-orange-200 hover:bg-orange-500' : 'bg-white border-gray-200 hover:bg-gray-100'}  rounded-xl shadow-inner`}>
                    {index == 0 ? <img src={burger_1} className='w-16 h-16 mx-auto'/> : null}
                    {index == 1 ? <img src={cake_2} className='w-16 h-16 mx-auto'/> : null}
                    {index == 2 ? <img src={cofee_3} className='w-16 h-16 mx-auto'/> : null}
                    {index == 3 ? <img src={pancake_4} className='w-16 h-16 mx-auto'/> : null}
                    {index == 4 ? <img src={carrot_4} className='w-16 h-16 mx-auto'/> : null}
                    <div className="w-full flex mt-2">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 mx-auto">{category}</h5>
                    </div>
                </div>
            ) : <p className='text-md font-bold'>Нет категорий</p>}
            {loading ? 
                <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            : null}
        </div>
    </div>
  )
}

export default Types