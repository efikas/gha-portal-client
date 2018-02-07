<template>
    <div>
        <sbemis-header :items="breadCrumbItem"></sbemis-header>
        <div id="app" class="animated">
            <main class="container">
            <div class="section m75-top">
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card-panel with-header blue-bl left">
                            <p>No data available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-aside">
            </div>
        </main>
        </div>
        <SbemisFooter></SbemisFooter>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import SbemisHeader from '@/components/header'
import SbemisFooter from '@/components/footer'
export default {
  name: 'Reports',
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
          name: 'Reports',
          link: '/reports'
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
