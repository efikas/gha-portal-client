let normalizer = function (data) {
    let endPoint = {};
    for (let i = 0; i < data.length; i++) {
        endPoint[data[i]] = data[i];
    }
    return endPoint;
};

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
    permissions: (state, getters) => {

        let _keys = {
            ...(normalizer(state.user.permissions)),
            ...(normalizer(state.user.roles)),
        };



        return {
            hasOne: (perm) => {
                if (typeof perm === "object") {
                    for (var p = 0; p < perm.length; p++) {
                        if (!_keys[perm[p]]) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    return !!_keys[perm];
                }
            },

            hasAny: (roles_permissions) => {
                if (typeof roles_permissions !== "object") {
                    throw "Invalid parameter, array is required!"
                }
                for (let index = 0; index < roles_permissions.length; index++) {
                    if (getters.permissions.hasOne(roles_permissions[index])) {
                        return true;
                    }
                }
                return false;
            },

            hasAll: (roles_permissions) => {
                if (typeof roles_permissions !== "object") {
                    throw "Invalid parameter, array is required!"
                }

                for (let index = 0; index < roles_permissions.length; index++) {
                    if (!getters.permissions.hasOne(roles_permissions[index])) {
                        return false;
                    }
                }
                return true;
            },
        }
    },
    authorizations: state => state.authorizations,
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
