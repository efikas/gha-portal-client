<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right"
               @click="exportExcel"></a>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <div style="height: 305px;">
                <IEcharts :option="ajaxbar_chart" :loading="ajaxloading" @ready="onReady"
                          ref="ajaxbar_chart"></IEcharts>
            </div>
        </b-card>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.js';

    import {exportToExcel} from '../mixins/exportToExcel'

    var unsub;
    export default {
        name: "barchart",
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
                        data: ['PROJECTS']
                    },
                    color: this.colors || ['#a0bce5', '#baf2e1'],
                    xAxis: [{
                        type: 'category',
                        name: 'YEAR',
                        data: [],
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '',
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
                        name: 'Total',
                        type: 'bar',
                        data: []
                    }
                    ]
                },

            }
        },
        created() {

        },
        mounted: function () {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function(item, index) {
                        setTimeout(function() {
                            try{
                                item.resize();
                            } catch (e) {
                                // console.log(e)
                            }
                        });
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
            }
        },

        updated(received) {
            this.excelData = this.iData['value']; // value to  use in exporting excel

            this.iData['value'].forEach((item, index) => {
                this.ajaxbar_chart.xAxis[0].data.push(item.name);
                this.ajaxbar_chart.series[0].data.push(item.value);
            })
            this.ajaxloading = false;
        }

    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="chartist/dist/chartist.css"></style>
