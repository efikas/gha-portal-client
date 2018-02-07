<template>
    <main class="container">
        <div class="section m75-top">
            <div class="row">
                <div class="col s12 m9">
                    <div class="card-panel with-header blue-bl left">
                        <div class="card-panel-header">
                            <h4 class="no-margin no-pad medium brand-red-text">School List</h4>
                        <div class="right-align export">
                            <i class="material-icons pointer hide" title="Export" id="export" data-school="">publish</i>
                        </div>
                        </div>
                        <!-- <datatable
                        :title="title"
                        :rows="Rows"
                        :columns="Columns"
                        :perPage="[50, 100, 150, 200]"
                        ></datatable> -->
                    </div>
                </div>
                <div class="col m3">
                    <aside class="listings">

                    </aside>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
// import DataTable from 'vue-materialize-datatable'
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
export default {
  name: 'SchoolManage',
  components: {
    // 'datatable': DataTable
  },
  data () {
    return {
      schools: {},
      api: 'api',
      page: this.$route.params.page,
      title: 'School List',
      Rows: [
        {
          name: 'SCHOOL NAME',
          id: '',
          coordinate: '',
          opt: ''
        }
      ],
      Columns: [
        {
          label: 'SCHOOL NAME',
          field: 'name',
          numeric: false,
          html: false
        },
        {
          label: 'SCHOOL ID',
          field: 'id',
          numeric: false,
          html: false
        },
        {
          label: 'COORDINATE',
          field: 'coordinate',
          numeric: false,
          html: false
        },
        {
          label: '',
          field: 'opt',
          numeric: false,
          html: false
        }
      ]
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
          name: 'Students',
          link: '/sstudents'
        },
        {
          name: 'Manage',
          link: '/students/manage'
        }
      ]
    )
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
