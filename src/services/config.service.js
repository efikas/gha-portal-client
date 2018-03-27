import axios from "axios/index";
import { apiURL } from './resources'

axios.defaults.baseURL = apiURL

axios.interceptors.request.use(function (config) {
    if (typeof window === "undefined") {
        return config
    }

    const token = window.localStorage.getItem('token');

    if (token) {
        config.headers['Access-Control-Allow-Origin'] = '*'
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default axios;