import axios from 'axios'

require("./config.service")(axios)

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

  staffBySchool(school_id, category) {
    return new Promise((resolve, reject) => {
      console.log(`/school/${school_id}/staffs?category=${category}`)
      axios.get(`/school/${school_id}/staffs?category=${category}`)
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  }
}

export default appService
