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
    }
};

const actions = {
    getSchools: ({commit}) => {
        commit('SET_SCHOOLS')
    },
    getSchool: ({commit}, id) => {
        commit('SET_SCHOOL', school)
    }
};

export default {state, getters, mutations, actions}