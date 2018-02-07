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
  }
}

export default appService
