'use strict'
let Highcharts = require('highcharts')
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts)

module.exports = {
  getLabelHeadlines: () => {
    /*
        * @name id: label
        * @discription:  use to hold the titles of all the graphs
        * @param none
        * @param  JSON => json value of titles
        */
    return {
      NERP: [
        'Net Enrolment Rate (Percentage)'
      ],
      PTR: [
        'Pupil-Teacher Ratio (PTR)'
      ],
      NIR: [
        'Net Intake Ratio (NIR)'
      ],
      ASER: [
        'Age Specific Enrolment Rate (ASER)'
      ],
      PFT: [
        'Percentage of Female Teachers'
      ],
      PTS_PRIVATE: [
        'Percentage of Teaching Staff in Private Education Institution'
      ],
      PTSPP: [
        'Percentage of Teaching Staff in Private/Public Education Institution'
      ],
      PTT: [
        'Percentage of Trained Teacher'
      ],
      DR: [
        'Dropout Rate by Grade'
      ],
      PR: [
        'Promotion Rate by Grade'
      ],
      REPEATERS: [
        'Percentage of Repeaters'
      ],
      PRIV_ST: [
        'Private School Distribution'
      ],
      PUB_ST: [
        'Public School Distribution'
      ],
      SCH_RURAL: [
        'School Distribution in Rural Area'
      ],
      SCH_URBAN: [
        'School Distribution in Urban Area'
      ],
      STU_SEC_SCH: [
        'Student Population in Secondary School'
      ],
      STU_PRI_SCH: [
        'Student Population in Primary School'
      ],
      STU_ATTEND: [
        'Total Number of attendance this weekly'
      ],
      STAFF_GEN_ST: [
        'Number of Teaching Staff in Private/Public Education Institution'
      ],
      STAFF_ST: [
        'Number of Academic / Non Academic Staffs'
      ],
      GEN_ACAD_STAFF_ST: [
        'Number of Accademic Staffs',
        'Ekiti State'
      ],
      GEN_NON_STAFF_ST: [
        'Number of Non Accademic Staffs'
      ],
      STAFF_SCH_ST: [
        'Number of Staffs'
      ],
      MALE_STAFF: [
        'Number of Male Staffs'
      ],
      FEMALE_STAFF: [
        'Number of Female Staffs'
      ]
    }
  },

  dataManipulations: (values) => {
    /*
        * @name id: datas
        * @discription:  use to get the JSON data and assign the values to each graph variables
        * @param none
        * @param  JSON => json value to to display
        */
    var _dist = {
      STUD_CLASS: [], // hold the class titles
      PTR: [], //  hold the the values of pupils to teachers ratio,
      NERP: [], //  hold the the values of net enrollment rate in percentage,
      NIR: [], // hold the the values of net intake rate in percentage,
      ASER: [], // hold the the values of age specific enrollment rate,
      PFT: [], // hold the values of percentage of female teachers
      PTS_PRIVATE: [], // hold the values of percentage of teaching staff in private schools
      PTSPP: [], // hold the values of percentage of teaching staff in public schools
      PTT: [], // hold the values of percentage of trained teachers
      DR: [], // hold the values of percentage of dropout rate by grade
      PR: [], // hold the values of percentage of promotion rate by grade
      REPEATERS: [], // hold the values of percentage of repeaters
      PRIV_ST: [],
      PUB_ST: [],
      SCH_RURAL: [],
      SCH_URBAN: [],
      STU_SEC_SCH: [],
      STU_PRI_SCH: [],
      STU_ATTEND: [],
      STAFF_GEN_ST: [],
      STAFF_ST: [],
      GEN_ACAD_STAFF_ST: [],
      GEN_NON_STAFF_ST: [],
      STAFF_SCH_ST: [],
      MALE_STAFF: [],
      FEMALE_STAFF: []
    }
    // populate
    // loop over the classes to get
    let totalTeachers = 0
    let privateTeach = []
    let publicTeach = []

    values['pry'].forEach(element => {
      totalTeachers += parseInt(element.staff.teaching_staff_private) + parseInt(element.staff.teaching_staff_public)
      // class titles
      _dist.STUD_CLASS.push(element['title'])

      // NERP
      _dist.NERP.push(element['student']['percentage'])

      // ASER
      _dist.ASER.push(element['student']['percentage'])

      // NIR
      _dist.NIR.push(element['student']['nir'])

      // PFT
      // calculate percentage of female teacher
      let perc = (element['staff']['per_female_teachers'])
      _dist.PFT.push(perc)

      // PTS Private
      privateTeach.push(element['staff']['perc_teach_staff_private'])

      // PTS Public
      publicTeach.push(element['staff']['perc_teach_staff_public'])
    })

    _dist.PTS_PRIVATE = privateTeach

    // PTS Public
    _dist.PTSPP.push({
      name: 'Private Teachers',
      data: privateTeach
    })
    _dist.PTSPP.push({
      name: 'Public Teachers',
      data: publicTeach
    })

    // PTR
    let ratioOfPupils = parseInt(values.total_pupils / totalTeachers)
    let ratioOfStaff = parseInt(values.total_staff / totalTeachers)
    let total = ratioOfPupils + ratioOfStaff
    let percPtsPupil = Math.round((ratioOfPupils / total) * 100)
    let percPtsStaff = Math.round((ratioOfStaff / total) * 100)

    _dist.PTR.push([`pupils ${percPtsPupil}%`, percPtsPupil])
    _dist.PTR.push([`Teachers ${percPtsStaff}%`, percPtsStaff])
    return _dist
  },

  dataMapping: (values) => {
    let _dist = {
      DAYS: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      PRIV_ST: [],
      PUB_ST: [],
      SCH_RURAL: [],
      SCH_URBAN: [],
      STU_SEC_SCH: [],
      STU_PRI_SCH: [],
      STU_ATTEND: [],
      STAFF_GEN_ST: [],
      STAFF_ST: [],
      GEN_ACAD_STAFF_ST: [],
      GEN_NON_STAFF_ST: [],
      STAFF_SCH_ST: [],
      MALE_STAFF: [],
      FEMALE_STAFF: []
    }

    // let settlement = ['Rural', 'Urban']
    console.log()
    // SCHOOLS
    _dist.PRIV_ST.push([
      {
        name: 'Secondary',
        y: (parseInt(values.schools.privates.secondary) / (parseInt(values.schools.privates.secondary) + parseInt(values.schools.privates.primary))) * 100,
        value: values.schools.privates.secondary
      },
      {
        name: 'Primary',
        y: (parseInt(values.schools.privates.primary) / (parseInt(values.schools.privates.secondary) + parseInt(values.schools.privates.primary))) * 100,
        value: values.schools.privates.primary,
        sliced: true,
        selected: true
      }
    ])

    _dist.PUB_ST.push([
      {
        name: 'Secondary',
        y: (parseInt(values.schools.publics.secondary) / (parseInt(values.schools.publics.secondary) + parseInt(values.schools.publics.primary))) * 100,
        value: values.schools.publics.secondary
      },
      {
        name: 'Primary',
        y: (parseInt(values.schools.publics.primary) / (parseInt(values.schools.publics.secondary) + parseInt(values.schools.publics.primary))) * 100,
        value: values.schools.publics.primary,
        sliced: true,
        selected: true
      }
    ])

    // PTS Public
    _dist.SCH_RURAL.push({name: 'Private Secondary', data: [parseInt(values.schools.privates.rural.secondary)]})
    _dist.SCH_RURAL.push({name: 'Public Secondary', data: [parseInt(values.schools.publics.rural.secondary)]})
    _dist.SCH_RURAL.push({name: 'Private Primary', data: [parseInt(values.schools.privates.rural.primary)]})
    _dist.SCH_RURAL.push({name: 'Public Primary', data: [parseInt(values.schools.publics.rural.primary)]})

    _dist.SCH_URBAN.push({name: 'Private Secondary', data: [parseInt(values.schools.privates.urban.secondary)]})
    _dist.SCH_URBAN.push({name: 'Public Secondary', data: [parseInt(values.schools.publics.urban.secondary)]})
    _dist.SCH_URBAN.push({name: 'Private Primary', data: [parseInt(values.schools.privates.urban.primary)]})
    _dist.SCH_URBAN.push({name: 'Public Primary', data: [parseInt(values.schools.publics.urban.primary)]})

    // STUDENT
    _dist.STU_SEC_SCH.push({name: 'Private', y: parseInt(values.students.private.secondary)})
    _dist.STU_SEC_SCH.push({name: 'Public', y: parseInt(values.students.public.secondary)})

    _dist.STU_PRI_SCH.push(['Private', parseInt(values.students.private.primary)])
    _dist.STU_PRI_SCH.push(['Public', parseInt(values.students.public.primary)])

    // let present = []
    // let absent = []

    // _dist.DAYS.forEach((item) => {
    //   present.push(values.students.stu_att_pre[item.toLowerCase()])
    //   absent.push(values.students.stu_att_abs[item.toLowerCase()])
    // })

    // _dist.STU_ATTEND.push({
    //   name: 'Present',
    //   data: present
    // })
    // _dist.STU_ATTEND.push({
    //   name: 'Absent',
    //   data: absent
    // })

    // STAFF

    // STAFF_GEN_ST: [],
    //     STAFF_ST: [],
    //     GEN_ACAD_STAFF_ST: [],
    //     GEN_NON_STAFF_ST: [],
    //     STAFF_SCH_ST: [],
    //     MALE_STAFF: [],
    //     FEMALE_STAFF: []

    let totalFemaleStaff = parseInt(values.staffs.teaching.female) + parseInt(values.staffs.non_teaching.female)
    let totalMaleStaff = parseInt(values.staffs.teaching.male) + parseInt(values.staffs.non_teaching.male)
    let totalAccademicStaff = parseInt(values.staffs.teaching.female) + parseInt(values.staffs.teaching.male)
    let totalNonAccademicStaff = parseInt(values.staffs.non_teaching.female) + parseInt(values.staffs.non_teaching.male)

    _dist.STAFF_GEN_ST.push([{
      name: 'Female',
      y: (totalFemaleStaff / parseInt(values.staffs.total)) * 100,
      value: totalFemaleStaff
    }, {
      name: 'Male',
      y: (totalMaleStaff / parseInt(values.staffs.total)) * 100,
      value: totalMaleStaff,
      sliced: true,
      selected: true
    }])

    _dist.STAFF_ST.push([{
      name: 'Academic',
      y: (totalAccademicStaff / parseInt(values.staffs.total)) * 100,
      value: totalAccademicStaff
    }, {
      name: 'Non Acadenic',
      y: (totalNonAccademicStaff / parseInt(values.staffs.total)) * 100,
      value: totalNonAccademicStaff,
      sliced: true,
      selected: true
    }])

    _dist.GEN_ACAD_STAFF_ST.push(
      [
        ['Female Academic Staff: <b>' + values.staffs.teaching.female + '</b>', parseInt(values.staffs.teaching.female)],
        ['Male Academic Staff: <b>' + values.staffs.teaching.male + '</b>', parseInt(values.staffs.teaching.male)],
        {
          // name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false
          }
        }]
    )

    _dist.GEN_NON_STAFF_ST.push(
      [['Female Non Academic Staff: <b>' + parseInt(values.staffs.non_teaching.female) + '</b>', parseInt(values.staffs.non_teaching.female)],
        ['Male Non Academic Staff: <b>' + parseInt(values.staffs.non_teaching.male) + '</b>', parseInt(values.staffs.non_teaching.male)],
        {
          // name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false
          }
        }]
    )

    let staffPrivPry = parseInt(values.staffs.private.primary.male) + parseInt(values.staffs.private.primary.female)
    let staffPrivSec = parseInt(values.staffs.private.secondary.male) + parseInt(values.staffs.private.secondary.female)
    let staffPubPry = parseInt(values.staffs.public.primary.male) + parseInt(values.staffs.public.primary.female)
    let staffPubSec = parseInt(values.staffs.public.secondary.male) + parseInt(values.staffs.public.secondary.female)

    _dist.STAFF_SCH_ST.push({name: 'Private Secondary', data: [staffPrivSec]})
    _dist.STAFF_SCH_ST.push({name: 'Public Secondary', data: [staffPubSec]})
    _dist.STAFF_SCH_ST.push({name: 'Private Primary', data: [staffPrivPry]})
    _dist.STAFF_SCH_ST.push({name: 'Public Primary', data: [staffPubPry]})

    _dist.MALE_STAFF.push({name: 'Private Secondary', data: [parseInt(values.staffs.public.primary.male)]})
    _dist.MALE_STAFF.push({name: 'Public Secondary', data: [parseInt(values.staffs.public.secondary.male)]})
    _dist.MALE_STAFF.push({name: 'Private Primary', data: [parseInt(values.staffs.private.primary.male)]})
    _dist.MALE_STAFF.push({name: 'Public Primary', data: [parseInt(values.staffs.public.primary.male)]})

    _dist.FEMALE_STAFF.push({name: 'Private Secondary', data: [parseInt(values.staffs.public.primary.female)]})
    _dist.FEMALE_STAFF.push({name: 'Public Secondary', data: [parseInt(values.staffs.public.secondary.female)]})
    _dist.FEMALE_STAFF.push({name: 'Private Primary', data: [parseInt(values.staffs.private.primary.female)]})
    _dist.FEMALE_STAFF.push({name: 'Public Primary', data: [parseInt(values.staffs.public.primary.female)]})

    return _dist
  },

  renderLineSymbolChart: (id, label, studClass, data) => {
    /*
         * @param id: string => the id of the container element
         * @param label: array => array of the labels
         * @param data: JSON => json value to to display
         */
    let studClassValues = []
    let graphValues = []
    studClass.forEach(element => {
      studClassValues.push(element)
    })
    data.forEach(element => {
      graphValues.push(element)
    })

    let options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: label[0]
      },
      // subtitle: {
      //     text: `<b>${ label[1] }</b>`
      // },
      xAxis: {
        categories: studClassValues
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          text: 'Percentage(%)'
        },
        labels: {
          formatter: function () {
            return this.value + '%'
          }
        },
        min: 0,
        max: 100
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'Percentage(%)',
        marker: {
          symbol: 'square'
        },
        data: graphValues

      }]
    }

    Highcharts.chart(id, options)
  },

  renderColumRotateChart: (id, label, studClass, data) => {
    /*
         * @param id: string => the id of the container element
         * @param label: array => array of the labels
         * @param data: JSON => json value to to display
         */

    let graphValues = []

    /*
         *Push the value of the title and value into an array
         * to form an array of arrays
         */
    studClass.forEach((element, index) => {
      let temp = []
      temp.push(element)
      temp.push(data[index])
      graphValues.push(temp)
    })

    let options = {
      chart: {
        type: 'column'
      },
      title: {
        text: label[0]
      },
      // subtitle: {
      //     text: `<b>${ label[1] }</b>`
      // },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '13px'
          }
        }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Percentage(%)'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      tooltip: {
        shared: true,
        pointFormat: 'Percentage(%): <b>{point.y} %</b>'
      },
      series: [{
        name: 'Population',
        data: graphValues,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }

    Highcharts.chart(id, options)
  },

  renderBasicColumnchart: (id, label, studClass, data) => {
    let options = {
      chart: {
        type: 'column'
      },
      title: {
        text: `${label[0]}`
      },
      // subtitle: {
      //     text: `<b>${ label[1] }</b>`
      // },
      xAxis: {
        categories: studClass,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: label[2]
        }
        // max: 100
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: data
    }

    Highcharts.chart(id, options)
  },

  renderDoughnutChart: (id, label, data) => {
    let options = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: label[0]
      },
      /* tooltip: {
                valueSuffix: '%'
            }, */
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Total',
        data: data
      }]
    }
    Highcharts.chart(id, options)
  },

  renderBasicColumnchart2: (id, label, studClass, data) => {
    let options = {
      chart: {
        type: 'column'
      },
      title: {
        text: `<b>${label[0]}</b>`
      },
      // subtitle: {
      //     text: `<b>${ label[1] }</b>`
      // },
      xAxis: {
        categories: studClass,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage(%)'
        },
        max: 100
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}%</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: data
    }

    Highcharts.chart(id, options)
  },

  renderPieChart: (id, label, data) => {
    Highcharts.chart(id, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: label
      },
      tooltip: {
        pointFormat: '<b>{point.value}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name} : {point.value}'
          }
          // showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Total',
        colorByPoint: true,
        data: data[0]
        // [{
        //     name: 'Present',
        //     y: 56.33,
        //     value: 1273
        // }, {
        //     name: 'Absent',
        //     y: 24.03,
        //     value: 5510,
        //     sliced: true,
        //     selected: true
        // }]
      }]
    })
  },

  renderHalfPieChart: (id, label, data) => {
    Highcharts.chart(id, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Number of <br> Staff',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
      },
      tooltip: {
        pointFormat: '<b>{point[1]}</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'pie',
        name: '',
        innerSize: '50%',
        data: data[0]
        // [
        //     ['Firefox',   10.38],
        //     ['IE',       56.33],
        //     {
        //         name: 'Proprietary or Undetectable',
        //         y: 0.2,
        //         dataLabels: {
        //             enabled: false
        //         }
        //     }
        // ]
      }]
    })
  },

  renderStackedGroupedColumnChart: (container, title, yText, xaxis, data) => {
    Highcharts.chart(container, {

      chart: {
        type: 'column'
      },

      title: {
        text: title
      },

      xAxis: {
        categories: xaxis
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: yText
        }
      },

      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' + this.point.stackTotal
        }
      },

      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },

      series: data
    })
  },

  renderStackedGroupedColumnChart2: (container, title, yText, xaxis, data) => {
    Highcharts.Chart(container, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: xaxis,
        labels: {
          rotation: -30,
          style: {
            fontSize: '13px'
          }
        }
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: yText
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      credits: {
        enabled: false
      },
      series: data
    })
  },
  renderCrossHairColumnChart: (container, title, xaxis, yaxis, data) => {
    let options = {
      chart: {
        renderTo: container,
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: xaxis,
        crosshair: true
      },
      yAxis: {
        title: yaxis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      credits: {
        enabled: false
      },
      series: data
    }
    Highcharts.Chart(options)
  },
  renderBarChart: (container, title, xaxis, yaxis, data) => {
    // console.log(xaxis);
    let options = {
      chart: {
        renderTo: container,
        type: 'bar'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: xaxis
      },
      yAxis: {
        title: {
          text: yaxis
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      credits: {
        enabled: false
      },
      series: data
    }
    Highcharts.Chart(options)
  }
}

// export {SbemisRep}
