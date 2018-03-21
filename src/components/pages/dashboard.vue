<template>
    <div>
         <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class="widget_social_inner1">
                        <i class="fa fa-user-o fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mt-2 text_size">{{ schools }}</h4>
                        <p class="m-0 mt-2">Schools</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow ">
                    <div class="widget_social_inner1">
                        <i class="fa fa-link fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{ staff }}</h4>
                        <p class="m-0 mt-2">Staff</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class=" widget_social_inner1">
                        <i class="fa fa-comments-o fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{ students }}</h4>
                        <p class="m-0 mt-2">Students</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class=" widget_social_inner1">
                        <i class="fa fa-clone fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{ guardians }}</h4>
                        <p class="m-0 mt-2">Parent/Guardian</p>
                    </div>
                </div>
            </div>
        </div>
         <div class="row">
             <div class="col-lg-6 mb-3">
                <piechart :iData="this.priv_sch"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :iData="this.pub_sch"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :iData="this.pri_sch"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :iData="this.sec_sch"></piechart>
            </div>
            <div class="col-lg-6">
                <donut :iData="this.stu_pri_sch"></donut>
            </div>
             <div class="col-lg-6">
                <donut :iData="this.stu_sec_sch"></donut>
            </div>
            <div class="col-lg-6 mb-3">
                <barchart2 :iData="this.sch_rural"></barchart2>
            </div>
            <div class="col-lg-6 mb-3">
                <barchart2 :iData="this.sch_urban"></barchart2>
            </div>
            
            <!-- <div class="col-lg-6 mb-3">
                <piechart :header="this.PRIV_SCH['header']" :data="this.data"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :header="this.PRIV_SCH['header']" :data="this.data"></piechart> -->
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import 'zrender/lib/vml/vml';
    require('swiper/dist/css/swiper.css')
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    // import api from '../../services/app.service'
    import piechart from '../charts/piechart.vue'
    import barchart2 from '../charts/barchart2.vue'
    import donut from '../charts/donut.vue'
    let sbemisData = require('../../modules/draw-graphs.js')
    import JSONData from '../../modules/dashboard.json'

    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "echart",
        components: {
            piechart,
            barchart2,
            donut
        },
        data() {
            return {
                serverdata: [],
                instances: [],
                loading: false,
                ajaxloading: true,
                schools: 'loading...',
                staff: 'loading...',
                students: 'loading...',
                guardians: 'loading...',
                priv_sch: {},
                pub_sch: {},
                pri_sch: {},
                sec_sch: {},
                sch_rural: {},
                sch_urban: {},
                stu_sec_sch: {},
                stu_pri_sch: {},
                // STU_ATTEND: {},
                // STAFF_GEN_ST: {},
                // STAFF_ST: {},
                // GEN_ACAD_STAFF_ST: {},
                // GEN_NON_STAFF_ST: {},
                // STAFF_SCH_ST: {},
                // MALE_STAFF: {},
                // FEMALE_STAFF: {},
                
            }
        },
        created() {
            // api.statistics()
            //     .then((data) => {
            //     
            //     this.schools = data.schools.total
            //     this.staffs = data.staffs.total
            //     this.students = data.students.total
            //     })
            //     .catch((error) => window.alert("failed"))
        },
        mounted: function () {
            // axios.get("http://192.168.15.22:5000/api/statistics")
            //     .then(response => {

                    let data = JSONData;
                    // let data = response.data;
                    this.schools = data.schools.total;
                    this.staff = data.staffs.total;
                    this.students = data.students.total;
                    
                    let myData = sbemisData.dataMapping(data);
                    // console.log(data);

                    this.priv_sch = {
                        header: 'Private School Distribution',
                        value: myData.priv_sch
                    };
                    this.pub_sch = {
                        header: 'Public School Distribution',
                        value: myData.pub_sch
                    };
                    this.pri_sch = {
                        header: 'Primary School Distribution',
                        value: myData.pri_sch
                    };
                    this.sec_sch = {
                        header: 'Secondary School Distribution',
                        value: myData.sec_sch
                    };
                    this.stu_sec_sch = {
                        header: 'Student Population In Secondary School',
                        value: myData.stu_sec_sch
                    };
                    this.stu_pri_sch = {
                        header: 'Student Population In Primary School',
                        value: myData.stu_pri_sch
                    };
                    console.log(myData.sch_rural)
                    this.sch_rural = {
                        header: 'School Distribution in Rural Area',
                        value: myData.sch_rural
                    };
                    this.sch_urban = {
                        header: 'School Distribution in Urban Area',
                        value: myData.sch_urban
                    };
                // });
            
                
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function (item, index) {
                        setTimeout(function () {
                            item.resize();
                        });
                    });
                    setTimeout(() => {
                        this.$refs.swiper.swiper.update();
                    });
                }
            });
        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },

        methods: {
            onReady(instance) {
                this.instances.push(instance)
            },
        },

        computed: {
            data: ()=>{
                
            }
        }
        
    }
</script>
<style type="text/css" lang="scss">

    .social .bg-default-card .info {
        font-size: 12px;
    }

    .social .bg-default-card span {
        display: block;
        text-transform: uppercase;
    }

    .social .bg-default-card .value {
        font-size: 40px;
        line-height: normal;
    }


    .social .bg-default-card {
        i {
            transition: 300ms;
        }
        &:hover {
            i {
                font-size: 45px;
                transition: 300ms;
            }
        }
    }

    .social_cuntdata {
        font-weight: bold;
        font-size: 18px;
    }

    .subscribe_btn {
        background-color: transparent;
        border: 0;
        outline: none;
    }

    .widget_social_icons {
        background-color: #fff;
    }

    .fb_text {
        color: #215fe2;
        font-size: 28px;
    }

    .box_shadow {
        box-shadow: 2px 2px 15px 0px #ccc;
    }

    .head_color {
        color: #686868;
    }

    .text_size {
        font-size: 25px;
        color: #797f82;
    }

    .text-ash {
        color: #575f65;
    }

    .text_color {
        color: #646161 !important;
    }

    .text-blue {
        color: #215fe2;
    }
    .icon_color {
        font-size: 27px;
        color: #828686;
    }

    .icon_color1 {
        font-size: 25px;
        color: #6e8dce;
    }

</style>

