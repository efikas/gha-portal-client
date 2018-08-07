import axios from '../axios'

let actions = {
    loadStatistics({commit}) {
        return axios.get('/statistics')
            .then(response => {
                commit('SET_STATISTICS', response.data);
                return Promise.resolve(response.data);
            }).catch((error) => {
            console.log(error);
            return Promise.reject(error.response)
        });
    },

    login({commit, dispatch, state, getters}, payload) {
        return axios.post(process.env.MIX_AUTH_URI, {
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
