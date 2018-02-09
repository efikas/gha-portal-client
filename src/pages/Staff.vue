<template>
    <div>
        <sbemis-header :items="breadCrumbItem"></sbemis-header>
        <div id="app" class="animated">
            <component :is="currentPage()"></component>
        </div>
        <SbemisFooter></SbemisFooter>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SbemisHeader from '../components/header'
import SbemisFooter from '../components/footer'
import StaffOverview from '../components/staff/overview'
import StaffManage from '../components/staff/staff.manage'
import StaffAdd from '../components/staff/staff.add'
import StaffView from '../components/staff/staff.view'
export default {
  name: 'Schools',
  props: [],
  components: {
    'StaffOverview': StaffOverview,
    'StaffManage': StaffManage,
    'StaffAdd': StaffAdd,
    'SbemisHeader': SbemisHeader,
    'SbemisFooter': SbemisFooter
  },
  data () {
    return {
      schools: {},
      api: 'api',
      currentPage: () => {
        switch (this.$route.params.page) {
          case 'add':
            return StaffAdd
          case 'manage':
            return StaffManage
          case 'view':
            return StaffView
          case undefined:
            return StaffOverview
          default:
            return '' //    redirect to 404 page
        }
      }
    }
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
