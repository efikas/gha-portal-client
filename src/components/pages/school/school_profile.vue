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
                        <table class="table account-detailsg">
                            <tbody>
                                <tr class="m-0">
                                    <td class="views">First Name</td>
                                    <td colspan="3"> 4yyyyyyyyyyyyyyyyyyyyyy</td>
                                </tr>
                                <tr>
                                    <td class="views">Last Name</td>
                                   <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Middle Name</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Gender</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Email Address</td>
                                   <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Phone Number</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Date of Birth</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Birth Place</td>
                                   <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">State of Birth</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Local Government</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Home Town</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Marital Status</td>
                                    <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">Religious Status</td>
                                   <td colspan="3"> 4</td>
                                </tr>
                                <tr>
                                    <td class="views">House Address</td>
                                    <td colspan="3"> 4</td>
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
                    `
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
