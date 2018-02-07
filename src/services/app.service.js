import axios from 'axios'

require("./config.service")(axios)


const appService = {
  statistics() {
    // return new Promise((resolve, reject) => {
      return axios.get('/statistics')
        .then(response => {
          return response.data
        }).catch((error) => {
        return error.response
      })
    // })
  }
}

export default appService
