import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueAnalytics from 'vue-analytics'
import Vuelidate from 'vuelidate';
import axios from 'axios';
import Store from "./store/store";

axios.defaults.baseURL = Store.getters.api_url;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Access-Server'] = Store.getters.access_server;



Vue.use(Vuelidate);

// window.axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest'
// }

// Google Analytics
const google_analytics_key = store.state.google_analytics_key

if (google_analytics_key) {

    Vue.use(VueAnalytics, {
        google_analytics_key,
        router,
        checkDuplicatedScript: true,
        autoTracking: {
            pageviewTemplate(route) {
                return {
                    page: 'default/' + route.path
                }
            }
        }
    })

}

Vue.filter('commasep', val => {
    if (val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
});

if (process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
// Remove the productionTip in dev tool console
    Vue.config.productionTip = true;
}

// require('./axios')
require('assets/css/icon.css');

new Vue({
    el: '#sbemis',
    router,
    store,
    render: h => h(App),
})
