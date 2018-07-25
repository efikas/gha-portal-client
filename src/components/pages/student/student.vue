<template>
    <div style="margin-top: -0%; width: 1000px">
        <div class="container">
            <div class="row">
                <div class="col-md-10" style="padding: 0">
                    <SchoolCard></SchoolCard>
                </div>
            </div>
            <div class="row" id="profile">
                <b-card class="col-md-10 bg-clear-card" bg-variant="" text-variant="">
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
                                    <router-link tag="li" :to="{name:'student-profile', query:{section: 'personal'}, hash: '#profile'}">
                                        <a class="nav-link">Personal</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item" :to="{name:'student-profile', query:{section: 'academic'}, hash: '#profile'}">
                                        <a class="nav-link">Academic</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item" :to="{name:'student-profile', query:{section: 'guardian'}, hash: '#profile'}">
                                        <a class="nav-link">Guardian</a>
                                    </router-link>
                                </b-nav>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="row">
                <div class="col-md-10" style="padding: 0">
                    <transition name="fade">
                    <component
                            :is="loadedComponent"
                            @editProfile="onEditProfile($event)"></component>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import {mapGetters} from 'vuex';
    import PersonalForm from './forms/personal'
    import {Personal, Academic, Guardian} from './partials/profile/index'

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
                loadedComponent: null
            };
        },
        computed: mapGetters([
            'student'
        ]),
        created: async function () {
            await this.$store.dispatch('student', this.$route.params.id);
            this.switchComponent(this.$route.query.section);
        },
        methods: {
            showImage() {
                if (typeof  this.student.biometric) {
                    if (this.student.biometric && this.student.biometric.photo) {
                        return this.$store.getters.url + this.student.biometric.photo;
                    }
                }
                return require("img/authors/user.jpg");
            },
            switchComponent(component){
                function load(val) {
                    this.loadedComponent = val;
                }
                switch (component) {
                    case 'personal':
                        load.call(this, 'Personal');
                        break;
                    case 'academic':
                        load.call(this, 'Academic');
                        break;
                    case 'guardian':
                        load.call(this, 'Guardian');
                        break;
                    default:
                        load.call(this, 'Personal');
                        this.$router.replace({query:{section: 'personal'}, hash: '#profile'});
                        break;
                }
            }
        },
        watch: {
            '$route.query'(query) {
                this.switchComponent(query.section)
            }
        }
    };
</script>
<style>
    .card-profile-link {
        font-size: 30px;
    }
</style>
<style scoped>
    .profile-name{
        padding: 5px;
        /*background: linear-gradient(to bottom, gray, #000000);*/
        /*color: black;*/
        width: inherit;
        font-family: "Courier 10 Pitch", sans-serif;
        font-size: 25px;
        font-weight: bold;
    }
    .bg-clear-card{
        padding: 0!important;
    }
    .card-footer {
        padding-top: 0!important;
        padding-bottom: 0!important;
        margin: 0!important;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

<style src="assets/css/user_profile.css" scoped></style>
