<template>
    <main class="container">
      <div class="section m75-top">
          <div class="row">
               <datatable
                :title="title"
                :rows="Rows"
                :columns="Columns"
                :perPage="[50, 100, 150, 200]"
                ></datatable>
          </div>
      </div>
    </main>
</template>

<script>
import DataTable from 'vue-materialize-datatable'
export default {
  name: 'StaffManage',
  components: {
    'datatable': DataTable
  },
  data () {
    return {
      schools: {},
      api: 'api',
      page: this.$route.params.page,
      items: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'School',
          link: '/schools'
        }
      ],
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
