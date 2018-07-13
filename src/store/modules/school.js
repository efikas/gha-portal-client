import axios from '../../axios'
import { school } from '../../data/school'

const state = {
    schools: [],
    school: {},
};

const getters = {
    schools: (state) => {
        return state.schools
    },
    school: (state) => {
        return state.school
    }
};

const mutations = {
    'SET_SCHOOLS'(state, schools) {
        state.school = schools
    },
    'SET_SCHOOL'(state, school) {
        state.school = school
    },
    'SET_LGA_SCH_STAT' (state, schStat) {
        state.schools = schStat
    },

    'SET_LGA_SCHOOLS' (state, schools) {
        state.schools = schools
    }
};

const actions = {
    schools: ({commit}) => {
        commit('SET_SCHOOLS')
    },
    school: ({commit}, id) => {
        commit('SET_SCHOOL', school)
    },
    lgaSchStats: ({commit}) => {
        axios.get(`/lga/schools`)
            .then(response => {
                commit('SET_LGA_SCH_STAT', response.data);
            }).catch((error) => {
            console.log(error.response)
        })
    },
    lgaSchools: ({commit}, paylod) => {
        let lgaId = paylod.lgaId;
        axios.get(`/lga/${lgaId}/schools`, {params: paylod})
            .then(response => {
                console.log(response.data);
                commit('SET_LGA_SCHOOLS', response.data);
            }).catch((error) => {
            reject(error.response);
        })
    }
};

export default {state, getters, mutations, actions}