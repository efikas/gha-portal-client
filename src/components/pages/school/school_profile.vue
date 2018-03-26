<template>
<div>
     <b-card>
         <div class="row">
            <div class="col-lg-6">
                <gmap-map :center="center" :zoom="5" class="gmap" ref="gmap1"></gmap-map>
            </div>
             <div class="col-lg-6">
                ff
            </div>
        </div>
    </b-card>
    <div class="row">
        <div class="col-lg-10">
            <div role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn style="width: 90%" href="#" v-b-toggle.accordion1 variant="info" class="text-left">
                            <i class="fa fa-user-o fb_text"></i>
                            School Basic Info
                        </b-btn>
                        <button class="btn btn-outline-primary pull-right"><i class="fa fa-pencil fb_text"></i></button>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <table class="table account-detailsg" v-if="schoolInfo">
                            <tbody>
                                <tr class="m-0">
                                    <td class=""><strong>Information</strong></td>
                                    <td colspan="3"><strong>Details</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                </tr>
                                <tr class="m-0">
                                    <td class="views">Schhol Name</td>
                                    <td colspan="3"> {{ schoolInfo.data.school_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Address</td>
                                   <td colspan="3">{{ schoolInfo.data.school_address }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Education Level</td>
                                    <td colspan="3">{{ schoolInfo.data.education_levels }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Category</td>
                                    <td colspan="3"> {{ schoolInfo.data.school_category_id }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Type</td>
                                   <td colspan="3"> {{ schoolInfo.data.school_type_id }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Location</td>
                                    <td colspan="3"> {{ schoolInfo.data.school_location }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Town</td>
                                    <td colspan="3"> {{ schoolInfo.data.village_town }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Phone Number</td>
                                   <td colspan="3"> {{ schoolInfo.data.school_phone }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Email</td>
                                    <td colspan="3"> {{ schoolInfo.data.school_email_address }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Website</td>
                                    <td colspan="3"> {{ schoolInfo.data.school_website }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Date Established</td>
                                    <td colspan="3"> {{ schoolInfo.data.established }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Geographical Location</td>
                                    <td colspan="3"> {{ schoolInfo.data.geolocation }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Average Distance</td>
                                   <td colspan="3"> {{ schoolInfo.data.average_distance }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Ownership</td>
                                    <td colspan="3"> {{ schoolInfo.data.school_ownership }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Name of Proprietor</td>
                                   <td colspan="3"> {{ schoolInfo.data.name_of_proprietor }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Shifts</td>
                                    <td colspan="3"> {{ schoolInfo.data.shifts }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Grants</td>
                                    <td colspan="3"> {{ schoolInfo.grants }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Management Committee</td>
                                    <td colspan="3"> {{ schoolInfo.data.management_committee }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Development Plan</td>
                                    <td colspan="3"> {{ schoolInfo.data.development_plan }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Miltigrade</td>
                                   <td colspan="3"> {{ schoolInfo.data.multigrade }}</td>
                                </tr>
                                <tr>
                                    <td class="views">LGA Ward</td>
                                    <td colspan="3"> {{ schoolInfo.ward.name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">School Recognision Status</td>
                                   <td colspan="3"> {{ schoolInfo.data.school_recognition_status }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Number of student</td>
                                    <td colspan="3"> {{ schoolInfo.students }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Number of Teaching Staff</td>
                                    <td colspan="3"> {{ schoolInfo.staffs.teaching }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Number of Non Teaching staff</td>
                                    <td colspan="3"> {{ schoolInfo.staffs.none_teaching }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn style="width: 90%" href="#" v-b-toggle.accordion2 variant="info" class="text-left">
                            <i class="fa fa-user-o fb_text"></i>
                            School Facilities
                        </b-btn>
                        <button class="btn btn-outline-primary pull-right"><i class="fa fa-pencil fb_text"></i></button>
                    </b-card-header>
                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            {{ text }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn style="width: 90%" href="#" v-b-toggle.accordion3 variant="info" class="text-left">
                            <i class="fa fa-user-o fb_text"></i>
                            Library
                        </b-btn>
                        <button class="btn btn-outline-primary pull-right"><i class="fa fa-pencil fb_text"></i></button>
                    </b-card-header>
                    <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            {{ text }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    var unsub;
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'
    import store from 'src/store/store.js'

    import api from '../../../services/app.service'

    Vue.use(VueGoogleMaps, {
        load: {
            key: store.state.gmap_key
            // v: 'OPTIONAL VERSION NUMBER',
            // libraries: 'places', // If you need to use place input
        }
    })
    export default {
        name: "gmaps",
        mounted: function () {

        },
        destroyed: function () {

        },
        data() {
            return {
                center: {
                    lat: 17.387140,
                    lng: 78.491684
                },
                markers: [{
                    position: {
                        lat: 17.387140,
                        lng: 78.491684
                    }
                }, {
                    position: {
                        lat: 12.972442,
                        lng: 77.580643
                    }
                }, {
                    position: {
                        lat: 18.910000,
                        lng: 72.809998
                    }
                }],
                text: `
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                    synth nesciunt you probably haven't heard of them accusamus labore VHS.
                    `,
                schoolInfo: null,
            }
        },
        mounted() {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    setTimeout(() => {
                        this.$refs.gmap1.resize();
                        this.$refs.gmap2.resize();
                        this.$refs.gmap3.resize();
                        this.$refs.gmap4.resize();
                    })
                }
            });
            api.schoolProfile(this.$route.params.id).then(data => {
                this.schoolInfo = data;
            })
            // console.log(this.schoolInfo);
        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
    }
</script>
<style scoped>
    .gmap {
        width: 100%;
        height: 300px;
        margin: 5px auto;
    }
    td.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        color: #555;
    }
</style>
