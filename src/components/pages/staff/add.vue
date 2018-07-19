<template>
    <div>
        <b-card header="Staff Information" header-tag="h4" class="bg-header-card">
            <form-wizard @on-complete="onSubmit" color="#e67e22">
                <h2 slot="title"></h2>
                <tab-content title="Staff Profile Info" icon="fa fa-user" :before-change="beforeTabSwitch">
                    <div>
                        <form method="" class="form-horizontal">
                            <div class="row odd-row">
                                <div class="col-lg-6">
                                    <label>LGA <span class="text-error">*</span></label>
                                    <multiselect v-model="selectedLga" :show-labels="false" :options="lgas" @input="getSchool"></multiselect>
                                    <span class="text-error">{{ errors.first('schoolLga') }}</span>
                                </div>
                                <div class="col-lg-6">
                                    <label>School Name <span class="text-error">*</span></label>
                                    <multiselect v-model="selectedSchool" :show-labels="false" :options="schools" @input="getSchoolId"></multiselect>
                                    <span class="text-error">{{ errors.first('school') }}</span>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Firstname <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.first_name" placeholder="First Name" v-validate="validation.required" name="firstname" required>
                                                <span class="text-error">{{ errors.first('firstname') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Middle Name <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" required
                                                   v-model="data.middle_name" placeholder="Middle Name" v-validate="validation.required" name="middlename">
                                                   <span class="text-error">{{ errors.first('middlename') }}</span>
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
                                        <label class="control-label" for="text">Sex <span class="text-error">*</span></label>
                                        <b-form-radio-group v-model="data.sex" :options="sexOptions" stacked name="sex" />
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Date of Birth <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="date" class="form-control" v-validate="validation.required"
                                                   v-model="data.date_of_birth" name="dob" required>
                                                   <span class="text-error">{{ errors.first('dob') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Place of Birth <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="pob"
                                                   placeholder="Place of birth" v-model="data.pob" v-validate="validation.required" name="pob" required>
                                                   <span class="text-error">{{ errors.first('pob') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Phone Number <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="phone" class="form-control" name="phone" value="08064720000"
                                                   id="phone" v-model="data.phone" maxlength="11" v-validate="validation.required" required>
                                            <span class="text-error">{{ errors.first('phone') }}</span>
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
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">State of Origin <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select name="example-select" class="form-control" size="1"
                                                    v-model="data.state_of_origin" required>
                                                <option value="">Select State</option>
                                                <option v-for="state in states" :value="state.id">{{state.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Local Govt of Origin <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" size="1" v-model="data.lga_of_origin" required>
                                                <option value="">Select Local Govt</option>
                                                <option v-for="lga in lgaInSelectedState" :value="lga.id">{{lga.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Home Town <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder=""
                                                   v-model="data.home_town" v-validate="validation.required" name="home_town" required>
                                            <span class="text-error">{{ errors.first('home_town') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Marital Status <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select class="form-control" size="1" v-model="data.marital_status" required>
                                                <option value="">Select Status</option>
                                                 <option value="1">Single</option>
                                                <option value="2">Married</option>
                                                <option value="3">Divorced</option>
                                                <option value="4">Widowed</option>
                                                <option value="5">Separated</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('marital_status') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-9">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-3" for="text">Religion <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-3">
                                            <select class="form-control" size="1" v-model="data.religion" required>
                                                <option value="">Select Religion</option>
                                                <option v-for="religion in religions" :value="religion.id">{{religion.religion}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('religion') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-md-12">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8">Home/Residential Address <span class="text-error">*</span></label>
                                        <div class="col-md-8">
                                            <textarea rows="4" class="form-control resize_vertical"
                                                      v-model="data.residential_address"
                                                      placeholder="Home/Residential Address" required></textarea>
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
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Staff Type <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.category" class="form-control" size="1" required>
                                                <option value="">Select Category</option>
                                                <option v-for="category in staffCategories" :value="category.id">{{category.category}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('category') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Current Grade Level/Step
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.grade_level" placeholder="">
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Staff Current Status <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.status" class="form-control" size="1" required>
                                                <option value="">Select Status</option>
                                                <option v-for="status in staffStatuses" :value="status.id">{{status.status}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('status') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Salary Source <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.salary_source" class="form-control" size="1" required>
                                                <option value="">Select Salary Source</option>
                                                <option v-for="salary in salaries" :value="salary.id">{{salary.source}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('salary_source') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <!-- <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Fist Appointment Year
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" min="0" class="form-control"
                                                   v-model="data.first_appointment">
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Year of Last Promotion <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.last_promotion_year"
                                                   placeholder="Year of Last Promotion" v-validate="validation.required" name="last_promotion_year" required>
                                            <span class="text-error">{{ errors.first('last_promotion_year') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Year of Posting
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.posting_year" name="" value=""
                                                   placeholder="Year of Posting">
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Employment Type <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.employment_type"  class="form-control" size="1" required>
                                                <option value="">Select Employment</option>
                                                <option v-for="type in employmentTypes" :value="type.id">{{type.type}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('employment_type') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-8" for="text">Academic Qualification <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.academic_qualification" class="form-control" size="1" required>
                                                <option value="">Academic Qualification</option>
                                                <option v-for="academic in academicQualif" :value="academic.id">{{academic.qualification}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('academic_qualification') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Teaching Qualification <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.teaching_qualification" class="form-control" size="1" required>
                                                <option value="">Teaching Qualification</option>
                                                <option v-for="teaching in teachingQualif" :value="teaching.id">{{teaching.qualification}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('teaching_qualification') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row odd-row">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Area of Specialty <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.speciality" class="form-control" size="1" required>
                                                <option value="">Area of Speciality</option>
                                                <option v-for="specility in areaOfSpeciality" :value="specility.id">{{specility.name}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('speciality') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Main Subject Taught <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <select v-model="data.subject_taught" class="form-control" size="1" required>
                                                <option value="">main Subject Taught</option>
                                                <option v-for="subjects in subjectTaught" :value="subjects.id">{{subjects.subject}}</option>
                                            </select>
                                            <span class="text-error">{{ errors.first('subject_taught') }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Taught <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" v-model="data.classes_taught"
                                                   placeholder="School Name" v-validate="validation.required" name="classes_taught" required>
                                            <span class="text-error">{{ errors.first('classes_taught') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Computer Literate? <span class="text-error">*</span>
                                        </label>
                                        <b-form-radio-group v-model="data.computer_literate" :options="yesNoOptions" stacked />
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-9">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">TRC Reg No <span class="text-error">*</span>
                                        </label>
                                        <div class="col-md-3">
                                            <input type="text" class="form-control" v-model="data.TRC_reg_no"
                                                   placeholder="School Name" v-validate="validation.required" name="trc_reg_no" required>
                                            <span class="text-error">{{ errors.first('trc_reg_no') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row even-row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">School Posted From
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.school_posted_from"
                                                   placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-lg-8">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Position
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control"
                                                   v-model="data.position" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                            </div> -->
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

    Vue.use(VeeValidate);
    Vue.use(VueFormWizard);
    export default {
        components: {
            Multiselect,
        },
        data() {
            return {
                lgas: [],
                selectedLga: '',
                allLgaInfo: [],     // hold the is and name of all the local governments in the state
                schools: [],        // holds the array of school name
                allSchools: [],     // holds the array of schools object
                selectedSchool: '',
                staffId: null,
                states: {},
                //lgaInSelectedState: {},     // holds the local government in the selected state
                allLga: {}, // hold all the local government
                religions: {},
                staffCategories: {},
                staffStatuses: {},
                salaries: {},
                employmentTypes: {},
                academicQualif: {},
                teachingQualif: {},
                areaOfSpeciality: {},
                subjectTaught: {},
                schoolName: '',
                sexOptions: [{ text: 'Female', value: 'F' },{ text: 'Male', value: 'M' }],
                yesNoOptions: [{ text: 'Yes', value: '1' },{ text: 'No', value: '0' }],
                data: {
                    // school_id: '1',
                    // first_name: 'Alabi',
                    // middle_name: 'Oluwaseun',
                    // last_name: 'Mathew',
                    // sex: 'M',
                    // date_of_birth: '1987-2-2',
                    // place_of_birth: 'Ado',
                    // phone: '08065423821',
                    // email: 'mathew@gmail.com',
                    // state_of_origin: '7',
                    // lga_of_origin: '25',
                    // home_town: 'Ado',
                    // marital_status: '1',
                    // religion: '1',
                    // residential_address: 'Ado Ekiti',

                    // category: 2,
                    // status: '2',
                    // salary_source: '2',
                    // last_promotion_year: '2018',
                    // employment_type: '1',
                    // academic_qualification: '2',
                    // teaching_qualification: '4',
                    // speciality: 2,
                    // subject_taught: '12',
                    // computer_literate: '1',
                    // trc_reg_no: '345-356',

                    // school_posted_from: '',
                    // position: '',
                    // first_appointment: '',
                    // grade_level: '',
                    // class_taught: '',
                    // training_workshop: '',
                    // trc_registered: '',
                    // posting_year: '',
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
            onSubmit: function () {
                this.$staff.addStaff(this.data).then(response => {
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
                })
            },
            beforeTabSwitch: function(){
                alert("This is called before switchind tabs")
                return true;
            },
            getSchool(){
                // Multiselect give the index of the selected to this.lga
                // the index is the used to get the id of the selected lga from allLgaInfo
                // the local govt id is the use to get list of schools in the local govt

                let _lgaId = this.allLgaInfo[this.lgas.indexOf(this.selectedLga)].id;
                this.$lga.getLgasSchool(_lgaId).then(data => {
                    this.schools = [];
                    this.school = '';
                    data.forEach(item => {
                        this.schools.push(item.name);
                    });
                })
            },
            getSchoolId() {
                let _selectedSchool = this.allSchools.filter(school => {
                    return (school.name == this.selectedSchool);
                })
                this.data.school_id = _selectedSchool[0].id;
            }
        },
        mounted: function () {
            this.$lga.getLgas().then(data => {
                this.allLgaInfo = data;
                data.forEach(item => {
                    this.lgas.push(item.name);
                });
            })

            //populate the select boxes using the settings data from local storage
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                this.states = settings.states;
                this.religions = settings.religions;
                this.allLga = settings.lga_areas_all;
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

            //get list of schools
            this.$school.allSchools().then(data => {
                this.allSchools = data.data;
            })
        },
        computed: {
            // Filter the local governments base on the selected state
            lgaInSelectedState: function() {
                if(this.data.state_of_origin){
                    let _filter;
                _filter =  this.allLga.filter(lga => {
                        return (lga.state_id == this.data.state_of_origin);
                    })
                return _filter;
                }
            // return this.data.state_of_origin ? (this.value.interval * this.value.multiplier).toFixed(2) : 0
            }
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