<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right"
               @click="exportExcel"></a>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <div style="height: 305px;">
                <IEcharts :option="stacked" :loading="loading" @ready="onReady"></IEcharts>
            </div>
        </b-card>
    </div>
</template>
<script>

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import {exportToExcel} from '../mixins/exportToExcel'

    var unsub;
    export default {
        name: "stackbarchart",
        props: ['iData', 'colors'],
        mixins: [exportToExcel],
        components: {
            IEcharts,
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
        mounted: function () {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function (item, index) {
                        setTimeout(function () {
                            try {
                                item.resize();
                            }
                            catch (e) {
                                //
                            }
                        });
                    });
                    setTimeout(() => {
                        try {
                            this.$refs.swiper.swiper.update();
                        }
                        catch (e) {
                            //
                        }
                    });
                }
            });

        },
        destroyed() {
            unsub();
        },

        methods: {
            onReady(instance) {
                this.instances.push(instance)
            },

        },
        updated() {
            this.excelData = this.iData['value']; // value to  use in exporting excel
            this.stacked.legend.data = this.iData['legend'];
            this.stacked.xAxis[0].data = this.iData['value']['distributions']

            this.iData['value']['value'].forEach((item, index) => {
                this.graphData.push({
                    name: this.iData['legend'][index],
                    type: 'bar',
                    stack: 'advertising',
                    data: this.iData['value']['value'][index]
                });
            });
            this.stacked.series = this.graphData;
        }

    }
</script>