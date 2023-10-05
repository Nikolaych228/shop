import React, { useEffect, useState } from 'react'
import { getTypes } from '../api/products'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory, setCategory } from '../store/Actions/FiltersActions'

const Categoryes = () => {
    const [categoryes, setCategoryes] = useState({})
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(false)
    const state = useSelector((state) => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        const getHomeCategoryes = async() => {
            try {
                setLoading(true)
                const res = await getTypes();
                setCategoryes(res.data)
            } catch (error) {
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        getHomeCategoryes()
    },[])
  return (
    <div className='container mx-auto mt-3'>
        <p className='text-xl font-bold'>Категории</p>
        <div className="flex overflow-x-auto scrollable gap-x-2 py-3">
            {loading ? <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                       </div> : null}
            {categoryes ? 
            Object.values(categoryes).map((category, index) => 
                <div onClick={() => {category == state.category ? dispatch(removeCategory()) : dispatch(setCategory(category))}} className={`flex transition-colors justify-center items-center p-4 rounded-full shadow-inner whitespace-nowrap font-bold cursor-pointer  ${category == state.category ? 'bg-orange-500' : 'hover:bg-orange-400'}`}>{category}</div>
            )
        : <p>Категорий нет</p>}
        </div>
        
    </div>
  )
}

export default Categoryes