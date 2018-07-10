<template>
    <div>
        <div class="row odd-row">
            <div class="form-group">

            </div>
            <div class="col-md-3 col-md-3">
                <div class="form-group p-10">
                    <validate tag="div">
                        <label class="control-label col-md-8">LGA <abbr title="required">*</abbr></label>
                        <div class="col-md-12">
                            <multiselect v-model="lga" name="lga"
                                         :show-labels="false"
                                         :options="lgas"
                                         @input="getWard"></multiselect>
                        </div>
                        <field-messages name="lga" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">LGA is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="col-md-3 col-md-3">
                <div class="form-group p-10">
                    <label>Ward <abbr title="required">*</abbr></label>
                    <multiselect v-model="ward" required :show-labels="false" :options="wards"
                                 @input="selectedWard"></multiselect>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group p-10">
                    <validate tag="div">
                        <label class="control-label col-md-8" for="name">School Name
                            <abbr title="required">*</abbr></label>
                        <div class="col-md-12">
                            <input type="text" class="form-control"
                                   name="school_name" v-model="data.name"
                                   required id="name"
                                   placeholder="School Name">
                            <field-messages name="school_name" show="$invalid && $submitted"
                                            class="text-danger">
                                <div slot="required">School name is a required field</div>
                            </field-messages>
                        </div>
                    </validate>
                </div>
            </div>

        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Location
                        <abbr title="required">*</abbr></label>
                    <validate tag="div">
                        <b-form-radio-group v-model="data.location"
                                            required
                                            :options="schoolLocationsOptions" name="location"/>
                        <field-messages name="location" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label col-md-12" for="year_established">Year Established
                    </label>
                    <input type="text" class="form-control" v-model="data.established"
                           id="year_established" name="year_established"
                           required
                           placeholder="Year Established"/>

                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label" for="dist">Distance to Catchment Area
                    </label>
                    <input type="number" min="0" v-model="data.average_distance"
                           class="form-control" id="dist" placeholder=""/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label" for="village_town">Village/Town
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="col-md-12">
                        <input type="text" v-model="data.town" class="form-control"
                               id="village_town" name="village_town" required placeholder="">
                        <field-messages name="village_town" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>

                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-7">
                <div class="form-group p-10">
                    <label class="control-label col-md-8" for="email">Email
                    </label>
                    <div class="col-md-12">
                        <input type="email" v-model="data.email"
                               class="form-control" id="email" placeholder="Email"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-5">
                <div class="form-group p-10">
                    <label class="control-label col-md-12" for="phone">Phone Nunber
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="col-md-12">
                        <input type="text" v-model="data.phone" class="form-control"
                               id="phone" name="phone" required placeholder="Enter Phone Number"/>

                        <field-messages name="phone" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>

                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-5">
                <div class="form-group p-10">
                    <label class="control-label">Website
                    </label>
                    <div class="col-md-12">
                        <input type="url" v-model="data.website" class="form-control"
                               name="website" value="http://www.example.com/" id="url">
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">Map Coordinate (Lat, Long)
                    </label>
                    <input type="text" v-model="data.geolocation"
                           class="form-control" id="long" placeholder="e.g. 9.182 / -39.140625">

                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">School Category
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="col-md-12">
                        <b-form-radio-group v-model="data.category"
                                            name="category" required
                                            :options="schoolCategoryOptions"/>
                        <field-messages name="category" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>

                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group p-10">
                    <label class="control-label col-md-12" for="name_of_proprietor">Propritor Name
                    </label>
                    <div class="col-md-12">
                        <input type="text" v-model="data.name_of_proprietor"
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
                    <input type="text" v-model="data.private_membership_name"
                           class="form-control" id="private_membership_name"
                           placeholder="Memebership's Name">
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Type
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="col-md-12">
                        <b-form-radio-group
                                v-model="data.type"
                                required
                                name="school_type"
                                :options="schoolTypesOptions" stacked/>
                        <field-messages name="school_type" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>

                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="form-group p-10">
                    <label class="control-label">School Ownership
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="">
                        <b-form-radio-group
                                v-model="data.ownership"
                                required
                                name="ownership"
                                :options="schoolOwnershipOptions" stacked/>
                        <field-messages name="ownership" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Education Level
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="col-md-12">
                        <b-form-radio-group
                                v-model="data.education_level"
                                name="education_level"
                                required
                                :options="educationLevelOptions"/>
                        <field-messages name="education_level" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">Multigrading System
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="">
                        <b-form-radio-group
                                v-model="data.multigrade"
                                name="multigrade"
                                required
                                :options="yesNoOptions"/>
                        <field-messages name="multigrade" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="form-group p-10">
                    <label class="control-label">shift
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="">
                        <b-form-radio-group
                                v-model="data.shift"
                                name="shift"
                                required
                                :options="yesNoOptions"/>
                        <field-messages name="shift" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
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
                                v-model="data.management_committee"
                                name="management_committee"
                                :options="yesNoOptions"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">PTA/PTF/MA
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="">
                        <b-form-radio-group
                                v-model="data.pta_pf"
                                name="pta_pf"
                                required
                                :options="yesNoOptions"/>
                        <field-messages name="pta_pf" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School Development Plan
                    </label>
                    <div class="">
                        <b-form-radio-group v-model="data.development_plan" :options="yesNoOptions"
                                            name="development_plan"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School grants
                        <abbr title="required">*</abbr></label>
                    <validate tag="div" class="">
                        <b-form-radio-group
                                v-model="data.grants"
                                name="grants"
                                required
                                :options="yesNoOptions"/>
                        <field-messages name="grants" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
        </div>
        <div class="row odd-row">
            <div class="col-md-12">
                <div class="form-group p-10">
                    <label class="control-label col-md-4" for="address">Address <abbr title="required">*</abbr></label>
                    <validate tag="div" class="col-md-8">
                        <textarea rows="4" v-model="data.address"
                                  class="form-control resize_vertical" id="address"
                                  name="address"
                                  placeholder="School Address"></textarea>
                        <field-messages name="address" show="$invalid && $submitted"
                                        class="text-danger">
                            <div slot="required">This is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import options from "src/validations/validations.js";
    import Multiselect from 'vue-multiselect';

    Vue.use(options);
    export default {
        name: 'school_basic_form',
        props: {
            data: {type: Object, required: true}
        },
        components: {
            Multiselect,
        },
        data() {
            return {
                lgas: [],
                wards: [],
                lgasInfo: [],
                wardKeys: {}, // capture the ward id and ward name of the selected LGA
                schoolLocationsOptions: [{text: 'Rural', value: 'rural'}, {text: 'Urban', value: 'urban'}],
                educationLevelOptions: [{text: 'Primary', value: 'Primary'}, {text: 'Secondary', value: 'Secondary'}],
                schoolCategoryOptions: [{text: 'Public', value: 'Public'}, {text: 'Private', value: 'Private'}],
                schoolTypesOptions: [],
                schoolOwnershipOptions: [],
                lga: '',
                ward: '',
                yesNoOptions: [{text: 'Yes', value: '1'}, {text: 'No', value: '0'}],
                settings: {},
                selectedSharedFacilities: [],
            }
        },
        methods: {
            getWard() {

                this.ward = '';
                this.wards = []; // clear previous ward elements
                this.wardKeys = [];
                // alert(this.data.lga);

                // get lga id
                let _lgaId = this.lgasInfo.filter(item => {
                    return (item.name === this.lga);
                });

                _lgaId = _lgaId[0].id;


                // populate LGA
                // todo: filter lga base on state
                let _wards = [];
                this.settings.lga_wards.forEach(item => {
                    // this.lgasInfo.push(item);
                    _wards.push(item);
                })


                this.wardKeys = _wards.filter(item => {
                    return (item.lga_id === _lgaId);
                });

                this.wardKeys.forEach(item => {
                    this.wards.push(item.name);
                    // this.wardKeys[item.id] = item.name;
                })
            },
            selectedWard() {
                /**
                 * @description called to get the id of the selected ward
                 * @name selectedWard
                 * @returns null
                 */

                let _wardId = this.settings.lga_wards.filter(item => {
                    return (item.name == this.ward);
                })

                // assign the selected ward id in the data object
                this.data.lga_ward_id = _wardId[0].id;
            }
        },
        created() {
            this.settings = JSON.parse(localStorage.getItem('settings'));

            if (this.settings) {
                // populate LGA
                this.settings.lga_areas.forEach(item => {
                    this.lgasInfo.push(item);
                    this.lgas.push(item.name);
                })

                this.settings.school_ownerships.forEach(item => {
                    this.schoolOwnershipOptions.push({
                        text: item.owner,
                        value: item.id
                    });
                })

                this.settings.school_types.forEach(type => {
                    this.schoolTypesOptions.push({
                        text: type.name,
                        value: type.id
                    });
                })
            }
        },
    }
</script>
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