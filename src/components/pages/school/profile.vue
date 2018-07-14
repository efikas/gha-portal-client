<template>
    <div>
        <b-card v-if="school" class="bg-default-card text-right">
            <a href="#">Exam</a> |
            <a href="#">Attendance</a>
        </b-card>
        <div class="row">
            <div class="col-lg-4">
                <b-card v-if="school" class="bg-default-card">
                    <h5 class="default-color">{{ school.name }} </h5>
                    <gmap-map :center="center" :zoom="16" class="gmap" ref="gmap1">
                        <gmap-marker v-for="m in markers" :key="m.position.lat" :position="m.position" :clickable="true"
                                     :draggable="true" @click="center=m.position"></gmap-marker>
                    </gmap-map>
                </b-card>
            </div>

            <div class="col-lg-8">
                <b-card class="bg-default-card data" v-if="school">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="BASIC">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/basic`" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p>
                                <br/><br/>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordred table-striped mytable">
                                    <tr>
                                        <td><i class="fa fa-home"></i> Name</td>
                                        <td colspan="3">{{ school.name }}</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa fa-map"></i> Address</td>
                                        <td colspan="3">{{ school.address }}</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa fa-envelope"></i> Email</td>
                                        <td colspan="3">{{ school.email }}</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa fa-globe"></i> Website</td>
                                        <td colspan="3">{{ school.website }}</td>
                                    </tr>
                                    <tr>
                                        <td>Education Level</td>
                                        <td>{{ school.education_level }}</td>
                                        <td>Category</td>
                                        <td>{{ school.category }}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>{{ yesNo(school.type) }}</td>
                                        <td>Location</td>
                                        <td>{{ school.location }}</td>
                                    </tr>
                                    <tr>
                                        <td>Town</td>
                                        <td>{{ school.town }}</td>
                                        <td>Phone</td>
                                        <td>{{ school.phone }}</td>
                                    </tr>
                                    <tr>
                                        <td>Date Established</td>
                                        <td>{{ school.established }}</td>
                                        <td>Geo-location</td>
                                        <td>{{ school.geolocation }}</td>
                                    </tr>
                                    <tr>
                                        <td>Average Distance</td>
                                        <td>{{ school.average_distance }}KM</td>
                                        <td>Ownership</td>
                                        <td>{{ school.ownership }}</td>
                                    </tr>
                                    <tr>
                                        <td>Shifts</td>
                                        <td>{{ yesNo(school.shift) }}</td>
                                        <td>Grant</td>
                                        <td>{{ yesNo(school.grants) }}</td>
                                    </tr>
                                    <tr>
                                        <td>Management Committee</td>
                                        <td>{{ yesNo(school.management_committee) }}</td>
                                        <td>Development Plan</td>
                                        <td>{{ yesNo(school.development_plan) }}</td>
                                    </tr>
                                    <tr>
                                        <td>Mulitigrade</td>
                                        <td>{{ yesNo(school.multigrade) }}</td>
                                        <td>LGA Ward</td>
                                        <td>{{ school.ward.name }}</td>
                                    </tr>
                                    <tr>
                                        <td>Recognision Status</td>
                                        <td>{{ yesNo(school.recognition_status) }}</td>
                                        <td>Number of student</td>
                                        <td>{{ school.students }}</td>
                                    </tr>
                                    <tr>
                                        <td>Teaching Staff</td>
                                        <td>{{ school.staffs.teaching }}</td>
                                        <td>Non Teaching Staff</td>
                                        <td>{{ school.staffs.none_teaching }}</td>
                                    </tr>
                                </table>
                            </div>

                        </b-tab>
                        <b-tab title="FACILITIES">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/facilities`" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
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
                                                <td>{{ healths }}</td>
                                            </tr>
                                            <tr>
                                                <td>Learning Materials</td>
                                                <td>{{ learnings }}</td>
                                            </tr>
                                            <tr>
                                                <td>Water Source</td>
                                                <td>{{ waters }}</td>
                                            </tr>
                                            <tr>
                                                <td>Toilets</td>
                                                <td>{{ toilets }}</td>
                                            </tr>
                                            <tr>
                                                <td>Play facilities</td>
                                                <td>{{ play_facilities }}</td>
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
                                    <a :href="`${schoolId}/update/classroom`" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
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
                                            <tr v-for="classroom in school.classrooms">
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
                                <a :href="`${schoolId}/update/library`" type="button"
                                   class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                            </p>

                        </b-tab>
                        <b-tab title="SBMC">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/sbmc`" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p>
                                <div class="table-responsive">
                                    <table class="table table-bordred table-striped mytable classroom-table">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Office</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="official in school.sbmc">
                                            <td>{{ official.name }}</td>
                                            <td>{{ official.office }}</td>
                                            <td>{{ official.phone }}</td>
                                            <td>{{ official.email }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </b-tab>
                        <b-tab title="OTHERS">
                            <div>
                                <p>
                                    <a :href="`${schoolId}/update/others`" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                </p><br/><br/>
                            </div>

                            <div class="row">
                                <div class="col-lg-12 mb-3">
                                    <div class="table-responsive mb-5">
                                        <table class="table table-bordred table-striped mytable">
                                            <thead>
                                            <tr>
                                                <th>FACILITY</th>
                                                <th>NUMBER AVAILABLE</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="facility in school.facilities">
                                                <td>{{ facility.type}}</td>
                                                <td>{{ facility.pivot.no_facility}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="mb-2">
                                        <p>
                                            <span class="pull-left"><h4>Projects</h4></span>
                                            <a :href="`${schoolId}/update/project`" type="button"
                                               class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                                        </p>
                                        <div class="table-responsive">
                                            <table class="table table-bordred table-striped mytable classroom-table">
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Cost</th>
                                                    <th>Funding</th>
                                                    <th>Date</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="project in school.projects">
                                                    <td>{{ project.name }}</td>
                                                    <td>{{ project.cost }}</td>
                                                    <td>{{ project.funding }}</td>
                                                    <td>{{ project.date }}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>

        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'
    import store from 'src/store/store.js'
    import {mapGetters} from 'vuex'
    import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
    // import VueCollapse from 'vue2-collapse'

    // Loading the plugin into the Vue.
    // Vue.use(VueCollapse)
    Vue.use(VueGoogleMaps, {
        load: {
            key: store.state.gmap_key
            // v: 'OPTIONAL VERSION NUMBER',
            // libraries: 'places', // If you need to use place input
        }
    });
    export default {
        components: {
            SweetModal,
            SweetModalTab
        },
        data() {
            return {
                totalStudent: 0,
                totalTeachingStaff: 0,
                totalNonTeachingStaff: 0,
                schoolId: 421,

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
            yesNo(id) {
                return id === 1 ? 'Yes' : 'No';
            },
            show() {
                this.$refs.modal.open();
            },
            submit() {
            }
        },
        computed: {
            ...mapGetters([
                'school',
                'data'
            ]),
            power_sources() {
                return this.data.power_sources.reduce((prev, next, index) => {
                    if(this.school.power_source_ids.indexOf(next.id) === 0) {
                        prev.push(next.power_sources)
                    }
                    return prev
                }, []).join(', ')
            },
            waters() {
                return this.data.water.reduce((prev, next, index) => {
                    if(this.school.water_ids.indexOf(next.id) === 0) {
                        prev.push(next.source)
                    }
                    return prev
                }, []).join(', ')
            },
            healths() {
                return this.data.healths.reduce((prev, next, index) => {
                    if(this.school.health_ids.indexOf(next.id) === 0) {
                        prev.push(next.facility)
                    }
                    return prev
                }, []).join(', ')
            },
            toilets() {
                return this.data.toilet_types.reduce((prev, next, index) => {
                    if(this.school.toilet_ids.indexOf(next.id) === 0) {
                        prev.push(next.type)
                    }
                    return prev
                }, []).join(', ')
            },
            play_facilities() {
                return this.data.play_facilities.reduce((prev, next, index) => {
                    if(this.school.play_facility_id === next.id) {
                        prev.push(next.type)
                    }
                    return prev
                }, []).join(', ')
            },
            learnings() {
                return this.data.healths.reduce((prev, next, index) => {
                    if(this.school.learning_ids.indexOf(next.id) === 0) {
                        prev.push(next.material)
                    }
                    return prev
                }, []).join(', ')
            }
        },
        async created() {
            console.log(this.$store.getters.data)
            await this.$store.dispatch('school', this.$route.params.id);
            // data.play_facilities.forEach(item => {
            //     this.play_facilities += item.play_facilities + ', '
            // });
            // data.learning.forEach(item => {
            //     this.learning += item.material + ', '
            // });
            // data.play_facilities.forEach(item => {
            //     this.play_facilities += item.play_facilities + ', '
            // });
            // data.health.forEach(item => {
            //     this.health += item.facility + ', '
            // });
            // data.water.forEach(item => {
            //     this.water += item.source + ', '
            // });
            // data.toilet.forEach(item => {
            //     this.toilet += item.toilet + ', '
            // })
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

