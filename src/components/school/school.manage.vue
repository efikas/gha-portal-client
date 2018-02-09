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
            :paginate="true"
            v-on:row-click="viewSchool"
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
        Rows: [],
        Columns: [
          {
            label: 'SCHOOL NAME',
            field: 'name',
            numeric: false,
            html: true
          },
          {
            label: 'SCHOOL ADDRESS',
            field: 'address',
            numeric: false,
            html: true
          },
          {
            label: 'COORDINATE',
            field: 'coordinate',
            numeric: false,
            html: true
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
      let path = ''
      if (typeof this.$route.query.lga != "undefined") {
        let query = this.$route.query
        path = `/lga/${parseInt(query.lga)}/schools?category=${parseInt(query.category)}&level=${query.level}`
      } else {
        path = `/lga/1/schools?category=1&level=pry`
      }
        api.lga_schools_stat(path)
          .then((data) => {
            data.data.forEach(item => {
              this.Rows.push(
                {
                  name: `<div class="disc left"><span>${item.school_name.charAt(0)}</span></div><span style="font-weight:bold; color: blue"> ${item.school_name}</span>`,
                  // name: `<span style="font-weight:bold; color: blue"> ${item.school_name}</span>`,
                  address: `<span style="margin-left: 15px"> ${item.school_address}</span>`,
                  coordinate: '<span class="dp24 right-align coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>'
                }
              )
            })
          })
          .catch((error) => window.alert(error))
    },
    methods: {
      viewSchool(row) {
        this.$router.push({ path: '/schools/view/' + row.id })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
