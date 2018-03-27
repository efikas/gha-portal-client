import axios from 'axios'

export default {
    getLgas() {
        return new Promise((resolve, reject) => {
            axios.get('/lga')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    getLgasSchool(lgaId) {
        return new Promise((resolve, reject) => {
            axios.get('/lga/' + lgaId + '/schools')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
}
