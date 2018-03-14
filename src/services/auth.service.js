import axios from 'axios'

export default {
  login(credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/signin', credentials)
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
