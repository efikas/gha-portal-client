<template>
    <div>
        <b-card>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <div style="height: 350px;">
                <IEcharts :option="bar" :loading="loading" @ready="onReady"></IEcharts>
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
        name: "barchart2",
        props: ['iData'],
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
                
                //===========basic chart data start=========
            bar: {
                grid: {
                    top: 25,
                    bottom: 40,
                    right: '7%',
                },
                xAxis: {
                    data: [],
                    axisLabel: {
                        inside: true,
                        textStyle: {
                            color: '#fff'
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    }
                },
                series: [{
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#6ebabe'
                        }
                    },
                    data: []
                }],
                toolbox: {
                        feature: {
                            myTool1: {
                                show: true,
                                title: 'custom extension method 1',
                                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                                onclick: function (){
                                    alert('myToolHandler1')
                                }
                            },
                            myTool2: {
                                show: true,
                                title: 'custom extension method',
                                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                                onclick: function (){
                                    alert('myToolHandler2')
                                }
                            }
                        }
                    }
            },
               
            }
        },
        created() {
           
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
        },
        watch: {
            iData(value){
                value['value'].forEach((item, index) => {
                    this.bar.xAxis.data.push(item.name);
                    this.bar.series[0].data.push(item.data);
                })
                this.ajaxloading = false;
            }
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="chartist/dist/chartist.css"></style>
