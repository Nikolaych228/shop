import { $host } from "..";

export async function register(email,password,nickName){
    const response = await $host.post('/auth/register',{
        email: email,
        password: password,
        username: nickName,
        role: 'USER' 
    })
    const token = response.data.token
    localStorage.setItem('token',token)
    return response
} 