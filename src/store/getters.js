
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
        if (process.env.NODE_ENV === 'production') {
            return state.live_url;
        } else {
            return state.dev_url;
        }
    },
    api_url: state => {
        if (process.env.NODE_ENV === 'production') {
            return state.live_url + state.api_uri;
        } else {
            return state.dev_url + state.api_uri;
        }
    },
    api_auth_url: state => {
        if (process.env.NODE_ENV === 'production') {
            return state.live_url + state.auth_uri;
        } else {
            return state.dev_url + state.auth_uri;
        }
    }
};

export default getters
