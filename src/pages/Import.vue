<template>
    <div>
        <sbemis-header :items="breadCrumbItem"></sbemis-header>
        <div id="app" class="animated">
            <main class="container">
            <div class="section m56-top">
                <div id="stat" class="row center">
                    <div class="col s12 m4 l3  offset-l1">
                        <div class="small-box blue lighten-5 relative uploads" id="student">
                            <div class="inner" data-stat-fstudents><i class="material-icons right" style="font-size: 3em;">cloud_upload</i>
                                <p class="no-margin">Upload Student</p>
                            </div>
                            <div class="myChart" id='femaleChart'></div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3 offset-l1">
                        <div class="small-box blue lighten-5 relative uploads" id="staff">
                            <div class="inner" data-stat-fstudents><i class="material-icons right" style="font-size: 3em;">cloud_upload</i>
                                <p class="no-margin">Upload Staff</p>
                            </div>
                            <div class="myChart" id='femaleChart'></div>
                        </div>
                    </div>
                    <div class="col s12 m4 l3  offset-l1">
                        <div class="small-box blue lighten-5 relative uploads" id="school">
                            <div class="inner" data-stat-fstudents><i class="material-icons right" style="font-size: 3em;">cloud_upload</i>
                                <p class="no-margin">Upload School</p>
                            </div>
                            <div class="myChart" id='femaleChart'></div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="section m75-top hide" id="upload-section">
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card-panel with-header blue-bl left">
                            <div class="card-content">
                                <span class="card-title" id="card-title"></span>
                            </div>
                            <div class="card-action">
                                <form name="file-import" enctype="multipart/form-data" data-import="">
                                    <div class="file-field input-field">
                                        <div class="btn">
                                            <span>File</span>
                                            <input type="file" id="uploadBox">
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input id="file" class="file-path validate" type="text">
                                        </div>
                                    </div>
                                </form>
                                <div class="divider-dotted"></div>
                                <button type="submit" class="btn btn-primary waves-effect waves-ripple animated">
                                    <span>
                                        Import
                                        <i class="material-icons left">lock</i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </main>
        </div>
        <SbemisFooter></SbemisFooter>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import SbemisHeader from '../components/header'
import SbemisFooter from '../components/footer'
export default {
  name: 'Import',
  props: [],
  components: {SbemisHeader, SbemisFooter},
  data () {
    return {
      schools: {},
      api: 'api'
    }
  },
  methods: {
    ...mapMutations([
      // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
      'updateBreadCrumbItem'
    ])
  },
  created () {
    this.$store.commit(
      'updateBreadCrumbItem',
      [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'Import',
          link: '/import'
        }
      ]
    )
  },
  computed: {
    ...mapGetters([
      //    Mounts the "breadCrumbItem" getter to the scope of your component.
      'breadCrumbItem'
    ])
  },
  mounted () {
    // console.log('aaa' + this.$route.params.page)s
    // this.axios.get(this.api).then((response) => {
    //   this.schools = response.data
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
