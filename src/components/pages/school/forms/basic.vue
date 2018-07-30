<template>
    <div>
        <div class="row odd-row">
            <div class="col-md-3 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">LGA <abbr title="required">*</abbr></label>
                    <b-form-select
                            v-model="school.ward.lga_id" :options="lga_areas"
                            required class="mb-3"/>
                </div>
            </div>
            <div class="col-md-3 col-md-3">
                <div class="form-group p-10">
                    <label>Ward <abbr title="required">*</abbr></label>
                    <b-form-select
                            v-model="school.lga_ward_id" :options="wards"
                            required class="mb-3">
                    </b-form-select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group p-10">
                    <label class="control-label" for="name">School Name
                        <abbr title="required">*</abbr></label>
                    <input type="text" class="form-control"
                           name="school_name" v-model="school.name"
                           required id="name"
                           placeholder="School Name">
                </div>
            </div>

        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Location
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group v-model="school.location"
                                        required
                                        :options="schoolLocationsOptions" name="location"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label" for="year_established">Year Established
                    </label>
                    <input type="text" class="form-control" v-model="school.established"
                           id="year_established" name="year_established"
                           required
                           placeholder="Year Established"/>

                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label" for="dist">Distance to Catchment Area
                    </label>
                    <input type="number" min="0" v-model="school.average_distance"
                           class="form-control" id="dist" placeholder=""/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label" for="village_town">Village/Town
                        <abbr title="required">*</abbr></label>
                    <input type="text" v-model="school.town" class="form-control"
                           id="village_town" name="village_town" required placeholder="">
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-7">
                <div class="form-group p-10">
                    <label class="control-label col-md-8" for="email">Email
                    </label>
                    <div class="col-md-12">
                        <input type="email" v-model="school.email"
                               class="form-control" id="email" placeholder="Email"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-5">
                <div class="form-group p-10">
                    <label class="control-label" for="phone">Phone Nunber
                        <abbr title="required">*</abbr></label>
                    <input type="text" v-model="school.phone" class="form-control"
                           id="phone" name="phone" required placeholder="Enter Phone Number"/>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-5">
                <div class="form-group p-10">
                    <label class="control-label">Website
                    </label>
                    <input type="url" v-model="school.website" class="form-control"
                           name="website" value="http://www.example.com/" id="url">
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">Map Coordinate (Lat, Long)
                    </label>
                    <input type="text" v-model="school.geolocation"
                           class="form-control" id="long" placeholder="e.g. 9.182 / -39.140625">

                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School Category
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group v-model="school.category"
                                        name="category" required
                                        :options="schoolCategoryOptions"/>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group p-10">
                    <label class="control-label col-md-12" for="name_of_proprietor">Propritor Name
                    </label>
                    <div class="col-md-12">
                        <input type="text" v-model="school.name_of_proprietor"
                               class="form-control" id="name_of_proprietor"
                               placeholder="Propritor Name">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group p-10">
                    <label class="control-label" for="private_membership_name">Private Membership's
                        Name
                    </label>
                    <input type="text" v-model="school.private_membership_name"
                           class="form-control" id="private_membership_name"
                           placeholder="Memebership's Name">
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6">
                <div class="form-group p-10">
                    <label class="control-label">Type
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.type"
                            required
                            name="school_type"
                            :options="school_type" stacked/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="form-group p-10">
                    <label class="control-label">School Ownership
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.ownership"
                            required
                            name="ownership"
                            :options="ownership" stacked/>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">Education Level
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.education_level"
                            name="education_level"
                            required
                            :options="educationLevelOptions"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">Multigrading System
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.multigrade"
                            name="multigrade"
                            required
                            :options="yesNoOptions"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">shift
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.shift"
                            name="shift"
                            required
                            :options="yesNoOptions"/>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Management
                        Committee
                    </label>
                    <div class="col-md-12">
                        <b-form-radio-group
                                v-model="school.management_committee"
                                name="management_committee"
                                :options="yesNoOptions"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">PTA/PTF/MA
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.pta_pf"
                            name="pta_pf"
                            required
                            :options="yesNoOptions"/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School Development Plan
                    </label>
                    <div class="">
                        <b-form-radio-group v-model="school.development_plan" :options="yesNoOptions"
                                            name="development_plan"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School grants
                        <abbr title="required">*</abbr></label>
                    <b-form-radio-group
                            v-model="school.grants"
                            name="grants"
                            required
                            :options="yesNoOptions"/>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-md-12">
                <div class="form-group p-10">
                    <label class="control-label col-md-4" for="address">Address <abbr title="required">*</abbr></label>
                    <textarea rows="4" v-model="school.address"
                              class="form-control resize_vertical" id="address"
                              name="address"
                              required
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

    export default {
        validations: {},
        data() {
            return {
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
        methods: {
            onSubmit: function () {
                let form = {
                    'average_distance': this.school.average_distance,
                    'established': this.school.established.toString(),
                    'location': this.school.location,
                    'name': this.school.name,
                    'lga_ward_id': this.school.lga_ward_id,
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
                        setTimeout(()=>this.$emit('closeModal', true), 500);
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
            !this.school.lga_ward_id?this.school.lga_ward_id=null:'';
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

    .form-group label {
        font-size: .8rem !important;
        letter-spacing: 1px;
        color: #684348 !important;
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