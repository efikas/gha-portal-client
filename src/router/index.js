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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            // return new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         resolve({selector: to.hash, offset:{ x: 10, y: 60 }})
            //     }, 0)
            // });
            return {selector: to.hash, offset:{ x: 10, y: 60 }, behavior: 'smooth'};
        }
        return {x: 0, y: 0};
    }
});

router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.guard)) {
            if (!store.getters.isLoggedIn) {
                return next({
                    path: "/login?redirect=" + to.fullPath
                })
            } else next()
        }

        next()
    }
);

router.beforeEach((to, from, next) => {
    //fixme: hide preloader on route change
    // store.commit("routeChange", "start")
    // scroll to top when changing pages
    if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
    } else if (document.documentElement) {
        document.documentElement.scrollTop = 0
    }
    next()
});

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
