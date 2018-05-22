<template>
    <div>
         <b-card header="Student Info" header-tag="h4" class="bg-info-card">
         <form-wizard @on-complete="onComplete" color="#e67e22">
            <h2 slot="title"></h2>
            <tab-content title="Student Basic Info" icon="fa fa-user">
                <div>
                    <form method="" class="form-horizontal">
                        <div class="row odd-row">
                            <div class="col-md-8">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="text">School Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.basic_info.school_name" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="text">Firstname
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.basic_info.first_name" placeholder="First Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Middle Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.basic_info.middle_name" placeholder="Middle Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Last Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.basic_info.last_name" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Sex
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio name="sex" v-model="data.basic_info.sex">
                                                Female
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="sex" v-model="data.basic_info.sex">
                                                Male
                                            </b-form-radio>
                                        </div>
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
                                        <input type="date" class="form-control" v-model="data.basic_info.date_of_birth">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Place of Birth
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.basic_info.place_of_birth" id="pob" placeholder="Place of birth">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Phone Number (optional)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="phone" class="form-control" name="phone_number" v-model="data.basic_info.phone_number" placeholder="08064720000" id="phone_number">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="email">Email (optional)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" v-model="data.basic_info.email" id="email" placeholder="aaa@abcd.com">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="text">Any special Challenge?
                                    </label>
                                    <div class="col-md-12">
                                        <select id="example-select" v-model="data.basic_info.special_challenge" class="form-control" size="1">
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
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Height (in m)
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control" v-model="data.basic_info.height" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Width (in m)
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control" v-model="data.basic_info.width" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Blood Group Type
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.basic_info.blood_group" placeholder="A, B, AB, O">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="text">Birth Cert Available? *
                                    </label>
                                     <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio  v-model="data.basic_info.birth_cert_avail" name="birth_cert_avail">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio  v-model="data.basic_info.birth_cert_avail" name="birth_cert_avail">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Birth Cert Type
                                    </label>
                                    <div class="col-md-12">
                                        <select id="example-select" name="birth_cert_type" v-model="data.basic_info.birth_cert_type" class="form-control" size="1">
                                            <option value="0">
                                                Select Religion
                                            </option>
                                            <option value="1">Christianity</option>
                                            <option value="2">Islamic</option>
                                            <option value="3">Budaism</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </tab-content>
         </form-wizard>
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