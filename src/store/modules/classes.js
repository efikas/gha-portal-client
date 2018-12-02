import axios from "../../axios";

const state = {
    class_arms: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    school_classes: [],
    class_subjects: [],
    students_result: {}
};

const getters = {
    class_arms: state => {
        return state.class_arms;
    },
    school_classes: state => {
        return state.school_classes;
    },
    class_subjects: state => {
        return state.class_subjects;
    },
    students_result: state => {
        return state.students_result;
    }
};

const mutations = {
    'SET_CLASSES': (state, classes) => state.school_classes = classes,
    'SET_SUBJECTS': (state, subjects) => state.class_subjects = subjects,
    'SET_RESULTS': (state, results) => state.students_result = results,
};

const actions = {
    schoolClasses: ({commit}, id) => {
        return axios.get(`school/${id}/classes`).then(response => {
            commit('SET_CLASSES', response.data.data);
            return Promise.resolve(response.data.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    staffClasses: ({commit}, id) => {
        return axios.get(`staff/${id}/classes`).then(response => {
            commit('SET_CLASSES', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeClass: ({commit}, payload) => {
        return axios.post('classes', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },

    classSubjects: ({commit}, id) => {
        return axios.get(`classes/${id}/subjects`).then(response => {
            commit('SET_SUBJECTS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },

    storeSubjects: ({commit}, payload) => {
        return axios.post('subjects', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },

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
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },

    updateClass: ({commit, dispatch, getters}, payload) => {
        return axios.post(`user/${getters.admin.id}/edit`, payload)
            .then(response => {
                dispatch('admin', getters.admin.id);
                return Promise.resolve(response.data)
            }).catch((error) => {
                return Promise.reject(error.response)
            })
    },
    deleteClass: ({}, payload) => {
        return axios.post('users/delete', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
};

export default { state, getters, mutations, actions }