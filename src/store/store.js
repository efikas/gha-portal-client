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
import users    from  './modules/user'
import classes    from  './modules/classes'

let regex = /(?:https?:\/\/)?([a-zA-Z\-]+)\.(?:.*)/;
let url = null ; //https://ekiti.sbemis.online'; //window.location.href

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
// Remove the productionTip in dev tool console
    Vue.config.productionTip = true;
    url = window.location.href

} else {
    url = 'https://ekiti.sbemis.online';
}


function subdomain() {
    let subdomain = '';
    try {
        subdomain = regex.exec(url)[1]; //window.location.href
    } catch(e) {
    }
    return subdomain;
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
        access_server: subdomain(),

        //settings
        term: '1',
        session: '2018/2019',

        user_type: 3, // 1 - super admin, 2 - school admin, 3 - teachers, 4 - Student, 5 - Parent
        super_admin: 1,
    },
    mutations,
    actions,
    getters,

    modules: {
        lga,
        school,
        student,
        staff,
        users,
        classes
    }
});
//=======vuex store end===========
export default store
