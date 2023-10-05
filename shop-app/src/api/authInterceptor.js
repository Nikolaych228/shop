import axios from "axios";

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const authInterceptor = (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $authHost };