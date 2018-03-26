import axios from './config.service'

export default {
  getAllSchools() {
    return new Promise((resolve, reject) => {
      axios.post('/api/schools', credentials)
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  },

  register(credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/signup', credentials)
        .then(response => {
          resolve(response.data)
        }).catch(response => {
        reject(response.status)
      })
    })
  },
}
