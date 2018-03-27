import axios from "axios/index";
import {authURL} from '../services/resources'

export default function (Vue) {
    Vue.auth = {
        setToken: (token, expiration) => {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },

        getToken: () => {

        },
        //destroy token
        isAuthenticated: () => {
            if (this.getToken())
                return true;
            return false
        },

        test: function() {
            return "tegsdjdjgajhdg"
        },

        login(credentials) {
            return new Promise((resolve, reject) => {
                axios.post(authURL, credentials)
                    .then(response => {
                        this.setToken(response.data.access_token, response.data.expires_in + Date.now())
                        resolve(response.data)
                    }).catch((error) => {
                    reject(error.response);
                })
            })
        },

        register(credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/signup', credentials)
                    .then(response => {
                        resolve(response.data)
                    }).catch(response => {
                    reject(response.data)
                })
            })
        }
    };

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })
}