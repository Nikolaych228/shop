import axios from "axios";
import { $authHost } from "./authInterceptor";

export const login = async(email, password) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`,{
        email : email,
		password : password
    })
    return res;
}

export const register = async(name, email, password) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}auth/register`,{
            email : email,
			password : password,
			username : name,
			role : "USER"	
    })
    return res;
}

export const checkRole = async() => {
    const res = await $authHost.get('/auth/check')
    return res;
}