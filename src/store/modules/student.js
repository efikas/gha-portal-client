const state = {
    students: [],
    student: {}
};

const getters = {
    students: (state) => {
        return state.students
    },
    student: (state) => {
        return state.student
    }
};

const mutations = {
    'SET_STUDENTS' (state, students) {
        state.students = students
    },
    'SET_STUDENT' (state, student) {
        state.student = student
    }
};

const actions = {
    getStudents: ({ commit }, schoolId) => {
        var students = [];
        commit('SET_STUDENTS', students);
    },
    getStudent: ({ commit }, studentId) => {
        var student = {};
        commit('SET_STUDENT', student);
    }
};

export default { state, getters, mutations, actions }