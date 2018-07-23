<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right" @click="exportExcel"></a>
            <h5 class="ml-3 head_color">{{ this.iData['header'] || '' }}</h5>
            <vue-chartist :data="donut.data" :options="donut.options" type="Pie" :responsiveOptions="donut.responsiveoptions" ref="chartist6"></vue-chartist>
            <div class="row">
                <template>
                   <div class="col-md-12" v-for="(item, index) in progressBar" :key="index">
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

    import VueChartist from 'v-chartist'

    import { exportToExcel } from '../mixins/exportToExcel'

    var unsub;
    export default {
        name: "echart",
        props: ['iData'],
        mixins: [exportToExcel],
        components: {
            VueChartist,
        },
        data() {
            return {
                instances: [],
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
        methods: {
            onReady(instance) {
                this.instances.push(instance)
            }
        },
        destroyed() {
            unsub();
        },
        updated(){
                this.progressBar = this.iData['value'];
                this.excelData = this.iData['value']; // value to  use in exporting excel

            this.iData['value'].forEach(item =>{
                    this.donut.data.labels.push(item['name']);
                    this.donut.data.series.push(item['value']);
                })
            }
    }
</script>
<style src="chartist/dist/chartist.css"></style>
