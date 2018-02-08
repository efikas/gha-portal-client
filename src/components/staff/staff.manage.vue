<template>
    <main class="container">
      <div class="section m75-top">
          <div class="row">
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
  created() {
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
<style lang="css">
  
</style>
