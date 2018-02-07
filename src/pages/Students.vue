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
import StudentOverview from '../components/student/overview'
import StudentManage from '../components/student/students.manage'
import StudentAdd from '../components/student/students.add'
export default {
  name: 'Students',
  props: [],
  components: {StudentOverview, StudentManage, StudentAdd, SbemisHeader, SbemisFooter},
  data () {
    return {
      schools: {},
      api: 'api',
      currentPage: () => {
        switch (this.$route.params.page) {
          case 'add':
            return StudentAdd
          case 'manage':
            return StudentManage
          case undefined:
            return StudentOverview
          default:
            return '' //    redirect to 404 page
        }
      },
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
