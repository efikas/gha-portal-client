<template>
    <div>
         <b-card header="Professional Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form method="" class="form-horizontal">
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Staff Type
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.staff_type" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Current Grade Level/Step
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.grade_level" placeholder="">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Staff Current Status
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.current_status" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Salary Source
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.salary_source" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Fist Appointment Year
                                 </label>
                                 <div class="col-md-12">
                                     <input type="number" class="form-control" v-model="data.professional_info.first_appointment">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Year of Last Promotion
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.last_promotion" placeholder="Year of Last Promotion">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Year of Posting
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.posting_year" name="" value=""  placeholder="Year of Posting">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Employment Type
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.employment_type"  class="form-control" size="1">
                                         <option value="0">
                                             Select Employment
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Academic Qualification
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.academic_qualification" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Teaching Qualification
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.teaching_qualification" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Area of Specialty
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.speciality" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Main Subject Taught
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.professional_info.subject_taught" class="form-control" size="1">
                                         <option value="0">
                                             Select Year
                                         </option>
                                         <option value="1">1930</option>
                                         <option value="2">1931</option>
                                         <option value="3">1932</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Class Taught
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.class_taught" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Training Workshop?
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio v-model="data.professional_info.training_workshop">
                                             Yes
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio v-model="data.professional_info.training_workshop">
                                             No
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Computer Literate?
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio v-model="data.professional_info.computer_literate">
                                             Yes
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio v-model="data.professional_info.computer_literate">
                                             No
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">TRC Registered?
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio v-model="data.professional_info.TRC_registered">
                                             Yes
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio v-model="data.professional_info.TRC_registered">
                                             No
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">TRC Reg No
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.TRC_reg_no" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-6">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">School Posted From
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.school_posted_from" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label" for="text">Position
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.professional_info.position" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                     </div>
                     <button class="btn btn-primary btn-lg btn-school" @click="onComplete()">Submit</button>
                 </form>
             </div>
        </b-card>
    </div>
</template>
<script>
import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
import options from "src/validations/validations.js";

Vue.use(VueFormWizard, options);
export default {
    name: 'professional',
    data() {
        return {
            data: {
                professional_info: {
                    staff_type: '',
                    grade_level: '',
                    current_status: '',
                    salary_source: '',
                    first_appointment: '',
                    last_promotion: '',
                    posting_year: '',
                    employment_type: '',
                    academic_qualification: '',
                    teaching_qualification: '',
                    speciality: '',
                    subject_taught: '',
                    class_taught: '',
                    training_workshop: '',
                    computer_literate: '',
                    TRC_registered: '',
                    TRC_reg_no: '',
                    school_posted_from: '',
                    position: '',
                }
            }
        }
    },
    components: {
        vueDropzone: vue2Dropzone,
    },
    methods: {
        upload_pic() {
            this.$refs.user_image.processQueue();
        },
        uploaded() {
            console.log("uploaded");
        },
        clearqueue(file) {
            if (this.$refs.user_image.dropzone.files.length > 1) {
                this.$refs.user_image.dropzone.removeFile(this.old_file);
            }
            this.old_file = file;
        },
       onComplete: function(){
           this.$staff.addStaff(1,this.data).then(response => {

            })
        }
    },
    mounted: function() {

    },
    destroyed: function() {

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