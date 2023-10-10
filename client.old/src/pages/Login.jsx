import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import foto_prof from '../foto_prof.jpg'
import { getUser } from '../api/user/userProfile'


const Login = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const getProfile = async() => {
           try { 
            setLoading(true)
            const response = await getUser()
            setUser(response.data)
            console.log(response)
           }
           catch(e) {
                console.log(e)
                setLoading(false)
           }
           finally {
            setLoading(false)
           }
        }
        getProfile()
    },
    []
    
    )
    return (
        <Menu component_name={'login'}>
            <section class="bg-blueGray-50 overflow-y-auto">
                <div class="w-full px-4 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4 flex justify-center">
                            <div class="relative w-[10rem] h-[10rem]">
                                <img alt="Office"src={user.imgUrl} class="rounded-full border inset-0 h-full w-full object-cover"/>

                            </div>
                            </div>
                            </div>
                    </div>
                        <div class="text-center ">
                            <p class="text-xl font-semibold mt-5 text-black mb-7">
                                {loading? 'loading' : user.username}
                            </p>
                            <div className='flex text-[1.5625rem] justify-center  w-full mb-8'>
                                <p className='bg-[#F1D5BB] text-black cursor-pointer rounded-full py-2 px-8'>История заказов</p>
                            </div>
                        </div>
                        <div className='px-6'>
                            <p>Ваша почта:</p>
                            <div>{user.email}</div>
                        </div>
                    </div>
                </div>
            </section>
        </Menu>
    )
}

export default Login