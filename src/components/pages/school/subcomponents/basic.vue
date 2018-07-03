<template>
    <div>
        <b-card header="School Basic Information" header-tag="h4" class="bg-header-card">
            <form  class="form-horizontal" @submit.prevent="onSubmit">
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label  class="control-label">LGA</label>
                        <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getWard"></multiselect>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-8" for="name">School Name
                            </label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" v-model="data.name"
                                       id="name" placeholder="School Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label>Ward</label>
                        <multiselect v-model="ward" :show-labels="false" :options="wards" @input="selectedWard"></multiselect>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="year_established">Year Established
                            </label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" v-model="data.established"
                                       id="year_established" placeholder="Year Established">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="dist">Distance to Catchment Area
                            </label>
                            <div class="col-md-12">
                                <input type="number" min="0" v-model="data.average_distance"
                                       class="form-control" id="dist" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="town">Village/Town
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.town" class="form-control"
                                       id="town" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">School Location
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.location" :options="schoolLocationsOptions" stacked />
                            </div>
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
                                       class="form-control" id="email" placeholder="Email">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-5">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="phone">Phone Munber
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.phone" class="form-control"
                                       id="phone" placeholder="Enter value">
                            </div>
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
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.category" :options="schoolCategoryOptions" stacked />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12">Boarding Facilities
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group  :options="yesNoOptions" stacked name="sex" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-5">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="proprietor">Proprietor Name
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.proprietor"
                                       class="form-control" id="proprietor"
                                       placeholder="Propritor Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="private_membership_name">Private Memebership's
                                Name
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.private_membership_name"
                                       class="form-control" id="private_membership_name"
                                       placeholder="PPrivate Memebership's Name">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12">School Type
                            </label>
                             <b-form-radio-group v-model="data.type" :options="schoolTypesOptions" stacked />
                            
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label">School Ownership
                            </label>
                             <b-form-radio-group v-model="data.ownership" :options="schoolOwnershipOptions" stacked />
                            
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12">Education Level
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.education_level" :options="educationLevelOptions" stacked />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label">Multigrading System
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.multigrade" :options="yesNoOptions" stacked name="multigrade" />

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label">shift
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.shift" :options="yesNoOptions" stacked name="shift" />

                            </div>
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
                                <b-form-radio-group v-model="data.management_committee" :options="yesNoOptions" stacked name="management_committee" />

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">PTA/PTF/MA
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.pta_pf" :options="yesNoOptions" stacked name="pta_pf" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">School Development Plan
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.development_plan" :options="yesNoOptions" stacked name="development_plan" />

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">School grants
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.grants" :options="yesNoOptions" stacked name="grants" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-md-8">
                        <div class="form-group p-10">
                            <label class="control-label col-md-4" for="address">School Address</label>
                            <div class="col-md-12">
                                <textarea rows="4" v-model="data.address"
                                          class="form-control resize_vertical" id="address"
                                          placeholder="School Address">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
            </form>
        </b-card>
    </div>
