import axios from 'axios'

export default {
    //Staff
    schoolStaff(schoolId) {
        return new Promise((resolve, reject) => {
            axios.get('/school/' + schoolId + '/staffs')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    staffProfile(staffId) {
        return new Promise((resolve, reject) => {
            axios.get('/staff/' + staffId)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    //POSTS
    addStaff(staffInfo){
        return new Promise((resolve, reject) => {
            axios.post('staffs', staffInfo)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }

}
