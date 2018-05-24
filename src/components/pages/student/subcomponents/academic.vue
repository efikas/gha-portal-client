<template>
    <div>
         <b-card header="Academic Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form method="" class="form-horizontal">
                     <div class="row odd-row">
                         <div class="col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="admission_date">Year of Admission
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control"  v-model="data.professional_info.admission_date" name="admission_date" id="admission_date" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-6">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Student's Admission Status <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio name="admission_status" v-model="data.professional_info.admission_status">
                                             Fresh Enrollment/Placement
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio name="admission_status" v-model="data.professional_info.admission_status">
                                             Transfer In
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Admission Education Level <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <select id="edu_level" v-model="data.professional_info.edu_level" name="edu_level" class="form-control" size="1">
                                         <option value="0">
                                             Select Education Level
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
                                 <label class="control-label" for="text">Admission Class Level <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <input type="number" v-model="data.professional_info.admission_class_level" class="form-control" id="admission_class_level" placeholder="">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Current Education Level<span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <select id="current_edu_level" v-model="data.professional_info.current_edu_level" name="current_edu_level" class="form-control" size="1">
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
                                 <label class="control-label col-md-12" for="text">Current Class Level <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <input type="number" class="form-control" name="current_class_level" v-model="data.professional_info.current_class_level" id="current_class_level" placeholder="">
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Registered for JSCE/SSCE? <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio name="exam_registration" v-model="data.professional_info.exam_registration">
                                             Yes
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio name="exam_registration" v-model="data.professional_info.exam_registration">
                                             No
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="text">Boarding Student? <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio name="boarding" v-model="data.professional_info.boarding">
                                             Yes
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio name="boarding" v-model="data.boarding">
                                             No
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Doom No </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" name="dorm_no" v-model="data.professional_info.dorm_no" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12" for="text">Home Dist to School
                                 </label>
                                 <div class="col-md-12">
                                     <input type="number" class="form-control" v-model="data.professional_info.distance_from_school" value="0">
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
Vue.use(VueFormWizard)
export default {
    name: 'basic.vue',
    data() {
        return {
            schoolId: '',
            data: {
                basic_info: {
                    school_name: '',
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    sex: '',
                    date_of_birth: '',
                    place_of_birth: '',
                    phone_number: '',
                    email: '',
                    special_challenge: '',
                    height: '',
                    width: '',
                    blood_group: '',
                    birth_cert_avail: '',
                    birth_cert_type: '',
                },
                parent_info: {
                    parent_status: '',
                    g1title: '',
                    g1fullname: '',
                    g1relationship: '',
                    g1_occupation: '',
                    g1mobile: '',
                    g1_phone: '',
                    g1_email: '',
                    g1_religious_status: '',
                    g1_primary_contact: '',
                    g1_contact_address: '',
                    g2title: '',
                    g2_full_name: '',
                    g2_relationship: '',
                    g2_occupation: '',
                    g2_mobile: '',
                    g2_phone: '',
                    g2_email: '',
                    g2_religious_status: '',
                    g2_primary_contact: '',
                    g2_contact_address: '',
                },
                professional_info: {
                    admission_date: '',
                    admission_status: '',
                    edu_level: '',
                    admission_class_level: '',
                    current_edu_level: '',
                    current_class_level: '',
                    exam_registration: '',
                    boarding: '',
                    dorm_no: '',
                    distance_from_school: '',
                }
            }
        }
    },
    methods: {
       onComplete: function(){
            this.$student.addStudent(1,this.data).then(response => {

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

.even-row{background-color:
#fafafa;border-top:1px dashed #959DCC;border-bottom:1px dashed #959DCC;min-height:62px;padding:8px 0;}
.odd-row{padding:8px 0;}
form .odd-row:first-of-type{
    border-top:1px dashed #959DCC;
}
.form-group label{font-size:.8rem!important; letter-spacing:1px; color:#684348!important;}
.bordered-box{/*margin:0 9px!important;*/border:1px dashed #a2b0b6;padding:16px!important;display:inline-block;position:relative;width:100%;border-radius:6px;/*box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.14);color:rgba(0,0,0, 0.87);*/background:#fff;}
.col-md-m6.bordered-box{width:calc(50% - 18px)!important;}
.divider-dotted{height:1px;border-bottom:1px dotted #e0e0e0;float:left;width:100%;margin:32px 0;}

</style>