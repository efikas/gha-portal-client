import axios from "axios/index";
import {authURL} from '../resources'

export default function (Vue) {
    Vue.auth = {
        setToken (token, expiration) {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },

        getToken() {
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')

            if( !token || !expiration )
                return null
            else if( Date.now() > parseInt(expiration))
                return null

            return token
        },

        destroyToken() {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },

        isAuthenticated() {
            if (this.getToken())
                return true;
            return false
        },

        login(credentials) {
            return new Promise((resolve, reject) => {
                axios.post(authURL, credentials)
                    .then(response => {
                        this.setToken(response.data.access_token, response.data.expires_in + Date.now())
                        resolve(response.data)
                    }).catch((error) => {
                        console.log(error)
                    reject(error.response);
                })
            })
        },

        logout() {
            this.destroyToken()
            return true
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