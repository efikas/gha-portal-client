<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right" @click="exportExcel"></a>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <div style="height: 305px;">
                <IEcharts :option="doughnut" :loading="loading" @ready="onReady"></IEcharts>
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
    import { exportToExcel } from '../mixins/exportToExcel'

    // Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "doughnut",
        props: ['iData', 'colors'],
         mixins: [exportToExcel],
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
                graphData: [],
                doughnut: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: []
                    },
                    series: [{
                        name: 'Sales',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: []
                    }]
                }
               
            }
        },
        created() {
           
        },
        mounted: function () {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type === "left_menu") {
                    this.instances.forEach(function (item) {
                        setTimeout(function () {
                            if( typeof item.resize !== 'undefined')
                                item.resize();
                        });
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
            iData(received){
                 this.excelData = received['value']; // value to  use in exporting excel
                let colors = [
                              '#3498db ', '#2ecc71', '#d69292','#8599c1','#4f699c','#8fa9dc','#d4ab6e'
                            ];
                received['value'].forEach((item, index)=>{
                    this.doughnut.legend.data.push(item.name)
                    this.graphData.push(
                        {
                            value: item.value,
                            name: item.name,
                            itemStyle : {
                                normal : {
                                    color :colors[index] 
                                }
                            }
                        }
                    )
                })

                this.doughnut.series[0].data = this.graphData; 
            }
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="chartist/dist/chartist.css"></style>
