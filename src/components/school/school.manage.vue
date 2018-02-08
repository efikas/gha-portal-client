<template>
  <main class="container">
    <div class="section m75-top">
      <div class="row">
        <div class="col s12 m10 offset-m1">
          <datatable
            :title="title"
            :rows="Rows"
            :columns="Columns"
            :perPage="[50, 100, 150, 200]"
          ></datatable>
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

  import api from '../../services/school.service'
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
            name: 'A U D Nur/pry School',
            id: '210',
            coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>',
            opt: '<span class="tool"><i class="material-icons" >visibility</i></span>'
          },
          {
            name: 'A U D Nur/pry School, Ajegunle, Ise- Ekiti',
            id: '706',
            coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>',
            opt: '<span class="tool"><i class="material-icons">visibility</i></span>'
          },
          {
            name: 'A U D Nur/pry School, Ajegunle, Ise- Ekiti',
            id: '657',
            coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>',
            opt: '<span class="tool"><i class="material-icons">visibility</i></span>'
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
            html: true
          },
          {
            label: 'View',
            field: 'opt',
            numeric: false,
            html: true
          }
        ]
      }
    },
    created() {
      if(typeof this.$route.query.lga != "undefined")
      {
        let query = this.$route.query
        let path = `/lga/${parseInt(query.lga)}/schools?category=${parseInt(query.category)}&level=${query.level}`
        api.lga_schools_stat(path)
          .then((data) => {
            console.log(data)
          })
          .catch((error) => window.alert("failed"))
      }
    },
    mounted() {
      // this.axios.get(this.api).then((response) => {
      //   this.schools = response.data
      // })
    },
    methods: {
      viewSchool(schoolId) {
        window.location.href = window.location.origin + '/dashboard'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
