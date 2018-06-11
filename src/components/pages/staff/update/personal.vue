<template>
    <div>
         <b-card header="Personal Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form class="form-horizontal" @submit.prevent="onSubmit">
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
                                 <label class="control-label col-md-8" for="text">Firstname <span class="text-error">*</span></label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-validate="validation.required" name="firstname"  v-model="data.first_name" placeholder="First Name">
                                     <span class="text-error">{{ errors.first('firstname') }}</span>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Middle Name <span class="text-error">*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-validate="validation.required" name="middlename" v-model="data.middle_name" placeholder="Middle Name">
                                     <span class="text-error">{{ errors.first('middlename') }}</span>
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
                                 <label class="control-label" for="text">Sex <span class="text-error">*</span>
                                 </label>
                                 <b-form-radio-group v-model="data.sex" :options="sexOptions" stacked name="sex" />
                                 <!--<div class="radio">-->
                                     <!--<b-form-radio name="sex" v-model="data.sex"  :value="data.sex">-->
                                         <!--Female-->
                                     <!--</b-form-radio>-->
                                 <!--</div>-->
                                 <!--<div class="radio">-->
                                     <!--<b-form-radio name="sex" v-model="data.sex" :value="data.sex">-->
                                         <!--Male-->
                                     <!--</b-form-radio>-->
                                 <!--</div>-->
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Date of Birth <span class="text-error">*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <input type="date" class="form-control" v-validate="validation.required" name="birthdate" v-model="data.date_of_birth">
                                     <span class="text-error">{{ errors.first('birthdate') }}</span>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Place of Birth <span class="text-error">*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" id="place_of_birth" placeholder="Place of birth" v-model="data.place_of_birth">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Phone Number <span class="text-error">*</span>
                                 </label>
                                 <input type="phone" class="form-control" v-validate="validation.required" name="phone" value="08064720000" id="phone" v-model="data.phone">
                                 <span class="text-error">{{ errors.first('phone') }}</span>
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
                                 <label class="control-label col-md-8" for="text">State of Origin <span class="text-error">*</span>
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
                                 <label class="control-label col-md-12" for="text">Local Govt of Origin <span class="text-error">*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <select class="form-control" size="1" v-model="data.lga_of_origin">
                                         <option value="">Select Local Govt</option>
                                         <option v-for="lga in lgaInSelectedState" :value="lga.id">{{lga.name}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Home Town <span class="text-error">*</span>
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
                                 <label class="control-label col-md-8" for="text">Marital Status <span class="text-error">*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <select class="form-control" size="1" v-model="data.marital_status">
                                         <option value="">Select Status</option>
                                         <option value="1">Single</option>
                                         <option value="2">Married</option>
                                         <option value="3">Divorced</option>
                                         <option value="4">Widowed</option>
                                         <option value="5">Separated</option>
                                         <!-- <option value="6">Others</option> -->
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Religion <span class="text-error">*</span>
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
                                 <label class="control-label col-md-4">Home/Residential Address <span class="text-error">*</span></label>
                                 <div class="col-md-12">
                                     <textarea rows="4" class="form-control resize_vertical" v-model="data.residential_address" placeholder="Home/Residential Address"></textarea>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
                 </form>
             </div>
        </b-card>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';
    import VeeValidate from 'vee-validate';

    Vue.use(VueSweetalert2);
    Vue.use(VeeValidate);
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
            //lgaInSelectedState: {},     // holds the local government in the selected state
            allLga: {}, // hold all the local government
            religions: {},
            schoolName: '',
            sexOptions: [{ text: 'Female', value: 'F' },{ text: 'Male', value: 'M' }],
            data: {
                // school_id: '',
                // first_name: '',
                // middle_name: '',
                // last_name: '',
                // sex: '',
                // date_of_birth: '',
                // place_of_birth: '',
                // phone: '',
                // email: '',
                // state_of_origin: '',
                // lga_of_origin: '',
                // home_town: '',
                // distance_from_school: '',
                // marital_status: '',
                // religion: '',
                // residential_address: '',
            },
            validation: {
                text: 'required',
                required: 'required',
                email: 'email',
                number: { regex: /\\.(js|ts)$/},
            }
        }
    },
    methods: {
       onSubmit: function(){
           this.$staff.editStaff(this.staffId, this.data).then(response => {
               if (typeof  response == 'object'){
                   this.$swal({
                       type: 'success',
                       title: 'Staff Record updated Successfully!',
                       confirmButtonColor: '#3085d6',
                       confirmButtonText: 'Ok'
                   }).then((result) => {
                       if (result.value) {
                           window.location.href = 'http://localhost:8080/staff/' + this.staffId;
                       }
                   })
               }
                   // else {
                   //     this.$swal({
                   //         type: 'error',
                   //         title: 'Error updating school information!',
                   //         confirmButtonColor: '#3085d6',
                   //         confirmButtonText: 'Ok'
                   //     }).then((result) => {
                   //         if (result.value) {
                   //             // todo reload page
                   //             location.reload();
                   //         }
                   //     })
                   // }

            })
        },
        getSchoolId(){
           let _selectedSchool = this.allSchools.filter(school => {
               return (school.name == this.schoolName);
           })
            this.data.school_id = _selectedSchool[0].id;
        }
    },
    computed: {
        // Filter the local governments base on the selected state
        lgaInSelectedState: function() {
            if(this.data.state_of_origin){
                let _filter;
              _filter =  this.allLga.filter(lga => {
                    return (lga.state_id == this.data.state_of_origin);
                })
               return _filter;
            }
           // return this.data.state_of_origin ? (this.value.interval * this.value.multiplier).toFixed(2) : 0
        }
    },
    mounted() {
        //populate the select boxes using the settings data from local storage
        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.states = settings.states;
            this.religions = settings.religions;
            this.allLga = settings.lga_areas_all;
        }

        //get list of schools
        this.$school.allSchools().then(data => {
            this.allSchools = data.data;
        })

        //get staff Data
        this.staffId = this.$route.params.id,
        this.$staff.staffProfile(this.staffId).then(data => {
            this.data = data;
            this.schoolName = data.school.name

            // Object.keys(this.data).forEach(key => {
            //     this.data[key] = (data.hasOwnProperty(key)) ? data[key] : null;
            // })
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
            // let _school = value.filter(school => {
            //     return (school.id == this.data.school_id);
            // })

            // this.schoolName = _school[0].name;
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