<template>
    <main class="container">
        <div class="section m75-top">
            <div class="row">
                <div class="form-box animated">
                        <form-wizard 
                            @on-complete="onComplete"
                            title=""
                            subtitle=""
                            back-button-text="Go back!"
                            next-button-text="Go next!">

                        <tab-content title="Staff Profile Info"
                                    icon="info">
                             <div class="form-box animated">
                    <form id="staff_profile_info" class="col s12">
                        <div class="header">
                            <h2>Staff Profile Info</h2>
                            <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m6">
                                <input data-to-validate="schools" type="text" v-model="data.schools_name" id="schools_autocomplete" name="school_name" class="validate" data-min-length="1" list="school_list">
                                <label class="active" for="schools_autocomplete">School Name <span>*</span></label>
                                <datalist id="school_list"></datalist>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="input-field col s12 m6 l3">
                                <input name="first_name" v-model="data.first_name" id="fname" type="text" class="validate">
                                <label for="fname">Firstname <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l3">
                                <input name="middle_name" v-model="data.middle_name" id="mname" type="text" class="">
                                <label for="mname">Middle Name</label>
                            </div>
                            <div class="input-field col s12 m6 l3">
                                <input name="last_name" v-model="data.last_name" id="lname" type="text" class="validate">
                                <label for="lname">Lastname/Surname <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l2 offset-l1 flex">
                                <p class="no-block">
                                    <input class="with-gap" value="M" v-model="data.sex" name="sex" type="radio" id="sex-m" checked/>
                                    <label for="sex-m">M</label>
                                </p>
                                <p class="no-block">
                                    <input class="with-gap" value="F" v-model="data.sex" name="sex" type="radio" id="sex-f"/>
                                    <label for="sex-f">F</label>
                                </p>
                                <label class="active">Sex</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m6 l2">
                                <input name="dob" id="dob" v-model="dob" type="date" class="datepicker validate">
                                <label for="dob" class="active">Date of Birth <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l2 offset-l1">
                                <input name="place_of_birth" v-model="data.place_of_birth" id="pbirth" type="text" class="validate">
                                <label for="pbirth">Place of Birth <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l2 offset-l1">
                                <input name="phone_number" id="phone_number" v-model="data.phone_number" type="tel" class="validate numbersonly"
                                        data-length="11">
                                <label for="phone_number">Phone Number <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l2 offset-l1">
                                <input name="email_address" v-model="data.email_address" id="email_address" type="email" class="">
                                <label for="email_address">Email Address</label>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="input-field col s12 m6 l3">
                                <select data-name="state_of_origin" v-model="data.state_of_origin" name="state_of_origin" id="state_of_origin">
                                    <option value="" disabled selected>Select State</option>
                                </select>
                                <label class="active" for="state_of_origin">State of Origin <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l3">
                                <select data-name="lga_origin"  name="lga_origin" id="lga-origin" disabled>
                                    <option value="" disabled selected>Select Local Govt.</option>
                                </select>
                                <label for="lga-origin" class="active">LGA of Origin <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l3">
                                <input name="home_town" id="htown" type="text" class="validate">
                                <label for="htown">Home Town <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m6 l3">
                                <input type="number" id="distance" name="distance" value="0" class="validate">
                                <label class="active" for="distance">House Distance from School (in km) <span>*</span></label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m3 l3">
                                <select data-name="marital_status" name="marital_status" id="marital_status">
                                    <option value="" disabled selected>Select Status</option>
                                </select>
                                <label class="active">Marital Status <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m3 l3">
                                <select required="required" data-name="religious_status" name="religious_status" id="religious_status">
                                    <option value="" disabled selected>Select Status</option>
                                </select>
                                <label class="active">Religious Status <span>*</span></label>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="input-field col s12 m6">
                                <textarea name="home_address" id="home_address"
                                            class="materialize-textarea validate"></textarea>
                                <label for="home_address">House/Residence Address <span>*</span></label>
                            </div>
                        </div>
                    </form>
                </div>
                        </tab-content>
                        <tab-content title="Professional Info"
                                    icon="ti-settings">
                            <div class="form-box animated">
                    <form id="staff_professional_info" class="col s12">
                        <div class="header">
                            <h2>Professional Info</h2>
                            <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                        </div>
                        <div class="row even-row">
                            <div class="input-field col s12 m4 l3">
                                <select data-name="staff_category" name="staff_category" id="staff_category">
                                    <option value="" disabled selected>Select Type</option>
                                </select>
                                <label class="active">Staff Type <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m4 l2">
                                <input name="grade_level" id="grade_level" type="text" class="validate">
                                <label class="active" for="grade_level">Current Grade Level / Step <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m4 l2 offset-l1">
                                <select data-name="staff_status" name="staff_status" id="staff_status">
                                    <option value="" disabled selected>Select Status</option>
                                </select>
                                <label class="active">Staff Current Status <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m4 l3 offset-l1">
                                <select data-name="salary_source" name="salary_source" id="salary_source">
                                    <option value="" disabled selected>Select Source</option>
                                </select>
                                <label class="active">Salary Source <span>*</span></label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m3 l2">
                                <input name="first_appointment" id="first_appointment" type="number" class="validate">
                                <label class="active" for="first_appointment">First Appointment Yr.
                                    <span>*</span></label>
                                <div class="def">State the staff's year of first appointment, whether in this school or
                                    another place?
                                </div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m3 l2">
                                <input name="current_appointment" id="current_appointment" type="number"
                                        class="validate">
                                <label class="active" for="current_appointment">Year of last promotion.
                                    <span>*</span></label>
                                <div class="def">State what year the staff was last promoted.</div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m3 l2">
                                <input name="year_posted" id="year_posted" type="number">
                                <label class="active" for="year_posted">Year of posting <span>*</span></label>
                                <div class="def">What year was the staff (if a Teacher/Corp Member), posted to this
                                    current school?
                                </div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m3 l3 offset-l1">
                                <select data-name="employment_type" name="employment_type" id="employment_type">
                                    <option value="" disabled selected>Select Type</option>
                                </select>
                                <label class="active">Employment Type <span>*</span></label>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="input-field col s12 m4 l3">
                                <select data-name="academic_qualification" name="academic_qualification" id="academic_qualification">
                                    <option value="" disabled selected>Select Qualification</option>
                                </select>
                                <label class="active">Academic Qualification <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m4 l3">
                                <select data-name="teaching_qualification" name="teaching_qualification" id="teaching_qualification">
                                    <option value="" disabled selected>Select Qualification</option>
                                </select>
                                <label class="active">Teaching Qualification <span>*</span></label>
                            </div>
                            <div class="input-field col s12 m4 l3">
                                <select data-name="subject" name="specialization" id="specialization">
                                    <option value="" disabled selected>Select Specialization</option>
                                </select>
                                <label class="active">Area of Specialty</label>
                                <div class="def">State (if a Teacher), area of specialization.</div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m4 l3">
                                <select data-name="subject" name="main_subject" id="main_subject">
                                    <option value="" disabled selected>Select Subject</option>
                                </select>
                                <label class="active">Main Subject Taught</label>
                                <div class="def">State (if a Teacher), the main subject taught in the school.</div>
                                <i class="material-icons">info</i>
                            </div>
                        </div>
                        <div class="row">
                            <div id="classes_taught" class="input-field col s12 m12 l12 flex">
                                <label class="active">Classes taught? <span>*</span></label>
                                <div class="def">Select the classes taught by staff (if a Teacher/Corp Member) in this school?</div>
                                <i class="material-icons">info</i>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="input-field col s12 m3 l2 flex">
                                <p class="">
                                    <input class="with-gap" value="0" name="workshop" type="radio" id="workshop-N"
                                            checked/>
                                    <label for="workshop-N">No</label>
                                </p>
                                <p class="">
                                    <input class="with-gap" value="1" name="workshop" type="radio" id="workshop-Y"/>
                                    <label for="workshop-Y">Yes</label>
                                </p>
                                <label class="active">Training Workshop? <span>*</span></label>
                                <div class="def">Did the staff (if a Teacher), attend any training workshop/seminar in
                                    last 12 months?
                                </div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m4 l2 offset-l1 flex">
                                <p class="">
                                    <input class="with-gap" value="0" name="computer_literate" type="radio" id="comp-N"
                                            checked/>
                                    <label for="comp-N">No</label>
                                </p>
                                <p class="">
                                    <input class="with-gap" value="1" name="computer_literate" type="radio"
                                            id="comp-Y"/>
                                    <label for="comp-Y">Yes</label>
                                </p>
                                <label class="active">Computer Literate? <span>*</span></label>
                                <div class="def">Is the staff computer literate?</div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m3 l2 offset-l1 flex">
                                <p class="">
                                    <input data-trigger="Yes" data-target="trc_reg_no" class="with-gap" value="0" name="trc_registered"
                                            type="radio" id="trc-N" checked/>
                                    <label for="trc-N">No</label>
                                </p>
                                <p class="">
                                    <input data-trigger="Yes" data-target="trc_reg_no" class="with-gap" value="1" name="trc_registered"
                                            type="radio" id="trc-Y"/>
                                    <label for="trc-Y">Yes</label>
                                </p>
                                <label class="active">TRC Registered? <span>*</span></label>
                                <div class="def">Is the staff (if a Teacher) registered with the Teachers' Registration
                                    Council?
                                </div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m3 offset-m1 l2">
                                <input name="trc_reg_no" id="trc_reg_no" type="text" disabled>
                                <label class="active" for="trc_reg_no">TRC Reg. No.</label>
                                <div class="def">State the staff's Teachers' Registration Council Number (if a
                                    Teacher)?
                                </div>
                                <i class="material-icons">info</i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m6 l6">
                                <input name="last_employer" id="last_employer" type="text" class="validate">
                                <label class="active" for="last_employer">School Posted From <span>*</span></label>
                                <div class="def">State the name of the school where staff was posted from to the current school.</div>
                                <i class="material-icons">info</i>
                            </div>
                            <div class="input-field col s12 m4 l4">
                                <input name="last_employment_grade_level" id="last_employment_grade_level" type="text"
                                        class="validate">
                                <label class="active" for="last_employment_grade_level">Position <span>*</span></label>
                                <div class="def">State the staff's grade level / position of last employment</div>
                                <i class="material-icons">info</i>
                            </div>
                            <!--<div class="input-field col s12 m4 l3 offset-l1">
                                <input class="col l5" name="last_employment_period_from" id="from" placeholder="Year From"
                                        type="number">
                                <input class="col l5 offset-l1" name="last_employment_period_to" id="to"
                                                            placeholder="Year To" type="number">
                                <label class="active">Last employment period <span>*</span></label>
                                <div class="def">State (years only) the period of last employment.</div>
                                <i class="material-icons">info</i>
                            </div>-->
                        </div>
                        <!--<div class="row even-row">
                            <div class="input-field col s12 m4 l4">
                                <textarea name="last_employer_address" id="last_employer_address"
                                            class="materialize-textarea validate"></textarea>
                                <label for="last_employer_address">Last Employer Address <span>*</span></label>
                            </div>
                        </div>-->
                    </form>
                </div>
                        </tab-content>
                    </form-wizard>
                    </div>                
            </div>
        </div>
    </main>
</template>
<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  name: 'StaffAdd',
  components: { FormWizard, TabContent },
  data () {
    return {
      schools: {},
      api: 'api',
      data: {},
      items: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'School',
          link: '/schools'
        }
      ]
    }
  },
  methods: {
    onComplete: function(){
          alert('Yay. Done!');
       }
  },
}
</script>
<style scoped>
</style>
