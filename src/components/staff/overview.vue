<template>
    <div>
        <main class="container">
            <div class="section m56-top">
                <div id="stat" class="row">
                    <div class="col s12 m6 l3">
                        <div class="small-box orange lighten-5">
                            <div class="inner" data-stat-tstaffs>
                                <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Teaching Staff</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="small-box pink lighten-5">
                            <div class="inner" data-stat-nstaffs>
                                <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Non-teaching Staff</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="small-box blue lighten-5">
                            <div class="inner" data-stat-fstaffs>
                                <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Female Staff</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="small-box teal lighten-5">
                            <div class="inner" data-stat-mstaffs>
                                <h3 class="no-margin"><img src="static/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Male Staff</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="row">
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
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
  name: 'StaffOverview',
  components: {},
  data () {
    return {
      schools: {},
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
    // this.axios.get(this.api).then((response) => {
    //   this.schools = response.data
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
