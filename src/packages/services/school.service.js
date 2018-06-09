import axios from 'axios'

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
<<<<<<< HEAD
    getSchoolsPerLga(lgaId) {
        return new Promise((resolve, reject) => {
            axios.get(`lga/${lgaId}/schools`)
=======
    getSchoolsPerLga(lgaId, queryObject = null) {
        return new Promise((resolve, reject) => {
            let query = '';
            if (queryObject){
                query = '?',
                Object.keys(queryObject).forEach((key, index) => {
                    query += (index > 0) ? '&': '';
                    query += `${key}=${queryObject[key]}`;
                })
            }
            axios.get(`lga/${lgaId}/schools${query}`)
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    getSchoolsDistributionsPerLga() {
        return new Promise((resolve, reject) => {
            axios.get(`lga/schools`)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },


    //POSTS
    addSchool(schoolInfo){
        return new Promise((resolve, reject) => {
            axios.post('schools', schoolInfo)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    editSchool(schoolId, schoolInfo){
        return new Promise((resolve, reject) => {
            axios.post('school/' + schoolId + '/edit', schoolInfo)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    importSchool(lgaId, schoolExcelFile){
        return new Promise((resolve, reject) => {
            axios.post('upload/' + lgaId + '/school', schoolExcelFile)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }

}
