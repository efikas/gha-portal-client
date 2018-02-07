import axios from 'axios'

axios.defaults.baseURL = "http://api.sbemis.net/"
axios.interceptors.request.use(function (config) {
  if (typeof window === "undefined") {
    return config
  }

  const token = window.localStorage.getItem('token');

  if (token) {
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
  }
}

export default appService