</template>
<script>
    import Multiselect from 'vue-multiselect';

    export default {
        name: 'school-add',
        components: {
            Multiselect,
        },
        data() {
            return {
                lgas: [],
                wards: [],
                lgasInfo:[],
                wardKeys: [], // capture the ward id and ward name of the selected LGA
                settings: null,
                schoolLocationsOptions:[{ text: 'Rural', value: 'Rural' },{ text: 'Urban', value: 'Urban' }],
                educationLevelOptions:[{ text: 'Primary', value: 'Primary' },{ text: 'Secondary', value: 'Secondary' }],
                schoolCategoryOptions: [{ text: 'Public', value: 'Public' },{ text: 'Private', value: 'Private' }],
                schoolTypesOptions: [],
                schoolOwnershipOptions: [],
                lga: '',
                ward: '',
                yesNoOptions: [{ text: 'Yes', value: '1' },{ text: 'No', value: '0' }],
                schoolId: null,
                data: {
                    // lga_ward_id: null,
                    // name: '',
                    // established: '',
                    // average_distance: '0',
                    // town: '',
                    // location: '',   // rural or urban
                    // email: '',
                    // phone: '',
                    // website: '',
                    // geolocation: '0.000 / 0.000000',
                    // category: '',   // private or public
                    // private_membership_name: '',
                    // boarding: '',
                    // type: null,
                    // ownership: 1,
                    // education_level: "",
                    // multigrade: null,
                    // shift: null,
                    // management_committee: null,
                    // pta_pf: null,
                    // development_plan: null,
                    // grants: null,
                    // address: '',
                },
                selectedSharedFacilities: [],
            }
        },
        methods: {
            onSubmit() {
                // console.log("aaa");
                this.$school.editSchool(this.schoolId, this.data).then(response => {

                    if (typeof  response == 'object'){
                        this.$swal({
                            type: 'success',
                            title: 'School Record added Successfully!',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.value) {
                                // window.location.href = 'http://' + window.location.hostname + '/school/' + this.schoolId;
                            }
                        })
                    }
                    else {
                        this.$swal({
                            type: 'error',
                            title: 'Error updating school information!',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.value) {
                                // todo reload page
                                //location.reload();
                            }
                        })
                    }


                })
            },
            getWard(){
                this.wards = []; // clear previous ward elements
                this.wardKeys = [];
                // alert(this.data.lga);

                // get lga id
                let _lgaId = this.lgasInfo.filter(item => {
                    return (item.name === this.lga);
                });

                _lgaId = _lgaId[0].id;

                // todo: get the settings information
                let settings = JSON.parse(localStorage.getItem('settings'));

                // console.log(settings.lga_areas);
                // populate LGA
                // todo: filter lga base on state
                let _wards = [];
                settings.lga_wards.forEach(item => {
                    // this.lgasInfo.push(item);
                    _wards.push(item);
                })


                this.wardKeys =_wards.filter(item => {
                    return (item.lga_id == _lgaId);
                });

                this.wardKeys.forEach(item => {
                    this.wards.push(item.name);
                    // this.wardKeys[item.id] = item.name;
                })
            },
            selectedWard(){
                let settings = JSON.parse(localStorage.getItem('settings'));
                let _wardId = settings.lga_wards.filter(item => {
                    return (item.name == this.ward);
                })
                this.data.lga_ward_id = _wardId[0].id;

            }
        },
        mounted: function () {
            // todo: get the settings information
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                // console.log(settings.lga_areas);
                //populatre LGA
                settings.lga_areas.forEach(item => {
                    this.lgasInfo.push(item);
                    this.lgas.push(item.name);
                })

                settings.school_ownerships.forEach(owner => {
                    this.schoolOwnershipOptions.push({
                        text: owner.owner,
                        value: owner.id
                    });
                })

                settings.school_types.forEach(type => {
                    this.schoolTypesOptions.push({
                        text: type.name,
                        value: type.id
                    });
                })
            }

            this.$school.schoolProfile(this.$route.params.id).then(data => {
                delete data.classrooms;
                delete data.building_ownership;
                delete data.staffs;
                delete data.ward;
                delete data.water;
                delete data.toilet;
                delete data.play_facilities;
                delete data.play_rooms;
                delete data.power_sources;
                delete data.health;
                delete data.learning;
                delete data.facilities;
                // console.log(data.classrooms);
                this.data = data;
                // Object.keys(this.data).forEach(key => {
                //     this.data[key] = (data.hasOwnProperty(key)) ? data[key] : null;
                // })

                this.schoolId = data.id;
                // this.data.lga_id = data.ward.lga_id;
                this.data.lga_ward_id = data.ward.id;
                this.data.ownership = 1;

                // get lGA
                let _lga = this.lgasInfo.filter(item => {
                    return (item.id == data.ward.lga_id);
                })
                this.lga = _lga[0].name;

                // populate ward
                this.getWard()
                this.ward = data.ward.name;

                // get ward
                // let settings = JSON.parse(localStorage.getItem('settings'));
                //
                // let _wards = settings.lga_wards.filter(item => {
                //     return (item.id == data.ward.id);
                // })
                // this.ward = _wards[0].name;

            })

        },
        watch: {},
        destroyed: function () {}
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
        width: 100%;
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
        color: #684348 !important;
    }
    .btn-school {
        width: 200px;
        align-self: center;
        margin-left: calc(50% -  100px);
        margin-top: 30px;
    }
    input[type="text"], input[type="email"], input[type="number"], input[type="url"], select {
        height: 40px;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>