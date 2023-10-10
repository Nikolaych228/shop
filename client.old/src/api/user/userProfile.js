import { $authHost} from "..";

export async function getUser(){
    const response = await $authHost.get('/users/user/')
    return response
} 