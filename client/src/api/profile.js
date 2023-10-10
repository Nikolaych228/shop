import { $authHost } from "./authInterceptor"

export const getUser = async () => {
    const res = await $authHost.get('/users/user')
    return res;
}