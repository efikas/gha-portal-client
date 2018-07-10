import axios from 'axios'

export default {

    all() {
        return new Promise((resolve, reject) => {
            axios.get('/users')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    add(user){
        return new Promise((resolve, reject) => {
            axios.post('users', user)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    update(user) {
        return new Promise((resolve, reject) => {
            axios.post(`/users/${id}/edit`, user)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    show(id) {
        return new Promise((resolve, reject) => {
            axios.get(`/users/${id}`)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },


}
