<template>
    <div>
        <b-card header="Student Info" header-tag="h4" class="bg-header-card">
         <form-wizard @on-complete="onComplete" color="#e67e22">
            <h2 slot="title"></h2> 
            <tab-content title="Student Basic Info" icon="fa fa-user">
                <div>
                    <form method="" class="form-horizontal">
                        <student-basic :data="data" :page="'create'"></student-basic>
                        <student-academic :data="data" :page="'create'"></student-academic>
                        <student-parent :data="data" :page="'create'"></student-parent>
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
                                        <label class="control-label col-md-8">Are both parents alive? <span class="text-error">*</span></label>
                                        <div class="col-md-12">
                                            <b-form-radio-group v-model="data.parent_status" :options="parentOptions" stacked />
                                            <span class="text-error"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8">Title
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.guardians[0].title" class="form-control" size="1" name required>
                                                 <option value="">Select Title</option>
                                                 <option v-for="appellation in appellations" :value="appellation.appellation">{{appellation.appellation}}</option>
                                             </select>
                                            <span class="text-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-7">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="g1fullname">Fullname <span class="text-error">*</span></label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.guardians[0].fullname" id="g1fullname"
                                                   placeholder="Fullname" v-validate="validation.required" name="g1_fullname" required>
                                            <span class="text-error">{{ errors.first('g1_fullname') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label">Relationship <span class="text-error">*</span></label>
                                        <div class="col-md-12">
                                            <select id="eg1relationship" name="g1relationship" v-model="data.guardians[0].relationship" class="form-control" size="1" required>
                                                 <option value="">Select Relationship</option>
                                                 <option v-for="relation in relationship" :value="relation.id">{{relation.type}}</option>
                                             </select>
                                            <span class="text-error">{{ errors.first('g1_relationship') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1_occupation">Occupation <span class="text-error">*</span></label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.guardians[0].occupation" id="g1_occupation"
                                                  v-validate="validation.required" name="g1_guardians" placeholder="Occupation">
                                            <span class="text-error">{{ errors.first('g1_guardians') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="g1mobile">Mobile Number <span class="text-error">*</span></label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" v-model="data.guardians[0].mobile"
                                                   v-validate="validation.required" name="g1_mobile" id="g1mobile" placeholder="">
                                            <span class="text-error">{{ errors.first('g1_mobile') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="g1_phone">Phone Number</label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" v-model="data.guardians[0].phone" id="g1_phone" placeholder="08063888888">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1_email">Email</label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" v-model="data.guardians[0].email" id="g1_email" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label">Religion <span class="text-error">*</span></label>
                                        <div class="col-md-12">
                                            <select v-model="data.guardians[0].religious_status" name="g1_religious_status" class="form-control" size="1">
                                                 <option value="">Select Religion</option>
                                                 <option v-for="religion in religions" :value="religion.id">{{religion.religion}}</option>
                                             </select>
                                            <span class="text-error">{{ errors.first('g1_religious_status') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-12 col-md-9">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1_contact_address">Contact Address <span class="text-error">*</span></label>
                                            <textarea cols="6" class="form-control" name="g1_contact_address" id="g1_contact_address" v-model="data.guardians[0].contact_address"
                                                     v-validate="validation.required" required >
                                            </textarea>
                                        <span class="text-error">{{ errors.first('g1_contact_address') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider-dotted"></div>
                        <div class="form-horizonal bordered-box">
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8">Title
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.guardians[1].title" class="form-control" size="1">
                                                 <option value="">Select Title</option>
                                                 <option v-for="appellation in appellations" :value="appellation.appellation">{{appellation.appellation}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-7">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="g2_full_name">Fullname
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="g2_full_name" v-model="data.guardians[1].full_name" placeholder="Fullname">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="g2_relationship">Relationship
                                        </label>
                                        <div class="col-md-12">
                                            <select id="g2_relationship" name="g2relationship" v-model="data.guardians[1].relationship" class="form-control" size="1">
                                                <option value="">Select Relationship</option>
                                                <option v-for="relation in relationship" :value="relation.id">{{relation.type}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g2_occupation">Occupation
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.guardians[1].occupation" id="g2_occupation" placeholder="Occupation">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="g2_mobile">Mobile Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" v-model="data.guardians[1].mobile" id="g2_mobile" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="g2_phone">Phone Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" v-model="data.guardians[1].phone" id="g2_phone" placeholder="08063888888">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g2_email">Email
                                        </label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" v-model="data.guardians[1].email" id="g2_email" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label">Religion
                                        </label>
                                        <div class="col-md-12">
                                            <select id="example-select" v-model="data.guardians[1].religious_status" name="g1_religious_status" class="form-control" size="1">
                                                <option value="">Select Religion</option>
                                                <option v-for="religion in religions" :value="religion.id">{{religion.religion}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-12 col-md-9">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g2_contact_address">Contact Address
                                        </label>
                                        <div class="col-md-12">
                                            <textarea cols="6" class="form-control" id="g2_contact_address" v-model="data.guardians[1].contact_address">
                                            </textarea>
                                        </div>
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
import Multiselect from 'vue-multiselect';
import VeeValidate from 'vee-validate';
import studentBasic from './subcomponents/studentBasic';
import studentAcademic from './subcomponents/studentAcademic';
import studentParent from './subcomponents/studentParent';

Vue.use(VeeValidate);
Vue.use(VueFormWizard)
export default {
    components: {
            Multiselect,
            studentBasic,
            studentAcademic,
            studentParent
        },
    data() {
        return {
            lga: '',  // selected local government
            lgasInfo: [], // hold the local government and their ids
            lgas: [], // hold the local government names
            schools: [], // hold the list of the of the school in the selected local govt
            specialChallenges: {},
            birthCerts: {},
            appellations: {},
            religions: {},
            relationship: {},
            school_name: '',
            educationLevels: {},
            promotionStatus: {},
            admissionStatusOptions: [],
            sexOptions: [{ text: 'Female', value: 'F' },{ text: 'Male', value: 'M' }],
            yesNoOptions: [{ text: 'Yes', value: '1' },{ text: 'No', value: '0' }],
            parentOptions: [{ text: 'Both Alive', value: '1' },{ text: 'Father Only', value: '2' },{ text: 'Mother Only', value: '3' },{ text: 'None', value: '4' }],
            enrollmentOptions: [],
            data: {
                guardians: [{}, {}],
            },
            validation: {
                text: 'required',
                required: 'required',
                email: 'email',
                number: { regex: /\\.(js|ts)$/},
            }
        }
    },
    methods: {
        onComplete: function(){
            this.$student.addStudent(this.data).then(response => {
                if (typeof response == 'object'){
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
            })
        },
        getSchool(){
            // get lga id
            let _lgaId = this.lgasInfo.filter(item => {
                return (item.name === this.lga);
            });

            //Since array index is starting from 0, we need to increment by 1 to start 
            // the index from 1
            this.$lga.getLgasSchool(_lgaId[0].id).then(data => {
                this.schools = [];
                this.school_name = '';
                data.forEach(item => {
                    this.schools.push(item.name);
                });
            })
        }, 
        getSchoolId(){
            let _selectedSchool = this.allSchools.filter(school => {
                return (school.name == this.school_name);
            })

            this.data.school_id = _selectedSchool[0].id;
        } 
    },
    mounted: function () {

        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            //populatre LGA
            settings.lga_areas.forEach(item => {
                this.lgasInfo.push(item);
                this.lgas.push(item.name);
            })

            this.specialChallenges = settings.special_conditions;
            this.birthCerts = settings.birth_certs;
            this.appellations = settings.appellations;
            this.religions = settings.religions;
            this.relationship = settings.guardians;
            this.educationLevels = settings.educations;
            this.promotionStatus = settings.promotions;
            settings.admissions.forEach(item => {
                this.enrollmentOptions.push({ text: item.status, value: item.id });
            })
        }

        //get list of schools
        this.$school.allSchools().then(data => {
            this.allSchools = data.data;
        })
    },
    destroyed: function() {

    },
    watch: {
        allSchools(value){
            //allSchools is
            value.forEach(school => {
                this.schools.push(school.name);
            })

            // Get the school name from the school list using the school id
            // after all school information has been loaded from the database
            let _school = value.filter(school => {
                return (school.id == this.data.school_id);
            })

            this.schoolName = _school[0].name;
            // this.data.school_id = data.school_id;
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
input[type="text"], input[type="email"], input[type="number"], input[type="url"], select {
        height: 40px;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>