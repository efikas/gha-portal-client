import axios from 'axios'
import Store from './store/store'
import miniToastr from 'mini-toastr';

miniToastr.init();
miniToastr.setIcon('error', 'i', {
    'class': 'fa fa-times'
});

axios.defaults.baseURL = Store.getters.api_uri;

axios.interceptors.request.use(function (config) {
    const token = Store.getters.token;

    if (token) {
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers.Authorization = `Bearer ${token}`
    }
    config.headers.common['Access-Server'] = Store.getters.access_server;

    return config
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {

        if (typeof error.response !== 'undefined' && error.response.status === 401) {
            miniToastr.error('Request unauthorized', 'Error');
            // Store.dispatch('logout');
        }

        return Promise.reject(error);
    }
);

export default axios