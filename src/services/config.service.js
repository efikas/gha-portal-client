import axios from "axios/index";

module.exports = {
  axiosInit: () => {
    axios.defaults.baseURL = "http://api.sbemis.net/"
    axios.interceptors.request.use(function(config) {
        if(typeof window === "undefined") {
          return config
        }
      
        const token = window.localStorage.getItem('token');
      
        if(token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        console.log(config)
      
        return config
      })      
   }
}