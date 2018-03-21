<template>
    <div>
        <b-card>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <div style="height: 305px;">
                <IEcharts :option="stacked" :loading="loading" @ready="onReady"></IEcharts>
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
        name: "stackbarchart",
        props: ['iData', 'colors'],
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
                legend: [],
                graphData: [],
                stacked: {
                    title: {

                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { //  Axis indicator, coordinate trigger effective
                            type: 'shadow' // The default is a straight line：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: []
                    },

                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                        name: 'B',
                        type: 'bar',
                        stack: 'advertising',
                        data: []
                    }, {
                        name: 'C',
                        type: 'bar',
                        stack: 'advertising',
                        data: []
                    }]
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
        watch: {
            iData(value){
                this.stacked.legend.data = value['legend'];
                this.stacked.xAxis[0].data = value['value']['distributions']
                value['value']['data'].forEach((item, index) => {
                    this.graphData.push({
                        name: value['legend'][index],
                        type: 'bar',
                        stack: 'advertising',
                        data: value['value']['data'][index]
                    });
                });
                this.stacked.series = this.graphData;
            }
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="chartist/dist/chartist.css"></style>
