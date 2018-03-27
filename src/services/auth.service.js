import axios from "axios/index";
import {authURL} from './resources'

export default {
    login(credentials) {
        return new Promise((resolve, reject) => {
            axios.post(authURL, credentials)
                .then(response => {
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
    },
}
