<template>
    <div>
        <div class="">
            <div class="row">
                <div class="col-md-10">
                    <b-card class="bg-clear2-card" title="USER PROFILE" text-variant="dark">
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
                                            <p>{{ admin }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div slot="footer">
                        </div>
                    </b-card>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-10" id="profile" style="padding: 0">
                    <b-card class="" card small no-body>
                        <!-- Nav tabs -->
                        <b-tabs vertical card small :content-class="contentClass()" pills v-model="tabIndex" @input="tabChanged($event)">
                            <b-tab title="Personal">
                                <personal></personal>
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
    import store from 'src/store/store';
    import personal from './partials/profile/personal'


    export default {
        components: {
           personal
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
                // if (typeof  this.staff.biometric) {
                //     if (this.staff.biometric && this.staff.biometric.photo) {
                //         return this.$store.getters.url + this.staff.biometric.photo;
                //     }
                // }
                return require("img/authors/user.jpg");
            },
            tabChanged(index) {
                switch (parseInt(index)) {
                    case 0:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}, hash: '#profile'});
                        break;
                    default:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}, hash: '#profile'});
                        break;
                }
            }
        },
        computed: mapGetters([
            'admin'
        ]),
        async beforeRouteEnter(to, from, next) {
            // await store.dispatch('admin', to.params.id).catch(() => {
            //     return next(from);
            // });
            next()
        },
        created: function () {
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
    .card-title {
        font-size: 13px;
        color:#946812 ;/*#8e948e*/;
        font-weight: bold;
    }
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

