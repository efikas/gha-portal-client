<template>
  <main class="container">
    <div class="banner m40-top">
      <div class="row">
        <div class="col s12 m12 l7 banner-header relative">
          <h4 id="school-name" class="strong full-width no-margin p16-top large brand-red-text flow-text relative">
            {{ school.data.school_name }}<span class="medium clearfix blue-grey-text">{{ school.data.school_address }}</span>
          </h4>
          <a href="javascript:history.go(-1)" class="white-text absolute brand-blue"><i class="material-icons strong">keyboard_arrow_left</i></a>
          <a data-edit="" class="white-text absolute green"><i class="material-icons">edit</i></a>
          <a data-delete="" class="white-text absolute red"><i class="material-icons strong">close</i></a>
        </div>
        <div class="col s12 m12 l5 no-padding banner-stats">
          <div class="col s4">
            <router-link :tag="div" :to="{path:'/staff/manage', query: {school_id: school.id, category: 1}}" class="inner" data-tstaffs>
              <h3 class="no-margin flow-text"><img src="/static/images/gears.svg" height="39" width="39">{{ school.staffs.teaching }}</h3>
              <p class="no-margin">Teaching Staff</p>
            </router-link>
          </div>
          <div class="col s4">
            <router-link :tag="div" :to="{path:'/staff/manage', query: {school_id: school.id, category: 0}}" class="inner" data-nstaffs>
              <h3 class="no-margin flow-text"><img src="/static/images/gears.svg" height="39" width="39">{{school.staffs.none_teaching }}</h3>
              <p class="no-margin">Non-Teaching Staff</p>
            </router-link>
          </div>
          <div class="col s4">
            <router-link :tag="div" :to="{path:'/staff/manage', query: {school_id: school.id}}" class="inner" data-students>
              <h3 class="no-margin flow-text"><img src="/static/images/gears.svg" height="39" width="39">{{school.students }}</h3>
              <p class="no-margin">Students</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="section m75-top">
       <div class="row">
        <div class="col s12 m10 offset-m1">
        <table>
        <thead>
          <tr>
              <!-- <th style="width: 2px">SN</th> -->
              <th>Information</th>
              <th>Details</th>
              <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(info, index) in school_info" :key="info.id">
            <!-- <td style="width: 2px">{{index + 1}}</td> -->
            <td>{{info.name}}</td>
            <td>Eclair</td>
            <td>
                 <span class='dp24 tool'>
                <i class="material-icons pointer">edit</i>
                </span>
                </td>
          </tr>
        </tbody>
      </table>
      </div>
        </div>
      </div>
  </main>
</template>
<script>

  import api from '../../services/school.service'

  export default {
    name: 'SchoolView',
    components: {},
    data() {
      return {
        school: {},
        page: this.$route.params.page,
        id: this.$route.params.id,
         school_info: [
        {'id': "pta_pf", 'name':"PTA"},
        {'id': "shifts", 'name':"Shifts"},
        {'id': "multigrade", 'name':"Multigrade"},
        {'id': "established", 'name':"Date Established"},
        {'id': "geolocation", 'name':"Geographical location"},
        {'id': "school_name", 'name':"School Name"},
        {'id': "school_phone", 'name':"Phone Number"},
        {'id': "village_town", 'name':"School Town"},
        {'id': "school_grants", 'name':"School Grant"},
        {'id': "school_address", 'name':"School Address"},
        {'id': "school_type_id", 'name':"School Type"},
        {'id': "school_location", 'name':"School Location"},
        {'id': "average_distance", 'name':"Average distance"},
        {'id': "development_plan", 'name':"Development Plan"},
        {'id': "education_levels", 'name':"Education Level"},
        {'id': "school_ownership", 'name':"School Ownership"},
        {'id': "name_of_proprietor", 'name':"Name Of Proprietor"},
        {'id': "school_category_id", 'name':"School Category"},
        {'id': "management_committee", 'name':"Management Commitee"},
        {'id': "school_email_address", 'name':"School Email"},
        {'id': "private_membership_name", 'name':"Private membership Name"},
        {'id': "school_recognition_status", 'name': "School Recognition Status"},
        {'id': "classes", 'name': "Classes"},
        {'id': "created_at", 'name': 'Crated At'},
        {'id': "updated_at", 'name': 'Updated At'},
        {'id': "classrooms", 'name': 'Classroom'},
        {'id': "grants", 'name':"Grants"},
        {'id': "inspections", 'name': 'Inspections'},
        {'id': "library", 'name': "Library"}
        ]
      }
    },
    created() {
      api.school(this.id)
        .then(data => {
          console.log(data)
          this.school = data
        })
        .catch(() => window.alert("request failed"))
    }
  }
</script>
<style scoped>
  span.status-red {
    width: 79px;
    height: 26px;
    background: url("/static/images/indicator_sprite.png") -79px 0 no-repeat;
    display: inline-block;
  }

  span.status-green {
    width: 79px !important;
    height: 26px !important;
    display: inline-block !important;
    color: green !important;
  }

  span.status-yellow {
    width: 79px;
    height: 26px;
    background: url("/static/images/indicator_sprite.png") -79px -26px no-repeat;
    display: inline-block;
  }

  span.status-blue {
    width: 79px;
    height: 26px;
    background: url("/static/images/indicator_sprite.png") 0 -26px no-repeat;
    display: inline-block;
  }

</style>
