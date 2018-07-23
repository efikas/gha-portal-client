import axios from '../../axios'

const state = {
    schools: [],
    school: {ward: {lga_id: null}},
    school_stat: []
};

const getters = {
    schools: state => state.schools,
    school: state => state.school,
    school_stats: state => state.school_stat,
};

const mutations = {
    'SET_SCHOOLS': (state, schools) => state.schools = schools,
    'SET_SCHOOL': (state, school) => state.school = school,
    'SET_LGA_SCH_STAT': (state, schStat) => state.school_stat = schStat,
    'SET_LGA_SCHOOLS': (state, schools) => state.schools = schools,
};

const actions = {
    schools: ({commit}) => {
        return axios.get('/schools').then(response => {
            commit('SET_SCHOOLS', response.data.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    school: ({commit}, id) => {
        return axios.get(`/school/${id}`).then(response => {
            commit('SET_SCHOOL', response.data)
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    storeSchoolProject: ({dispatch, getters}, payload) => {
        return axios.post('school-project', payload).then(response => {
            dispatch('school', getters.school.id);
            return Promise.resolve(response.data)
        }).catch((error) => {
            dispatch('school', getters.school.id);
            return Promise.reject(error.response)
        })
    },
    storeSchoolSbmc: ({dispatch, getters}, payload) => {
        return axios.post('school-sbmc', payload).then(response => {
            dispatch('school', getters.school.id);
            return Promise.resolve(response.data)
        }).catch((error) => {
            dispatch('school', getters.school.id);
            return Promise.reject(error.response)
        })
    },
    storeSchool: ({}, payload) => {
        return axios.post('schools', payload).then(response => {
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    updateSchool: ({commit, dispatch, getters}, payload) => {
        return axios.post(`/school/${getters.school.id}/edit`, payload)
            .then(response => {
                dispatch('school', getters.school.id);
                return Promise.resolve(response.data)
            }).catch((error) => {
                dispatch('school', getters.school.id);
                return Promise.reject(error.response)
            })
    },
    lgaSchStats: ({commit}) => {
        return axios.get(`/lga/schools`).then(response => {
            commit('SET_LGA_SCH_STAT', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    lgaSchools: ({commit}, params) => {
        let lgaId = params.id;
        return axios.get(`/lga/${lgaId}/schools`, {params}).then(response => {
            commit('SET_LGA_SCHOOLS', response.data);
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error.response)
        })
    },
    uploadSpreadsheat: ({}, payload) => {
        return axios.post(`/upload/${payload.lga_id}/school`, payload.formdata,
            {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => {
                return Promise.resolve(response.data)
            }).catch((error) => {
                return Promise.reject(error.response)
            })
    }
};

export default {state, getters, mutations, actions}