import axios from "axios"

export const getMessages = async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}messages`)
    return res
}