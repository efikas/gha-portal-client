<template>
    <div>
        <div class="row odd-row">
            <div class="col-md-12">
                <div class="form-group p-10" :class="{hasError:this.$v.student.school_id.$error}">
                    <label class="control-label">School Name</label>
                    <!--<select v-model="student.school_id" class="form-control">-->
                        <!--<option v-for="school in schools" >{{school.name}}</option>-->
                    <!--</select>-->
                    <multiselect v-model="selectedSchool" :show-labels="false" :options="schoolsMapping"
                                 @input="setSchoolId" @blur="$v.student.school_id.$touch()"></multiselect>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group" :class="{'has-error':$v.student.first_name.$error}">
                    <label class="control-label">First name
                    </label>
                        <input type="text" @blur="$v.student.first_name.$touch()" class="form-control" v-model="student.first_name" placeholder="First Name" />
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group">
                    <label class="control-label">Middle Name
                    </label>
                        <input type="text" class="form-control" v-model="student.middle_name" placeholder="Middle Name" />
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group">
                    <label class="control-label">Last Name
                    </label>
                        <input type="text" class="form-control" v-model="student.last_name" placeholder="" />
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label" for="email">Email (optional)
                    </label>
                    <div class="">
                        <input type="email" class="form-control" v-model="student.email" id="email"
                               placeholder="example@domain.com">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Phone Number (optional)
                    </label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" name="phone" v-model="student.phone"
                               placeholder="08064720000" id="phone">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Sex
                    </label>
                    <b-form-radio-group v-model="student.sex" :options="sexOptions" name="sex"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Place of Birth
                    </label>
                    <div class="col-md-12">
                        <input type="text" class="form-control" v-model="student.place_of_birth" id="pob"
                               placeholder="Place of birth">
                    </div>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label col-md-8">Date of Birth
                    </label>
                    <div class="col-md-12">
                        <input type="date" class="form-control" v-model="student.date_of_birth">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Birth Cert Type
                    </label>
                    <div class="">
                        <select name="birth_cert_type" v-model="student.birth_cert_type" class="form-control" size="1">
                            <option value="null">Select Cert Type</option>
                            <option v-for="cert in data.birth_certs" :value="cert.id">{{cert.birth_cert_type}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Any special Challenge?
                    </label>
                    <select v-model="student.special_condition" class="form-control" size="1">
                        <option value="null">Select Challenge</option>
                        <option v-for="challenge in data.special_conditions" :value="challenge.id">{{challenge.condition}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">Blood Group Type
                    </label>
                    <input type="text" class="form-control" v-model="student.blood_group" placeholder="A, B, AB, O">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label">Height (in m)
                            </label>
                            <input type="number" step="0.01" class="form-control" v-model="student.height" placeholder="">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label">weight (in Kg)
                            </label>
                            <input type="number" step="0.1" class="form-control" v-model="student.weight" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import {mapGetters} from 'vuex'
    import {studentUpdateValidations} from 'src/validations/validations'

    export default {
        name: 'student-basic',
        components: {
            Multiselect,
        },
        data() {
            return {
                student:{},
                selectedSchool: null,
                // student: this.$store.state.student,
                sexOptions: [{text: 'Female', value: 'F'}, {text: 'Male', value: 'M'}],
            }
        },
        validations: studentUpdateValidations,
        computed: {
            ...mapGetters({schools: 'schools', getStudent: 'student', data: 'data'}),
            schoolsMapping() {
                return this.schools.map(school => {
                    if(this.student.school_id === school.id) {
                        this.selectedSchool = school.name;
                    }
                    return school.name;
                })
            }
        },
        methods: {
            setSchoolId() {
                this.schools.filter(school => {
                    if(school.name === this.selectedSchool) {
                        this.student.school_id = school.id;
                    }
                });
            },
            onSubmit: function () {
                let form = {
                    'school_id': this.student.school_id,
                    'first_name': this.student.first_name,
                    'last_name': this.student.last_name,
                    'middle_name': this.student.middle_name,
                    'email': this.student.email,
                    'phone': this.student.phone,
                    'sex': this.student.sex,
                    'place_of_birth': this.student.place_of_birth,
                    'date_of_birth': this.student.date_of_birth,
                    'birth_cert_type': this.student.birth_cert_type,
                    'special_condition': this.student.special_condition,
                    'blood_group': this.student.blood_group,
                    'height': this.student.height,
                    'weight': this.student.weight,

                    //required
                    'admission_year': this.student.admission_year,
                };

                if(this.student.id) {
                    this.$store.dispatch('updateStudent', form).then(()=>{
                        console.log('record updated')
                    }).catch(() => {
                        console.log('error')
                    });
                } else {
                    this.$store.dispatch('storeStudent', form).then(()=>{
                        console.log('record created')
                    }).catch(() => {
                        console.log('error')
                    });
                }
            },
        },
        async created () {
            this.student = Object.assign({}, this.getStudent);
            await this.$store.dispatch('schools');
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
        weight: 100%;
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
        color: #684348;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>