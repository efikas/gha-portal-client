<template>
    <div>
         <!--<b-card header="Personal Information" header-tag="h4" class="bg-header-card">-->
             <!--<div>-->
                 <!--<form method="" class="form-horizontal" @submit.prevent="onSubmit">-->
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
                                 <label class="control-label col-md-8">Firstname
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.first_name" placeholder="First Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Middle Name
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.middle_name" placeholder="Middle Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Last Name
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.last_name" placeholder="">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Sex
                                 </label>
                                 <b-form-radio-group v-model="data.sex" :options="sexOptions" stacked name="sex" />
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8">Date of Birth
                                 </label>
                                 <div class="col-md-12">
                                     <input type="date" class="form-control" v-model="data.date_of_birth">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Place of Birth
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.place_of_birth" id="pob" placeholder="Place of birth">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Phone Number (optional)
                                 </label>
                                 <div class="col-md-12">
                                     <input type="phone" class="form-control" name="phone" v-model="data.phone" placeholder="08064720000" id="phone">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="email">Email (optional)
                                 </label>
                                 <div class="col-md-12">
                                     <input type="email" class="form-control" v-model="data.email" id="email" placeholder="aaa@abcd.com">
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Any special Challenge?
                                 </label>
                                     <select v-model="data.special_condition" class="form-control" size="1">
                                         <option value="">Select Challenge</option>
                                         <option v-for="challenge in specialChallenges" :value="challenge.id">{{challenge.condition}}</option>
                                     </select>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4">
                             <div class="row">
                                 <div class="col-xs-12 col-sm-6">
                                     <div class="form-group p-10">
                                         <label class="control-label">Height (in m)
                                         </label>
                                             <input type="number" step="0.01" class="form-control" v-model="data.height" placeholder="">
                                     </div>
                                 </div>
                                 <div class="col-xs-12 col-sm-6">
                                     <div class="form-group p-10">
                                         <label class="control-label">weight (in Kg)
                                         </label>
                                             <input type="number" step="0.1" class="form-control" v-model="data.weight" placeholder="">
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Blood Group Type
                                 </label>
                                     <input type="text" class="form-control" v-model="data.blood_group" placeholder="A, B, AB, O">
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Birth Cert Type
                                 </label>
                                 <div class="col-md-12">
                                     <select name="birth_cert_type" v-model="data.birth_cert_type" class="form-control" size="1">
                                         <option value="">Select Cert Type</option>
                                         <option v-for="cert in birthCerts" :value="cert.id">{{cert.birth_cert_type}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <!--<button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>-->
                 <!--</form>-->
             <!--</div>-->
         <!--</b-card>-->
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';
    import Vuelidate from 'vuelidate';
    import { required, email, numeric } from 'vuelidate/lib/validators';

    Vue.use(VueSweetalert2);
    Vue.use(Vuelidate);
    export default {
    name: 'student-basic',
        props: {
            page: {
                type: String,
                required: true,
            },
            data: {
                type: Object,
                required: true,
            }
        },
    components: {
        Multiselect,
    },
    data() {
        return {
            schools: [],        // holds the array of school name
            allSchools: [],     // holds the array of schools object
            schoolName: '',
            specialChallenges: {},
            birthCerts: {},
            schoolId: '',
            sexOptions: [{ text: 'Female', value: 'F' },{ text: 'Male', value: 'M' }],
        }
    },
    validations: {
        text: {
            required,
        },
        number: {
            numeric
        }
    },
    methods: {
        getSchoolId(){
            let _selectedSchool = this.allSchools.filter(school => {
                return (school.name == this.schoolName);
            })

            this.data.school_id = _selectedSchool[0].id;
        }
    },
    mounted: function() {
        //populate the select boxes using the settings data from local storage
        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.specialChallenges = settings.special_conditions;
            this.birthCerts = settings.birth_certs;
        }

        // get list of schools
        this.$school.allSchools().then(data => {
            this.allSchools = data.data;
        })
    },
    destroyed: function() {

    },
    computed: {},
    watch: {
        allSchools(value){
            //allSchools is
            value.forEach(school => {
                this.schools.push(school.name);
            })

        },
        data(value){
            if(value && this.page == 'update'){
                // Get the school name from the school list using the school id
                // after all school information has been loaded from the database
                this.$school.allSchools().then(data => {

                    let _school = data.data.filter(school => {
                        return (school.id == value.school_id);
                    })

                    this.schoolName = _school[0].name;
                })

            }
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
        weight: 100%;
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
    /* .form-group p:not(.no-block) label{min-weight:200px;} */
    /* .form-group label span,.form-box .header p > strong{font-size:.85rem!important;font-weight:bold!important;color:#FF5722!important;} */
    /* .form-group label.active{color:#684348!important;font-size:.75rem!important;font-weight:400!important;-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;} */
    /* .form-group{position:relative;margin-top:.25rem;padding-top:1.5rem!important;padding-bottom:.25rem!important;} */

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>