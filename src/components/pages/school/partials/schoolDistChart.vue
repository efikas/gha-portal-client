<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right mb-2"></a>
                    <h5 class="ml-3 head_color">School Distributions</h5>
                    <div style="height: 305px;">
                        <IEcharts :option="ajaxbar_chart" :loading="ajaxloading" @ready="onReady" ref="ajaxbar_chart"></IEcharts>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>

    import IEcharts from 'vue-echarts-v3/src/full.js';

    export default {
        name: "schoolDistChart",
        components: {
            IEcharts,
        },
        data() {
            return {
                serverdata: [],
                instances: [],
                loading: false,
                ajaxloading: true,

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
                        data: ['Public', 'Private', 'Primary', 'Secondary']
                    },
                    color: [
                        '#c16989', '#a3ab60', '#d2bf6f', '#e6995b', '#4ca1ab',
                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                        '#D7504B', '#dcba42', '#F4E001', '#F0809A', '#26C0C0'
                    ],
                    xAxis: [{
                        type: 'category',
                        name: 'YEAR',
                        nameRotate: 90,
                        data: ['ADO', 'EFON', 'ADO', 'ADO', 'ADO', 'EMURE', 'ADO', 'ADO', 'IJERO', 'IKERE',
                            'IKOLE', 'ADO', 'IREPO', 'ISE', 'MOBA', 'OYE']
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '%',
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
                        name: 'Public',
                        type: 'bar',
                        stack: 'search engine',
                        data: []
                    }, {
                        name: 'Private',
                        type: 'bar',
                        stack: 'search engine',
                        data: []
                    }, {
                        name: 'Primary',
                        type: 'bar',
                        stack: 'advertising',
                        data: []
                    }, {
                        name: 'Secondary',
                        type: 'bar',
                        stack: 'advertising',
                        data: []
                    }]
                },
            }
        },

        methods: {
            onReady(instance) {
                this.instances.push(instance)
            },
        },

        created: function () {
            this.$school.getSchoolsDistributionsPerLga()
                .then((data) => {
                    this.schoolsPerLgas = data;
                    data.forEach(item => {
                        this.ajaxbar_chart.series[0].data.push(item.public.total);
                        this.ajaxbar_chart.series[1].data.push(item.private.total);
                        this.ajaxbar_chart.series[2].data.push(item.total.primary);
                        this.ajaxbar_chart.series[3].data.push(item.total.secondary);
                        this.ajaxloading = false;
                    })
                })
                .catch((error) => console.log(error)
                )
        },

    }
</script>
