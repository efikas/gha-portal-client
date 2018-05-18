<template>
    <div>
         <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center widget_social_icons box_shadow orange">
                    <div class="p-2">
                        <div class="widget_social_inner1">
                            <i class="material-icons fb_text">home</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ schools }}</h4>
                        </div>
                    </div>
                    <p class="m-0 orange text-center widget-social_link tiny upper"><a href="#" style="display: block">Schools <i class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center widget_social_icons box_shadow pink">
                    <div class="p-2">
                        <div class="widget_social_inner1">
                            <i class="material-icons fb_text">group</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ staff }}</h4>
                        </div>
                    </div>
                    <p class="m-0 pink text-center widget-social_link tiny upper"><a href="#" style="display: block">Staffs <i class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="text-center widget_social_icons box_shadow blue">
                    <div class="p-2">
                        <div class=" widget_social_inner1">
                            <i class="material-icons fb_text">person</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ students }}</h4>
                        </div>
                    </div>
                    <p class="m-0 blue text-center widget-social_link tiny upper"><a href="#" style="display: block">Students <i class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <div class="text-center widget_social_icons box_shadow teal">
                    <div class="p-2">
                        <div class=" widget_social_inner1">
                            <i class="material-icons fb_text">people</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ guardians }}</h4>
                        </div>
                    </div>
                    <p class="m-0 teal text-center widget-social_link tiny upper"><a href="#" style="display: block">Parent/Guardian <i class="fa fa-angle-right"></i></a></p>
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
                <donut :iData="this.stu_sec_sch"></donut>
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
                <piechart :header="'Distribution of School In Rural/Urban'" :data="{}"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :header="'Total Number of Attendance Weekly'" :data="{}"></piechart> -->
            <!-- </div>   -->

            <div class="col-lg-6 mb-3">
                <piechart :iData="this.staff_gen_dist"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <stackbar :iData="this.male_female_staff"></stackbar>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :iData="this.staff_gen_dist"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <stackbar :iData="this.male_female_staff"></stackbar>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :iData="this.staff_dist"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <doughnut :iData="this.gen_acad_staff_dist"></doughnut>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import 'zrender/lib/vml/vml';
    require('swiper/dist/css/swiper.css')
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    import piechart from '../charts/piechart.vue'
    import barchart2 from '../charts/barchart2.vue'
    import donut from '../charts/donut.vue'
    import stackbar from '../charts/stackbar.vue'
    import doughnut from '../charts/doughnut.vue'

    let sbemisData = require('../../modules/draw-graphs.js')

    Vue.use(VueAwesomeSwiper); 
    var unsub;
    export default {
        name: "echart",
        components: {
            piechart,
            barchart2,
            stackbar,
            doughnut,
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
                staff_dist: {},
                staff_gen_dist: {},
                male_female_staff: {},
                gen_acad_staff_dist: {},

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
            this.$dashboard.statistics()
                .then((data) => {
                    this.schools = data.schools.total;
                    this.staff = data.staffs.total;
                    this.students = data.students.total;
                    
                    let myData = sbemisData.dataMapping(data);
                    // console.log(myData.priv_sch);

                    this.priv_sch = {
                        header: 'Private School Distribution',
                        value: myData.priv_sch
                    };
                    this.pub_sch = {
                        header: 'Public School Distributiong',
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
                    // console.log(myData.sch_rural)
                    this.sch_rural = {
                        header: 'School Distribution in Rural Area',
                        value: myData.sch_rural
                    };
                    this.sch_urban = {
                        header: 'School Distribution in Urban Area',
                        value: myData.sch_urban
                    };
                    // this.sch_urban = {
                    //     header: 'School Distribution i Rural/Urban Area',
                    //     value: myData.sch_urban
                    // };
                    // this.sch_urban = {
                    //     header: 'Weekly Attendance',
                    //     value: myData.sch_urban
                    // };
                    this.staff_gen_dist = {
                        header: 'Staff Gender Comparism',
                        value: myData.staff_gen_dist
                    };
                    this.staff_dist = {
                        header: 'Teaching Staff/Non Teaching Staff Comparision',
                        value: myData.staff_dist
                    };
                    this.male_female_staff = {
                        header: 'Male/Female Staff Distribution',
                        legend: ['Male', 'Female'],
                        value: myData.male_female_staff
                    };
                    this.gen_acad_staff_dist = {
                        header: 'Teaching/Non Teaching Staff Distribution',
                        legend: ['Male', 'Female'],
                        value: myData.gen_acad_staff_dist
                    };
                })
                .catch((error) => window.alert("failed"))
        },
        mounted: function () {
            
            // unsub = this.$store.subscribe((mutation, state) => {
            //     if (mutation.type == "left_menu") {
            //         this.instances.forEach(function (item, index) {
            //             setTimeout(function () {
            //                 item.resize();
            //             });
            //         });
            //         setTimeout(() => {
            //             this.$refs.swiper.swiper.update();
            //         });
            //     }
            // });
        },
        beforeRouteLeave(to, from, next) {
            // unsub();
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
    @import "~components/layouts/css/customvariables";

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

    .box_shadow {
        box-shadow: 1px 1px 10px 0px #ccc;
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

