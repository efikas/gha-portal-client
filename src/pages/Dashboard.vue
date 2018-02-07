<template>
  <div>
    <sbemis-header :items="items"></sbemis-header>
    <div id="app" class="animated">
      <main class="container">
        <div class="section m75-top">
          <div id="stat" class="row">
            <div class="col s12 m6 l3">
              <div class="small-box orange lighten-5">
                <div class="inner" data-stat-schools>
                  <!-- <h3 class="no-margin"><img src="assets/images/gears.svg" height="39" width="39"></h3> -->
                  <h3 class="no-margin">{{ schools }}</h3>
                  <p class="no-margin">Schools</p>
                </div>
                <div class="card-header-icon" data-background-color="orange">
                  <i class="material-icons">school</i>
                </div>
                <a class="tiny upper" href="schools.html">
                  <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>
              </div>
            </div>
            <div class="col s12 m6 l3">
              <div class="small-box pink lighten-5">
                <div class="inner" data-stat-staffs>
                  <!-- <h3 class="no-margin"><img src="assets/images/gears.svg" height="39" width="39"></h3> -->
                  <h3 class="no-margin">{{ staffs }}</h3>
                  <p class="no-margin">Staff</p>
                </div>
                <div class="card-header-icon" data-background-color="rose">
                  <i class="material-icons">contacts</i>
                </div>
                <a class="tiny upper" href="staff">
                  <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>
              </div>
            </div>
            <div class="col s12 m6 l3">
              <div class="small-box blue lighten-5">
                <div class="inner" data-stat-students>
                  <!-- <h3 class="no-margin"><img src="assets/images/gears.svg" height="39" width="39"></h3> -->
                  <h3 class="no-margin">{{ students }}</h3>
                  <p class="no-margin">Students</p>
                </div>
                <div class="card-header-icon" data-background-color="blue">
                  <i class="material-icons">person</i>
                </div>
                <a class="tiny upper" href="students.html">
                  <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>
              </div>
            </div>
            <div class="col s12 m6 l3">
              <div class="small-box teal lighten-5">
                <div class="inner" data-stat-parents>
                  <!-- <h3 class="no-margin"><img src="assets/images/gears.svg" height="39" width="39"></h3> -->
                  <h3 class="no-margin">{{ guardians }}</h3>
                  <p class="no-margin">Parents/Guardians</p>
                </div>
                <div class="card-header-icon" data-background-color="green">
                  <i class="material-icons">people</i>
                </div>
                <a class="tiny upper" href="guardians.html">
                  <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--GRAPH-->

        <div class="section">
          <div class="row hide" id="wb">
            <div class="col s12 m6">
              <div class="card" id="data-ner"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="nerpGraph">
              </div>
            </div>
            <div class="col s12 m6">
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-ptr"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-gir"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-nir"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-gpi"></div>
            </div>

            <div class="col s12 m6">
              <div class="card" id="aserGraph">
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="pftGraph">
              </div>
            </div>
            <!--<div class="col s12 m6" >-->
            <!--<div class="card" id="ptPrivateGraph">-->
            <!--</div>-->
            <!--</div>-->
            <div class="col s12 m6">
              <div class="card" id="ptPublicGraph">
              </div>
            </div>
            <div class="col s12">
              <div class="card" id="dropoutRateGraph">
              </div>
            </div>
            <div class="col s12">
              <div class="card" id="PromotionRateGraph">
              </div>
            </div>
            <div class="col s12">
              <div class="card" id="pRepeaterGraph">
              </div>
            </div>
          </div>
          <div class="row" id="ms">
            <div class="col s12 m6">
              <div class="card" id="data-priv-state"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-pub-state"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-sch-rural"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-sch-urban"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-stu-sec"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-stu-pri"></div>
            </div>
            <!-- <div class="col s12">
                <div class="card" id="data-stu-attend"></div>
            </div> -->
            <div class="col s12 m6">
              <div class="card" id="data-staff-sex-state"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-staff-state"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-acc-staff-sex-state"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-non-acc-staff-sex-state"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" id="data-male-staff"></div>
            </div>
            <div class="col s12 m6">
              <div class="card" Id="data-female-staff"></div>
            </div>
            <div class="col s12">
              <div class="card" id="data-staff-all"></div>
            </div>
          </div>
        </div>
      </main>
      <sbemis-footer></sbemis-footer>
    </div>
  </div>
