<template>
    <div>
        <div class="row odd-row">
            <div class="col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.student.admission_year.$invalid}">
                    <label class="control-label" for="admission_year">Year of Admission
                    </label>
                    <div class="">
                        <input type="text" class="form-control" v-model="student.admission_year" name="admission_year"
                               @blur="$v.student.admission_year.$touch()"
                               id="admission_year" placeholder="">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-8">
                <div class="form-group" :class="{'has-error':$v.student.admission_status.$invalid}">
                    <label class="control-label">Student's Admission Status <span>*</span>
                    </label>
                    <b-form-radio-group
                            @blur="$v.student.admission_status.$touch()"
                            v-model="student.admission_status" :options="enrollmentOptions">
                    </b-form-radio-group>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.student.admission_education_level.$invalid}">
                    <div class="col-md-12">
                        <label class="control-label">Admission Education Level <span>*</span></label>
                        <select id="admission_education_level"
                                @blur="$v.student.admission_education_level.$touch()"
                                v-model="student.admission_education_level"
                                name="admission_education_level" class="form-control" size="1">
                            <option value="null">Select Level</option>
                            <option v-for="level in data.educations" :value="level.id">{{level.level}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2">
                <div class="form-group" :class="{'has-error':$v.student.current_class.$invalid}">
                    <label class="control-label">Current Class <span>*</span>
                    </label>
                    <select id="current_class"
                            @blur="$v.student.current_class.$touch()"
                            v-model="student.current_class"
                            name="admission_education_level" class="form-control" size="1">
                        <option value="null">Select Level</option>
                        <option v-for="level in data.classes" :value="level.id">{{level.class}}</option>
                    </select>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2">
                <div class="form-group" :class="{'has-error':$v.student.current_class_section.$invalid}">
                    <label class="control-label">Class Section <span>*</span>
                    </label>
                    <input type="text" class="form-control"
                           @blur="$v.student.current_class_section.$touch()"
                           v-model="student.current_class_section"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.student.promotion_status.$invalid}">
                    <label class="control-label col-md-12">Promotion Status<span>*</span></label>
                    <div class="col-md-12">
                        <select id="current_admission_education_level" v-model="student.promotion_status"
                                @blur="$v.student.promotion_status.$touch()"
                                name="current_admission_education_level" class="form-control" size="1">
                            <option value="null">Select Level</option>
                            <option v-for="status in data.promotions" :value="status.id">{{status.status}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.student.boarding.$invalid}">
                    <label class="control-label">Boarding Student? <span>*</span>
                    </label>
                    <div class="">
                        <b-form-radio-group
                                @change="$v.student.boarding.$touch()"
                                v-model="student.boarding" :options="yesNoOptions" name="boarding">
                        </b-form-radio-group>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.student.dormitory_id.$invalid}">
                    <label class="control-label col-md-12">Dormitory No.</label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" name="dormitory_id"
                               @blur="$v.student.dormitory_id.$touch()"
                               v-model="student.dormitory_id"
                               placeholder="Dormitory Number">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.student.distance_from_school.$invalid}">
                    <label class="control-label col-md-12">Home Dist to School
                    </label>
                    <div class="col-md-12">
                        <input type="number" min="0" class="form-control"
                               @blur="$v.student.distance_from_school.$touch()"
                               v-model="student.distance_from_school"
                               value="0">
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit" class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Toaster from '../../../mixins/toaster'
    import {academicValidations} from 'src/validations/student'


    export default {
        name: 'student-academic',
        validations: academicValidations,
        data() {
            return {
                student: {},
                yesNoOptions: [{text: 'Yes', value: '1'}, {text: 'No', value: '0'}],
                enrollmentOptions: [
                    {text: 'Fresh Enrollment/Placement', value: '1'},
                    {text: 'Transfer In', value: '2'}
                ]
            }
        },
        mixins: [Toaster],
        computed: {
            ...mapGetters({schools: 'schools', getStudent: 'student', data: 'data'}),
        },
        methods: {
            onSubmit: function () {
                let form = {
                    admission_year: this.student.admission_year,
                    admission_status: this.student.admission_status,
                    admission_education_level: this.student.admission_education_level,
                    current_class: this.student.current_class,
                    current_class_section: this.student.current_class_section,
                    promotion_status: this.student.promotion_status,
                    boarding: this.student.boarding,
                    dormitory_id: this.student.dormitory_id,
                    distance_from_school: this.student.distance_from_school,

                    //required
                    'school_id': this.student.school_id,
                    'date_of_birth': this.student.date_of_birth,
                    'place_of_birth': this.student.place_of_birth,
                };

                this.$store.dispatch('updateStudent', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(()=>this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });

            }
        },
        created() {
            this.student = Object.assign({}, this.getStudent);
        }
    }
</script>
<style type="text/css" scoped>

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
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

    .odd-row:first-of-type {
        border-top: 1px dashed #959DCC;
    }
</style>