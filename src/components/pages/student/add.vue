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
                                <label>LGA <span class="text-error">*</span></label>
                                <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getSchool"></multiselect>
                            </div>
                            <div class="col-lg-6">
                                <label>School Name <span class="text-error">*</span></label>
                                <multiselect v-model="school_name" :show-labels="false" :options="schools"></multiselect>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Firstname <span class="text-error">*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.first_name" v-validate="validation.required"
                                               name="first_name" required placeholder="First Name">
                                        <span class="text-error">{{ errors.first('first_name') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Middle Name <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.middle_name" v-validate="validation.required"
                                               name="middle_name" required placeholder="Middle Name">
                                        <span class="text-error">{{ errors.first('middle_name') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Last Name</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.last_name" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Sex <span class="text-error">*</span></label>
                                    <b-form-radio-group v-model="data.sex" :options="sexOptions" stacked name="sex" />
                                    <span class="text-error">{{ errors.first('sex') }}</span>
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
                                        <span class="text-error">{{ errors.first('dob') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Place of Birth <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.place_of_birth"
                                               id="pob" v-validate="validation.required" name="pob" required placeholder="Place of birth">
                                        <span class="text-error">{{ errors.first('pob') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label">Phone Number (optional)</label>
                                    <div class="col-md-12">
                                        <input type="phone" class="form-control" name="phone" v-model="data.phone" placeholder="08064720000" id="phone">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="email">Email (optional)</label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" v-model="data.email" id="email" placeholder="aaa@abcd.com">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Any special Challenge?  <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <select v-model="data.special_condition" class="form-control" size="1" required>
                                            <option value="">Select Challenge</option>
                                            <option v-for="challenge in specialChallenges" :value="challenge.id">{{challenge.condition}}</option>
                                        </select>
                                        <span class="text-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group p-10">
                                            <label class="control-label">Height (in m)</label>
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
                                    <label class="control-label">Blood Group Type</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.blood_group" placeholder="A, B, AB, O">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Birth Cert Type <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <select name="birth_cert_type" v-model="data.birth_cert_type" class="form-control" size="1" required>
                                            <option value="">Select Cert Type</option>
                                            <option v-for="cert in birthCerts" :value="cert.id">{{cert.birth_cert_type}}</option>
                                        </select>
                                        <span class="text-error">{{ errors.first('birth_cert_type') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="admission_year">Year of Admission <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control"  v-model="data.admission_year" name="admission_year"
                                               id="admission_year" v-validate="validation.required" required placeholder="Admission Year">
                                        <span class="text-error">{{ errors.first('admission_year') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Student's Admission Status <span class="text-error">*</span></label>
                                    <b-form-radio-group v-model="data.admission_status" :options="enrollmentOptions" stacked />
                                    <span class="text-error">{{ errors.first('admission_status') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Admission Education Level <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <select id="admission_education_level" v-model="data.admission_education_level" name="admission_education_level" class="form-control" size="1" required>
                                            <option value="">Select Level</option>
                                            <option v-for="level in educationLevels" :value="level.id">{{level.level}}</option>
                                        </select>
                                        <span class="text-error">{{ errors.first('admission_education_level') }}</span>
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
                                    <label class="control-label col-md-12">Current Class Level <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" class="form-control" name="current_class_level" v-model="data.education_level"
                                               id="current_class_level" placeholder="" v-validate="validation.required" required>
                                        <span class="text-error">{{ errors.first('current_class_level') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12"data.>Promotion Status <span class="text-error">*</span></label>
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
                                    <label class="control-label col-md-8">Boarding Student? <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <b-form-radio-group v-model="data.boarding" :options="yesNoOptions" stacked name="boarding" />
                                        <span class="text-error"></span>
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
                                    <label class="control-label col-md-12">Home Dist to School <span class="text-error">*</span></label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" class="form-control" v-model="data.distance_from_school" value="0"
                                            v-validate="validation.required" name="distance_from_school" required>
                                        <span class="text-error">{{ errors.first('distance_from_school') }}</span>
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

Vue.use(VeeValidate);
Vue.use(VueFormWizard)
export default {
    components: {
            Multiselect,
        },
    data() {
        return {
            lga: '',  // selected local government
            lgasInfo: [], // hold the local government and their ids
            lgas: [], // hold the local government names
            schools: [],
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
                this.school = '';
                data.forEach(item => {
                    this.schools.push(item.name);
                });
            })
        } 
    },
    mounted: function () {
        // this.$lga.getLgas().then(data => {
        //     data.forEach(item => {
        //         this.lgas.push(item.name);
        //     });
        // })

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