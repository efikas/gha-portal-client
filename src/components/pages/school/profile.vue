<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <SchoolCard></SchoolCard>
            </div>
        </div>
        <b-card v-if="school" class="bg-default-card text-right">
            <a href="#">Exam</a> |
            <a href="#">Attendance</a>
        </b-card>
        <div class="row">
            <div class="col-md-9" id="profile">
                <b-card class="" no-body>
                    <!-- Nav tabs -->
                    <b-tabs vertical card small :content-class="contentClass()" pills v-model="tabIndex" @input="tabChanged($event)">
                        <b-tab title="Basic">
                            <basic-tab></basic-tab>
                        </b-tab>
                        <b-tab title="Facilities">
                            <facility-tab></facility-tab>
                        </b-tab>
                        <b-tab title="Classroom">
                            <classroom-tab></classroom-tab>
                        </b-tab>
                        <b-tab title="Library">
                            <library-tab></library-tab>
                        </b-tab>
                        <b-tab title="SBMC">
                            <sbmc-tab></sbmc-tab>
                        </b-tab>
                        <b-tab title="Others">
                            <other-tab></other-tab>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
            <div class="col-md-3">
                <b-card v-if="school" class="bg-default-card">
                    <h5 class="default-color">{{ school.name }} </h5>
                    <gmap-map :center="center" :zoom="16" class="gmap" ref="gmap1">
                        <gmap-marker v-for="m in markers" :key="m.position.lat" :position="m.position" :clickable="true"
                                     :draggable="true" @click="center=m.position"></gmap-marker>
                    </gmap-map>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'
    import store from 'src/store/store.js'
    import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import { tabsMixins } from './partials/mixins';
    import basicTab from './partials/basic';
    import facilityTab from './partials/facility';
    import classroomTab from './partials/classroom';
    import libraryTab from './partials/library';
    import sbmcTab from './partials/sbmc';
    import otherTab from './partials/others';

    Vue.use(VueGoogleMaps, {
        load: {
            key: store.state.gmap_key
            // v: 'OPTIONAL VERSION NUMBER',
            // libraries: 'places', // If you need to use place input
        }
    });

    export default {
        components: {
            SchoolCard,
            SweetModal,
            basicTab,
            facilityTab,
            classroomTab,
            libraryTab,
            sbmcTab,
            otherTab
        },
        mixins: [tabsMixins],
        data() {
            return {
                tabIndex: 1,
                center: {
                    lat: 7.6401306,
                    lng: 5.2033970
                },
                markers: [{
                    position: {
                        lat: 7.6401306,
                        lng: 5.2033970
                    }
                }],
            }
        },
        methods: {
            show() {
                this.$refs.modal.open();
            },
            contentClass(){
                return ['clear-content-padding'];
            },
            tabChanged(index) {
                switch (parseInt(index)) {
                    case 0:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}, hash: 'profile'});
                        break;
                    case 1:
                        this.tabIndex = 1;
                        this.$router.replace({query: {section: 1}, hash: 'profile'});
                        break;
                    case 2:
                        this.tabIndex = 2;
                        this.$router.replace({query: {section: 2}, hash: 'profile'});
                        break;
                    case 3:
                        this.tabIndex = 3;
                        this.$router.replace({query: {section: 3}, hash: 'profile'});
                        break;
                    case 4:
                        this.tabIndex = 4;
                        this.$router.replace({query: {section: 4}, hash: 'profile'});
                        break;
                    case 5:
                        this.tabIndex = 5;
                        this.$router.replace({query: {section: 5}, hash: 'profile'});
                        break;
                    default:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}});
                        break;
                }
            }
        },
        async created() {
            await this.$store.dispatch('school', this.$route.params.id);
            this.tabChanged(this.$route.query.section);
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
<style src="hover.css/css/hover.css"></style>
<style scoped src="assets/css/button.css" rel="stylesheet"></style>
<style scoped>
    .gmap {
        width: 100%;
        height: 300px;
        margin: 5px auto;
    }

    .sbemis-table div.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: .5px solid #c5c5c5;
        border-bottom: .5px solid #c5c5c5;
        color: #555;
        /*font-style: bold;*/
    }

    .sbemis-table div {
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: .5px solid #c5c5c5;
        border-bottom: .5px solid #c5c5c5;
    }

    .classroom-table tr td {
        width: 20% !important;
    }

    /*b-btn color*/
    header.card-header a {
        color: #650606;
    }

    .bg-default-card a {
        color: #650606;
        font-weight: bold;
    }

    .bg-default-card a:hover {
        color: #8f3535;
        font-weight: bold;
    }

    card-header {
        background-color: whitesmoke;
    }

    .bg-tint {
        background-color: red !important;
    }
</style>
