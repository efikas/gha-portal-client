export default function (Vue) {
    Vue.auth = {
        setToken: (token, expiration) => {
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
        },

        getToken: () => {

        },
        //destroy token
        isAuthenticated: () => {
            if (this.getToken())
                return true;
            return false
        }
    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })
}