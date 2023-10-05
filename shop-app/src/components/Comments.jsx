import React, { useEffect, useState } from 'react'
import { getMessages } from '../api/messages'

const Comments = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const getComments = async() => {
            const res = await getMessages()
            setMessages(res.data)
        }
        getComments()
    },[])
  return (
    <div className='container mx-auto'>
        <p className='my-3 font-bold text-xl'>Комментарии</p>
        <div className="flex gap-x-4 scrollable overflow-x-auto">
            {messages ? 
                messages.map((message) => 
                    <article class="mb-4 min-w-[400px] break-inside shadow-lg my-2 p-6 rounded-xl bg-white flex flex-col bg-clip-border">
                        <div class="flex pb-6 items-center justify-between">
                        <div class="flex">
                            <div class="flex flex-col">
                            <div>
                                <a class="inline-block text-lg font-bold " href="#">{message.name}</a>
                            </div>
                            <div class="text-slate-500 ">
                                {message.deviceType}
                            </div>
                            <div class="text-slate-500 ">
                                {message.createAt.split('T')[0]}
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        <h2 class="text-3xl font-extrabold ">
                        {message.message}
                        </h2>
                
                        <p class="">
                        {message.subject}
                        </p>
                        
                    </article>
                )
            : <p>Комментариев нет</p>}
        </div>
        
    </div>
  )
}

export default Comments