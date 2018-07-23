import axios from '../../axios'

// axios.get(`lga/schools`)
//     .then(response => {
//         resolve(response.data)
//     }).catch((error) => {
//     reject(error.response);
// })

const state = {
    lga_school_distribution:[],
    lga_student_distribution:[]
};

const getters = {
  lga_school_distribution: state => state.lga_school_distribution,
    lga_student_distribution: state => state.lga_student_distribution
};

const mutations = {
    'SET_LGA_SCHOOL_DISTRIBUTION': (state, payload) => state.lga_school_distribution = payload,
    'SET_LGA_STUDENT_DISTRIBUTION': (state, payload) => state.lga_student_distribution = payload
};

const actions = {
    lga_school_distribution: ({commit}) => {
        return axios.get(`lga/schools`)
            .then(response => {
                commit('SET_LGA_SCHOOL_DISTRIBUTION', response.data)
                return Promise.resolve(response.data)
            }).catch((error) => {
                return Promise.reject(error.response);
            })
    },
    lga_student_distribution: ({commit}) => {
        return axios.get(`/lga/students`)
            .then(response => {
                commit('SET_LGA_STUDENT_DISTRIBUTION', response.data)
                return Promise.resolve(response.data)
            }).catch((error) => {
                return Promise.reject(error.response);
            })
    }
};

export default { state, getters, mutations, actions }