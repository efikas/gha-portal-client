import axios from 'axios'
import {apiURL} from './resource'

axios.defaults.baseURL = apiURL;

axios.interceptors.request.use(function (config) {
    if (typeof window === "undefined") {
        return config
    }

    // const token = window.localStorage.getItem('token');
    // const token = Vue.auth.getToken();
    //
    // if (token) {
    //     config.headers['Access-Control-Allow-Origin'] = '*'
    //     config.headers.Authorization = `Bearer ${token}`
    // }

    return config
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error

        if (typeof error.response !== 'undefined' && error.response.status === 401){
            //Todo: add sweetAlert here
            // Vue.auth.destroyToken();
            window.location.href = "/login?redirect=" + to.fullPath
        }

        return Promise.reject(error);
    }
);

export default axios