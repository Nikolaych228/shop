import { $host } from "..";
import { loginFailure, loginRequest, loginSucces } from "../../store/Actions/AuthActions";


export async function login(data,dispath){
    let token = null
    try {
    const response = await $host.post('/auth/login',data)
    token = response.data.token
    localStorage.setItem('token',token)
    dispath(loginRequest())
    return response
    }
    catch(e) {
        dispath(loginFailure(e))
        throw new Error('Ошибка входа')
        return
    }
    finally {
        dispath(loginSucces(token))
    }
    
} 