</template>
<script>

  Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };


  import api from '../services/app.service'

  import SbemisHeader from '../components/header'
  import SbemisFooter from '../components/footer'

  let SbemisRep = require('../modules/draw-graphs.js')
  export default {
    name: 'Dashboard',
    components: {
      'sbemis-header': SbemisHeader,
      'sbemis-footer': SbemisFooter
    },
    data() {
      return {
        schools: 'loading...',
        staffs: 'loading...',
        students: 'loading...',
        guardians: 'loading...',
        items: [
          {
            name: 'Dashboard',
            link: '/dashboard'
          }
        ]
      }
    },
    beforeCreate() {
      api.statistics()
        .then((data) => {
          this.schools = data.schools.total.format()
          this.staffs = data.staffs.total.format()
          this.students = data.students.total.format()
          this.plotter(data)
        })
        .catch((error) => window.alert("failed"))
    },
    methods: {
      plotter(data) {
        let myData = SbemisRep.dataMapping(data)
        console.log(myData.PRIV_ST)
        SbemisRep.renderPieChart('data-priv-state', SbemisRep.getLabelHeadlines().PRIV_ST, myData.PRIV_ST)
        SbemisRep.renderPieChart('data-pub-state', SbemisRep.getLabelHeadlines().PUB_ST, myData.PUB_ST)
        SbemisRep.renderBasicColumnchart('data-sch-rural', SbemisRep.getLabelHeadlines().SCH_RURAL, ['Rural Area'], myData.SCH_RURAL)
        SbemisRep.renderBasicColumnchart('data-sch-urban', SbemisRep.getLabelHeadlines().SCH_URBAN, ['Urban Area'], myData.SCH_URBAN)
        SbemisRep.renderDoughnutChart('data-stu-sec', SbemisRep.getLabelHeadlines().STU_SEC_SCH, myData.STU_SEC_SCH)
        SbemisRep.renderDoughnutChart('data-stu-pri', SbemisRep.getLabelHeadlines().STU_PRI_SCH, myData.STU_PRI_SCH)

        // SbemisRep.renderBasicColumnchart('data-stu-attend', SbemisRep.getLabelHeadlines().STU_ATTEND, myData.DAYS, myData.STU_ATTEND)

        SbemisRep.renderPieChart('data-staff-sex-state', SbemisRep.getLabelHeadlines().STAFF_GEN_ST, myData.STAFF_GEN_ST)
        SbemisRep.renderPieChart('data-staff-state', SbemisRep.getLabelHeadlines().STAFF_ST, myData.STAFF_ST)
        SbemisRep.renderHalfPieChart('data-acc-staff-sex-state', SbemisRep.getLabelHeadlines().GEN_ACAD_STAFF_ST, myData.GEN_ACAD_STAFF_ST)
        SbemisRep.renderHalfPieChart('data-non-acc-staff-sex-state', SbemisRep.getLabelHeadlines().GEN_NON_STAFF_ST, myData.GEN_NON_STAFF_ST)

        SbemisRep.renderBasicColumnchart('data-staff-all', SbemisRep.getLabelHeadlines().STAFF_SCH_ST, ['Staff'], myData.STAFF_SCH_ST)
        SbemisRep.renderBasicColumnchart('data-male-staff', SbemisRep.getLabelHeadlines().MALE_STAFF, ['Male Staff'], myData.MALE_STAFF)
        SbemisRep.renderBasicColumnchart('data-female-staff', SbemisRep.getLabelHeadlines().FEMALE_STAFF, ['Female Staff'], myData.FEMALE_STAFF)
      }
    }
  }
</script>
<style scoped>
</style>
