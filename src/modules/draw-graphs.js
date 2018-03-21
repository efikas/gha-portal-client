'use strict'

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
      // DAYS: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      priv_sch: [],
      pub_sch: [],
      pri_sch: [],
      sec_sch: [],
      stu_sec_sch: [],
      stu_pri_sch: [],
      sch_rural: [],
      sch_urban: [],


      STU_ATTEND: [],
      STAFF_GEN_ST: [],
      STAFF_ST: [],
      GEN_ACAD_STAFF_ST: [],
      GEN_NON_STAFF_ST: [],
      STAFF_SCH_ST: [],
      MALE_STAFF: [],
      FEMALE_STAFF: []
    }

    
    // Private school distribution
    _dist.priv_sch = [
      {
        name: 'Secondary',
        value: values.schools.privates.secondary
      },
      {
        name: 'Primary',
        value: values.schools.privates.primary
      }
    ];

    // Public school distribution
    _dist.pub_sch = [
      {
        name: 'Secondary',
        value: values.schools.publics.secondary
      },
      {
        name: 'Primary',
        value: values.schools.publics.primary
      }
    ];

    // primary school distribution
    _dist.pri_sch = [
      {
        name: 'Public',
        value: values.schools.publics.primary
      },
      {
        name: 'Private',
        value: values.schools.privates.primary
      }
    ];

    // sec school distribution
    _dist.sec_sch = [
      {
        name: 'Public',
        value: values.schools.publics.secondary
      },
      {
        name: 'Private',
        value: values.schools.privates.secondary
      }
    ];

    // primary school student distribution
    _dist.stu_pri_sch.push({
                    name: 'Private',
                    percent: parseInt((parseInt(values.students.private.primary)/(parseInt(values.students.private.primary) + parseInt(values.students.public.primary))) * 100),
                    value: parseInt(values.students.private.primary)
                  });
    _dist.stu_pri_sch.push({
                    name: 'Public',
                    percent: parseInt((parseInt(values.students.public.primary)/(parseInt(values.students.private.primary) + parseInt(values.students.public.primary))) * 100),
                    value: parseInt(values.students.public.primary)
                  });

    // sec school student distribution
    _dist.stu_sec_sch.push({
                      name: 'Private',
                      percent: parseInt((parseInt(values.students.private.secondary)/(parseInt(values.students.private.secondary) + parseInt(values.students.public.secondary))) * 100),
                      value: parseInt(values.students.private.secondary)
                    });
    _dist.stu_sec_sch.push({
                      name: 'Public',
                      percent: parseInt((parseInt(values.students.public.secondary)/(parseInt(values.students.private.secondary) + parseInt(values.students.public.secondary))) * 100),
                      value: parseInt(values.students.public.secondary)
                    });

    // PTS Public
    _dist.sch_rural.push({name: 'Private Secondary', data: parseInt(values.schools.privates.rural.secondary)})
    _dist.sch_rural.push({name: 'Public Secondary', data: parseInt(values.schools.publics.rural.secondary)})
    _dist.sch_rural.push({name: 'Private Primary', data: parseInt(values.schools.privates.rural.primary)})
    _dist.sch_rural.push({name: 'Public Primary', data: parseInt(values.schools.publics.rural.primary)})

    _dist.sch_urban.push({name: 'Private Secondary', data: parseInt(values.schools.privates.urban.secondary)})
    _dist.sch_urban.push({name: 'Public Secondary', data: parseInt(values.schools.publics.urban.secondary)})
    _dist.sch_urban.push({name: 'Private Primary', data: parseInt(values.schools.privates.urban.primary)})
    _dist.sch_urban.push({name: 'Public Primary', data: parseInt(values.schools.publics.urban.primary)})

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
      value: totalMaleStaff
    }])

    _dist.STAFF_ST.push([{
      name: 'Academic',
      y: (totalAccademicStaff / parseInt(values.staffs.total)) * 100,
      value: totalAccademicStaff
    }, {
      name: 'Non Acadenic',
      y: (totalNonAccademicStaff / parseInt(values.staffs.total)) * 100,
      value: totalNonAccademicStaff
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
  }

}

// export {SbemisRep}
