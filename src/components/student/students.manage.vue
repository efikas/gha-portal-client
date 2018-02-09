<template>
    <main class="container">
        <div class="section m75-top">
            <div class="row">
                <div class="col s12 m10 offset-m1">
                    <div class="card-panel with-header blue-bl left">
                        <div class="card-panel-header">
                            <h4 class="no-margin no-pad medium brand-red-text">School List</h4>
                        <div class="right-align export">
                            <i class="material-icons pointer hide" title="Export" id="export" data-school="">publish</i>
                        </div>
                        </div>
                        <div class="row">
               <datatable
            :title="title"
            :rows="Rows"
            :columns="Columns"
            :perPage="[50, 100, 150, 200]"
            :paginate="false"
            v-on:row-click="viewSchool"
          >

          <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a @click="paginate('1')">1</a></li>
            <li class="waves-effect"><a @click="paginate('2')">2</a></li>
            <li class="waves-effect"><a @click="paginate('3')">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
          </ul>
            
          </datatable>
                    </div>
                </div>
                <div class="col m3">
                    <aside class="listings">

                    </aside>
                </div>
            </div>
        </div>
        </div>
    </main>
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

    if(typeof this.$route.query.lga != "undefined")
      {
        let query = this.$route.query
        let path = `/lga/${parseInt(query.lga)}/schools?category=${parseInt(query.category)}&level=${query.level}`
        api.lga_schools_stat(path)
          .then((data) => {
            console.log(data)
            this.Rows = []
            if (parseInt(query.page) > 1){
              this.Rows = [
                    {
                      name: 'A U D Nur/pry School',
                      id: '210',
                      coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>'
                    },
                    {
                      name: 'A U D Nur/pry School, Ajegunle, Ise- Ekiti',
                      id: '706',
                      coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>'
                    },
                    {
                      name: 'A U D Nur/pry School, Ajegunle, Ise- Ekiti',
                      id: '657',
                      coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>'
                    }
                  ] 
            } else {
            data.data.forEach(item => {
              this.Rows.push(
                {
                name: item.data.school_name,
                id: item.id,
                coordinate: '<span class="dp24 coordinate" data-geolocation=""><i class="material-icons">my_location</i></span>'
                }
              )
            })
            }
          })
          .catch((error) => window.alert(error))
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
