<template>
    <div>
         <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow">
                    <div class="widget_social_inner1">
                        <i class="fa fa-user-o fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mt-2 text_size">7465+</h4>
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
                        <h4 class="mb-0 mt-2 text_size">1245+</h4>
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
                        <h4 class="mb-0 mt-2 text_size">742+</h4>
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
                        <h4 class="mb-0 mt-2 text_size">465+</h4>
                        <p class="m-0 mt-2">Parent/Guardian</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12" v-for="(schoolsPerLga, index) in schoolsPerLgas" :key="index">
                <div class="card user-profile">
                    <div class="card-block">
                        <div class="text-left">
                            <span class="float-right btn btn-success"  style="margin: 10px 10px 15px 0px">{{ schoolsPerLga.total.schools }}</span>
                            <h4 class="text-primary float-left" style="margin: 10px 0px 15px 10px">{{ schoolsPerLga.name }}</h4>
                        </div>
                    </div>
                    <table class="table table-bordred table-striped">
                        <tbody>
                            <tr @click="gotoLink()">
                                <td>Public Schools</td>
                                <td> {{ schoolsPerLga.public.total }}</td>
                            </tr>
                            <tr>
                                <td>Private Schools</td>
                                <td> {{ schoolsPerLga.private.total }}</td>
                            </tr>
                            <tr>
                                <td>Primary Schools</td>
                                <td> {{ schoolsPerLga.total.primary }}</td>
                            </tr>
                            <tr>
                                <td>Secondary Schools</td>
                                <td> {{ schoolsPerLga.total.secondary }}</td>
                            </tr>
                            <tr>
                                <td>Public Primary Schools</td>
                                <td> {{ schoolsPerLga.public.primary }}</td>
                            </tr>
                            <tr>
                                <td>Private Primary Schools</td>
                                <td> {{ schoolsPerLga.private.primary }}</td>
                            </tr>
                            <tr>
                                <td>Public Secondary Schools</td>
                                <td> {{ schoolsPerLga.public.secondary }}</td>
                            </tr>
                            <tr>
                                <td>Private Secondary Schools</td>
                                <td> {{ schoolsPerLga.private.secondary }}</td>
                            </tr>
                            <tr>
                                <td colspan="2"><a href="" class="pull-right">details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
         <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <h5 class="ml-3 head_color">Annual Stats</h5>
                    <div style="height: 305px;">
                        <IEcharts :option="ajaxbar_chart" :loading="ajaxloading" @ready="onReady" ref="ajaxbar_chart"></IEcharts>
                    </div>
                </b-card>
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
    import countTo from 'vue-count-to';

    import datatable from "components/plugins/DataTable/DataTable.vue";
    import vScroll from "components/plugins/scroll/vScroll.vue";
    import portfolio from "components/widgets/portfolio/portfolio.vue"
    import VueChartist from 'v-chartist'
    import api from '../../../services/app.service'

    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "index2",
        components: {
            IEcharts,
            datatable,
            countTo,
            vScroll,
            portfolio,
            VueChartist
        },
        data() {
            return {
                serverdata: [],
                instances: [],
                loading: false,
                ajaxloading: true,
                schoolsPerLgas: [],
                lgas: [],
                lgasPrimary: [],
                lgasSecondary: [],
                lgasPrivate: [],
                lgasPublic: [],

                //===========AJAX chart data start=========
                ajaxbar_chart: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        bottom: '10%',
                        right: '1%',
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            //
                        }
                    },
                    calculable: true,
                    legend: {
                        data: ['Public', 'Private', 'Primary', 'Secondary']
                    },
                    color: [
                                '#c16989', '#a3ab60', '#d2bf6f', '#e6995b', '#4ca1ab',
                                '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                '#D7504B', '#dcba42', '#F4E001', '#F0809A', '#26C0C0'
                            ],
                    xAxis: [{
                        type: 'category',
                        name: 'YEAR', 
                        nameRotate: 60,
                        data: ['ADO', 'EFON', 'ADO', 'ADO', 'ADO', 'EMURE', 'ADO', 'ADO', 'IJERO', 'IKERE',
                                'IKOLE', 'ADO', 'IREPO', 'ISE', 'MOBA', 'OYE']
                    }],
                    yAxis: [{
                            type: 'value',
                            name: '%',
                            axisLabel: {
                                formatter: '{value} '
                            }
                        },
                        {
                            type: 'value',

                            axisLabel: {
                                formatter: '{value} '
                            }
                        }
                    ],
                    series: [{
                    name: 'Public',
                    type: 'bar',
                    stack: 'search engine',
                    data: []
                }, {
                    name: 'Private',
                    type: 'bar',
                    stack: 'search engine',
                    data: []
                }, {
                    name: 'Primary',
                    type: 'bar',
                    stack: 'advertising',
                    data: []
                }, {
                    name: 'Secondary',
                    type: 'bar',
                    stack: 'advertising',
                    data: []
                }]
                },
                //===========AJAX chart data end=========\
            }
        },
        mounted: function () {
            api.getSchoolsPerLga()
                .then((data) => {
                    this.schoolsPerLgas = data;
                    data.forEach(item => {
                        // this.lgas.push(item.name);
                        this.lgasPrimary.push(item.total.primary);
                        this.lgasSecondary.push(item.total.secondary);
                        this.lgasPrivate.push(item.private.total);
                        this.lgasPublic.push(item.public.total);
                        
                        // this.ajaxbar_chart.xAxis[0].data = this.lgas;
                        this.ajaxbar_chart.series[0].data = this.lgasPublic;
                        this.ajaxbar_chart.series[1].data = this.lgasPrivate;
                        this.ajaxbar_chart.series[2].data = this.lgasPrimary;
                        this.ajaxbar_chart.series[3].data = this.lgasSecondary;
                        this.ajaxloading = false;
                    })
                })
                .catch((error) => console.log(error)
            ),
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

            // axios.get("http://www.filltext.com/?rows=1&chartdata={numberArray|12,100}").then(response => {
            //         this.ajaxbar_chart.series[0].data = response.data[0].chartdata;
            //         this.ajaxloading = false;
            //     })
            //     .catch(function (error) {

            //     });

        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },

        methods: {
            gotoLink(){
                console.log('clicked');
            },
            onReady(instance) {
                this.instances.push(instance)
            },
            // ===chart animation===
            update_chart() {
                setInterval(() => {
                    for (var i = 0; i < this.ajaxbar_chart.series.length; i++) {
                        this.ajaxbar_chart.series[i].data.shift();
                        this.ajaxbar_chart.series[i].data.push(Math.floor((Math.random() * (1000 - 90) + 90) +
                            1));
                    }
                }, 4000);
            },
            // ===chart animation===
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="assets/css/widgets.css" scoped></style>
<style scoped>
    .swiper-pagination {
        position: relative;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal>.swiper-pagination-bullets {
        top: 5px;
    }

    .swiper-container {
        margin-top: 0px !important;
    }
</style>
<style type="text/css" lang="scss">
    .index2_table .table-responsive .card {
        border: none;
        box-shadow: none;
        margin-bottom: 0;
    }

    .index2_swiper .swiper-pagination-bullet-active {
        background: #08aa80;
    }
    /*===============================notes========*/

    .notes {
        line-height: 22px;
        font-size: 13px;
        padding: 0 15px 0 36px;
        position: relative;
        outline: none;
        background: #fff;
        background-size: 100% 30px;
    }

    .notes p {
        border-bottom: 1px solid #dfe8ec;
        ;
    }

    .notes::after {
        content: '';
        position: absolute;
        width: 0;
        top: 0;
        left: 25px;
        bottom: 0;
        border-left: 1px solid #0fd1c1;
    }

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

    .swiper-pagination {
        margin: 0 !important;
    }

    .text-blue {
        color: #215fe2;
    }

    .progress_color2 .progress-bar {
        background-color: #7FAFF7;
    }

    .icon_color {
        font-size: 27px;
        color: #828686;
    }

    .icon_color1 {
        font-size: 25px;
        color: #6e8dce;
    }

    .line {
        border-top: 1px solid #ccc;
    }

    .text_head_Color {
        color: #707373;
    }

    .below_text {
        color: #a2a1a1;
    }

    .index2_table th {
        color: #686868;
    }

    .index2_table td {
        color: #686868;
    }

    .user_color {
        color: #8e8c8e;
    }

    .count1 {
        font-size: 18px;
        color: #686868;
    }

    .ti_color {
        color: #215fe2;
    }

    .fb_color {
        font-size: 18px;
        color: #3B5998;
    }

    .twi_color {
        color: #00aced;
        font-size: 18px;
    }

    .gi_color {
        color: red;
        font-size: 18px;
    }

    .pin_color {
        color: red;
    }

    .cam_color {
        color: green
    }

    .events1 {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-top: 15px;
        margin-right: -20px;
        font-size: 18px;
        color: #555;
    }

    .online_dot img {
        position: relative;
    }

    .online_dot::after {
        content: "";
        position: absolute;
        margin-top: -28px;
        height: 11px;
        width: 11px;
        border: 2px solid #FFF;
        border-radius: 50%;
        background-color: green;
        margin-left: -13px;
    }

    .conversation-list .ctext-wrap p {
        margin: 0;
        padding-top: 3px;
    }

    .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .conversation-list .ctext-wrap p {
        margin: 0;
        /*padding-top: 3px;*/
    }

    .ctext-wrap p {
        margin-bottom: 10px;
    }

    .conversation-list .odd .conversation-text {
        float: right;
        margin-right: 25px;
        text-align: right;
        width: 95%;
    }

    .conversation-list .ctext-wrap i {
        color: #777;
        display: block;
        font-size: 11px;
        font-style: normal;
        position: relative;
    }

    .conversation-list .conversers1 .ctext-wrap {
        background: #D8F1E4;
    }

    .conversation-list .ctext-wrap {
        border-radius: 3px;
        display: inline-block;
        padding: 5px 10px;
        position: relative;
        box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1)
    }

    .text-field {
        padding: 6px 10px;
    }

    .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .conversation-list .ctext-wrap:after {
        right: 100%;
        top: 0;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        margin-left: -1px;
        border-top: 0 solid #fff;
        border-right: 12px solid #e9f9ff;
        border-bottom: 14px solid transparent;
    }

    .clearfix:after {
        clear: both;
    }

    .back_color1 {
        width: auto;
        height: 274px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .conversation-list .conversation-text {
        float: left;
        font-size: 13px;
        width: 70%;
    }

    .clearfix:before,
    .clearfix:after {
        content: " ";
        display: table;
    }

    .conversation-list .conversers2 .ctext-wrap {
        background: #e9f9ff;
    }

    .m-t-10 {
        margin-top: 10px !important;
    }

    .conversation-list {
        width: auto;
        height: 340px;
        padding-left: 27px;
    }

    .profile-img {
        background-color: #fff;
    }
    .chat-conversation{
        width: 100%;
    }
    .table {
        font-weight: bold;
    }
    .table tr {
        cursor: pointer;
    }
    .table tr:hover {
        background-color: #ccc !important;
    }
</style>
<style src="chartist/dist/chartist.css"></style>
