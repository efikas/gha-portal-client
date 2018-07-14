import axios from 'axios'
import store from './store/store'
import {apiURL} from './resource'

axios.defaults.baseURL = apiURL;

axios.interceptors.request.use(function (config) {
    const token = store.getters.token;

    if (token) {
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error

        if (typeof error.response !== 'undefined' && error.response.status === 401){
            //Todo: add sweetAlert here
            window.location.href = "/login?redirect=" + to.fullPath
        }

        return Promise.reject(error);
    }
);

export default axios