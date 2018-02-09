import axios from 'axios'

require("./config.service")(axios)

const appService = {
  lga_schools_stat(query) {
    return new Promise((resolve, reject) => {
      axios.get(query)
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  },

  school(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/school/${id}`)
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  }

}

export default appService
