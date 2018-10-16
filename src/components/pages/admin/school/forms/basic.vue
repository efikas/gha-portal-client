<template>
    <div>
        <div class="row odd-row">
            <div class="col-md-3 col-md-3">
                <div :class="{'has-error':$v.school.ward.lga_id.$invalid}" class="form-group p-10">
                    <label class="control-label">LGA <abbr title="required">*</abbr></label>
                    <b-form-select
                            v-model="school.ward.lga_id" :options="lga_areas"
                            @input="$v.school.ward.lga_id.$touch(); $v.school.lga_ward_id.$touch()"
                            class="mb-3">
                    </b-form-select>
                </div>
            </div>
            <div class="col-md-3 col-md-3">
                <div :class="{'has-error':$v.school.lga_ward_id.$invalid||$v.school.lga_ward_id.$error}" class="form-group p-10">
                    <label>Ward <abbr title="required">*</abbr></label>
                    <b-form-select
                            @input="$v.school.lga_ward_id.$touch()"
                            v-model="school.lga_ward_id" :options="wards"
                            class="mb-3">
                    </b-form-select>
                </div>
            </div>
            <div class="col-md-6">
                <div :class="{'has-error':$v.school.name.$invalid}" class="form-group p-10">
                    <label class="control-label">School Name
                        <abbr title="required">*</abbr></label>
                    <input type="text" class="form-control"
                           @blur="$v.school.name.$touch()"
                           name="school_name" v-model="school.name"
                           placeholder="School Name">
                </div>
            </div>

        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.location.$invalid}">
                    <label class="control-label">Location
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group v-model="school.location"
                                        @blur="$v.school.location.$touch()"
                                        :options="schoolLocationsOptions"
                                        name="location">
                    </b-form-radio-group>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.established.$error}">
                    <label class="control-label" for="year_established">Year Established
                    </label>
                    <input type="text" class="form-control" v-model="school.established"
                           id="year_established" name="year_established"
                           @blur="$v.school.established.$touch()"
                           placeholder="Year Established"/>

                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.average_distance.$error}">
                    <label class="control-label" for="dist">Distance to Catchment Area
                    </label>
                    <input type="number" min="0" v-model="school.average_distance"
                           @blur="$v.school.average_distance.$touch()"
                           class="form-control" id="dist" placeholder=""/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.town.$invalid}">
                    <label class="control-label" for="village_town">Village/Town
                        <abbr title="required">*</abbr></label>
                    <input type="text" v-model="school.town" class="form-control"
                           @blur="$v.school.town.$touch()"
                           id="village_town" name="village_town" required placeholder="">
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-7">
                <div class="form-group p-10" :class="{'has-error':$v.school.email.$error}">
                    <label class="control-label col-md-8" for="email">Email
                    </label>
                    <div class="col-md-12">
                        <input type="email" v-model="school.email"
                               @blur="$v.school.email.$touch()"
                               class="form-control" id="email" placeholder="Email"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-5">
                <div class="form-group p-10" :class="{'has-error':$v.school.phone.$invalid}">
                    <label class="control-label" for="phone">Phone Nunber
                        <abbr title="required">*</abbr></label>
                    <input type="text" v-model="school.phone" class="form-control"
                           @blur="$v.school.phone.$touch()"
                           id="phone" name="phone" required placeholder="Enter Phone Number"/>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-5">
                <div class="form-group p-10" :class="{'has-error':$v.school.website.$error}">
                    <label class="control-label">Website
                    </label>
                    <input type="url" v-model="school.website" class="form-control"
                           @blur="$v.school.website.$touch()"
                           name="website" value="http://www.example.com/" id="url">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.school.geolocation.$invalid}">
                    <label class="control-label">Map Coordinate (Lat, Long)
                    </label>
                    <input type="text" v-model="school.geolocation"
                           @blur="$v.school.geolocation.$touch()"
                           class="form-control" id="long" placeholder="e.g. 9.182 / -39.140625">

                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.category.$invalid}">
                    <label class="control-label">School Category
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group v-model="school.category"
                                        name="category"
                                        @blur="$v.school.category.$touch()"
                                        :options="schoolCategoryOptions"></b-form-radio-group>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group p-10" :class="{'has-error':$v.school.name_of_proprietor.$error}">
                    <label class="control-label col-md-12" for="name_of_proprietor">Proprietor Name
                    </label>
                    <div class="col-md-12">
                        <input type="text" v-model="school.name_of_proprietor"
                               class="form-control" id="name_of_proprietor"
                               @blur="$v.school.name_of_proprietor.$touch()"
                               placeholder="Propritor Name">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group p-10" :class="{'has-error':$v.school.geolocation.$error}">
                    <label class="control-label" for="private_membership_name">Private Membership's
                        Name
                    </label>
                    <input type="text" v-model="school.private_membership_name"
                           class="form-control" id="private_membership_name"
                           @blur="$v.school.private_membership_name.$touch()"
                           placeholder="Memebership's Name">
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6">
                <div class="form-group p-10" :class="{'has-error':$v.school.type.$invalid}">
                    <label class="control-label">Type
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.type"
                            name="school_type"
                            @blur="$v.school.type.$touch()"
                            :options="school_type" stacked>
                    </b-form-radio-group>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="form-group p-10" :class="{'has-error':$v.school.ownership.$invalid}">
                    <label class="control-label">School Ownership
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.ownership"
                            name="ownership"
                            @blur="$v.school.ownership.$touch()"
                            :options="ownership" stacked></b-form-radio-group>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.school.education_level.$invalid}">
                    <label class="control-label">Education Level
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.education_level"
                            name="education_level"
                            @blur="$v.school.education_level.$touch()"
                            :options="educationLevelOptions"></b-form-radio-group>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.school.multigrade.$invalid}">
                    <label class="control-label">Multigrading System
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.multigrade"
                            @blur="$v.school.multigrade.$touch()"
                            name="multigrade"
                            :options="yesNoOptions"></b-form-radio-group>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10" :class="{'has-error':$v.school.shift.$invalid}">
                    <label class="control-label">shift
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.shift"
                            @blur="$v.school.shift.$touch()"
                            name="shift"
                            :options="yesNoOptions"></b-form-radio-group>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.management_committee.$invalid}">
                    <label class="control-label col-md-12">Management
                        Committee
                    </label>
                    <div class="col-md-12">
                        <b-form-radio-group
                                v-model="school.management_committee"
                                @blur="$v.school.management_committee.$touch()"
                                name="management_committee"
                                :options="yesNoOptions"></b-form-radio-group>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.pta_pf.$invalid}">
                    <label class="control-label">PTA/PTF/MA
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.pta_pf"
                            @blur="$v.school.pta_pf.$touch()"
                            name="pta_pf"
                            :options="yesNoOptions"></b-form-radio-group>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.development_plan.$error}">
                    <label class="control-label">School Development Plan
                    </label>
                    <div class="">
                        <b-form-radio-group v-model="school.development_plan" :options="yesNoOptions"
                                            @blur="$v.school.development_plan.$touch()"
                                            name="development_plan"></b-form-radio-group>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10" :class="{'has-error':$v.school.grants.$invalid}">
                    <label class="control-label">School grants
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.grants"
                            @blur="$v.school.grants.$touch()"
                            name="grants"
                            :options="yesNoOptions"></b-form-radio-group>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-md-12">
                <div class="form-group p-10" :class="{'has-error':$v.school.address.$invalid}">
                    <label class="control-label" for="address">Address <abbr title="required">*</abbr></label>
                    <textarea rows="4" v-model="school.address"
                              class="form-control resize_vertical" id="address"
                              @blur="$v.school.address.$touch()"
                              name="address"
                              placeholder="School Address"></textarea>
                </div>
            </div>
        </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit"
                class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>

    </div>
