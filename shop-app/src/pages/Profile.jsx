import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../api/profile'
import { useSelector } from 'react-redux'
import { updateAvatar } from '../api/user'

const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const {role} = useSelector((state) => state.role)
    const [changeAvatar, setChangeAvatar] = useState(false)

    const [imgUrl, setImgUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const changeAvatarHandler = () => {
        setChangeAvatar(!changeAvatar)
    }

    useEffect(() => {
        const getProfile = async () => {
            try {
                setLoading(true)
                const res = await getUser()
                setUser(res.data)
            } catch (error) {
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        getProfile()
    }, [])


    const handleUpload = async () => {
        if (imgUrl) {
            try{
                const res = await updateAvatar(user.id, imgUrl)
                console.log(res.data)
                window.location.reload()
            }
            catch(err){
                console.log(err)
            }
        }
      };
  return (
    <>
        <div onClick={() => {navigate('/')}} className="fixed bottom-3 right-3">
            <button type="button" class="flex items-center bg-white justify-center  rounded-full w-14 h-14 shadow-lg">
            <svg className='w-6 h-6' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                <span class="sr-only">Open actions menu</span>
            </button>
        </div>
        {!loading && user ? 
            <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2 ">
                <div class="w-full md:w-3/12 md:mx-2">
                    <div class="bg-white p-3">
                        <div class="image overflow-hidden">
                            <img class="h-auto rounded-xl border my-2 w-full shadow-lg"
                                src={user.imgUrl}
                                alt=""/>
                        </div>
                        <button className='w-full  bg-green-400 flex justify-center my-2 rounded-xl p-2 text-white font-bold' onClick={changeAvatarHandler}>Изменить аватар</button>
                        {changeAvatar ? 
                        <>
                            <input onChange={(e) => {setImgUrl(e.target.value)}} type="text" class="w-full pl-3 pr-3 py-2  mb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="ссылка на изображение"/>
                            <button className='w-full  bg-green-400 flex justify-center rounded-xl p-2 text-white font-bold' onClick={handleUpload}>Изменить</button>
                        </>
                        : null}
                        <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{user.username}</h1>
                        <h3 class="text-gray-600 font-lg text-semibold leading-6">{user.email}</h3>
                        
                        <ul
                            class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li class="flex items-center py-3">
                                <span>Дата регистрации</span>
                                <span class="ml-auto">{user.createAt ? `${user.createAt.split('T')[0]} \n ${user.createAt.split('T')[1].split('.')[0]}` : null}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:w-9/12 mx-2 h-64">
                    <div class="bg-white p-3 shadow-sm rounded-xl">
                       {role != "USER" ? <p>Ваша роль: {role}</p> : null}
                       {role == "ADMIN" || role == "SUPER_ADMIN" ? 
                            <div className="mt-3 flex justify-between flex-wrap space-y-3">
                                <button onClick={() => {navigate('/addProduct')}} className='w-full p-3 rounded-xl mx-2 bg-orange-500 text-white font-bold'>Добавить/изменить товар</button>
                                <button className='w-full p-3 rounded-xl mx-2 bg-orange-500 text-white font-bold'>Зарегистрировать/удалить пользователя</button>
                                <button className='w-full p-3 rounded-xl mx-2 bg-orange-500 text-white font-bold'>Удалить комментарий</button>
                            </div>
                       : role == 'EDITOR' ?
                            <div className="mt-3 flex justify-between">
                                <button className='w-full p-3 rounded-xl mx-2 bg-orange-500 text-white font-bold'>Добавить/изменить товар</button>
                                <button className='w-full p-3 rounded-xl mx-2 bg-orange-500 text-white font-bold'>Удалить комментарий</button>
                            </div>
                       : null}
                       
                    </div>
                </div>
            </div>
            </div>
        : <div className="w-full flex justify-center mt-5">
            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
        
    </>
  )
}

export default Profile