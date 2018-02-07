<template>
    <div>
        <main class="container">
            <div class="section m75-top">
                <div class="row">
                    <!--<div class="input-field col s12 m9">
                        <input list="sch" type="text" id="schools" name="schools">
                        <label class="active" for="schools">Select School Name <span>*</span></label>
                        <datalist id="sch"></datalist>
                    </div>-->
                    <div class="col s12 m12">
                        <div class="card-panel with-header blue-bl left">
                            <div class="card-panel-header">
                                <h3 class="no-margin no-pad medium brand-red-text">Student List</h3>
                                <div>
                                    <span id="green">Completed</span>
                                    <span id="yellow">Biometrics</span>
                                    <span id="blue">Picture</span>
                                    <span id="red">Not captured</span>
                                </div>
                            </div>
                            <datatable
                            :title="title"
                            :rows="Rows"
                            :columns="Columns"
                            :perPage="[50, 100, 150, 200]"
                            ></datatable>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import DataTable from 'vue-materialize-datatable'
export default {
  name: 'SchoolManage',
  components: {
    'datatable': DataTable
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
