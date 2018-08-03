<template>
    <div>
        <div class="row odd-row">
            <div class="form-group p-10 col-md-12">
                <label class="control-label">School Name</label>
                <multiselect v-model="selectedSchool" :show-labels="false" :options="schoolsMapping"
                             @input="setSchoolId"></multiselect>
            </div>

        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.first_name.$invalid}">
                    <label class="control-label " for="text">Firstname
                        <abbr class="text-error">*</abbr></label>
                    <div class="">
                        <input type="text" class="form-control" name="firstname"
                               @blur="$v.staff.first_name.$touch()"
                               v-model="staff.first_name" placeholder="First Name">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.middle_name.$invalid}">
                    <label class="control-label " for="text">Middle Name <abbr class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <input type="text" class="form-control" name="middlename"
                               @blur="$v.staff.middle_name.$touch()"
                               v-model="staff.middle_name" placeholder="Middle Name">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.last_name.$invalid}">
                    <label class="control-label" for="text">Last Name
                    </label>
                    <input type="text" class="form-control"
                           @blur="$v.staff.last_name.$touch()"
                           v-model="staff.last_name" placeholder="">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.sex.$invalid}">
                    <label class="control-label" for="text">Sex <abbr class="text-error">*</abbr>
                    </label>
                    <b-form-radio-group  @change="$v.staff.sex.$touch()" v-model="staff.sex" :options="sexOptions" name="sex"/>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.date_of_birth.$invalid}">
                    <label class="control-label " for="text">Date of Birth <abbr class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <input type="date" class="form-control" name="birthdate"
                               @blur="$v.staff.date_of_birth.$touch()"
                               v-model="staff.date_of_birth">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.place_of_birth.$invalid}">
                    <label class="control-label " for="text">Place of Birth <abbr
                            class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <input type="text" class="form-control" id="place_of_birth" placeholder="Place of birth"
                               @blur="$v.staff.place_of_birth.$touch()"
                               v-model="staff.place_of_birth">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.phone.$invalid}">
                    <label class="control-label" for="text">Phone Number <abbr class="text-error">*</abbr>
                    </label>
                    <input type="phone" class="form-control" name="phone" id="phone"
                           @blur="$v.staff.phone.$touch()"
                           v-model="staff.phone">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.email.$invalid}">
                    <label class="control-label" for="text">Email
                    </label>
                    <input type="email" class="form-control" placeholder="example@domain.com"
                           @blur="$v.staff.email.$touch()"
                           v-model="staff.email">
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.state_of_origin.$invalid}">
                    <label class="control-label " for="text">State of Origin
                        <abbr class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <select name="example-select" ref="state" class="form-control" size="1"
                                @blur="$v.staff.state_of_origin.$touch()"
                                v-model="staff.state_of_origin">
                            <option value="null">--select--</option>
                            <option v-for="state in data.states" :value="state.id">{{state.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.lga_of_origin.$invalid}">
                    <label class="control-label " for="text">Local Govt of Origin <abbr class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <select class="form-control" size="1"
                                @blur="$v.staff.lga_of_origin.$touch()"
                                v-model="staff.lga_of_origin">
                            <option value="null">--select--</option>
                            <option v-for="lga in filtered_lga_areas" :value="lga.id">{{lga.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.home_town.$invalid}">
                    <label class="control-label" for="text">Home Town <abbr class="text-error">*</abbr>
                    </label>
                    <input type="text" class="form-control" name="home_town"
                           @blur="$v.staff.home_town.$touch()"
                           placeholder="" v-model="staff.home_town">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.distance_from_school.$invalid}">
                    <label class="control-label" for="text">House Distance from School (in KM)
                    </label>
                    <input type="number" class="form-control" id="text" placeholder=""
                           @blur="$v.staff.distance_from_school.$touch()"
                           v-model="staff.distance_from_school">
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.marital_status.$invalid}">
                    <label class="control-label " for="text">Marital Status <abbr
                            class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <select class="form-control" size="1"
                                @blur="$v.staff.marital_status.$touch()"
                                v-model="staff.marital_status">
                            <option value="null">--select--</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Separated">Separated</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.staff.religion.$invalid}">
                    <label class="control-label " for="text">Religion <abbr class="text-error">*</abbr>
                    </label>
                    <div class="">
                        <select class="form-control" size="1"
                                @blur="$v.staff.religion.$touch()"
                                v-model="staff.religion">
                            <option value="null">--select--</option>
                            <option v-for="religion in data.religions" :value="religion.religion">{{religion.religion}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group p-10" :class="{'has-error':$v.staff.residential_address.$invalid}">
                    <label class="control-label">Home/Residential Address <abbr class="text-error">*</abbr></label>
                    <div class="">
                            <textarea rows="3" class="form-control resize_vertical"
                                      @blur="$v.staff.residential_address.$touch()"
                                      name="address" v-model="staff.residential_address"
                                      placeholder="Home/Residential Address"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit"
                class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import {mapGetters} from 'vuex'
    import Toaster from '../../../mixins/toaster'
    import {personalValidations} from 'src/validations/staff'


    export default {
        name: 'staff-personal',
        components: {
            Multiselect,
        },
        validations:personalValidations,
        mixins: [Toaster],
        data() {
            return {
                staff: {},
                selectedSchool: null,
                sexOptions: [{text: 'Female', value: 'F'}, {text: 'Male', value: 'M'}],
            }
        },
        computed: {
            ...mapGetters({data: 'data', getStaff: 'staff', schools: 'schools', school: 'school'}),
            schoolsMapping() {
                return this.schools.map(school => {
                    if (this.staff.school_id === school.id) {
                        this.selectedSchool = school.name;
                    }
                    return school.name;
                })
            },
            filtered_lga_areas() {
                return Object.values(this.data.lga_areas_all).filter(lga => {
                    return lga.state_id === this.staff.state_of_origin;
                })
            }
        },
        methods: {
            onSubmit: function () {
                let form = {
                    'school_id': this.staff.school_id,
                    'first_name': this.staff.first_name,
                    'last_name': this.staff.last_name,
                    'middle_name': this.staff.middle_name,
                    'email': this.staff.email,
                    'phone': this.staff.phone,
                    'sex': this.staff.sex,
                    'place_of_birth': this.staff.place_of_birth,
                    'date_of_birth': this.staff.date_of_birth,
                    'state_of_origin': this.staff.state_of_origin,
                    'lga_of_origin': this.staff.lga_of_origin,
                    'home_town': this.staff.home_town,
                    'distance_from_school': this.staff.distance_from_school,
                    'marital_status': this.staff.marital_status,
                    'religion': this.staff.religion,
                    'residential_address': this.staff.residential_address,

                    //required

                };

                if (this.staff.id) {
                    this.$store.dispatch('updateStaff', form).then(() => {
                        this.successMsg('Record updated!', 'Success');
                        setTimeout(()=>this.$emit('closeModal', true), 500);
                    }).catch(() => {
                        this.errorMsg('Error saving data!', 'Error');
                    });
                } else {
                    this.$store.dispatch('storeStaff', form).then(() => {
                        this.successMsg('New Record Created!', 'Success');
                        setTimeout(()=>this.$emit('closeModal', true), 500);
                    }).catch(() => {
                        this.errorMsg('Error saving data!', 'Error');
                    });
                }

            },
            setSchoolId() {
                this.schools.filter(school => {
                    if (school.name === this.selectedSchool) {
                        this.staff.school_id = school.id;
                    }
                });
            },
        },
        created: async function () {
            await this.$store.dispatch('schools');
            this.staff = JSON.parse(JSON.stringify(this.getStaff));
            if (this.school.id) {
                this.selectedSchool = this.school.name;
                this.staff.school_id = this.school.id
            }
        }
    }
</script>
<style type="text/css" scoped>

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
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

</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>