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
                            <p>
                                <button type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                </button>
                            <h1>Personal Details</h1>
                            </p>
                            <div class="table-responsive">
                                <table class="table table-bordred table-striped mytable">
                                    <thead>
                                    <tr>
                                        <th class="col-3 views head">Information</th>
                                        <th class="col-9 head" colspan="3">Details</th>
                                    </tr>
                                    </thead>
                                    <tbody>
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
                                        <td>{{ schoolInfo.type }}</td>
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
                                        <td>{{ schoolInfo.average_distance }}</td>
                                        <td>Ownership</td>
                                        <td>{{ schoolInfo.ownership }}</td>
                                    </tr>
                                    <tr><td>Shifts</td>
                                        <td>{{ schoolInfo.shift }}</td>
                                        <td>Grant</td>
                                        <td>{{ schoolInfo.grants }}</td>
                                    </tr>
                                    <tr><td>Management Committee</td>
                                        <td>{{ schoolInfo.management_committee }}</td>
                                        <td>Development Plan</td>
                                        <td>{{ schoolInfo.development_plan }}</td>
                                    </tr>
                                    <tr><td>Mulitigrade</td>
                                        <td>{{ schoolInfo.multigrade }}</td>
                                        <td>LGA Ward</td>
                                        <td>{{ schoolInfo.ward.name }}</td>
                                    </tr>
                                    <tr><td>Recognision Status</td>
                                        <td>{{ schoolInfo.recognition_status }}</td>
                                        <td>Number of student</td>
                                        <td>{{ schoolInfo.students }}</td>
                                    </tr>
                                    <tr><td>Teaching Staff</td>
                                        <td>{{ schoolInfo.staffs.teaching }}</td>
                                        <td>Non Teaching Staff</td>
                                        <td>{{ schoolInfo.staffs.none_teaching }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </b-tab>
                        <b-tab title="FACILITIES">
                            <p>
                                <button type="button" class="btn btn-outline-primary pull-right">Edit
                                </button>
                            <h3>School Facilities</h3>
                            </p>

                            <b-card no-body class="mb-0">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-btn block href="#" v-b-toggle.accordion1 variant="default text-left">Classrooms</b-btn>
                                </b-card-header>
                                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <div class="card-text">
                                            <h2>Classrooms</h2>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 mb-3">
                                                <div class="table-responsive">
                                                    <table class="table table-bordred table-striped mytable">
                                                        <thead>
                                                        <tr>
                                                            <th>CLASSROOM CONDITION</th>
                                                            <th>NUMBER AVAILABLE</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Good</td>
                                                            <td>-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Minor Repair</td>
                                                            <td>-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Major repair</td>
                                                            <td>-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Unusable</td>
                                                            <td>-</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-btn block href="#" v-b-toggle.accordion2 variant="default text-left">Others</b-btn>
                                </b-card-header>
                                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <p class="card-text">
                                        <h2>Others</h2>
                                        </p>
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
                                                        <tr>
                                                            <td>Staffroom</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Offices</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Laboratory</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Library</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Store</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SBMC</td>
                                                            <td>0</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-btn block href="#" v-b-toggle.accordion3 variant="default text-left">Source of Power</b-btn>
                                </b-card-header>
                                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <p class="card-text">
                                        <h2>Source of Power</h2>
                                        </p>
                                        <div class="row">
                                            <div class="col-lg-12 mb-3">
                                                <div class="table-responsive">
                                                    <table class="table table-bordred table-striped mytable">
                                                        <thead>
                                                        <tr>
                                                            <th>FACILITY</th>
                                                            <th>AVAILABILITY</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td> PHCN/NEPA</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Solar</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Generator</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>None</td>
                                                            <td>No</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-btn block href="#" v-b-toggle.accordion2 variant="default text-left">Health Facilities</b-btn>
                                </b-card-header>
                                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <p class="card-text">
                                        <h2>Health Facilities</h2>
                                        </p>
                                        <div class="row">
                                            <div class="col-lg-12 mb-3">
                                                <div class="table-responsive">
                                                    <table class="table table-bordred table-striped mytable">
                                                        <thead>
                                                        <tr>
                                                            <th>FACILITY</th>
                                                            <th>AVAILABILITY</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Health Clinic</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>First Aid Kit</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>None</td>
                                                            <td>No</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-btn block href="#" v-b-toggle.accordion3 variant="default text-left">Source of Water Supply</b-btn>
                                </b-card-header>
                                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>

                                        <p class="card-text">
                                        <h2>Source of Water Supply</h2>
                                        </p>
                                        <div class="row">
                                            <div class="col-lg-12 mb-3">
                                                <div class="table-responsive">
                                                    <table class="table table-bordred table-striped mytable">
                                                        <thead>
                                                        <tr>
                                                            <th>FACILITY</th>
                                                            <th>AVAILABILITY</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Pipe-borne</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Well</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Borehole</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Others</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>None</td>
                                                            <td>No</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-btn block href="#" v-b-toggle.accordion2 variant="default text-left">Fence</b-btn>
                                </b-card-header>
                                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <p class="card-text">
                                        <h2>Fence</h2>
                                        </p>
                                        <div class="row">
                                            <div class="col-lg-12 mb-3">
                                                <div class="table-responsive">
                                                    <table class="table table-bordred table-striped mytable">
                                                        <thead>
                                                        <tr>
                                                            <th>FACILITY</th>
                                                            <th>AVAILABILITY</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>Good</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Minor Repair</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Major repair</td>
                                                            <td>No</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Unusable</td>
                                                            <td>No</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>


                        </b-tab>
                        <b-tab title="CLASSROOM">
                            <p>
                                <button type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                </button>
                            <h1>Parent/Guardian Details</h1>
                            </p>

                        </b-tab>
                        <b-tab title="LIBRARY">
                            llllllllll

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
        font-style: bold;
    }

    .sbemis-table div {
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: .5px solid #c5c5c5;
        border-bottom: .5px solid #c5c5c5;
    }

    .mytable tr td:nth-child(odd) {
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

