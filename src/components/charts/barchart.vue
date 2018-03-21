<template>
    <div>
        <b-card>
            <h5 class="ml-3 head_color">Annual Stats</h5>
            <div style="height: 305px;">
                <IEcharts :option="ajaxbar_chart" :loading="ajaxloading" @ready="onReady" ref="ajaxbar_chart"></IEcharts>
            </div>
        </b-card>
    </div>
</template>
<script>
    import Vue from 'vue';

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import 'zrender/lib/vml/vml';
    require('swiper/dist/css/swiper.css')

    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import countTo from 'vue-count-to';

    import vScroll from "components/plugins/scroll/vScroll.vue";
    import VueChartist from 'v-chartist'

    import 'echarts/lib/chart/pie';

    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/tooltip';

    import 'echarts/lib/component/title';

    import 'echarts/lib/component/markPoint';
    import 'echarts/lib/component/markLine';

    import 'echarts/lib/component/timeline';
    import 'echarts/lib/component/toolbox';

    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "barchart",
        props: ['data', 'colors'],
        components: {
            IEcharts,
            countTo,
            vScroll,
            VueChartist,
        },
        data() {
            return {
                serverdata: [],
                instances: [],
                loading: false,
                ajaxloading: true,                
                
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
                        data: ['PROJECTS', 'SALES']
                    },
                    color: this.colors || ['#a0bce5', '#baf2e1'],
                    xAxis: [{
                        type: 'category',
                        name: 'YEAR',
                        data: this.data || ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
                            '2016', '2017'
                        ]
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
                            name: 'PROJECTS',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name: 'SALES',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },

                    ]
                },
               
            }
        },
        created() {
           
        },
        mounted: function () {
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
            axios.get("http://www.filltext.com/?rows=1&chartdata={numberArray|12,100}").then(response => {
                    this.ajaxbar_chart.series[0].data = response.data[0].chartdata;
                    this.ajaxloading = false;
                })
                .catch(function (error) {

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
<style src="chartist/dist/chartist.css"></style>
