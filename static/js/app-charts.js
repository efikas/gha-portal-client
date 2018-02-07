const chartGenerator = {
    renderStackColumnChart: function(container, title,xasis, yaxis,data){
        let options = {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: xasis
            },
            yAxis: {
                min: 0,
                title: {
                    text: yaxis
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series:  data
        };
        new Highcharts.Chart(container, options);
    },
    renderBasicColumnChart:  function(container, title,xasis, yaxis,data, max = 100){
        let options = {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: { categories:xasis,
            },
            yAxis: {
                min: 0,
                title: {
                    text: yaxis
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                }
            },
            series: data
        };

        if(container == 'data-ger'){
            options.yAxis.max = max;
        }

        new Highcharts.Chart(container, options);
    },
    renderBasicLineChart:  function(container, title,xasis, yaxis,data, start_year){
        let options = {
            title: {
                text: title
            },
            xAxis: { categories:xasis,
            },
            yAxis: {
                title: {
                    text: yaxis
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                },
                series: {
                    pointStart: start_year
                }
            },
            series: data
        };
        new Highcharts.Chart(container, options);
    },
    renderPieChart: function(container, title,data){
        let options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            title: {
                text: title
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: data
        };
        new Highcharts.Chart(container, options);
    }
};