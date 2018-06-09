<template>
    <div>
         <b-card header="Professional Information" header-tag="h4" class="bg-header-card">
             <div>
                 <form class="form-horizontal" @submit.prevent="onSubmit">
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-8">Staff Type
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.category" class="form-control" size="1">
                                         <option value="">Select Category</option>
                                         <option v-for="category in staffCategories" :value="category.id">{{category.category}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Staff Current Status
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.status" class="form-control" size="1">
                                         <option value="">Select Status</option>
                                         <option v-for="status in staffStatuses" :value="status.id">{{status.status}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Salary Source
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.salary_source" class="form-control" size="1">
                                         <option value="">Select Salary Source</option>
                                         <option v-for="salary in salaries" :value="salary.id">{{salary.source}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Year of Last Promotion
                                 </label>
                                 <div class="col-md-12">
                                     <input type="text" class="form-control" v-model="data.last_promotion_year" placeholder="Year of Last Promotion">
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row odd-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Academic Qualification</label>
                                 <select v-model="data.academic_qualification" class="form-control" size="1">
                                     <option value="">Academic Qualification</option>
                                     <option v-for="academic in academicQualif" :value="academic.id">{{academic.qualification}}</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Teaching Qualification
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.teaching_qualification" class="form-control" size="1">
                                         <option value="">Teaching Qualification</option>
                                         <option v-for="teaching in teachingQualif" :value="teaching.id">{{teaching.qualification}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Area of Specialty
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.speciality" class="form-control" size="1">
                                         <option value="">Area of Speciality</option>
                                         <option v-for="specility in areaOfSpeciality" :value="specility.id">{{specility.name}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Main Subject Taught
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.subject_taught" class="form-control" size="1">
                                         <option value="">main Subject Taught</option>
                                        <option v-for="subjects in subjectTaught" :value="subjects.id">{{subjects.subject}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="row even-row">
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Employment Type
                                 </label>
                                 <div class="col-md-12">
                                     <select v-model="data.employment_type"  class="form-control" size="1">
                                         <option value="">Select Employment</option>
                                         <option v-for="type in employmentTypes" :value="type.id">{{type.type}}</option>
                                     </select>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">Class Taught
                                 </label>
                                     <input type="text" class="form-control" v-model="data.class_taught" placeholder="School Name">
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label col-md-12">Computer Literate?
                                 </label>
                                 <div class="col-md-12">
                                     <b-form-radio-group v-model="data.computer_literate" :options="yesNoOptions" stacked name="sex" />
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-3">
                             <div class="form-group p-10">
                                 <label class="control-label">TRC Reg No
                                 </label>
                                     <input type="text" class="form-control" v-model="data.trc_reg_no" placeholder="School Name">
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

export default {
    name: 'professional',
    data() {
        return {
            staffCategories: {},
            staffStatuses: {},
            salaries: {},
            employmentTypes: {},
            academicQualif: {},
            teachingQualif: {},
            areaOfSpeciality: {},
            subjectTaught: {},
            yesNoOptions: [{ text: 'Yes', value: '1' },{ text: 'No', value: '0' }],
            data: {
                category: '', //
                status: '',
                salary_source: '', //
                last_promotion_year: '',
                employment_type: '',
                academic_qualification: '',
                teaching_qualification: '',
                speciality: '',
                subject_taught: '',
                classes_taught: '',
                computer_literate: '',
                trc_reg_no: '',
            }
        }
    },
    components: {},
    methods: {
       onSubmit: function(){
           this.$staff.addStaff(1,this.data).then(response => {
               if (typeof  response == 'object'){
                   this.$swal({
                       type: 'success',
                       title: 'School Record added Successfully!',
                       confirmButtonColor: '#3085d6',
                       confirmButtonText: 'Ok'
                   }).then((result) => {
                       if (result.value) {
                           location.reload();
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
        }
    },
    mounted: function() {
        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.staffCategories = settings.staff_categories;
            this.staffStatuses = settings.staff_statuses;
            this.salaries = settings.salaries;
            this.religions = settings.religions;
            this.employmentTypes = settings.employments;
            this.academicQualif = settings.academic_qualifications;
            this.teachingQualif = settings.teaching_qualifications;
            this.areaOfSpeciality = settings.specialities
            this.subjectTaught = settings.subjects
        }


        //get staff Data
        this.staffId = this.$route.params.id,
            this.$staff.staffProfile(this.staffId).then(data => {
                this.data = data;
            })
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