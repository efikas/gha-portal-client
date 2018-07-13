import Vue from 'vue'
import axios from '../axios'
import router from "../router";

let actions = {
    loadStatistics({commit}) {
        axios.get('/statistics')
            .then(response => {
                commit('SET_STATISTICS', response.data);
            }).catch((error) => {
            console.log(error);
        });
    },

    login({commit, dispatch, state}, payload) {
        return axios.post('/oauth/token', {
                client_id: state.client_id,
                client_secret: state.client_secret,
                grant_type: state.grant_type,
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
                    return Promise.resolve(response.data)
                })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error)
            });
    },

    logout: function ({commit}) {
        commit('LOGOUT');
        window.location.href = '/login';
    },
};

export default actions
