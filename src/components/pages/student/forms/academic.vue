<template>
    <div>
        <b-card header="Academic Information" header-tag="h4" class="bg-header-card">
            <div>
                <form method="" class="form-horizontal" @submit.prevent="onSubmit">
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
                                <label class="control-label col-md-8">Student's Admission Status <span>*</span>
                                </label>
                                <b-form-radio-group v-model="data.admission_status" :options="enrollmentOptions" stacked />
                            </div>
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <div class="col-md-12">
                                    <label class="control-label">Admission Education Level <span>*</span></label>
                                    <select id="admission_education_level" v-model="data.admission_education_level" name="admission_education_level" class="form-control" size="1">
                                        <option value="">Select Level</option>
                                        <option v-for="level in educationLevels" :value="level.id">{{level.level}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12">Current Class Level <span>*</span>
                                </label>
                                <div class="col-md-12">
                                    <input type="number" min="0" class="form-control" name="education_level" v-model="data.education_level" id="education_level" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12">Promotion Status<span>*</span></label>
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
                                <label class="control-label col-md-8">Boarding Student? <span>*</span>
                                </label>
                                <div class="col-md-12">
                                    <b-form-radio-group v-model="data.boarding" :options="yesNoOptions" stacked name="boarding" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12">Doom No </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="dormitory_id" v-model="data.dormitory_id" placeholder="Dormitory Number">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12">Home Dist to School
                                </label>
                                <div class="col-md-12">
                                    <input type="number" min="0" class="form-control" v-model="data.distance_from_school" value="0">
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
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';

    Vue.use(VueSweetalert2);
    export default {
        name: 'student-academic',
        data() {
            return {
                schoolId: '',
                educationLevels: {},
                promotionStatus: {},
                yesNoOptions: [{ text: 'Yes', value: '1' },{ text: 'No', value: '0' }],
                enrollmentOptions: [{ text: 'Fresh Enrollment/Placement', value: '1' },{ text: 'Transfer In', value: '2' }],
                studentId: '',
                data: {}
            }
        },
        methods: {
            onSubmit: function(){
                this.$student.editStudent(this.studentId, this.data).then(response => {
                    if (typeof  response == 'object'){
                        this.$swal({
                            type: 'success',
                            title: 'Srudent Record updated Successfully!',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.value) {
                                window.location.href = 'http://localhost:8080/student/' + this.studentId;
                            }
                        })
                    }
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