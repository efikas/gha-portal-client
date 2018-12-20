import axios from "../../axios";

const state = {
    students_result: {}
};

const getters = {
    students_result: state => {
        return state.students_result;
    }
};

const mutations = {
    'SET_RESULTS': (state, results) => state.students_result = results,
};

const actions = {
    studentsResult: ({commit}, id) => {
        return axios.get(`classes/${id}/results`).then(response => {
            commit('SET_RESULTS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeResults: ({commit}, payload) => {
        return axios.post('results', payload).then(response => {
            console.log(response)
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    generateResult: ({commit}, payload) => {
        return axios.post(`school/${payload.id}/generate_students_result`, payload.term).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
};

export default { state, getters, mutations, actions }