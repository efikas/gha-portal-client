<template>
    <div>
         <b-card header="Academic Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form method="" class="form-horizontal">
                     <div class="row odd-row">
                         <div class="col-md-4">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8" for="admission_year">Year of Admission
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control"  v-model="data.admission_year" name="admission_year" id="admission_year" placeholder="School Name">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-6">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8"data.>Student's Admission Status <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio name="admission_status" value="1" v-model="data.admission_status">
                                             Fresh Enrollment/Placement
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio name="admission_status" value="2" v-model="data.admission_status">
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
                                 <div class="col-md-12">
                                     <label class="control-label"data.>Admission Education Level <span>*</span></label>
                                     <select id="admission_education_level" v-model="data.admission_education_level" name="admission_education_level" class="form-control" size="1">
                                         <option value="">Select Level</option>
                                         <option v-for="level in educationLevels" :value="level.id">{{level.level}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <!--<div class="col-xs-12 col-sm-6 col-md-3">-->
                             <!--<div class="form-group p-10">-->
                                 <!--<label class="control-label"data.>Admission Class Level <span>*</span>-->
                                 <!--</label>-->
                                 <!--<div class="col-md-12">-->
                                     <!--<input type="number" v-model="data.admission_class_level" class="form-control" id="admission_class_level" placeholder="">-->
                                 <!--</div>-->
                             <!--</div>-->
                         <!--</div>-->
                         <!--<div class="col-xs-12 col-sm-6 col-md-3">-->
                             <!--<div class="form-group p-10">-->
                                 <!--<label class="control-label col-md-12"data.>Current Education Level<span>*</span>-->
                                 <!--</label>-->
                                 <!--<div class="col-md-12">-->
                                     <!--<select id="current_admission_education_level" v-model="data.current_admission_education_level" name="current_admission_education_level" class="form-control" size="1">-->
                                         <!--<option value="">Select Level</option>-->
                                         <!--<option v-for="level in educationLevels" :value="level.id">{{level.level}}</option>-->
                                     <!--</select>-->
                                 <!--</div>-->
                             <!--</div>-->
                         <!--</div>-->
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12"data.>Current Class Level <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <input type="number" class="form-control" name="current_class_level" v-model="data.current_class_level" id="current_class_level" placeholder="">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12"data.>Promotion Status<span>*</span></label>
                                 <div class="col-md-12">
                                     <select id="current_admission_education_level" v-model="data.promotion_status" name="current_admission_education_level" class="form-control" size="1">
                                        <option value="">Select Level</option>
                                        <option v-for="status in promotionStatus" :value="status.id">{{status.status}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8"data.>Boarding Student? <span>*</span>
                                 </label>
                                 <div class="col-md-12">
                                     <div class="radio">
                                         <b-form-radio name="boarding" value="1" v-model="data.boarding">
                                             Yes
                                         </b-form-radio>
                                     </div>
                                     <div class="radio">
                                         <b-form-radio name="boarding" value="0" v-model="data.boarding">
                                             No
                                         </b-form-radio>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12"data.>Doom No </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" name="dormitory_id" v-model="data.dormitory_id" placeholder="Dormitory Number">
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12"data.>Home Dist to School
                                 </label>
                                 <div class="col-md-12">
                                     <input type="number" min="0" class="form-control" v-model="data.distance_from_school" value="0">
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
import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)
export default {
    name: 'basic.vue',
    data() {
        return {
            schoolId: '',
            educationLevels: {},
            promotionStatus: {},
            data: {
                studentId: '',
                admission_year: '',
                admission_status: '',
                admission_education_level: '',
                // admission_class_level: '',
                // current_admission_education_level: '',
                current_class_level: '',
                // exam_registration: '',
                boarding: '',
                dormitory_id: '',
                promotion_status: '',
                distance_from_school: '',
            }
        }
    },
    methods: {
       onSubmit: function(){
            this.$student.addStudent(this.studentId,this.data).then(response => {

            })
        }
    },
    mounted: function() {
        //populate the select boxes using the settings data from local storage
        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.educationLevels = settings.educations;
            this.promotionStatus = settings.promotions;
        }

        // console.log('route is : ' + this.$route.params.id);
        this.studentId = this.$route.params.id;
        this.$student.studentProfile(this.$route.params.id).then(data => {
            this.data = data;
            // this.schoolId = data.id;
            // console.log(data);
        });
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
.form-group label{font-size:.7rem!important; letter-spacing:1px; color:#684348!important;}
/*.bordered-box{!*margin:0 9px!important;*!border:1px dashed #a2b0b6;padding:16px!important;display:inline-block;position:relative;width:100%;border-radius:6px;!*box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.14);color:rgba(0,0,0, 0.87);*!background:#fff;}*/
/*.col-md-m6.bordered-box{width:calc(50% - 18px)!important;}*/
/*.divider-dotted{height:1px;border-bottom:1px dotted #e0e0e0;float:left;width:100%;margin:32px 0;}*/

</style>