</template>
<script>

    import {schoolFormMixins} from './mixins'
    import {basicValidations} from 'src/validations/school'

    export default {
        data() {
            return {
                lga_ward_id: null,
                schoolLocationsOptions: [{text: 'Rural', value: 'Rural'}, {text: 'Urban', value: 'Urban'}],
                educationLevelOptions: [{text: 'Primary', value: 'Primary'}, {text: 'Secondary', value: 'Secondary'}],
                schoolCategoryOptions: [{text: 'Public', value: 'Public'}, {text: 'Private', value: 'Private'}],
                yesNoOptions: [{text: 'Yes', value: '1'}, {text: 'No', value: '0'}],
                settings: {},
                lga: null,
                selectedSharedFacilities: [],
            }
        },
        mixins: [schoolFormMixins],
        validations: basicValidations,
        methods: {
            locationTouched(event) {
                this.$v.school.location.$touch()
            },
            onSubmit: function () {
                let form = {
                    'average_distance': this.school.average_distance,
                    'established': String(this.school.established?this.school.established:''),
                    'location': this.school.location,
                    'name': this.school.name,
                    'lga_ward_id': this.lga_ward_id,
                    'geolocation': this.school.geolocation,
                    'website': this.school.website,
                    'phone': this.school.phone,
                    'email': this.school.email,
                    'town': this.school.town,
                    'ownership': this.school.ownership,
                    'type': this.school.type,
                    'private_membership_name': this.school.private_membership_name,
                    'name_of_proprietor': this.school.name_of_proprietor,
                    'category': this.school.category,
                    'pta_pf': this.school.pta_pf,
                    'management_committee': this.school.management_committee,
                    'shift': this.school.shift,
                    'multigrade': this.school.multigrade,
                    'education_level': this.school.education_level,
                    'grants': this.school.grants,
                    'development_plan': this.school.development_plan,
                    'address': this.school.address,
                };

                // console.log(form);

                if (this.school.id) {
                    this.$store.dispatch('updateSchool', form).then(() => {
                        this.successMsg('Record updated!', 'Success');
                        setTimeout(() => this.$emit('closeModal', true), 500);
                    }).catch(() => {
                        this.errorMsg('Error saving data!', 'Error');
                    });
                } else {
                    this.$store.dispatch('storeSchool', form).then(() => {
                        this.successMsg('New record created!', 'Success');
                        this.$router.push({name: 'schools'});
                    }).catch(() => {
                        this.errorMsg('Error saving data!', 'Error');
                    });
                }
            },
        },
        created() {
            this.lga_ward_id = this.school.lga_ward_id;
        }
    }
</script>
<style>
    .form-control {
        transition: initial;
    }
</style>
<style type="text/css" scoped>

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

    .btn-school {
        width: 200px;
        align-self: center;
        margin-left: calc(50% - 100px);
        margin-top: 30px;
    }

    input[type="text"], input[type="email"], input[type="number"], input[type="url"], select {
        height: 40px;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>