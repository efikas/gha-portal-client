import axios from 'axios'

export default {
    //setting
    getSettings() {
        return new Promise((resolve, reject) => {
            axios.get('/settings')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

}
