import axios from "axios";
import { $authHost } from "./authInterceptor";

export const getCategoryes = async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}products/types`);
    return res
}

export const getTypes = async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}products/categories`)
    return  res;
}

export const getAllProducts = async(type, category) => {
    if (type) {
        const res = axios.get(`${import.meta.env.VITE_API_URL}products/type/${type}`)
        return res;
    } else if (category){
        const res = axios.get(`${import.meta.env.VITE_API_URL}products/categories/${category}`)
        return res;
    } else if (type && category) {
        const res = axios.get(`${import.meta.env.VITE_API_URL}products/allfiltres?category=${category}&type=${type}`)
        return res;
    } else {
        const res = axios.get(`${import.meta.env.VITE_API_URL}products`)
        return res;
    }
}

export const getProductById = async (id) => {
    const res = axios.get(`${import.meta.env.VITE_API_URL}products/single/${id}`)
    return res;
}

export const deleteItem = async(id) => {
    const res = await $authHost.delete(`products/${id}`)
    return res
}

export const addNewProduct = async(name, price, types, categories, description, imgUrl) => {
    const res = $authHost.post('products/create',{
        name: name,
        price: price, 
        quantity: "1",
        types: types, 
        categories: categories, 
        description: description, 
        imgUrl: imgUrl
    })
    return res
}