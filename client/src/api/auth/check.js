import { $authHost} from "..";

export const check = async() => {
    const response = await $authHost.get('/auth/check/')
    return response
}