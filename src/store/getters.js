
const getters = {
    user: state => {
        return state.user
    },
    data: state => {
        return state.data
    },
    token: state => {
        let expiration = localStorage.getItem('expiration');
        if( !state.token || !expiration )
            return null;
        else if( Date.now() > parseInt(expiration))
            return null;

        return state.token
    },
    isLoggedIn: (state, getters) => {
        return !!getters.token;
    },
    statistics: state => state.statistics,
    access_server: state => state.access_server,
    url: state => {
        return process.env.MIX_API_URL;
    },
    api_url: state => {
        return process.env.MIX_API_URL + process.env.MIX_API_URI;
    },
    api_auth_url: state => {
        return process.env.MIX_AUTH_URI;
    },
    userType: state => {
        return (state.user != null) ? state.user.user_type : 4;
    },
    schoolId: state => {
        return (state.user != null && state.user.staff != null) ? state.user.staff.school_id : null;
    },
    super_admin: state => {
        return state.super_admin;
    },
};

export default getters
