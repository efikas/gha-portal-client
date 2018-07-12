import Vue from 'vue'
import axios from '../axios'
import router from "../router";

let actions = {
    login  ({commit, dispatch, state}, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/oauth/token', {
                client_id: 2,
                client_secret: "BsPZmqDtu7w5iFQuWOiPIOzdU17Uw64jbg9FWzZI",
                grant_type: "password",
                username: payload.username,
                password: payload.password
            })
                .then(response => {
                    // console.log(response);
                    commit('LOGIN_SUCCESS');
                    commit('authUser', {
                        user: response.data.user,
                        token: response.data.access_token,
                        expiration: response.data.expires_in
                    });
                    commit('SET_SITE_DATA', response.data.site_data);
                    resolve(response.data);
                }).catch((error) => {
                console.log(error);
                reject(error.response);
            });
        });
    },

    logout: function ({commit}) {
        commit('LOGOUT');
        window.location.href = '/login';
    },
};

export default actions
