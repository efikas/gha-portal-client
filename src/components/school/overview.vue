<template>
  <main class="container">
    <!--<div class="section m75-top">
    </div>-->
    <!-- <div class="section m75-top"> -->
    <br />
    <br />
    <br />
    <div class="row">
      <div id="school_distribution" class="col s12 m6 l8 relative">
        <h3 class="medium upper flow-text">Distribution of Schools / LGA</h3>
        <div class="col s12 m6 l4" v-for="lga in lgas" :key="lga.id">
          <ul class="collection with-header">
            <li class="collection-header relative">
              <a :href="'/schools_manage#' + lga.id">
                <h3 class="el">{{lga.name}}</h3>
              </a>
              <span class="absolute white-text green"> {{lga.total.schools}}</span>
            </li>
            <li class="collection-item">
              Private Schools
              <span class="right">{{lga.private.total}}</span>
            </li>
            <li class="collection-item">
              Public Schools
              <span class="right">{{lga.public.total}}</span>
            </li>
            <li class="collection-item">
              Primary Schools
              <span class="right">{{lga.total.primary}}</span>
            </li>
            <li class="collection-item">
              Secondary Schools
              <span class="right">{{lga.total.secondary}}</span>
            </li>
            <li class="collection-item">
              Private Primary Schools
              <span class="right">{{lga.private.primary}}</span>
            </li>
            <li class="collection-item">
              Public Primary schools
              <span class="right">{{lga.public.primary}}</span>
            </li>
            <li class="collection-item">
              Private Secondary Schools
              <span class="right">{{lga.private.secondary}}</span>
            </li>
            <li class="collection-item">
              Public Secondary Schools
              <span class="right">{{lga.public.secondary}}</span>
            </li>
            <!-- <li class="collection-lga">
                Rural
                <span class="right">{{rural}}</span>
            </li>
            <li class="collection-lga">
                Urban
                <span class="right">{{urban}}</span>
            </li> -->
            <li class="collection-item right-align">
              <a :href="'/schools_manage#' + lga.id" class="small">details</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="stat" class="col s12 m6 l4">
        <div class="row">
          <h3 class="medium upper flow-text">Overview</h3>
          <div class="row p16-top">
            <div class="col s12 m6">
              <div class="small-box orange lighten-5">
                <div class="inner" data-stat-schools>
                  <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                  <p class="no-margin">Schools</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person"></i>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="small-box pink lighten-5">
                <div class="inner" data-stat-staffs>
                  <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                  <p class="no-margin">Staff</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person"></i>
                </div>
                <!--<a class="tiny upper" href="staff.html">
                    <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>-->
              </div>
            </div>
          </div>
          <div class="row p16-top">
            <div class="col s12 m6">
              <div class="small-box blue lighten-5">
                <div class="inner" data-stat-students>
                  <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                  <p class="no-margin">Students</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person"></i>
                </div>
                <!--<a class="tiny upper" href="staff.html">
                    <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>-->
              </div>
            </div>
            <div class="col s12 m6">
              <div class="small-box teal lighten-5">
                <div class="inner" data-stat-parents>
                  <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                  <p class="no-margin">Parents/Guardians</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person"></i>
                </div>
                <!--<a class="tiny upper" href="students.html">
                    <span>More info <i class="material-icons right">keyboard_arrow_right</i></span>
                </a>-->
              </div>
            </div>
          </div>
        </div>
        <div class="row p56-top">
          <h3 class="medium upper flow-text">Gender Distribution</h3>
          <div class="col s12">
            <!--<span style="position:absolute;z-index:1;cursor:pointer;right:12px;top:68px;">
                <a class="dp48" data-export="staff_student_gender_distribution">
                    <i class="material-icons grey-text">more_vert</i>
                </a>
            </span>-->
            <div class="card" id="data-container"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- <div class="section m32-top"> -->
    <div class="row">
      <div class="col s12 m12">
        <h3 class="medium upper flow-text">School Distribution by LGA</h3>
        <div class="col s12">
                            <span style="position:absolute;z-index:1;cursor:pointer;right:12px;top:68px;">
                                <a class="dp48" data-export="school_lga_distribution">
                                    <i class="material-icons grey-text">more_vert</i>
                                </a>
                            </span>
          <div class="card" id="school_distribution"></div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </main>
</template>
<script>

  import api from '../../services/statistics.service'

  // import JSONData from '../../modules/lga.json'

  let SbemisRep = require('../../modules/draw-graphs.js')
  export default {
    name: 'SchoolOverview',
    components: {},
    data() {
      return {
        lgas: null,
        api: 'api',
        items: [
          {
            name: 'Dashboard',
            link: '/dashboard'
          },
          {
            name: 'School',
            link: '/schools'
          }
        ]
      }
    },
    beforeCreate() {
      api.lga_schools_stat()
        .then((data) => {
          this.lgas = Object.keys(data).map(key => data[key])
          this.plotter(data)
        })
        .catch((error) => window.alert("failed"))
    },
    methods: {
      plotter(data) {
        //  lga lga distribution
        let i = ''
        // let myData = ''
        let t = 'Distribution Overview'
        let x = []
        let p = []
        let b = []
        let r = []
        let o = []
        let u = []

        for (i = 0; i < this.lgas.length; i++) {
          x.push(this.lgas[i].name)
          p.push(parseInt(this.lgas[i].private.total))
          b.push(parseInt(this.lgas[i].public.total))
          r.push(parseInt(this.lgas[i].total.primary))
          u.push(parseInt(this.lgas[i].total.secondary))
          o.push(parseInt(this.lgas[i].total.schools))
        }

        //  TODO: bug for private and public matching
        let series = [{
          name: 'Public',
          data: p,
          stack: 'male'
        }, {
          name: 'Private',
          data: b,
          stack: 'male'
        }, {
          name: 'Primary',
          data: r,
          stack: 'female'
        }, {
          name: 'secondary',
          data: u,
          stack: 'female'
        }]

        SbemisRep.renderStackedGroupedColumnChart('school_distribution', t, 'Total Number of Schools', x, series)
        // this.axios.get(this.api).then((response) => {
        //   this.schools = response.data
        // })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
