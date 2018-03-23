import axios from "axios/index";

// axios.defaults.baseURL = "http://api.sbemis.net/"
axios.defaults.baseURL = "http://192.168.0.101:5000/api/"
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

export default axios;