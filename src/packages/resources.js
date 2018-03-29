
module.exports = (function () {
    'use strict';

    // var URL = "https://v2.api.sbemis.online:5001/"
    let URL = "http://192.168.15.22:5000/"

    return {
        baseURL: URL,
        apiURL: URL + "api/",
        authURL: URL + "oauth/token"
    }
}());