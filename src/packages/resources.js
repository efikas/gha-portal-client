module.exports = (function () {
    'use strict';

    var URL = "http://api.sbemis.net/"
    // var URL = "http://v2.api.sbemis.online:8000/"
    // let URL = "http://192.168.15.22:5000/"
    // let URL = "http://192.168.15.23:5000/"
    // let URL = "http://192.168.0.110:5000/"
    // let URL = "http://192.168.8.100:5000/"

    return {
        baseURL: URL,
        apiURL: URL + "api1/v1",
        // apiURL: URL + "api/",
        authURL: URL + "oauth/token"
    }
}());