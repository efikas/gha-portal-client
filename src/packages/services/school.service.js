import axios from './config.service'

export default {
    //School
    allSchools() {
        return new Promise((resolve, reject) => {
            axios.get('/schools')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    schoolProfile(SchoolId) {
        return new Promise((resolve, reject) => {
            axios.get('/school/' + SchoolId)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    getSchoolsPerLga() {
        return new Promise((resolve, reject) => {
            axios.get('lga/schools')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

}
