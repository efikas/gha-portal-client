<template>
    <div style="margin-top: -0%">
        <SchoolCard></SchoolCard>
        <div class="container">
            <div class="row">
                <b-card class="col-md-10 bg-clear-card" bg-variant="light" text-variant="dark">
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
                                    <router-link tag="li" :to="{name:'student-profile', query:{section: 'personal'}}">
                                        <a class="nav-link">Personal</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item" :to="{name:'student-profile', query:{section: 'academic'}}">
                                        <a class="nav-link">Academic</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item" :to="{name:'student-profile', query:{section: 'guardian'}}">
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
                    <component
                            :is="loadedComponent"
                            @editProfile="onEditProfile($event)"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import {mapGetters} from 'vuex';
    import {baseURL} from '../../../resource'
    import PersonalForm from './forms/basic'
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
        created: function () {
            this.$store.dispatch('student', this.$route.params.id);
            this.switchComponent(this.$route.query.section);
        },
        methods: {
            onEditProfile(e) {
                // this.loadedComponent = e;
            },
            showImage(obj) {
                if (typeof  this.student.biometric) {
                    if (this.student.biometric && this.student.biometric.photo) {
                        return baseURL + this.student.biometric.photo;
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
                        this.$router.replace({query:{section: 'personal'}});
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
    td.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        color: #555;
    }

    .sbemis-table div.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: 0.5px solid #c5c5c5;
        border-bottom: 0.5px solid #c5c5c5;
        color: #555;
        font-style: bold;
    }

    .sbemis-table div {
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: 0.5px solid #c5c5c5;
        border-bottom: 0.5px solid #c5c5c5;
    }

    #mytable tr td:nth-child(odd) {
        width: 30% !important;
    }

    .pl-0 {
        padding-left: 0px
    }

    .guardian-table {
        margin-bottom: 30px;
    }
</style>

<style src="assets/css/user_profile.css" scoped></style>
