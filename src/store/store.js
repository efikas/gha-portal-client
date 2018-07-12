import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from  './actions'
import getters from  './getters'

import school from './modules/school';
import student from './modules/student';


Vue.use(Vuex)

function addDays(noOfDays) {
    return (noOfDays * 24 * 60 * 60 * 1000)
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
        data: JSON.parse(localStorage.getItem('data'))
    },
    mutations,
    actions,
    getters,

    modules: {
        school,
        student
    }
});
//=======vuex store end===========
export default store
