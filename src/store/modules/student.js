import axios from "../../axios";

const state = {
    students: [],
    student: {}
};

const getters = {
    students: state => state.students,
    student: state => state.student,
};

const mutations = {
    'SET_STUDENTS': (state, students) => state.students = students,
    'SET_STUDENT': (state, student) => state.student = student,
};

const actions = {
    students: ({commit}, query) => {
        return axios.get(`/school/${query.id}/students`).then(response => {
            commit('SET_STUDENTS', response.data.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    },
    student: ({commit}, id) => {
        return axios.get(`/student/${id}`).then(response => {
            commit('SET_STUDENT', response.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
};

export default { state, getters, mutations, actions }