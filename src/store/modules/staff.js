import axios from "../../axios";

const state = {
    staffs: [],
    staff: {}
};

const getters = {
    staffs: state => state.staffs,
    staff: state => state.staff,
};

const mutations = {
    'SET_STAFFS': (state, staffs) => state.staffs = staffs,
    'SET_STAFF': (state, staff) => state.staff = staff,
};

const actions = {
    staffs: ({commit}, query) => {
        return axios.get(`/school/${query.id}/staffs`, {params:query.params}).then(response => {
            commit('SET_STAFFS', response.data.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            console.log(error.response);
            return Promise.reject(error.response)
        })
    },
    staff: ({commit}, id) => {
        return axios.get(`/staff/${id}`).then(response => {
            commit('SET_STAFF', response.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeStaff: ({commit}, payload) => {
        return axios.post('/staff', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    updateStaff: ({commit, dispatch, getters}, payload) => {
        return axios.post(`/staff/${getters.staff.id}/edit`, payload)
            .then(response => {
                dispatch('staff', getters.staff.id);
                return Promise.resolve(response.data)
            }).catch((error) => {
                dispatch('staff', getters.staff.id);
                return Promise.reject(error.response)
            })
    },
};

export default { state, getters, mutations, actions }