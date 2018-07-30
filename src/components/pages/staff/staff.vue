<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-10" style="padding: 0">
                    <SchoolCard></SchoolCard>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <b-card class="bg-clear2-card" text-variant="dark">
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
                                        <router-link tag="li"
                                                     :to="{name:'staff-profile', query:{section: 0}, hash: '#profile'}">
                                            <a class="nav-link">Personal</a>
                                        </router-link>
                                        <router-link tag="li" class="nav-item"
                                                     :to="{name:'staff-profile', query:{section: 1}, hash: '#profile'}">
                                            <a class="nav-link">Professional</a>
                                        </router-link>
                                    </b-nav>
                                </div>
                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-10" id="profile" style="padding: 0">
                    <b-card class="" no-body>
                        <!-- Nav tabs -->
                        <b-tabs vertical card small :content-class="contentClass()" pills v-model="tabIndex" @input="tabChanged($event)">
                            <b-tab title="Personal">
                                <personal></personal>
                            </b-tab>
                            <b-tab title="Professional">
                                <professional></professional>
                            </b-tab>
                        </b-tabs>
                    </b-card>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from 'vuex';
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import personal from './partials/profile/personal'
    import professional from './partials/profile/professional'


    export default {
        components: {
            SchoolCard, personal, professional
        },
        data() {
            return {
                tabIndex: 0
            }
        },
        methods: {
            contentClass(){
                return ['clear-content-padding'];
            },
            showImage() {
                if (typeof  this.staff.biometric) {
                    if (this.staff.biometric && this.staff.biometric.photo) {
                        return this.$store.getters.url + this.staff.biometric.photo;
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
                    default:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}, hash: '#profile'});
                        break;
                }
            }
        },
        computed: mapGetters([
            'staff'
        ]),
        created: function () {
            this.$store.dispatch('staff', this.$route.params.id);
            this.tabChanged(this.$route.query.section);
        },
        watch: {
            '$route.query'(query) {
                this.tabChanged(query.section)
            }
        }
    }
</script>
<style>
    .clear-content-padding{
        padding:0!important;
    }
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-in {
        from {
            transform: translateY(0);
            opacity: 1;
        }

        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
<style src="assets/css/user_profile.css" scoped></style>

