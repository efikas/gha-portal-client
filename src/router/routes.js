import layout_routes from './layout'

const routes = [{
    path: '/',
    component: resolve => require(['src/layout'], resolve),
    children: layout_routes
}, {
    path: '/login',
    name: 'login',
    component: resolve => require(['pages/auth/login'], resolve),
    meta: {
        title: "Login",
        guests: true
    }
}, {
    path: '/register',
    component: resolve => require(['pages/auth/register'], resolve),
    meta: {
        title: "register",
        guests: true
    }
}, {
    path: '/forgotpassword',
    component: resolve => require(['pages/auth/forgotpassword'], resolve),
    meta: {
        title: "Forgot Password",
        guests: true
    }
}, {
    path: '/reset_password',
    component: resolve => require(['pages/auth/reset_password'], resolve),
    meta: {
        title: "Reset Password",
        guests: true
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['pages/lockscreen'], resolve),
    meta: {
        title: "Lockscreen",
        guests: true
    }
}, {
    path: '/500',
    component: resolve => require(['pages/500'], resolve),
    meta: {
        title: "500",
    }
},
    {
        path: '*',
        component: resolve => require(['pages/404'], resolve),
        meta: {
            title: "404",
        }
    }
]
export default routes
