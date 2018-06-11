<template>
    <div>
        <b-card header="Student Info" header-tag="h4" class="bg-header-card">
         <form-wizard @on-complete="onComplete" color="#e67e22">
            <h2 slot="title"></h2> 
            <tab-content title="Student Basic Info" icon="fa fa-user">
                <div>
                    <form method="" class="form-horizontal">
                        <div class="row odd-row">
                            <div class="col-lg-6">
                                <label>LGA</label>
                                <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getSchool"></multiselect>
                            </div>
                            <div class="col-lg-6">
                                <label>School Name</label>
                                <multiselect v-model="school_name" :show-labels="false" :options="schools"></multiselect>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Firstname
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.first_name" placeholder="First Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Middle Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.middle_name" placeholder="Middle Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Last Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.last_name" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Sex
                                    </label>
                                    <b-form-radio-group v-model="data.sex" :options="sexOptions" stacked name="sex" />
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Date of Birth
                                    </label>
                                    <div class="col-md-12">
                                        <input type="date" class="form-control" v-model="data.date_of_birth">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Place of Birth
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.place_of_birth" id="pob" placeholder="Place of birth">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Phone Number (optional)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="phone" class="form-control" name="phone" v-model="data.phone" placeholder="08064720000" id="phone">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="email">Email (optional)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" v-model="data.email" id="email" placeholder="aaa@abcd.com">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Any special Challenge?
                                    </label>
                                    <div class="col-md-12">
                                        <select v-model="data.special_condition" class="form-control" size="1">
                                            <option value="">Select Challenge</option>
                                            <option v-for="challenge in specialChallenges" :value="challenge.id">{{challenge.condition}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group p-10">
                                            <label class="control-label">Height (in m)
                                            </label>
                                            <input type="number" min="0" class="form-control" v-model="data.height" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group p-10">
                                            <label class="control-label">Weight (in Kg)</label>
                                            <input type="number" min="0" class="form-control" v-model="data.weight" placeholder="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label">Blood Group Type
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.blood_group" placeholder="A, B, AB, O">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Birth Cert Type
                                    </label>
                                    <div class="col-md-12">
                                        <select name="birth_cert_type" v-model="data.birth_cert_type" class="form-control" size="1">
                                            <option value="">Select Cert Type</option>
                                            <option v-for="cert in birthCerts" :value="cert.id">{{cert.birth_cert_type}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="admission_year">Year of Admission
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control"  v-model="data.admission_year" name="admission_year" id="admission_year" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
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
                                    <label class="control-label col-md-8">Admission Education Level <span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <select id="admission_education_level" v-model="data.admission_education_level" name="admission_education_level" class="form-control" size="1">
                                            <option value="">Select Level</option>
                                            <option v-for="level in educationLevels" :value="level.id">{{level.level}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="admission_education_level">Admission Class Level <span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" v-model="data.admission_education_level" class="form-control" id="admission_education_level" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Current Education Level<span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <select id="current_edu_level" v-model="data.current_education_level" name="current_education_level" class="form-control" size="1">
                                            <option value="0">
                                                Select Year
                                            </option>
                                            <option value="1">1930</option>
                                            <option value="2">1931</option>
                                            <option value="3">1932</option>
                                        </select>
                                    </div>
                                </div>
                            </div> -->
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Current Class Level <span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" class="form-control" name="current_class_level" v-model="data.education_level" id="current_class_level" placeholder="">
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
                            <!-- <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Registered for JSCE/SSCE? <span>*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio name="exam_registration" v-model="data.exam_registration">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="exam_registration" v-model="data.exam_registration">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
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
                                            <b-form-radio-group v-model="data.parent_status" :options="parentOptions" stacked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1title">Title
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.guardians[0].title" class="form-control" size="1">
                                                 <option value="">Select Title</option>
                                                 <option v-for="appellation in appellations" :value="appellation.appellation">{{appellation.appellation}}</option>
                                             </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-7">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="g1fullname">Fullname
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.guardians[0].fullname" id="g1fullname" placeholder="Fullname">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="g1relationship">Relationship
                                        </label>
                                        <div class="col-md-12">
                                            <select id="eg1relationship" name="g1relationship" v-model="data.guardians[0].relationship" class="form-control" size="1">
                                                 <option value="">Select Relationship</option>
                                                 <option v-for="relation in relationship" :value="relation.id">{{relation.type}}</option>
                                             </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1_occupation">Occupation
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.guardians[0].occupation" id="g1_occupation" placeholder="Occupation">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="g1mobile">Mobile Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" v-model="data.guardians[0].mobile" id="g1mobile" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="g1_phone">Phone Number
                                        </label>
                                        <div class="col-md-12">
                                            <input type="tel" class="form-control" v-model="data.guardians[0].phone" id="g1_phone" placeholder="08063888888">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1_email">Email
                                        </label>
                                        <div class="col-md-12">
                                            <input type="email" class="form-control" v-model="data.guardians[0].email" id="g1_email" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="g1_religious_status">Religion
                                        </label>
                                        <div class="col-md-12">
                                            <select id="example-select" v-model="data.guardians[0].religious_status" name="g1_religious_status" class="form-control" size="1">
                                                 <option value="">Select Religion</option>
                                                 <option v-for="religion in religions" :value="religion.id">{{religion.religion}}</option>
                                             </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-12 col-md-9">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g1_contact_address">Contact Address
                                        </label>
                                            <textarea cols="6" class="form-control" id="g1_contact_address" v-model="data.guardians[0].contact_address">
                                            </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider-dotted"></div>
                        <div class="form-horizonal bordered-box">
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="g2title">Title
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

Vue.use(VueFormWizard)
export default {
    components: {
            Multiselect,
        },
    data() {
        return {
            lga: '',
            lgas: [],
            schools: [],
            specialChallenges: {},
            birthCerts: {},
            appellations: {},
            religions: {},
            relationship: {},
            school_name: '',
            educationLevels: {},
            promotionStatus: {},
            sexOptions: [{ text: 'Female', value: 'F' },{ text: 'Male', value: 'M' }],
            yesNoOptions: [{ text: 'Yes', value: '1' },{ text: 'No', value: '0' }],
            parentOptions: [{ text: 'Both Alive', value: '1' },{ text: 'Father Only', value: '2' },{ text: 'Mother Only', value: '3' },{ text: 'None', value: '4' }],
            enrollmentOptions: [{ text: 'Fresh Enrollment/Placement', value: '1' },{ text: 'Transfer In', value: '2' }],
            data: {
                guardians: [{}, {}],
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
            //Since array index is starting from 0, we need to increment by 1 to start 
            // the index from 1
            this.$lga.getLgasSchool(this.lgas.indexOf(this.lga) + 1).then(data => {
                this.schools = [];
                this.school = '';
            //     data.forEach(item => {
            //         this.schools.push(item.school_name);
            //     });
            })
        } 
    },
    mounted: function () {
        this.$lga.getLgas().then(data => {
            data.forEach(item => {
                this.lgas.push(item.name);
            });
        })

        let settings = JSON.parse(localStorage.getItem('settings'));

        if(settings) {
            this.specialChallenges = settings.special_conditions;
            this.birthCerts = settings.birth_certs;
            this.appellations = settings.appellations;
            this.religions = settings.religions;
            this.relationship = settings.guardians;
            this.educationLevels = settings.educations;
            this.promotionStatus = settings.promotions;
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