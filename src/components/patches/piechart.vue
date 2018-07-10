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
   import Vue from 'vue';

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import 'zrender/lib/vml/vml';
    require('swiper/dist/css/swiper.css')

    import 'echarts/lib/chart/pie';

    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/tooltip';

    import 'echarts/lib/component/title';

    import 'echarts/lib/component/markPoint';
    import 'echarts/lib/component/markLine';

    import 'echarts/lib/component/timeline';
    import 'echarts/lib/component/toolbox';
    import { exportToExcel } from '../mixins/exportToExcel'


    var unsub;
    export default {
        name: "piechart",
        props: ['header', 'iData'],
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
        created() {
           
        },
        mounted: function () {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function (item) {
                        setTimeout(function () {
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
                
                this.ajaxpie.series[0].data = received['value'];
                received['value'].forEach((item, index) => {
                    this.ajaxpie.legend.data.push(item.name);
                })
                this.ajaxloading = false;
            }
        },

        computed : {
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="assets/css/widgets.css" scoped></style>
<style src="chartist/dist/chartist.css"></style>
