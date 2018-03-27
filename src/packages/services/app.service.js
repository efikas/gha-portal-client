import axios from "axios/index";

const appService = {
  statistics() {
    return new Promise((resolve, reject) => {
      axios.get('/statistics')
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  },

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



  //Staff
  schoolStaff(schoolId) {
    return new Promise((resolve, reject) => {
      axios.get('/school/' + schoolId +'/staffs')
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



  //Student
  schoolStudents(schoolId) {
    return new Promise((resolve, reject) => {
      axios.get('/school/' + schoolId +'/students')
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
}

export default appService
