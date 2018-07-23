import axios from 'axios'
import Store from './store/store'
import miniToastr from 'mini-toastr';

miniToastr.init();
miniToastr.setIcon('error', 'i', {
    'class': 'fa fa-times'
});

import {apiURL} from './resource'

axios.defaults.baseURL = apiURL;

try {

    let subdomain = /(?:https?:\/\/)?([a-zA-Z\-]+)\.(?:.*)/.exec('https://ekiti.sbemis.online')[1]; //window.location.href
    axios.defaults.headers.common['Access-Server'] = subdomain;
}
catch (e) {
    //
}


axios.interceptors.request.use(function (config) {
    const token = Store.getters.token;

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

        if (typeof error.response !== 'undefined' && error.response.status === 401) {
            miniToastr.error('Request unauthorized', 'Error');
            // Store.dispatch('logout');
        } else {
            miniToastr.error('Request unauthorized', 'Error');
            // Store.dispatch('logout');
        }

        return Promise.reject(error);
    }
);

export default axios