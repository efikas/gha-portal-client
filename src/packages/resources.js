
module.exports = (function () {
    'use strict';

    var URL = "https://v2.api.sbemis.online:5001/"
    // let URL = "http://127.0.0.1:5000/"

    return {
        baseURL: URL,
        apiURL: URL + "api/",
        authURL: URL + "oauth/token"
    }
}());