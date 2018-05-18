<template>
    <div>
        <b-card header="Staff Information" header-tag="h4" class="bg-info-card">
            <form-wizard @on-complete="onComplete" color="#e67e22">
                <h2 slot="title"></h2>
                <tab-content title="Staff Profile Info" icon="fa fa-user">
                    <div>
                        <form method="" class="form-horizontal">
                            <div class="row odd-row">
                                <div class="col-lg-6">
                                    <label>LGA</label>
                                    <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getSchool"></multiselect>
                                </div>
                                <div class="col-lg-6">
                                    <label>School Name</label>
                                    <multiselect v-model="data.school_name" :show-labels="false" :options="schools"></multiselect>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Firstname
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.first_name" placeholder="First Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Middle Name
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.middle_name" placeholder="Middle Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Last Name
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.last_name" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Sex
                                        </label>
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <b-form-radio value="F" name="sex" v-model="data.sex">
                                                    Female
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio value="M" name="sex" v-model="data.sex">
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
                                            <input type="date" class="form-control"
                                                   v-model="data.date_of_birth">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Place of Birth
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="pob"
                                                   placeholder="Place of birth" v-model="data.pob">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Phone Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="phone" class="form-control" name="url" value="08064720000"
                                                   id="url" v-model="data.phone_number">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Email
                                        </label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" placeholder="aaa@abcd.com"
                                                   v-model="data.email">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">State of Origin
                                        </label>
                                        <div class="col-md-12">
                                            <select name="example-select" class="form-control" size="1"
                                                    v-model="data.state_of_origin">
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
                                        <label class="control-label col-md-12" for="text">Local Govt of Origin
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" size="1" v-model="data.lga">
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
                                        <label class="control-label" for="text">Home Town
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder=""
                                                   v-model="data.home_town">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">House Distance from School (in KM)
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" min="0" class="form-control" id="text" placeholder=""
                                                   v-model="data.distance_from_school">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Marital Status
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" size="1"
                                                    v-model="data.marital_status">
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
                            <div class="row even-row">
                                <div class="col-md-8">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-4">Home/Residential
                                            Address</label>
                                        <div class="col-md-12">
                                            <textarea rows="4" class="form-control resize_vertical"
                                                      v-model="data.residential_address"
                                                      placeholder="Home/Residential Address"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </tab-content>
                <tab-content title="Professional Info" icon="fa fa-setting">
                    <div>
                        <form method="" class="form-horizontal">
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Staff Type
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.info.staff_type" class="form-control"
                                                    size="1">
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
                                            <input type="text" class="form-control"
                                                   v-model="data.info.grade_level" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Staff Current Status
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.info.current_status" class="form-control"
                                                    size="1">
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
                                            <select v-model="data.info.salary_source" class="form-control"
                                                    size="1">
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
                                            <input type="number" min="0" class="form-control"
                                                   v-model="data.info.first_appointment">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Year of Last Promotion
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.info.last_promotion"
                                                   placeholder="Year of Last Promotion">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Year of Posting
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.info.posting_year" name="" value=""
                                                   placeholder="Year of Posting">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Employment Type
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.info.employment_type"
                                                    class="form-control" size="1">
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
                                            <select v-model="data.info.academic_qualification"
                                                    class="form-control" size="1">
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
                                            <select v-model="data.info.teaching_qualification"
                                                    class="form-control" size="1">
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
                                            <select v-model="data.info.speciality" class="form-control"
                                                    size="1">
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
                                            <select v-model="data.info.subject_taught" class="form-control"
                                                    size="1">
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
                                            <input type="text" class="form-control"
                                                   v-model="data.info.class_taught"
                                                   placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Training Workshop?
                                        </label>
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <b-form-radio value="0" v-model="data.info.training_workshop">
                                                    Yes
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio value="1" v-model="data.info.training_workshop">
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
                                                <b-form-radio value="0" v-model="data.info.computer_literate">
                                                    Yes
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio value="1" v-model="data.info.computer_literate">
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
                                                <b-form-radio value="0" v-model="data.info.TRC_registered">
                                                    Yes
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio value="1" v-model="data.info.TRC_registered">
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
                                            <input type="text" class="form-control"
                                                   v-model="data.info.TRC_reg_no"
                                                   placeholder="School Name">
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
                                            <input type="text" class="form-control"
                                                   v-model="data.info.school_posted_from"
                                                   placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Position
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.info.position" placeholder="School Name">
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
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import options from "src/validations/validations.js";
    import Multiselect from 'vue-multiselect';

    Vue.use(VueFormWizard, options);
    export default {
        components: {
            vueDropzone: vue2Dropzone,
            Multiselect,
        },
        data() {
            return {
                lgas: [],
                schools: [],
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    autoProcessQueue: false,
                    // maxFilesize: 0.5,
                    maxFiles: 1,
                    headers: {"My-Awesome-Header": "header value"},
                },
                data: {
                    school_id: '1',
                    first_name: 'Alabi',
                    middle_name: 'Oluwaseun',
                    last_name: 'Mathew',
                    sex: 'M',
                    date_of_birth: '1987-2-12',
                    place_of_birth: 'Ado',
                    phone_number: '08065423821',
                    email: 'mathew@gmail.com',
                    state_of_origin: 'Ekiti state',
                    lga: 'Ado',
                    home_town: 'Ado',
                    distance_from_school: 1,
                    marital_status: '1',
                    religious_status: '1',
                    residential_address: 'Ado Ekiti',
                    info: {
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
                        computer_literate: '1',
                        trc_registered: '',
                        trc_reg_no: '',
                        school_posted_from: '',
                        position: '',
                    }

                }
            }
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
            onComplete: function () {
                this.$staff.addStaff(this.data).then(response => {

                })
            },
            getSchool(){
                //Since array index is starting from 0, we need to increment by 1 to start 
                // the index from 1
                this.$lga.getLgasSchool(this.lgas.indexOf(this.lga) + 1).then(data => {
                    this.schools = [];
                    this.school = '';
                    data.forEach(item => {
                        this.schools.push(item.school_name);
                    });
                })
            } 
        },
        mounted: function () {
            this.$lga.getLgas().then(data => {
                data.forEach(item => {
                    this.lgas.push(item.name);
                });
            })
        },
        destroyed: function () {

        }
    }
</script>
<style type="text/css" scoped>
    #color {
        height: 35px;
    }

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    .disabled {
        cursor: not-allowed;
    }

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
    }

    .dropzone_wrapper {
        width: 100%;
    }

    .align-left {
        float: left;
    }

    .align-right {
        float: right;
    }

    tab-content {
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }

    .even-row {
        background-color: #fafafa;
        border-top: 1px dashed #959DCC;
        border-bottom: 1px dashed #959DCC;
        min-height: 62px;
        padding: 8px 0;
    }

    .odd-row {
        padding: 8px 0;
    }

    form .odd-row:first-of-type {
        border-top: 1px dashed #959DCC;
    }

    .form-group label {
        font-size: .8rem !important;
        letter-spacing: 1px;
        color: #684348 !important;
    }

    /* .form-group p:not(.no-block) label{min-width:200px;} */
    /* .form-group label span,.form-box .header p > strong{font-size:.85rem!important;font-weight:bold!important;color:#FF5722!important;} */
    /* .form-group label.active{color:#684348!important;font-size:.75rem!important;font-weight:400!important;-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;} */
    /* .form-group{position:relative;margin-top:.25rem;padding-top:1.5rem!important;padding-bottom:.25rem!important;} */

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>