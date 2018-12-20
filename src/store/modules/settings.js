import axios from "../../axios";

const state = {
    terms: [],
};

const getters = {
    terms: state => {
        return state.terms;
    }
};

const mutations = {
    'SET_TERMS': (state, terms) => state.terms = terms,
};

const actions = {
    fetchTerms: ({commit}, id) => {
        return axios.get(`school/${id}/terms`).then(response => {
            commit('SET_TERMS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeTerm: ({commit}, payload) => {
        return axios.post('classes', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    updateTerm: ({commit, dispatch, getters}, payload) => {
        return axios.post(`user/${getters.admin.id}/edit`, payload)
            .then(response => {
                dispatch('admin', getters.admin.id);
                return Promise.resolve(response.data)
            }).catch((error) => {
                return Promise.reject(error.response)
            })
    }
};

export default { state, getters, mutations, actions }