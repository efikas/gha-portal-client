<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right"
               @click="exportExcel"></a>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <div style="height: 305px;">
                <IEcharts :option="doughnut" :loading="loading" @ready="onReady"></IEcharts>
            </div>
        </b-card>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.js';

    import {exportToExcel} from '../mixins/exportToExcel'

    var unsub;
    export default {
        name: "doughnut",
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
            },

        },
        updated() {
            this.excelData = this.iData['value']; // value to  use in exporting excel
            let colors = [
                '#3498db ', '#2ecc71', '#d69292', '#8599c1', '#4f699c', '#8fa9dc', '#d4ab6e'
            ];
            this.iData['value'].forEach((item, index) => {
                this.doughnut.legend.data.push(item.name)
                this.graphData.push(
                    {
                        value: item.value,
                        name: item.name,
                        itemStyle: {
                            normal: {
                                color: colors[index]
                            }
                        }
                    }
                )
            })

            this.doughnut.series[0].data = this.graphData;
        }

    }
</script>
