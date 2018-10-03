<template>
    <div style="margin-top: -0%; width: 1000px">
        <div class="container">
            <div class="row">
                <div class="col-md-10" style="padding: 0">
                    <SchoolCard></SchoolCard>
                </div>
            </div>
            <div class="row">
                <b-card class="col-md-10 bg-clear-card" title="STUDENT PROFILE" bg-variant="" text-variant="">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="" style="padding: 0; margin-left: 40px; margin-bottom: -40px">
                                <div style="">
                                    <img :src="showImage()" alt="User Image"
                                         class="img-fluid profile-thumb"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9 offset-3" style="padding: 0;">
                                    <div class="profile-name" style="position: absolute; bottom: 0px;">
                                        <p> {{ student.first_name }}
                                            {{ student.middle_name }}
                                            {{ student.last_name}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="footer">
                        <div class="row">
                            <div class="col-md-9 offset-3">
                                <b-nav>
                                    <router-link tag="li"
                                                 :to="{name:'student-profile', query:{section: 0}, hash: '#profile'}">
                                        <a class="nav-link">Personal</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item"
                                                 :to="{name:'student-profile', query:{section: 1}, hash: '#profile'}">
                                        <a class="nav-link">Academic</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item"
                                                 :to="{name:'student-profile', query:{section: 2}, hash: '#profile'}">
                                        <a class="nav-link">Guardian</a>
                                    </router-link>
                                </b-nav>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="row mt-3">
                <div class="col-md-10" id="profile" style="padding: 0">
                    <b-card class="" no-body>
                        <!-- Nav tabs -->
                        <b-tabs vertical card small :content-class="contentClass()" pills v-model="tabIndex"
                                @input="tabChanged($event)">
                            <b-tab title="Personal">
                                <personal></personal>
                            </b-tab>
                            <b-tab title="Academic">
                                <academic></academic>
                            </b-tab>
                            <b-tab title="Guardian">
                                <guardian></guardian>
                            </b-tab>
                        </b-tabs>
                    </b-card>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SchoolCard from "../../../widgets/sbemis/SchoolCard1";
    import {mapGetters} from 'vuex';
    import store from 'src/store/store';
    import PersonalForm from './forms/personal';
    import {Personal, Academic, Guardian} from './partials/profile/index';

    export default {
        components: {
            SchoolCard,
            Personal,
            Academic,
            Guardian,
            PersonalForm
        },
        data() {
            return {
                tabIndex: 0
            };
        },
        computed: mapGetters([
            'student'
        ]),
        async beforeRouteEnter(to, from, next) {
            await store.dispatch('student', to.params.id).catch(() => {
                return next(from);
            });
            next()
        },
        created: function () {
            this.tabChanged(this.$route.query.section);
        },
        methods: {
            contentClass() {
                return ['clear-content-padding'];
            },
            showImage() {
                if (typeof  this.student.biometric) {
                    if (this.student.biometric && this.student.biometric.photo) {
                        return this.$store.getters.url + this.student.biometric.photo;
                    }
                }
                return require("img/authors/user.jpg");
            },
            tabChanged(index) {
                switch (parseInt(index)) {
                    case 0:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}, hash: '#profile'});
                        break;
                    case 1:
                        this.tabIndex = 1;
                        this.$router.replace({query: {section: 1}, hash: '#profile'});
                        break;
                    case 2:
                        this.tabIndex = 2;
                        this.$router.replace({query: {section: 2}, hash: '#profile'});
                        break;
                    default:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}, hash: '#profile'});
                        break;
                }
            }
        },
        watch: {
            '$route.query'(query) {
                this.tabChanged(query.section)
            }
        }
    };
</script>
<style>
    .card-profile-link {
        font-size: 30px;
    }

    .card-title {
        font-size: 13px;
        color: #946812; /*#8e948e*/;
        font-weight: bold;
    }

    .clear-content-padding {
        padding: 0 !important;
    }
</style>
<style scoped>
    .profile-name {
        padding: 5px;
        /*background: linear-gradient(to bottom, gray, #000000);*/
        /*color: black;*/
        width: inherit;
        font-family: "Courier 10 Pitch", sans-serif;
        font-size: 25px;
        font-weight: bold;
    }

    .bg-clear-card {
        padding: 0 !important;
    }

    .card-footer {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin: 0 !important;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>

<style src="assets/css/user_profile.css" scoped></style>
