import axios from '../../axios'
import { school } from '../../data/school'

const state = {
    schools: [],
    school: {},
    school_stat:[]
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
    'SET_LGA_SCH_STAT' (state, schStat) {
        state.school_stat = schStat
    },

    'SET_LGA_SCHOOLS' (state, schools) {
        state.schools = schools
    }
};

const actions = {
    schools: ({commit}) => {
        axios.get('/schools')
            .then(response => {
                commit('SET_SCHOOLS', response.data.data)
            }).catch((error) => {
            console.log(error.response);
        })
    },
    school: ({commit}, id) => {
        axios.get(`/school/${id}`)
            .then(response => {
                console.log(response.data);
                commit('SET_SCHOOL', response.data)
            }).catch((error) => {
            console.log(error.response)
        })
    },
    lgaSchStats: ({commit}) => {
        axios.get(`/lga/schools`)
            .then(response => {
                commit('SET_LGA_SCH_STAT', response.data);
            }).catch((error) => {
            console.log(error.response)
        })
    },
    lgaSchools: ({commit}, params) => {
        let lgaId = params.id;
        axios.get(`/lga/${lgaId}/schools`, {params})
            .then(response => {
                commit('SET_LGA_SCHOOLS', response.data);
            }).catch((error) => {
            console.log(error.response);
        })
    }
};

export default {state, getters, mutations, actions}