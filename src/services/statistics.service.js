import axios from 'axios'

require("./config.service")(axios)

const appService = {
  lga_schools_stat() {
    return new Promise((resolve, reject) => {
      axios.get('/lga/schools')
        .then(response => {
          resolve(response.data)
        }).catch((error) => {
        reject(error.response);
      })
    })
  }
}

export default appService
