<template>
    <div>
        <div class="form-horizonal">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group p-10">
                        <label class="control-label col-md-8">Are both parents alive?
                        </label>
                        <div class="col-md-12">
                            <b-form-radio-group 
                                    v-model="student.parent_status" 
                                    :options="parentOptions">
                            </b-form-radio-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <a class="btn btn-outline-primary mb-2" @click="student.guardians.push({})">+ ADD</a>
            </div>
        </div>
        <div v-for="(guardian, index) in student.guardians" class="mb-5">
            <div class="form-horizonal">
                <div class="row even-row">
                    <div class="col-md-12">
                        <div class="remove-btn-div">
                            <a href="javascript:void (0)" class="pull-right red"
                               @click="student.guardians.splice(index, 1)">X</a></div>
                    </div>
                    <div class="clear-fix"></div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].title.$invalid}">
                            <label class="control-label">Title</label>
                            <div class="">
                                <select
                                        @blur="$v.student.guardians.$each[index].title.$touch()"
                                        v-model="guardian.title" class="form-control" size="1">
                                    <option value="">Select Title</option>
                                    <option v-for="appellation in data.appellations" :value="appellation.appellation">
                                        {{appellation.appellation}}
                                    </option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].fullname.$invalid}">
                            <label class="control-label" for="g1fullname">Fullname
                            </label>
                            <div class="">
                                <input type="text" class="form-control" v-model="guardian.fullname"
                                       @blur="$v.student.guardians.$each[index].fullname.$touch()"
                                       id="g1fullname" placeholder="Fullname">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].relationship.$invalid}">
                            <label class="control-label">Relationship
                            </label>
                            <div class="">
                                <select id="eg1relationship" name="g1relationship"
                                        @blur="$v.student.guardians.$each[index].relationship.$touch()"
                                        v-model="guardian.relationship" class="form-control" size="1">
                                    <option value="">Select Relationship</option>
                                    <option v-for="relation in data.guardians" :value="relation.id">{{relation.type}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group" :class="{'has-error':$v.student.guardians.$each[index].occupation.$invalid}">
                            <label class="control-label" for="g1_occupation">Occupation
                            </label>
                            <div class="">
                                <input type="text" class="form-control" v-model="guardian.occupation"
                                       @blur="$v.student.guardians.$each[index].occupation.$touch()"
                                       id="g1_occupation" placeholder="Occupation">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].mobile.$invalid}">
                            <label class="control-label" for="g1mobile">Mobile Number
                            </label>
                            <div class="">
                                <input type="tel" class="form-control" v-model="guardian.mobile"
                                       @blur="$v.student.guardians.$each[index].mobile.$touch()"
                                       id="g1mobile" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">


                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].phone.$invalid}">
                            <label class="control-label" for="g1_phone">Phone
                            </label>
                            <div class="">
                                <input type="tel" class="form-control" v-model="guardian.phone"
                                       @blur="$v.student.guardians.$each[index].phone.$touch()"
                                       id="g1_phone" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-8" for="g1_email">Email
                            </label>
                            <div class="col-md-12" :class="{'has-error':$v.student.guardians.$each[index].email.$invalid}">
                                <input type="email" class="form-control" v-model="guardian.email"
                                       @blur="$v.student.guardians.$each[index].email.$touch()"
                                       id="g1_email" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].religion.$invalid}">
                            <label class="control-label">Religion
                            </label>
                            <div class="">
                                <select id="example-select"
                                        @blur="$v.student.guardians.$each[index].religion.$touch()"
                                        v-model="guardian.religion"
                                        name="g1_religious_status" class="form-control" size="1">
                                    <option value="">Select Religion</option>
                                    <option v-for="religion in data.religions" :value="religion.id">
                                        {{religion.religion}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="form-group p-10" :class="{'has-error':$v.student.guardians.$each[index].contact_address.$invalid}">
                            <label class="control-label col-md-8" for="g1_contact_address">Contact Address
                            </label>
                            <div class="col-md-12">
                                            <textarea cols="6" class="form-control" id="g1_contact_address"
                                                      @blur="$v.student.guardians.$each[index].contact_address.$touch()"
                                                      v-model="guardian.contact_address">
                                            </textarea>
                            </div>
                        </div>
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
    import {guardianValidations} from 'src/validations/student'

    export default {
        name: 'student-parent',
        validations: guardianValidations,
        data() {
            return {
                student: {},
                parentOptions: [{text: 'Both Alive', value: '1'}, {
                    text: 'Father Only',
                    value: '2'
                }, {text: 'Mother Only', value: '3'}, {text: 'None', value: '4'}],
            }
        },
        mixins: [Toaster],
        computed: {
            ...mapGetters({getStudent: 'student', data: 'data'}),
        },
        methods: {
            onSubmit: function () {
                let form = {
                    guardians: this.student.guardians,
                    //required
                    'admission_year': this.student.admission_year,
                    'school_id': this.student.school_id,
                    'date_of_birth': this.student.date_of_birth,
                    'place_of_birth': this.student.place_of_birth,
                };

                this.$store.dispatch('updateStudent', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(() => this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });

            }
        },
        created() {
            this.student = JSON.parse(JSON.stringify(this.getStudent))
        }
    }
</script>
<style type="text/css" scoped>
    .even-row {
        background-color: #fafafa;
        border-bottom: 1px dashed #959DCC;
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

    .remove-btn-div {
        padding: 0px 10px 0px 0px;
    }

    .red {
        color: red !important;
        padding: 3px 5px !important;
    }

</style>