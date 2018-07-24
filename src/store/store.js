import 'es6-promise/auto'
import Vue  from 'vue'
import Vuex from 'vuex'
import mutations    from './mutations'
import actions  from  './actions'
import getters  from  './getters'

import lga  from './modules/lga';
import school   from './modules/school';
import student  from './modules/student';
import staff    from  './modules/staff'


Vue.use(Vuex)

let regex = /(?:https?:\/\/)?([a-zA-Z\-]+)\.(?:.*)/;
let url = 'https://ekiti.sbemis.online'; //window.location.href

function subdomain() {
    let subdomain = null;
    try {

        subdomain = regex.exec(url)[1]; //window.location.href
        return subdomain;
    } catch(e) {
        return subdomain;
    }
}

//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        left_open: false,
        preloader: true,
        site_name: "SBEMIS",
        page_title: null,
        pending: false,
        isLoggedIn: false, //!!this.getters.token,
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
        // Add your application keys
        gmap_key: 'AIzaSyBTnQCx3FXEnfWPPWTKAwIxt6wSjAn_8ug',
        openWeather_key: 'c00194f61244d2b33b863bff6d94e663',
        google_analytics_key: null,
        data: JSON.parse(localStorage.getItem('data')),
        //oauth
        client_id: 2,
        client_secret: "BsPZmqDtu7w5iFQuWOiPIOzdU17Uw64jbg9FWzZI",
        grant_type: "password",
        //
        statistics: {},
        access_server: subdomain()
    },
    mutations,
    actions,
    getters,

    modules: {
        lga,
        school,
        student,
        staff
    }
});
//=======vuex store end===========
export default store
