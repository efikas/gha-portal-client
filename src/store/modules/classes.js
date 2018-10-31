import axios from "../../axios";

const state = {
    class_arms: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    school_classes: [
        {
            class: 'Seniour Secondary 1 A',
            class_id: 1,
            disabled: 0
        },
        {
            class: 'Seniour Secondary 1 B',
            class_id: 2,
            disabled: 0
        },
        {
            class: 'Seniour Secondary 1 C',
            class_id: 3,
            disabled: 1
        },
        {
            class: 'Seniour Secondary 2 A',
            class_id: 4,
            disabled: 0
        },
        {
            class: 'Seniour Secondary 2 B',
            class_id: 5,
            disabled: 0
        },
        {
            class: 'Seniour Secondary 3 A',
            class_id: 6,
            disabled: 0
        },
    ],
    class_subjects: [
        {
            class_id: 1,
            subject_id: 3,
            subject_name: "English Language",
            teacher_id: 12,
            teacher_name: "Suleiman Kazeem",
        },
        {
            class_id: 1,
            subject_id: 3,
            subject_name: "Mathematics",
            teacher_id: 12,
            teacher_name: "Olaiya Tobilola",
        },
        {
            class_id: 1,
            subject_id: 3,
            subject_name: "Biology",
            teacher_id: 12,
            teacher_name: "Abdul-Akeem Rukayat Aina",
        },
        {
            class_id: 1,
            subject_id: 3,
            subject_name: "Geography",
            teacher_id: 12,
            teacher_name: "Adewale Kemisola",
        },
    ],
    results: {}
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
    }
};

const mutations = {
    'SET_CLASSES': (state, classes) => state.school_classes = classes,
    'SET_SUBJECTS': (state, subjects) => state.subjects = subjects,
};

const actions = {
    getClasses: ({commit}, query) => {
        return axios.get(`users`).then(response => {
            commit('SET_ADMINS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    },
    get_class: ({commit}, id) => {
        return axios.get(`user/${id}`).then(response => {
            commit('SET_ADMIN', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeClass: ({commit}, payload) => {
        return axios.post('user', payload).then(response => {
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