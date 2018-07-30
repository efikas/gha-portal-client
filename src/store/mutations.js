const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

let mutations = {
    authUser(state, authData) {
        if (authData.user) {
            localStorage.setItem('user', JSON.stringify(authData.user));
        }
        if (authData.token) {
            localStorage.setItem('token', authData.token);
        }
        if (authData.expiration) {
            localStorage.setItem('expiration', JSON.stringify(authData.expiration + Date.now()));
        }
    },
    left_menu(state, option) {
        if (option === "open") {
            state.left_open = true
        } else if (option === "close") {
            state.left_open = false
        } else if (option === "toggle") {
            state.left_open = !state.left_open
        }
        if (state.left_open) {
            document.getElementsByTagName("body")[0].classList.remove("left-hidden")
        } else {
            document.getElementsByTagName("body")[0].classList.add("left-hidden")
        }
    },
    routeChange(state, loader) {
        if (loader === "start") {
            state.preloader = true
        } else if (loader === "end") {
            state.preloader = false
        }
    },
    changePageTitle(state, title) {
        state.page_title = title
        document.title = title + " - " + state.site_name
    },
    addevent(state, event) {
        let id = state.cal_events[state.cal_events.length - 1] ? state.cal_events[state.cal_events.length - 1].id + 1 : 0;
        state.cal_events.push({id: id, title: event.evtname, start: event.date.from, end: event.date.to})
    },
    editevent(state, event) {
        let evt = JSON.parse(JSON.stringify(event));
        let id_index = "";
        state.cal_events.forEach(function (currentValue, index) {
            if (currentValue.id === evt.id) {
                id_index = index;
            }
        });
        state.cal_events[id_index].title = evt.title;
        state.cal_events[id_index].start = evt.start;
        state.cal_events[id_index].end = evt.end;
    },
    removeevent(state, id) {
        let id_index = "";
        state.cal_events.forEach(function (currentValue, index) {
            if (currentValue.id === id.evtid) {
                id_index = index;
            }
        });
        state.cal_events.splice(id_index, 1);
    },

    'SET_SITE_DATA'(state, data) {
        localStorage.setItem('data', JSON.stringify(function (entities) {

            for (let index in entities) {
                const normalized = {};
                for (let entity in entities[index]) {
                    const oldObj = entities[index][entity] || {};
                    if (oldObj.id) {
                        normalized[oldObj.id] = oldObj;
                    }
                }
                entities[index] = normalized;
            }
            return entities;
        }(data)));
    },

    'SET_STATISTICS'(state, statistics) {
        state.statistics = statistics;
    },

    [LOGIN](state) {
        state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
        state.isLoggedIn = true;
        state.pending = false;
    },
    [LOGOUT](state) {
        state.isLoggedIn = false;
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('user');
        localStorage.removeItem('data');
    },

}
export default mutations
