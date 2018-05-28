<template>
    <div>
         <b-card header="Personal Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form method="" class="form-horizontal">
                     <div class="row odd-row">
                         <div class="col-md-8">
                             <div class="form-group p-10">
                                 <label  class="control-label">School Name</label>
                                 <multiselect v-model="schoolName" :show-labels="false" :options="schools" @input="getSchoolId"></multiselect>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Firstname
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control"  v-model="data.first_name" placeholder="First Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Middle Name
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.middle_name" placeholder="Middle Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Last Name
                                 </label>
                                 <input type="text" class="form-control" v-model="data.last_name" placeholder="">
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Sex
                                 </label>
                                 <div class="radio">
                                     <b-form-radio name="sex" v-model="data.sex" checked="true">
                                         Female
                                     </b-form-radio>
                                 </div>
                                 <div class="radio">
                                     <b-form-radio name="sex" v-model="data.sex">
                                         Male
                                     </b-form-radio>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Date of Birth
                                 </label>
                                 <div class="col-md-12">
                                     <input type="date" class="form-control" v-model="data.date_of_birth">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Place of Birth
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" id="place_of_birth" placeholder="Place of birth" v-model="data.place_of_birth">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Phone Number
                                 </label>
                                 <input type="phone" class="form-control" name="url" value="08064720000" id="url" v-model="data.phone">
                              </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Email
                                 </label>
                                 <input type="email" class="form-control" placeholder="aaa@abcd.com" v-model="data.email">
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">State of Origin
                                 </label>
                                 <div class="col-md-12">
                                     <select  name="example-select" ref="state" class="form-control" size="1" v-model="data.state_of_origin">
                                         <option value="">Select State</option>
                                         <option v-for="state in states" :value="state.id">{{state.name}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Local Govt of Origin
                                 </label>
                                 <div class="col-md-12">
                                     <select class="form-control" size="1" v-model="data.lga_of_origin">
                                         <option value="">Select lga_of_origin</option>
                                         <option v-for="lga_of_origin in lga_of_origins" :value="lga_of_origin.id">{{lga_of_origin.name}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Home Town
                                 </label>
                                 <input type="text" class="form-control" id="text" placeholder="" v-model="data.home_town">
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">House Distance from School (in KM)
                                 </label>
                                 <input type="number" class="form-control" id="text" placeholder="" v-model="data.distance_from_school">
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Marital Status
                                 </label>
                                 <div class="col-md-12">
                                     <select class="form-control" size="1" v-model="data.marital_status">
                                         <option value="">
                                             Select Status
                                         </option>
                                         <option value="0">Single</option>
                                         <option value="1">Married</option>
                                         <option value="2">Others</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Religion
                                 </label>
                                 <div class="col-md-12">
                                     <select class="form-control" size="1" v-model="data.religion">
                                         <option value="">Select Religion</option>
                                         <option v-for="religion in religions" :value="religion.id">{{religion.religion}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-md-8">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-4">Home/Residential Address</label>
                                 <div class="col-md-12">
                                     <textarea rows="4" class="form-control resize_vertical" v-model="data.residential_address" placeholder="Home/Residential Address"></textarea>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <button class="btn btn-primary btn-lg btn-school pull-right" @click="onComplete()">Submit</button>
                 </form>
             </div>
        </b-card>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';

export default {
    name: 'staff-personal',
    components: {
        Multiselect,
    },
    data() {
        return {
            schools: [],        // holds the array of school name
            allSchools: [],     // holds the array of schools object
            staffId: null,
            states: {},
            lga_of_origins: {},
            religions: {},
            schoolName: '',
            data: {
                school_id: '',
                first_name: '',
                middle_name: '',
                last_name: '',
                sex: '',
                date_of_birth: '',
                place_of_birth: '',
                phone: '',
                email: '',
                state_of_origin: '',
                lga_of_origin: '',
                home_town: '',
                distance_from_school: '',
                marital_status: '',
                religion: '',
                residential_address: '',
            }
        }
    },
    methods: {
       onComplete: function(){
           this.$staff.addStaff(1,this.data).then(response => {

            })
        },
        getSchoolId(){
           let _selectedSchool = this.allSchools.filter(school => {
               return (school.name == this.schoolName);
           })

            this.data.school_id = _selectedSchool[0].id;
        }
    },
    mounted() {
        //populate the select boxes using the settings data from local storage
        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.states = settings.states;
            this.religions = settings.religions;
        }

        //get list of schools
        this.$school.allSchools().then(data => {
            this.allSchools = data.data;
        })

        //get staff Data
        this.staffId = this.$route.params.id,
        this.$staff.staffProfile(this.staffId).then(data => {
            this.data = data;
        })
    },
    destroyed: function() {

    },
    watch: {
        allSchools(value){
            //allSchools is
            value.forEach(school => {
                this.schools.push(school.name);
            })

            // Get the school name from the school list using the school id
            // after all school information has been loaded from the database
            let _school = value.filter(school => {
                return (school.id == this.data.school_id);
            })

            this.schoolName = _school[0].name;
            // this.data.school_id = data.school_id;
        }
    }
}
</script>
<style type="text/css" scoped>
#color {
    height: 35px;
}
    /deep/ .form-control:disabled{
        cursor: not-allowed;
    }
    .disabled{
        cursor:not-allowed;
    }
.form-control:active, .input-group .form-control:hover{
    z-index: 1;
}

.dropzone_wrapper {
    width: 100%;
}
.align-left{
    float: left;
}
    .align-right{
        float: right;
    }

tab-content {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}

.even-row{background-color:#fafafa;border-top:1px dashed #959DCC;border-bottom:1px dashed #959DCC;min-height:62px;padding:8px 0;}
.odd-row{padding:8px 0;}
form .odd-row:first-of-type{
    border-top:1px dashed #959DCC;
}
.form-group label{font-size:.8rem!important; letter-spacing:1px; color:#684348!important;}
/* .form-group p:not(.no-block) label{min-width:200px;} */
/* .form-group label span,.form-box .header p > strong{font-size:.85rem!important;font-weight:bold!important;color:#FF5722!important;} */
/* .form-group label.active{color:#684348!important;font-size:.75rem!important;font-weight:400!important;-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;} */
/* .form-group{position:relative;margin-top:.25rem;padding-top:1.5rem!important;padding-bottom:.25rem!important;} */

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>