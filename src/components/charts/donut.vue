<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right" @click="exportExcel"></a>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <vue-chartist :data="donut.data" :options="donut.options" type="Pie" :responsiveOptions="donut.responsiveoptions" ref="chartist6"></vue-chartist>
            <div class="row">
                <template>
                   <div v-for="(item, index) in progressBar" :key="index">
                       <div class="col-lg-3 col-sm-12 text_color">
                        {{ item['name']}} ({{ item['percent'] }}%)
                        </div>
                        <div class="col-lg-9 col-sm-12 progress_color1">
                            <b-progress v-model="item['percent']"  show-progress class="mb-4"></b-progress>
                        </div>
                   </div>
                </template>
            </div>
        </b-card>
    </div>
</template>
<script>
    import Vue from 'vue';

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import VueChartist from 'v-chartist'

    import 'echarts/lib/chart/pie';

    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/tooltip';

    import 'echarts/lib/component/title';

    import 'echarts/lib/component/markPoint';
    import 'echarts/lib/component/markLine';

    import 'echarts/lib/component/timeline';
    import 'echarts/lib/component/toolbox';
    import { exportToExcel } from '../../modules/mixins/exportToExcel'

    var unsub;
    export default {
        name: "echart",
        props: ['iData'],
        mixins: [exportToExcel],
        components: {
            IEcharts,
            VueChartist,
        },
        data() {
            return {
                loading: false,
                ajaxloading: true,
                progressBar: [],
                excelData: [],
                
                // ======donut chart start=======
                donut: {
                    data: {
                        labels: [],
                        series: [],

                    },
                    options: {

                        donut: true,
                        donutWidth: 42,
                        labelInterpolationFnc: function (value) {
                            return value[0]
                        }
                    },
                    responsiveoptions: [
                        ['screen and (min-width: 640px)', {
                            chartPadding: 30,
                            labelOffset: 40,
                            labelDirection: 'explode',
                            labelInterpolationFnc: function (value) {
                                return value;
                            }
                        }],
                        ['screen and (min-width: 1024px)', {
                            labelOffset: 50,
                            chartPadding: 40
                        }]
                    ]
                },
                // ======donut chart end================

                //=============progress bar============
                progress2counter1: 20,
                progress2counter4: 50,
                progress2counter5: 30,

            }
        },
        
        methods: {
            onReady(instance) {
                this.instances.push(instance)
            },
            
        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
        watch: {
            iData(received){
                this.progressBar = received['value'];
                this.excelData = received['value']; // value to  use in exporting excel

                received['value'].forEach(item =>{
                    this.donut.data.labels.push(item['name']);
                    this.donut.data.series.push(item['value']);
                })
            }
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="chartist/dist/chartist.css"></style>
