
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
};

export default getters
