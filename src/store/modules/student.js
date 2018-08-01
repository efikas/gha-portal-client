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
    students: ({commit, dispatch}, query) => {
        return axios.get(`/school/${query.id}/students`).then(response => {
            commit('SET_STUDENTS', response.data.data);
            dispatch('school', query.id);
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    },
    student: ({commit, dispatch}, id) => {
        return axios.get(`/student/${id}`).then(response => {
            commit('SET_STUDENT', response.data);
            dispatch('school', response.data.school_id);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeStudent: ({commit}, payload) => {
        return axios.post('/students', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    updateStudent: ({commit, dispatch, getters}, payload) => {
        return axios.post(`/student/${getters.student.id}/edit`, payload)
            .then(response => {
                dispatch('student', getters.student.id);
                return Promise.resolve(response.data)
            }).catch((error) => {
                dispatch('student', getters.student.id);
                return Promise.reject(error.response)
            })
    },
    deleteStudents: ({}, payload) => {
        return axios.post('students/delete', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
};

export default {state, getters, mutations, actions}