import axios from "axios/index";

axios.defaults.baseURL = "http://v2.api.sbemis.online:5000/api/"
// axios.defaults.baseURL = "http://192.168.0.101:5000/api/"
axios.interceptors.request.use(function(config) {
  if(typeof window === "undefined") {
    return config
  }

  const token = window.localStorage.getItem('token');

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

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
  allStaff() {
    return new Promise((resolve, reject) => {
      axios.get('/statistics')
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  },
}

export default appService
