import axios from 'axios'

export default {
    statistics() {
        return new Promise((resolve, reject) => {
            console.log('hereeeeeeeeee')
            axios.get('/statistics')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }
}
