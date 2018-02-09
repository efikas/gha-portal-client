<template>
  <main class="container">
    <div class="section m75-top">
      <div class="row">
        <div class="col s12 m10 offset-m1">
          <datatable
            :title="title"
            :rows="rows"
            :columns="columns"
            :perPage="[50, 100, 150, 200]"
            :paginate="true"
            v-on:row-click="viewStaff"
          >
          </datatable>
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

  import api from '../../services/staff.service'
  import DataTable from 'vue-materialize-datatable'

  export default {
    name: 'SchoolManage',
    components: {
      'datatable': DataTable
    },
    data() {
      return {
        schools: {},
        api: 'api',
        page: this.$route.params.page,
        school_id: this.$route.query.school_id,
        category: this.$route.query.category || null,
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
        title: 'Staff List',
        rows: [],
        columns: [
          {
            label: 'ID',
            field: 'id',
            numeric: false,
            html: false
          },
          {
            label: 'LAST NAME',
            field: 'last_name',
            numeric: false,
            html: false
          },
          {
            label: 'FIRST NAME',
            field: 'first_name',
            numeric: false,
            html: false
          },
          {
            label: 'MIDDLE NAME',
            field: 'middle_name',
            numeric: false,
            html: false
          },
          {
            label: 'GENDER',
            field: 'sex',
            numeric: false,
            html: false
          }
          // {
          //   label: 'View',
          //   field: 'opt',
          //   numeric: false,
          //   html: true
          // }
        ]
      }
    },
    created() {
      api.staffBySchool(this.school_id, this.category)
        .then((data) => {
          // console.log(data)
          data.data.forEach(item => {
            this.rows.push(item)
          })
        })
        .catch((error) => window.alert(error))
    },
    methods: {
      viewStaff(row) {
        this.$router.push({ path: '/staff/view/' + row.id })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
