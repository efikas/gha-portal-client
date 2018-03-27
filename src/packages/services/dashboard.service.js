import axios from 'axios'

export default {
    statistics() {
        return new Promise((resolve, reject) => {
            axios.get('/statistics')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }
}
