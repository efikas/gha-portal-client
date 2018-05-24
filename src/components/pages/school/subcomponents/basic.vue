<template>
    <div>
        <b-card header="School Basic Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal">
                <div class="row odd-row">
                    <div class="col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-8" for="text">School Name
                            </label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" v-model="data.basic_info.school_name"
                                        id="text" placeholder="School Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="year_established">Year Established
                            </label>
                            <div class="col-md-12">
                                <select id="established" v-model="data.basic_info.established"
                                        name="established" class="form-control" size="1">
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
                    <div class="col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="school_dist">Distance to Catchment Area
                            </label>
                            <div class="col-md-12">
                                <input type="number" v-model="data.basic_info.school_distance"
                                        class="form-control" id="text" placeholder="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-8" for="lga">LGA
                            </label>
                            <div class="col-md-12">
                                <select id="lga" v-model="data.basic_info.lga" name="lga" class="form-control"
                                        size="1">
                                    <option value="">
                                        Select LGA
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
                            <label class="control-label col-md-12" for="ward">Ward
                            </label>
                            <div class="col-md-12">
                                <select id="ward" v-model="data.basic_info.ward" name="ward"
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
                            <label class="control-label" for="village_town">Village/Town
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.basic_info.village_town" class="form-control"
                                        id="village_town" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="school_location">School Location
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="school_location"
                                                    v-model="data.basic_info.school_location">
                                        Rural
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="school_location"
                                                    v-model="data.basic_info.school_location">
                                        Urban
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-7">
                        <div class="form-group p-10">
                            <label class="control-label col-md-8" for="school_email_address">Email
                            </label>
                            <div class="col-md-12">
                                <input type="email" v-model="data.basic_info.school_email_address"
                                        class="form-control" id="school_email_address" placeholder="Email">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-5">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="school_phone">Phone Munber
                            </label>
                            <div class="col-md-12">
                                <input type="number" v-model="data.basic_info.school_phone" class="form-control"
                                        id="school_phone" placeholder="Enter value">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-5">
                        <div class="form-group p-10">
                            <label class="control-label" for="school_website">Website
                            </label>
                            <div class="col-md-12">
                                <input type="url" v-model="data.basic_info.school_website" class="form-control"
                                        name="school_website" value="http://www.example.com/" id="url">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Map Coordinate (Lat, Long)
                            </label>
                            <div class="row">
                                <div class="col-md-5">
                                    <input type="text" v-model="data.basic_info.school_long"
                                            class="form-control" id="school_long" placeholder="e.g. 7.6408">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" v-model="data.basic_info.school_lat" class="form-control"
                                            id="school_lat" placeholder="e.g. 5.2031">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">School Category
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="school_category_id"
                                                    v-model="data.basic_info.school_category_id">
                                        Public
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="school_category_id"
                                                    v-model="data.basic_info.school_category_id">
                                        Private
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-5">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="name_of_proprietor">Propritor Name
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.basic_info.name_of_proprietor"
                                        class="form-control" id="name_of_proprietor"
                                        placeholder="Propritor Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Private Membership
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio name="private_membership_status"
                                                    v-model="data.basic_info.private_membership_status"
                                                    checked="false">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio" checked="false">
                                    <b-form-radio name="private_membership_status"
                                                    v-model="data.basic_info.private_membership_status">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="private_membership_name">Private Memebership's
                                Name
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.basic_info.private_membership_name"
                                        class="form-control" id="private_membership_name"
                                        placeholder="PPrivate Memebership's Name">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">School Type
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Regular
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Islamiyya Integrated
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Montessori
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Special Needs
                                        </b-form-radio>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Vocational Training Center
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Science and Technology College
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_type_id"
                                                        v-model="data.basic_info.school_type_id">
                                            Nomadic (Migrant)
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Ownership
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Community
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Cooperation
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Federal Government
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            State Government
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Local Government
                                        </b-form-radio>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Faith Based
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Individual
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            NGO
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_ownership"
                                                        v-model="data.basic_info.school_ownership">
                                            Others
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="education_levels">Education Level
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="education_levels"
                                                    v-model="data.basic_info.education_levels">
                                        Primary
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="education_levels"
                                                    v-model="data.basic_info.education_levels">
                                        Secondary
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Multigrading System
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="multigrade"
                                                    v-model="data.basic_info.multigrade">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="multigrade"
                                                    v-model="data.basic_info.multigrade">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Shift
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="shift" v-model="data.basic_info.shift">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="shift" v-model="data.basic_info.shift">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="management_committee">Management
                                Committee
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="management_committee"
                                                    v-model="data.basic_info.management_committee">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="management_committee"
                                                    v-model="data.basic_info.management_committee">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">PTA/PTF/MA
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="pta_pf"
                                                    v-model="data.basic_info.pta_pf">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="pta_pf"
                                                    v-model="data.basic_info.pta_pf">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Development Plan
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="development_plan"
                                                    v-model="data.basic_info.development_plan">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="development_plan"
                                                    v-model="data.basic_info.development_plan">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Grants
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="grants"
                                                    v-model="data.basic_info.grants">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="grants"
                                                    v-model="data.basic_info.grants">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-md-5">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Date of Last Inspection Visit
                            </label>
                            <div class="col-md-12">
                                <input type="date" v-model="data.basic_info.date_last_inspection"
                                        class="form-control" id="date" value="yyyy-mm-dd" aria-selected="true">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="um_of_inspection">Number of Inspections
                            </label>
                            <div class="col-md-12">
                                <input type="number" v-model="data.basic_info.num_of_inspection"
                                        class="form-control" id="num_of_inspection"
                                        placeholder="Number of Inspections">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Inspection Authority
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio checked="false" name="insp_auth"
                                                    v-model="data.basic_info.inspection_auth">
                                        Federal Govt
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="insp_auth"
                                                    v-model="data.basic_info.inspection_auth">
                                        State Govt
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio checked="false" name="insp_auth"
                                                    v-model="data.basic_info.inspection_auth">
                                        Local Govt
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-4" for="school_address">School Address</label>
                            <div class="col-md-12">
                                <textarea rows="4" v-model="data.basic_info.school_address"
                                            class="form-control resize_vertical" id="school_address"
                                            placeholder="School Address"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button class="btn btn-primary btn-lg btn-school" @click="onComplete()">Submit</button>
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
        name: 'basic-info',
        data() {
            return {
                data: {
                    ward_id: '',
                    school_name: 'Saint Mathew Nur and pry school',
                    estblished: '2008',
                    school_distance: '1',
                    lga: 'Ado',
                    ward: '2',
                    village_town: 'Ado',
                    school_location: 'Ado',
                    school_email_address: '',
                    school_phone: '080',
                    school_website: 'www.sbemis.com',
                    school_long: '0.0000',
                    school_lat: '0.0000',
                    school_category_id: '1',
                    name_of_proprietor: '',
                    private_membership_status: '1',
                    private_membership_name: '',
                    school_type_id: '1',
                    school_ownership: '1',
                    // average_distance: '1',
                    education_levels: '1',
                    multigrade: '1',
                    shift: '1',
                    management_committee: '1',
                    pta_pf: '1',
                    development_plan: '1',
                    grants: '1',
                    date_last_inspection: '1',
                    num_of_inspection: '1',
                    inspection_auth: '1',
                    school_address: 'ado',
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
            onComplete: function () {
                this.$school.addSchool(this.data).then(response => {

                })
                // alert('Yay. Done!');
            }
        },
        mounted: function () {

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
    .btn-school {
        width: 200px;
        align-self: center;
        margin-left: calc(50% -  100px);
        margin-top: 30px;
    }
    input[type="text"], input[type="email"], input[type="number"], input[type="url"], select {
        height: 40px;
    }
</style>