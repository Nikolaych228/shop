import axios from 'axios'


export const $host = axios.create({
    baseURL: 'https://nest-shop-api-learn.onrender.com/api/'
})

export const $authHost = axios.create({
    baseURL: 'https://nest-shop-api-learn.onrender.com/api/'
})
const authInterceptor = (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config 
}
$authHost.interceptors.request.use(authInterceptor)