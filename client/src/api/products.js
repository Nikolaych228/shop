import { $host } from "."

export const getProducts = async () => {
    const response = await $host.get('/products')
    return response 
}