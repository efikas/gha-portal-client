<template>
    <div>
            <div class="row even-row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.category.$invalid}">
                        <label class="control-label">Staff type
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.category.$touch()"
                                    v-model="staff.category" class="form-control" size="1">
                                <option value="">--select--</option>
                                <option v-for="category in data.staff_categories" :value="category.id">
                                    {{category.category}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.status.$invalid}">
                        <label class="control-label ">Staff current status
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.status.$touch()"
                                    v-model="staff.status" class="form-control" size="1">
                                <option value="">--select--</option>
                                <option v-for="status in data.staff_statuses" :value="status.id">{{status.status}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.salary_source.$invalid}">
                        <label class="control-label ">Salary source
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.salary_source.$touch()"
                                    v-model="staff.salary_source" class="form-control" size="1">
                                <option value="null">--select--</option>
                                <option v-for="salary in data.salaries" :value="salary.id">{{salary.source}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.last_promotion_year.$invalid}">
                        <label class="control-label ">Year of last promotion
                        </label>
                        <div class="">
                            <input type="text" class="form-control"
                                   @blur="$v.staff.last_promotion_year.$touch()"
                                   v-model="staff.last_promotion_year"
                                   placeholder="Year of Last Promotion">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row odd-row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.academic_qualification.$invalid}">
                        <label class="control-label">Academic qualification</label>
                        <select
                                @blur="$v.staff.academic_qualification.$touch()"
                                v-model="staff.academic_qualification" class="form-control" size="1">
                            <option value="null">--select--</option>
                            <option v-for="academic in data.academic_qualifications" :value="academic.id">
                                {{academic.qualification}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.teaching_qualification.$invalid}">
                        <label class="control-label ">Teaching qualification
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.teaching_qualification.$touch()"
                                    v-model="staff.teaching_qualification" class="form-control" size="1">
                                <option value="null">--select--</option>
                                <option v-for="teaching in data.teaching_qualifications" :value="teaching.id">
                                    {{teaching.qualification}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.speciality.$invalid}">
                        <label class="control-label ">Area of specialty
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.speciality.$touch()"
                                    v-model="staff.speciality" class="form-control" size="1">
                                <option value="null">--select--</option>
                                <option v-for="specility in data.specialities" :value="specility.id">{{specility.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.subject_taught.$invalid}">
                        <label class="control-label ">Main subject taught
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.subject_taught.$touch()"
                                    v-model="staff.subject_taught" class="form-control" size="1">
                                <option value="null">--select--</option>
                                <option v-for="subjects in data.subjects" :value="subjects.id">{{subjects.subject}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row even-row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.employment_type.$invalid}">
                        <label class="control-label">Employment type
                        </label>
                        <div class="">
                            <select
                                    @blur="$v.staff.employment_type.$touch()"
                                    v-model="staff.employment_type" class="form-control" size="1">
                                <option value="null">--select--</option>
                                <option v-for="type in data.employments" :value="type.id">{{type.type}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.classes_taught.$invalid}">
                        <label class="control-label">Class taught
                        </label>
                        <input type="text" class="form-control"
                               @blur="$v.staff.classes_taught.$touch()"
                               v-model="staff.classes_taught">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.computer_literate.$invalid}">
                        <label class="control-label ">Computer literate?
                        </label>
                        <div class="">
                            <b-form-radio-group
                                    @change="$v.staff.computer_literate.$touch()"
                                    v-model="staff.computer_literate" :options="yesNoOptions">
                            </b-form-radio-group>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group p-10" :class="{'has-error':$v.staff.trc_reg_no.$invalid}">
                        <label class="control-label">TRC Reg No
                        </label>
                        <input type="text" class="form-control"
                               @blur="$v.staff.trc_reg_no.$touch()"
                               v-model="staff.trc_reg_no" placeholder="School Name">
                    </div>
                </div>
            </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit"
                class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Toaster from '../../../mixins/toaster'
    import {professionalValidations} from 'src/validations/staff'


    export default {
        name: 'professional',
        data() {
            return {
                staff: {},
                yesNoOptions: [{text: 'Yes', value: '1'}, {text: 'No', value: '0'}],
            }
        },
        mixins: [Toaster],
        computed: {
            ...mapGetters({getStaff: 'staff', data: 'data'})
        },
        validations:professionalValidations,
        methods: {
            onSubmit: function () {
                let form = {
                    school_id: this.staff.school_id,
                    category: this.staff.category,
                    status: this.staff.status,
                    salary_source: this.staff.salary_source,
                    last_promotion_year: this.staff.last_promotion_year,
                    academic_qualification: this.staff.academic_qualification,
                    teaching_qualification: this.staff.teaching_qualification,
                    speciality: this.staff.speciality,
                    subject_taught: this.staff.subject_taught,
                    employment_type: this.staff.employment_type,
                    classes_taught: this.staff.classes_taught,
                    computer_literate: this.staff.computer_literate,
                    trc_reg_no: this.staff.trc_reg_no,

                    //required
                    'first_name': this.staff.first_name,
                    'last_name': this.staff.last_name,
                    'middle_name': this.staff.middle_name,
                    'sex': this.staff.sex,
                    'date_of_birth': this.staff.date_of_birth,
                };

                this.$store.dispatch('updateStaff', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(()=>this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });
            }
        },
        created: function () {
            this.staff = JSON.parse(JSON.stringify(this.getStaff));
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

    input {
        padding: 3px 5px !important;
        height: auto !important;
        font-size: 12px;
    }

    select {
        padding: 5px 5px !important;
        height: auto !important;
        font-size: 12px;
    }

    textarea {
        padding: 3px 5px !important;
        height: auto !important;
        font-size: 12px;
    }
</style>