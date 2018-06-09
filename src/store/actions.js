import Vue from 'vue'


let actions = {

    setUser({ commit }, user) {
      return new Promise(resolve => {
          setTimeout(() => {
              localStorage.setItem('user', JSON.stringify(user))
              resolve()
          }, 1000)
      })
    },

    increment({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    },

    login({ commit }, creds) {
        commit('LOGIN'); // show spinner
        return new Promise(resolve => {
            setTimeout(() => {
                // localStorage.setItem("token", "JWT");
                commit('LOGIN_SUCCESS');
                resolve();
            }, 1000);
        });
    },

    logout({ commit }, redirect='/') {
        var vm = this;
        return new Promise(resolve => {
            setTimeout(() => {
                // localStorage.setItem("token", "JWT");
                Vue.auth.destroyToken();
                commit('LOGOUT');
                window.location.href = `/login?redirect=${redirect}`;
                // console.log('button');
                // vm.$router.push({path: `/login?redirect=${redirect}`});
                resolve();
            }, 1000);
        });

    },
}
export default actions
