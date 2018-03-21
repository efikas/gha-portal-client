<template>
    <div>
        <b-card>
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


    var unsub;
    export default {
        name: "piechart",
        props: ['header', 'iData'],
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
                              '#d69292','#8599c1','#4f699c','#8fa9dc','#d4ab6e'
                            ]

                    }]
                },
                //==========AJAX pie chart data end=====
            }
        },
        created() {
           
        },
        mounted: function () {
            console.log(this.header);
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
            
            //  axios.get("http://www.filltext.com/?rows=5&value={number|50}&name={usState|abbr}").then(response => {
            //     this.ajaxpie.series[0].data = response.data;
            //     console.log(response.data);
            //     response.data.forEach((item, index) => {
            //         this.ajaxpie.legend.data.push(item.name);
            //     });
            //     this.ajaxloading = false;
            // })
            // .catch(function(error) {

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
            
        },

        watch: {
            iData(value){
                this.ajaxpie.series[0].data = value['value'];
                value['value'].forEach((item, index) => {
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
