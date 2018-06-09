import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store/store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    // hashbang: false,
    mode: 'history',
})

router.beforeEach(
    (to, from, next) => {
        // if(to.matched.some(record => {
        //     if (record.meta.roles)
        //         // console.log(record.meta.roles)
        //         record.meta.roles.forEach((role) => {
        //             console.log(role)
        //             if (role === 'admin')
        //                 console.log('is admin')
        //             // return false
        //         })
        //     }))
        if (to.matched.some(record => record.meta.guests)) {
            if (Vue.auth.isAuthenticated()) {
                return next({
                    path: '/'
                })
            } else next()
        }
        else if (to.matched.some(record => record.meta.guard)) {
            if (!Vue.auth.isAuthenticated()) {
                // return window.location.href = '/#/login'
                return next({
                    path: "/login?redirect=" + to.fullPath
                })
                // return window.location.href = "/login?redirect=" + to.fullPath
            } else next()
        }

        next()
    }
)

router.beforeEach((to, from, next) => {
    store.commit("routeChange", "start")
    // scroll to top when changing pages
    if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
    } else if (document.documentElement) {
        document.documentElement.scrollTop = 0
    }
    next()
})

//====change page title after route change

router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title + " - " + store.site_name
        // set pageTitle to null if it is set manually elsewhere
        store.commit('changePageTitle', to.meta.title)
        store.commit("routeChange", "end")
        if (window.innerWidth <= 992) {
            store.commit('left_menu', "close")
        } else {
            store.commit('left_menu', "open")
        }
    }
})

export default router