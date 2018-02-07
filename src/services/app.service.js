let aa = require('./config.service')
aa. axiousInit()
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

}

export default appService
