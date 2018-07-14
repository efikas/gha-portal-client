import axios from '../../axios'
import {school} from '../../data/school'

const state = {
    schools: [],
    school: {},
    school_stat: []
};

const getters = {
    schools: (state) => {
        return state.schools
    },
    school: (state) => {
        return state.school
    },
    school_stats: (state) => {
        return state.school_stat
    }
};

const mutations = {
    'SET_SCHOOLS'(state, schools) {
        state.schools = schools
    },
    'SET_SCHOOL'(state, school) {
        state.school = school
    },
    'SET_LGA_SCH_STAT'(state, schStat) {
        state.school_stat = schStat
    },

    'SET_LGA_SCHOOLS'(state, schools) {
        state.schools = schools
    }
};

const actions = {
    schools: ({commit}) => {
        return axios.get('/schools').then(response => {
            commit('SET_SCHOOLS', response.data.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    },
    school: ({commit}, id) => {
        return axios.get(`/school/${id}`).then(response => {
            // console.log(response.data);
            commit('SET_SCHOOL', response.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response)
            return Promise.reject(error.response)
        })
    },
    lgaSchStats: ({commit}) => {
        return axios.get(`/lga/schools`).then(response => {
            commit('SET_LGA_SCH_STAT', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response)
            return Promise.reject(error.response)
        })
    },
    lgaSchools: ({commit}, params) => {
        let lgaId = params.id;
        return axios.get(`/lga/${lgaId}/schools`, {params}).then(response => {
            commit('SET_LGA_SCHOOLS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    }
};

export default {state, getters, mutations, actions}