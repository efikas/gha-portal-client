<template>
    <div>
        <b-card>
            <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right" @click="exportExcel"></a>
            <h3 class="card-title">{{ this.iData['header'] }}</h3>
            <div style="height: 350px;">
                <IEcharts :option="ajaxpie" :loading="ajaxloading" @ready="onReady"></IEcharts>
            </div>
        </b-card>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.js';


    import { exportToExcel } from '../mixins/exportToExcel'

    let unsub;
    export default {
        name: "piechart",
        props: ['header', 'iData'],
         mixins: [exportToExcel],
        components: {
            IEcharts,
        },
        data() {
            return {
                unsub: null,
                serverdata: [],
                instances: [],
                loading: false,
                ajaxloading: true,
                graphValue: [],

                //==========AJAX pie chart data start=====
                ajaxpie: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: []
                    },
                    series: [{
                        name: 'Source',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: ['aa', "ab"],
                        color: [
                              ' #3498db ', '#2ecc71', '#d69292','#8599c1','#4f699c','#8fa9dc','#d4ab6e'
                            ]

                    }]
                },
                //==========AJAX pie chart data end=====
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

            this.ajaxpie.series[0].data = this.iData['value'];
            this.iData['value'].forEach((item, index) => {
                this.ajaxpie.legend.data.push(item.name);
            });
            this.ajaxloading = false;
        },
    }
</script>
