<template>
    <header class="header fixed-top">
        <nav>
            <router-link to="/" class="logo">
                <img src="~img/ekiti-logo.png" alt="logo"/>
            </router-link>
            <!-- Sidebar toggle button-->
            <div class="float-left">
                <a href="javascript:void(0)" class="sidebar-toggle" @click="toggle_menu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div class="navbar-right">

                <!--drop downs-->
                <div>
                    <!-- User Account: style can be found in dropdown-->
                    <b-dropdown class="user user-menu bell_bg user_btn" right link>
                        <span slot="text">
                            <img :src="this.$store.state.user.picture" class="rounded-circle" alt="User Image">
                            <!-- User name-->
                            <p class="user_name_max">{{this.$store.state.user.name}}</p>
                        </span>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/user_profile" exact class="drpodowtext">
                                <i class="fa fa-user-o"></i> Profile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/edit_user" exact class="drpodowtext">
                                <i class="fa fa-cog"></i> Settings
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <router-link to="/lockscreen" exact class="drpodowtext">
                                <i class="fa fa-lock"></i> Lock
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item exact class="dropdown_content">
                            <a href="javascript:void(0)" @click="$store.dispatch('logout')" class="drpodowtext">
                                <i class="fa fa-sign-out"></i> Logout
                            </a>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    import screenfull from "screenfull"

    export default {
        name: "vueadmin_header",

        created() {

            this.setAuthenticatedUser()
        },
        methods: {
            toggle_menu() {
                this.$store.commit('left_menu', "toggle");
            },
            fullscreen() {
                if (screenfull.enabled) {
                    screenfull.toggle();
                }
            },

            setAuthenticatedUser() {
                this.$auth.getUser()
                    .then(response => {
                        let data = response.data
                        data.picture = require("img/authors/prf4.jpg")
                        this.$store.dispatch('setUser', data)
                        console.log(response.data)
                    })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../css/customvariables";

    .header {
        z-index: 1030;
        nav {
            margin-bottom: 0;
            height: 50px;
            /*background: $header_color;*/
            background-color:#4d1d03;
            background:linear-gradient(315deg,#82162b,#650638);background:-webkit-linear-gradient(315deg,#650606,#650638);
            /*box-shadow:none;*/
            background-size: 100% 100%;
            box-shadow: 0px 0px 10px #4d1d03;
        }
        .navbar-right {
            float: right;
            margin-right: 15px;
        }
        .logo {
            display: block;
            float: left;
            height: 50px;
            line-height: 41px;
            padding: 3px 10px;
            text-align: center;
            width: 250px;
            background: $logo_bgcolor;
            img {
                width: 125px;
            }
        }
        .navbar-right {
            .dropdown-item {
                padding: 0;
                width: 100%;
                outline: none;
            }
            div.dropdown {
                > a {
                    color: $zoom_color;
                }
                .dropdown-menu > button {
                    padding: 10px 15px;
                }
                &.notifications-menu {
                    height: 50px;
                    .noti-icon {
                        font-size: 18px;
                    }
                }
                > a > i {
                    font-size: 23px;
                }
                > a {
                    display: block;
                    padding: 12px;
                }
                &:hover > a {
                    background-color: #ededed;
                    color: #000;
                }
                > a.padding-user {
                    padding-top: 8px;
                    padding-bottom: 6px;
                }
            }
        }
        nav .sidebar-toggle {
            float: left;
            color: $toggle_color;
            font-size: 19px;
            padding-top: 10px;
        }
    }

    .user_name_max {
        display: inline-block;
        max-width: 180px;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
        margin: 0 0 -4px;
    }

    .noti_msg {
        font-size: 16px;
        padding: 10px;
        border: 1px solid #4f90c1;
        border-radius: 50px;
        margin-top: 10px;
    }

    .user.user-menu > button img {
        width: 35px;
        height: 35px;
    }

    /**** END HEADER RIGHT SIDE DROPDOWNS ****/

    @media screen and (max-width: 767px) {
        .dropdown.open .dropdown-menu {
            position: absolute;
        }
        .navbar-right > li > a {
            padding: 10px 12px;
        }
    }

    /* Fix menu positions on xs screens to appear correctly and fully */

    @media (max-width: 560px) {
        body .header .logo,
        body .header nav {
            width: 100%;
        }
        body .header nav .sidebar-toggle {
            padding-left: 15px;
        }
        nav {
            height: 100px !important;
        }
    }

    .notifications_badge_top {
        margin-top: -28px;
        margin-left: 10px;
        position: absolute;
        span {
            top: 1px;
            left: 2px;
            border-radius: 50%;
        }
    }

    .notifications-menu .dropdown-item {
        width: 100%;
        display: block;
    }

    .dropdown-footer {
        padding: 10px !important;
    }
</style>
<style type="text/css" lang="scss">
    @import "../css/customvariables";

    .wrapper {
        margin-top: 50px;
        @media screen and (max-width: 560px) {
            margin-top: 100px;
        }
    }

    .sidebar-toggle {
        margin-left: 10px;
    }

    .bell_bg {
        button.btn-secondary {
            color: #fff;
            background-color: transparent; //$bell-color;
            border: none;
            border-radius: 0;
            box-shadow: none !important;
            &:hover {
                background-color: #ededed !important
            }
            &:active {
                color: $toggle_color !important;
            }
        }
        //.btn-secondary:active
        &.show button {
            background-color: $bell-active !important
        }
        &.user_btn .dropdown-toggle {
            padding: 7px 9px;
        }
    }

    .tabs_cont,
    .event_date {
        background-color: #fff !important;
    }
</style>
