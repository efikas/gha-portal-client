
module.exports = (function () {
    'use strict';

    // var URL = "http://api.sbemis.net/"
    var URL = "http://0.0.0.0:5000"
    // var URL = "http://v2.api.sbemis.online:8000/"
    // let URL = "http://127.0.0.1:5000/"

    return {
        baseURL: URL,
        apiURL: URL + "/api/v1",
        authURL: URL + "/oauth/token"
    }
}());
