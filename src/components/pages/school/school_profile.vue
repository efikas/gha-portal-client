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
                        <button class="btn btn-outline-danger pull-right">edit</button>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                            {{ text }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
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
                        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
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
</style>
