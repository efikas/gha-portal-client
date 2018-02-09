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
            <div class="inner" data-tstaffs>
              <h3 class="no-margin flow-text"><img src="/static/images/gears.svg" height="39" width="39">{{
                school.staffs.teaching }}</h3>
              <p class="no-margin">Teaching Staff</p>
            </div>
          </div>
          <div class="col s4">
            <div class="inner" data-nstaffs>
              <h3 class="no-margin flow-text"><img src="/static/images/gears.svg" height="39" width="39">{{
                school.staffs.none_teaching }}</h3>
              <p class="no-margin">Non-Teaching Staff</p>
            </div>
          </div>
          <div class="col s4">
            <div class="inner" data-students>
              <h3 class="no-margin flow-text"><img src="/static/images/gears.svg" height="39" width="39">{{
                school.students }}</h3>
              <p class="no-margin">Students</p>
            </div>
          </div>
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
        id: this.$route.params.id
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
