import axios from "axios/index";

axios.defaults.baseURL = "http://api.sbemis.net/"

module.export = {
   axiosInit: () => {
    axios.interceptors.request.use(function(config) {
        if(typeof window === "undefined") {
          return config
        }
      
        const token = window.localStorage.getItem('token');
      
        if(token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      
        return config
      })      
   }
}
