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
            :paginate="false"
            v-on:row-click="viewSchool"
          >
          </datatable>
          <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a @click="paginate('1')">1</a></li>
            <li class="waves-effect"><a @click="paginate('2')">2</a></li>
            <li class="waves-effect"><a @click="paginate('3')">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
          </ul>
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
        resp: {},
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
    beforeRouteEnter (to, from, next) {
      getPost(to.params.id, (err, post) => {
        next(vm => vm.setData(err, post))
      })
      let query = to.query
      let path = `/lga/${parseInt(query.lga)}/schools?category=${parseInt(query.category)}&level=${query.level}`
      api.lga_schools_stat(path)
        .then((data) => {
          console.log(data)
        })
        .catch((error) => window.alert(error))
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
          .catch((error) => window.alert(error))
      }
    },
    methods: {
      setData (err, post) {
        if (err) {
          this.error = err.toString()
        } else {
          this.Rows = []

          post.data.forEach(item => {
            this.Rows.push(
              {
                name: item.data.school_name,
                id: item.id,
                coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>'
              }
            )
          })
        }
      },
      viewSchool(schoolId) {
        window.location.href = window.location.origin + '/dashboard'
      },
      paginate(page) {
        let query = this.$route.query
          window.location.href = window.location.origin + '/schools/manage?lga=' + parseInt(query.lga) +
           '&category=' + parseInt(query.category) + '&level=' + query.level + '&page=' + page

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
