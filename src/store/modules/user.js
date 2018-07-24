import axios from "../../axios";

const state = {
    admins: [],
    admin: {}
};

const getters = {
    admins: state => state.admins,
    admin: state => state.admin,
};

const mutations = {
    'SET_ADMINS': (state, admins) => state.admins = admins,
    'SET_ADMIN': (state, admin) => state.admin = admin,
};

const actions = {
    admins: ({commit}, query) => {
        return axios.get(`users`).then(response => {
            commit('SET_ADMINS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    },
    admin: ({commit}, id) => {
        return axios.get(`user/${id}`).then(response => {
            commit('SET_ADMIN', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeAdmin: ({commit}, payload) => {
        return axios.post('user', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    updateAdmin: ({commit, dispatch, getters}, payload) => {
        return axios.post(`user/${getters.admin.id}/edit`, payload)
            .then(response => {
                dispatch('admin', getters.admin.id);
                return Promise.resolve(response.data)
            }).catch((error) => {
                return Promise.reject(error.response)
            })
    },
    deleteAdmins: ({}, payload) => {
        return axios.post('users/delete', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
};

export default { state, getters, mutations, actions }