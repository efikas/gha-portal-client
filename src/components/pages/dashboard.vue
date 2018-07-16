<template>
    <div>

        <topCard></topCard>
        <div class="row">
            <div class="col-lg-6 mb-3">
                <piechart :iData="private_school"></piechart>
            </div>
            <!--<div class="col-lg-6 mb-3">-->
                <!--<piechart :iData="public_school"></piechart>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<piechart :iData="primary_school"></piechart>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<piechart :iData="secondary_school"></piechart>-->
            <!--</div>-->
            <!--<div class="col-lg-6">-->
                <!--<donut :iData="secondary_school_student"></donut>-->
            <!--</div>-->
            <!--<div class="col-lg-6">-->
                <!--<donut :iData="primary_school_student"></donut>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<barchart :iData="rural_school"></barchart>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<barchart :iData="urban_school"></barchart>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<piechart :iData="staff_category_compare"></piechart>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<stackbar :iData="staff_gender_distribution"></stackbar>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<piechart :iData="staff_gender_compare"></piechart>-->
            <!--</div>-->
            <!--<div class="col-lg-6 mb-3">-->
                <!--<doughnut :iData="staff_academic_distribution"></doughnut>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';


    import 'zrender/lib/vml/vml';

    require('swiper/dist/css/swiper.css')
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    import piechart from '../patches/piechart.vue'
    import barchart from '../patches/barchart.vue'
    import donut from '../patches/donut.vue'
    import stackbar from '../patches/stackbar.vue'
    import doughnut from '../patches/doughnut.vue'
    import topCard from './dashboard/partial/topCard'
    import {mapGetters} from 'vuex'

    import {dataMapping} from '../../modules/draw-graphs.js';

    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "echart",
        components: {
            topCard,
            piechart,
            barchart,
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
                reshape: null,

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
            }
        },
        computed: {
            ...mapGetters([
                'statistics'
            ]),

            private_school() {
                return {header: 'Private School Distribution', value: this.reshape}
            },
            public_school() {
                return {header: 'Public School Distribution', value: this.reshape.pub_sch}
            },
            primary_school() {
                return {header: 'Primary School Distribution', value: this.reshape.pri_sch}
            },
            secondary_school() {
                return {header: 'Secondary School Distribution', value: this.reshape.sec_sch}
            },
            secondary_school_student() {
                return {
                    header: 'Student Population In Primary School',
                    value: this.reshape.stu_sec_sch
                }
            },
            primary_school_student() {
                return {
                    header: 'Student Population In Primary School',
                    value: this.reshape.stu_pri_sch
                }
            },
            rural_school() {
                return {
                    header: 'School Distribution in Rural Area',
                    value: this.reshape.sch_rural
                }
            },
            urban_school() {
                return {
                    header: 'School Distribution in Urban Area',
                    value: this.reshape.sch_rural
                }
            },
            staff_gender_compare() {
                return {
                    header: 'Staff Gender Comparison',
                    value: this.reshape.staff_gen_dist
                }
            },
            staff_category_compare() {
                return {
                    header: 'Teaching Staff/Non Teaching Staff Comparision',
                    value: this.reshape.staff_dist
                }
            },
            staff_academic_distribution() {
                return {
                    header: 'Teaching/Non Teaching Staff Distribution',
                    legend: ['Male', 'Female'],
                    value: this.reshape.gen_acad_staff_dist
                }
            },
            staff_gender_distribution() {
                return {
                    header: 'Male/Female Staff Distribution',
                    legend: ['Male', 'Female'],
                    value: this.reshape.male_female_staff
                }
            }
        },

        async created() {
            // alert(111);
            await this.$store.dispatch('loadStatistics')
                .then(() => {
                    this.reshape = dataMapping(this.statistics);
                    console.log(this.private_school)
                });

            // let myData = dataMapping(data);
            //
            // console.log(this.reshape)
            //
            // this.male_female_staff = {
            //     header: 'Male/Female Staff Distribution',
            //     legend: ['Male', 'Female'],
            //     value: myData.male_female_staff
            // };

        },

    }
</script>
<style type="text/css" lang="scss" scoped>
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

