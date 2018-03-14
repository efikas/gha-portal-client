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
                                    <label class="control-label col-md-8" for="text">Student Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="School Name">
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
                                        <input type="text" class="form-control" id="text" placeholder="First Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Middle Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="Middle Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Last Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Sex
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio checked="false">
                                                Female
                                            </b-form-radio>
                                        </div>
                                        <div class="radio" checked="false">
                                            <b-form-radio>
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
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Place of Birth
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="pob" placeholder="Place of birth">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Phone Number (optional)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="phone" class="form-control" name="url" value="08064720000" id="url">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Email (optional)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" id="text" placeholder="aaa@abcd.com">
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
                                        <select id="example-select" name="example-select" class="form-control" size="1">
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
                                                <input type="number" class="form-control" id="text" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Width (in m)
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control" id="text" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Blood Group Type
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="A, B, AB, O">
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
                                            <b-form-radio checked="false">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio" checked="false">
                                            <b-form-radio>
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
                                        <select id="example-select" name="example-select" class="form-control" size="1">
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
            <tab-content title="Parent Info" icon="">
                <div>
                    <form method="" class="form-horizontal">
                        <div class="form-horizonal bordered-box">
                            <div class="row odd-row">
                                <div class="col-md-12">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="admission_date">Are both parents alive?
                                        </label>
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <b-form-radio checked="false">
                                                Both Alive
                                                </b-form-radio>
                                            </div>
                                            <div class="radio" checked="false">
                                                <b-form-radio>
                                                    Father Only
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio checked="false">
                                                    Mother Only
                                                </b-form-radio>
                                            </div>
                                            <div class="radio" checked="false">
                                                <b-form-radio>
                                                None
                                                </b-form-radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Title
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="Title">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-7">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Fullname
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="Fullname">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Relationship
                                        </label>
                                        <div class="col-md-12">
                                            <select id="example-select" name="example-select" class="form-control" size="1">
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
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Occupation
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="Occupation">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Mobile Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" id="text" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Phone Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" id="text" placeholder="08063888888">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Email
                                        </label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" id="text" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Religion
                                        </label>
                                        <div class="col-md-12">
                                            <select id="example-select" name="example-select" class="form-control" size="1">
                                                <option value="0">
                                                    Select Religion
                                                </option>
                                                <option value="1">1930</option>
                                                <option value="2">1931</option>
                                                <option value="3">1932</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="admission_date">Is Primary Contact?
                                        </label>
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <b-form-radio checked="false">
                                                Yes
                                                </b-form-radio>
                                            </div>
                                            <div class="radio" checked="false">
                                                <b-form-radio>
                                                No
                                                </b-form-radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-12 col-md-9">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Contact Address
                                        </label>
                                        <div class="col-md-12">
                                            <textarea cols="6" class="form-control">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider-dotted"></div>
                        <div class="form-horizonal bordered-box">
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Title
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="Title">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-7">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Fullname
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="Fullname">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Relationship
                                        </label>
                                        <div class="col-md-12">
                                            <select id="example-select" name="example-select" class="form-control" size="1">
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
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Occupation
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="Occupation">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Mobile Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" id="text" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Phone Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" id="text" placeholder="08063888888">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Email
                                        </label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" id="text" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Religion
                                        </label>
                                        <div class="col-md-12">
                                            <select id="example-select" name="example-select" class="form-control" size="1">
                                                <option value="0">
                                                    Select Religion
                                                </option>
                                                <option value="1">1930</option>
                                                <option value="2">1931</option>
                                                <option value="3">1932</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="admission_date">Is Primary Contact?
                                        </label>
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <b-form-radio checked="false">
                                                Yes
                                                </b-form-radio>
                                            </div>
                                            <div class="radio" checked="false">
                                                <b-form-radio>
                                                No
                                                </b-form-radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-12 col-md-9">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Contact Address
                                        </label>
                                        <div class="col-md-12">
                                            <textarea cols="6" class="form-control">
                                            </textarea>
                                        </div>
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
                            <div class="col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="admission_date">Year of Admission
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="admission_date" id="admission_date" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="text">Student's Admission Status <span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio checked="false">
                                                Fresh Enrollment/Placement
                                            </b-form-radio>
                                        </div>
                                        <div class="radio" checked="false">
                                            <b-form-radio>
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
                                    <label class="control-label col-md-8" for="text">SAdmission Education Level <span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <select id="example-select" name="example-select" class="form-control" size="1">
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
                                        <input type="number" class="form-control" id="text" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Current Education Level<span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <select id="example-select" name="example-select" class="form-control" size="1">
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
                                        <input type="number" class="form-control" id="text" placeholder="">
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
                                            <b-form-radio checked="false">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio" checked="false">
                                            <b-form-radio>
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
                                            <b-form-radio checked="false">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio" checked="false">
                                            <b-form-radio>
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Doom No 
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="dorm_no" id="dorm_no" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Home Dist to School 
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control"  value="0">
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
    data() {
        return {
            
        }
    },
    methods: {
       onComplete: function(){
            alert('Yay. Done!');
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