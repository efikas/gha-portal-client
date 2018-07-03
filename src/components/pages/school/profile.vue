<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
                <b-card v-if="schoolInfo" class="bg-default-card">
                    <h5 class="default-color">{{ this.schoolName }} </h5>
                    <gmap-map :center="center" :zoom="16" class="gmap" ref="gmap1">
                        <gmap-marker v-for="m in markers" :key="m.position.lat" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
                    </gmap-map>
                    <!--<div style="display: flex; flex: fit-content; flex-direction: column; justify-content: space-between">-->
                        <!--<div class="row mb-5" style="justify-content: flex-start; flex: 1">-->
                            <!--<h2>{{ this.schoolName }}</h2>-->
                            <!--<h4>{{ this.schoolAddress }}</h4>-->
                        <!--</div>-->

                        <!--<div class="row" style="flex: 1; flex-direction: row; display: flex; justify-content: space-around">-->
                            <!--<div class="col-4j">-->
                                <!--<h5>Teaching Staff</h5>-->
                                <!--<h1>{{ this.totalTeachingStaff }}</h1>-->
                            <!--</div>-->
                            <!--<div class="col-4j" >-->
                                <!--<h5>Non-Teaching Staff</h5>-->
                                <!--<h1>{{ this.totalNonTeachingStaff }}</h1>-->
                            <!--</div>-->
                            <!--<div class="col-4h">-->
                                <!--<h5><a :href="`/school/${this.schoolId}/students`">Students</a></h5>-->
                                <!--<h1>{{ this.totalStudent }}</h1>-->
                            <!--</div>-->
                            <!--&lt;!&ndash; <div class="col-12">-->
                                <!--<a :href="'/school/2/update/basic'" class="btn btn-outline-primary ">Basic</i></a>-->
                                <!--<a :href="'/school/2/update/facilities'" class="btn btn-outline-primary ">facilities</i></a>-->
                                <!--<a :href="'/school/2/update/library'" class="btn btn-outline-primary ">library</i></a>-->
                                <!--<a :href="'/school/2/update/classroom'" class="btn btn-outline-primary ">classroom</i></a>-->
                                <!--<a :href="'/school/2/update/sbmc'" class="btn btn-outline-primary ">sbmc</i></a>-->
                            <!--</div> &ndash;&gt;-->
                        <!--</div>-->
                        <!--<div class="" style="border:1px solid red; flex: 1; display: flex; flex-direction: row; align-items: flex-end">-->
                            <!--<div class="btn-group pull-right" role="group" style="align-self: flex-end">-->
                                <!--<button type="button" class="btn btn-outline-primary hvr-underline-from-center">Basic-->
                                <!--</button>-->
                                <!--<button type="button" class="btn btn-outline-primary hvr-underline-from-center">facilities-->
                                <!--</button>-->
                                <!--<button type="button" class="btn btn-outline-primary hvr-underline-from-center">library-->
                                <!--</button>-->
                                <!--<button type="button" class="btn btn-outline-primary hvr-underline-from-center">classroom-->
                                <!--</button>-->
                                <!--<button type="button" class="btn btn-outline-primary hvr-underline-from-center">sbmc-->
                                <!--</button>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                </b-card>
            </div>

            <div class="col-lg-8">
                <b-card class="bg-default-card data" v-if="schoolInfo">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="BASIC">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/basic`" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p>
                                <br/><br/>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordred table-striped mytable">
                                    <tr><td><i class="fa fa-home"></i> Name</td>
                                        <td colspan="3">{{ schoolInfo.name }}</td></tr>
                                    <tr><td><i class="fa fa-map"></i> Address</td>
                                        <td colspan="3">{{ schoolInfo.address }}</td></tr>
                                    <tr><td><i class="fa fa-envelope"></i> Email</td>
                                        <td colspan="3">{{ schoolInfo.email }}</td></tr>
                                    <tr><td><i class="fa fa-globe"></i> Website</td>
                                        <td colspan="3">{{ schoolInfo.website }}</td></tr>
                                    <tr><td>Education Level</td>
                                        <td>{{ schoolInfo.education_level }}</td>
                                        <td>Category</td>
                                        <td>{{ schoolInfo.category }}</td>
                                    </tr>
                                    <tr><td>Type</td>
                                        <td>{{ yesNo(schoolInfo.type) }}</td>
                                        <td>Location</td>
                                        <td>{{ schoolInfo.location }}</td>
                                    </tr>
                                    <tr><td>Town</td>
                                        <td>{{ schoolInfo.town }}</td>
                                        <td>Phone</td>
                                        <td>{{ schoolInfo.phone }}</td>
                                    </tr>
                                    <tr><td>Date Established</td>
                                        <td>{{ schoolInfo.established }}</td>
                                        <td>Geo-location</td>
                                        <td>{{ schoolInfo.geolocation }}</td>
                                    </tr>
                                    <tr><td>Average Distance</td>
                                        <td>{{ schoolInfo.average_distance }}KM</td>
                                        <td>Ownership</td>
                                        <td>{{ schoolInfo.ownership }}</td>
                                    </tr>
                                    <tr><td>Shifts</td>
                                        <td>{{ yesNo(schoolInfo.shift) }}</td>
                                        <td>Grant</td>
                                        <td>{{ yesNo(schoolInfo.grants) }}</td>
                                    </tr>
                                    <tr><td>Management Committee</td>
                                        <td>{{ yesNo(schoolInfo.management_committee) }}</td>
                                        <td>Development Plan</td>
                                        <td>{{ yesNo(schoolInfo.development_plan) }}</td>
                                    </tr>
                                    <tr><td>Mulitigrade</td>
                                        <td>{{ yesNo(schoolInfo.multigrade) }}</td>
                                        <td>LGA Ward</td>
                                        <td>{{ schoolInfo.ward.name }}</td>
                                    </tr>
                                    <tr><td>Recognision Status</td>
                                        <td>{{ yesNo(schoolInfo.recognition_status) }}</td>
                                        <td>Number of student</td>
                                        <td>{{ schoolInfo.students }}</td>
                                    </tr>
                                    <tr><td>Teaching Staff</td>
                                        <td>{{ schoolInfo.staffs.teaching }}</td>
                                        <td>Non Teaching Staff</td>
                                        <td>{{ schoolInfo.staffs.none_teaching }}</td>
                                    </tr>
                                </table>
                            </div>

                        </b-tab>
                        <b-tab title="FACILITIES">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/facilities`" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p>
                                <br>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mb-3">
                                    <div class="table-responsive mt-lg-5">
                                        <table class="table table-bordred table-striped mytable">
                                            <tbody>
                                            <tr>
                                                <td>Power Source</td>
                                                <td>{{ power_sources }}</td>
                                            </tr>
                                            <tr>
                                                <td>Health Facilities</td>
                                                <td>{{ health }}</td>
                                            </tr>
                                            <tr>
                                                <td>Learning Materials</td>
                                                <td>{{ learning }}</td>
                                            </tr>
                                            <tr>
                                                <td>Water Source</td>
                                                <td>{{ water }}</td>
                                            </tr>
                                            <tr>
                                                <td>Fence</td>
                                                <td>-</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="CLASSROOM">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/classroom`" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p><br/><br/>
                            </div>

                            <div class="row">
                                <div class="col-lg-12 mb-3">
                                    <div class="table-responsive">
                                        <table class="table table-bordred table-striped mytable classroom-table">
                                            <thead>
                                            <tr>
                                                <th>Class</th>
                                                <th>Good</th>
                                                <th>Minor Repair</th>
                                                <th>Major repair</th>
                                                <th>Unusable</th>
                                                <th>Comment</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="classroom in schoolInfo.classrooms">
                                                <td>{{ classroom.class }}</td>
                                                <td>{{ classroom.pivot.good }}</td>
                                                <td>{{ classroom.pivot.major_repair }}</td>
                                                <td>{{ classroom.pivot.minor_repair }}</td>
                                                <td>{{ classroom.pivot.unusable }}</td>
                                                <td>{{ classroom.pivot.comment }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </b-tab>
                        <b-tab title="LIBRARY">
                            <p>
                                <a :href="`${schoolId}/update/library`" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                            </p>

                        </b-tab>
                        <b-tab title="SBMC">
                            <p>
                                <a :href="`${schoolId}/update/sbmc`" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                            </p>

                        </b-tab>
                        <b-tab title="OTHERS">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/other_facilities`" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p><br/><br/>
                            </div>

                            <div class="row">
                                <div class="col-lg-12 mb-3">
                                    <div class="table-responsive">
                                        <table class="table table-bordred table-striped mytable">
                                            <thead>
                                            <tr>
                                                <th>FACILITY</th>
                                                <th>NUMBER AVAILABLE</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="facility in schoolInfo.facilities">
                                                <td>{{ facility.type}}</td>
                                                <td>{{ facility.pivot.no_facility}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>

        </div>

        <!--<sweet-modal icon="error" blocking ref="modal">-->
            <!--This is an error…-->

            <!--<sweet-button slot="button" color="red" v-on:click="submit()">Press this Button</sweet-button>-->
        <!--</sweet-modal>-->
    </div>
</template>
<script>
    var unsub;
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'
    import store from 'src/store/store.js'
    import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
    // import VueCollapse from 'vue2-collapse'

    // Loading the plugin into the Vue.
    // Vue.use(VueCollapse)
    Vue.use(VueGoogleMaps, {
        load: {
            key: store.state.gmap_key
            // v: 'OPTIONAL VERSION NUMBER',
            // libraries: 'places', // If you need to use place input
        }
    })
    export default {
        name: "gmaps",
        components: {
            SweetModal,
            SweetModalTab
        },
        mounted: function () {

        },
        destroyed: function () {

        },
        data() {
            return {
                schoolName: '',
                schoolAddress: '',
                totalStudent: 0,
                totalTeachingStaff: 0,
                totalNonTeachingStaff: 0,
                schoolId: '',
                play_facilities: '',
                learning: '',
                power_sources: '',
                health: '',
                water: '',
                toilet: '',

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
                schoolInfo: null,
            }
        },
        methods: {
            yesNo(id){
                if(id == 1){
                    return 'Yes';
                }
                return 'No'
            },
            show () {
                this.$refs.modal.open();
            },
            submit () {
            }
        },
        mounted() {
            // unsub = this.$store.subscribe((mutation, state) => {
            //     if (mutation.type == "left_menu") {
            //         setTimeout(() => {
            //             this.$refs.gmap1.resize();
            //             this.$refs.gmap2.resize();
            //             this.$refs.gmap3.resize();
            //             this.$refs.gmap4.resize();
            //         })
            //     }
            // });
            this.$school.schoolProfile(this.$route.params.id).then(data => {
                this.schoolInfo = data;

                this.totalNonTeachingStaff = data.staffs.none_teaching;
                this.totalTeachingStaff = data.staffs.teaching;
                this.totalStudent = data.students;
                this.schoolName = data.name;
                this.schoolAddress = data.address;
                this.schoolId = data.id;

                data.power_sources.forEach(item => {
                    this.power_sources += item.power_sources + ', '
                })
                data.play_facilities.forEach(item => {
                    this.play_facilities += item.play_facilities + ', '
                })
                data.learning.forEach(item => {
                    this.learning += item.material + ', '
                })
                data.play_facilities.forEach(item => {
                    this.play_facilities += item.play_facilities + ', '
                })
                data.health.forEach(item => {
                    this.health += item.facility + ', '
                })
                data.water.forEach(item => {
                    this.water += item.source + ', '
                })
                data.toilet.forEach(item => {
                    this.toilet += item.toilet + ', '
                })
                // console.log(this.schoolInfo);
            })

        },
        beforeRouteLeave(to, from, next) {
            // unsub();
            next();
        },
    }
</script>
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

    card-header{
        background-color: whitesmoke;
    }

    .bg-tint {
        background-color: red !important;
    }
</style>

