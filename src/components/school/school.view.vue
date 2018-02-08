<template>
    <main class="container">
            <div class="banner m40-top">
                <div class="row">
                    <div class="col s12 m12 l7 banner-header relative">
                        <h4 id="school-name" class="strong full-width no-margin p16-top large brand-red-text flow-text relative"></h4>
                        <!--<a href="javascript:history.go(-1)" class="white-text absolute brand-blue"><i class="material-icons strong">keyboard_arrow_left</i></a>-->
                        <!--<span class='dp24 tool' data-action='edit_entity' data-url='schools.edit' data-unique-id=''><i class='material-icons'>edit</i></span>-->
                        <!--<a data-edit="" class="white-text absolute green"><i class="material-icons">edit</i></a>-->
                        <!--<a data-delete="" class="white-text absolute red"><i class="material-icons strong">close</i></a>-->
                    </div>
                    <div class="col s12 m12 l5 no-padding banner-stats">
                        <div class="col s4">
                            <div class="inner" data-tstaffs>
                                <h3 class="no-margin flow-text"><img src="assets/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Teaching Staff</p>
                            </div>
                        </div>
                        <div class="col s4">
                            <div class="inner" data-nstaffs>
                                <h3 class="no-margin flow-text"><img src="assets/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Non-Teaching Staff</p>
                            </div>
                        </div>
                        <div class="col s4">
                            <div class="inner" data-students>
                                <h3 class="no-margin flow-text"><img src="assets/images/gears.svg" height="39" width="39"></h3>
                                <p class="no-margin">Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="row">
                <div class="col s6">
                    <div class="col s12 m12 l7 banner-header relative">
                        <h5 id="school_facilities" class="full-width no-margin p16-top large brand-red-text flow-text relative">
                            <p class="medium">Students List</p>
                        </h5>
                        &lt;!&ndash;<a href="javascript:history.go(-1)" class="white-text absolute brand-blue"><i class="material-icons strong">keyboard_arrow_left</i></a>&ndash;&gt;
                        &lt;!&ndash;<span class='dp24 tool' data-action='edit_entity' data-url='schools.edit' data-unique-id=''><i class='material-icons'>edit</i></span>&ndash;&gt;
                        &lt;!&ndash;<a data-edit="" class="white-text absolute green"><i class="material-icons">edit</i></a>&ndash;&gt;
                        &lt;!&ndash;<a data-delete="" class="white-text absolute red"><i class="material-icons strong">close</i></a>&ndash;&gt;
                    </div>
                </div>
            </div>-->
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
                            <table id="data-table" class="bordered highlight responsive-table">
                                <thead>
                                <tr>
                                    <th data-field="id" class="upper">Reg. No.</th>
                                    <th data-field="name" class="upper">Name</th>
                                    <th class="upper" data-field="sex">Gender</th>
                                    <th class="upper" data-field="age">Age</th>
                                    <th class="upper" data-field="class">Class</th>
                                    <th data-field="tools"></th>
                                </tr>
                                </thead>
                                <tbody id="student-list">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>
<script>
import DataTable from 'vue-materialize-datatable'
import VueGoodTable from 'vue-good-table'
export default {
  name: 'SchoolView',
  components: {
    'datatable': DataTable
  },
  data () {
    return {
      schools: {},
      api: 'api',
      page: this.$route.params.page,
      Rows: [
        {
          name: 'Muyiwa Adaramola',
          regNo: '210',
          gender: 'Male',
          age: '12yrs',
          class: 'Pry 6',
          status: '<span class="status-green">hhhh</span>',
          view: '<span class="tool"><i class="material-icons" >visibility</i></span>'
        }
      ],
      Columns: [
        {
          label: 'REG NO',
          field: 'regNo',
          numeric: false,
          html: true
        },
        {
          label: 'NAME',
          field: 'name',
          numeric: false,
          html: false
        },
        {
          label: 'GENDER',
          field: 'gender',
          numeric: false,
          html: true
        },
        {
          label: 'AGE',
          field: 'age',
          numeric: false,
          html: true
        },
        {
          label: 'CLASS',
          field: 'class',
          numeric: false,
          html: true
        },
        {
          label: 'Status',
          field: 'status',
          numeric: false,
          html: true
        },
        {
          label: 'View',
          field: 'view',
          numeric: false,
          html: true
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
<style scoped>
span.status-red{width:79px;height:26px;background:url("/static/images/indicator_sprite.png") -79px 0 no-repeat;display:inline-block;}
span.status-green{width:79px !important;height:26px !important;display:inline-block !important; color: green !important;}
span.status-yellow{width:79px;height:26px;background:url("/static/images/indicator_sprite.png") -79px -26px no-repeat;display:inline-block;}
span.status-blue{width:79px;height:26px;background:url("/static/images/indicator_sprite.png") 0 -26px no-repeat;display:inline-block;}

</style>
