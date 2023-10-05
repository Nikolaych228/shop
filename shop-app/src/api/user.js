import { $authHost } from "./authInterceptor"

export const updateAvatar = async(userId, imgUrl) => {
        const res = $authHost.put(`/users/update/avatar/${userId}`,{
            imgUrl: imgUrl
        })
        return res
}