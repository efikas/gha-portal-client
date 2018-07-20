<template>
    <div>
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
                                        <p> {{ staff.first_name }}
                                            {{ staff.middle_name }}
                                            {{ staff.last_name}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="footer">
                        <div class="row">
                            <div class="col-md-9 offset-3">
                                <b-nav>
                                    <router-link tag="li" :to="{name:'staff-profile', query:{section: 'personal'}}">
                                        <a class="nav-link">Personal</a>
                                    </router-link>
                                    <router-link tag="li" class="nav-item" :to="{name:'staff-profile', query:{section: 'professional'}}">
                                        <a class="nav-link">Professional</a>
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

    import {mapGetters} from 'vuex';
    import {baseURL} from '../../../resource'
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import personal from './partials/profile/personal'
    import professional from './partials/profile/professional'


    export default {
        components: {
            SchoolCard, personal, professional
        },
        data() {
            return {
                loadedComponent: null
            }
        },
        methods: {
            yesNo: (value) => {
                return (value == 1) ? 'Yes' : 'No';
            },
            showImage() {
                if (typeof  this.staff.biometric) {
                    if (this.staff.biometric && this.staff.biometric.photo) {
                        return baseURL + this.staff.biometric.photo;
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
                        load.call(this, 'personal');
                        break;
                    case 'professional':
                        load.call(this, 'professional');
                        break;
                    default:
                        load.call(this, 'personal');
                        this.$router.replace({query:{section: 'personal'}});
                        break;
                }
            }
        },
        computed: mapGetters([
            'staff'
        ]),
        created: function () {
            this.$store.dispatch('staff', this.$route.params.id);
            this.switchComponent(this.$route.query.section);
        },
        watch: {
            '$route.query'(query) {
                this.switchComponent(query.section)
            }
        }
    }
</script>
<style>
    .card-profile-link {
        font-size: 30px;
    }
</style>
<style scoped lang="scss">
    td.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        color: #555;
    }

</style>
<style src="assets/css/user_profile.css" scoped></style>

