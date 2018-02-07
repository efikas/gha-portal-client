<template>
        <main class="container">
            <!--<div class="section m75-top">
            </div>-->
            <!-- <div class="section m75-top"> -->
                <div class="row">
                    <div id="school_distribution" class="col s12 m6 l8 relative">
                        <h3 class="medium upper flow-text">Distribution of Schools / LGA</h3>
                            <div class="col s12 m6 l4" v-for="item in schools" :key="item.id">
                                <ul class="collection with-header">
                                    <li class="collection-header relative">
                                        <a :href="'/schools_manage#' + item.lga_code">
                                            <h3 class="el">{{item.lga_name}}</h3>
                                        </a>
                                        <span class="absolute white-text green"> {{item.total}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Private Schools
                                        <span class="right">{{item.private}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Public Schools
                                        <span class="right">{{item.public}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Primary Schools
                                        <span class="right">{{item.primary}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Secondary Schools
                                        <span class="right">{{item.secondary}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Private Primary Schools
                                        <span class="right">{{item.private_primary}}</span>
                                    </li>
                                    <li class="collection-item">
                                       Public Primary schools
                                        <span class="right">{{item.public_primary}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Private Secondary Schools
                                        <span class="right">{{item.private_secondary}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Public Secondary Schools
                                        <span class="right">{{item.public_secondary}}</span>
                                    </li>
                                    <!-- <li class="collection-item">
                                        Rural
                                        <span class="right">{{rural}}</span>
                                    </li>
                                    <li class="collection-item">
                                        Urban
                                        <span class="right">{{urban}}</span>
                                    </li> -->
                                    <li class="collection-item right-align">
                                        <a :href="'/schools_manage#' + item.lga_code" class="small">details</a>
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
import JSONData from '@/modules/school.json'
let SbemisRep = require('@/modules/draw-graphs.js')
export default {
  name: 'SchoolOverview',
  components: {},
  data () {
    return {
      schools: null,
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
  mounted () {
    this.schools = Object.keys(JSONData).map(key => JSONData[key])
    this.schools.forEach((item, index) => {
      this.schools[index]['total'] = parseInt(item.public) + parseInt(item.private)
    })
    //  lga school distribution
    let i = ''
    // let myData = ''
    let t = 'Distribution Overview'
    let x = []
    let p = []
    let b = []
    let r = []
    let o = []
    let u = []

    for (i = 0; i < this.schools.length; i++) {
      x.push(this.schools[i].lga_name)
      p.push(parseInt(this.schools[i].private))
      b.push(parseInt(this.schools[i].public))
      r.push(parseInt(this.schools[i].primary))
      u.push(parseInt(this.schools[i].secondary))
      o.push(parseInt(this.schools[i].total))
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
