import axios from 'axios'

export default {
    //Student
    schoolStudents(schoolId) {
        return new Promise((resolve, reject) => {
            axios.get('/school/' + schoolId + '/students')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    studentProfile(studentId) {
        return new Promise((resolve, reject) => {
            axios.get('/student/' + studentId)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },
    getStudentsPerLga() {
        return new Promise((resolve, reject) => {
            axios.get('lga/students')
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    //POSTS
    addStudent(studentInfo){
        return new Promise((resolve, reject) => {
            axios.post('students', studentInfo)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    },

    importStudent(schoolId, schoolExcelFile){
        return new Promise((resolve, reject) => {
            axios.post('upload/' + schoolId + '/student', schoolExcelFile)
                .then(response => {
                    resolve(response.data)
                }).catch((error) => {
                reject(error.response);
            })
        })
    }
}
