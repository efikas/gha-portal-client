<template>
    <div>
        <b-card header="School Basic Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal">
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label  class="control-label">LGA</label>
                        <multiselect v-model="data.lga" :show-labels="false" :options="lgas" @input="getWard"></multiselect>
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
                        <multiselect :show-labels="false" :options="wards"></multiselect>
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
                            <label class="control-label" for="village_town">Village/Town
                            </label>
                            <div class="col-md-12">
                                <input type="text" v-model="data.village_town" class="form-control"
                                       id="village_town" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="location">School Location
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="location"
                                                  v-model="data.location">
                                        Rural
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="location"
                                                  v-model="data.location">
                                        Urban
                                    </b-form-radio>
                                </div>
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
                            <label class="control-label" for="website">Website
                            </label>
                            <div class="col-md-12">
                                <input type="url" v-model="data.website" class="form-control"
                                       name="website" value="http://www.example.com/" id="url">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Map Coordinate (Lat, Long)
                            </label>
                            <input type="text" v-model="data.geolocation"
                                   class="form-control" id="long" placeholder="e.g. 9.182 / -39.140625">

                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">School Category
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="category"
                                                  v-model="data.category">
                                        Public
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="2" checked="false" name="category"
                                                  v-model="data.category">
                                        Private
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-5">
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
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Private Membership
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" name="private_membership_status"
                                                  v-model="data.private_membership_status"
                                                  checked="false">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio" checked="false">
                                    <b-form-radio :value="0" name="private_membership_status"
                                                  v-model="data.private_membership_status">
                                        No
                                    </b-form-radio>
                                </div>
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
                            <label class="control-label col-md-12" for="text">School Type
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio :value="1" checked="false" name="type"
                                                      v-model="data.type">
                                            Regular
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="2" checked="false" name="type"
                                                      v-model="data.type">
                                            Islamiyya Integrated
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="3" checked="false" name="type"
                                                      v-model="data.type">
                                            Montessori
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="4" checked="false" name="type"
                                                      v-model="data.type">
                                            Special Needs
                                        </b-form-radio>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio :value="5" checked="false" name="type"
                                                      v-model="data.type">
                                            Vocational Training Center
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="6" checked="false" name="type"
                                                      v-model="data.type">
                                            Science and Technology College
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="7" checked="false" name="type"
                                                      v-model="data.type">
                                            Nomadic (Migrant)
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Ownership
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio :value="1" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Community
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="2" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Cooperation
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="3" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Federal Government
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="4" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            State Government
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="5" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Local Government
                                        </b-form-radio>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="radio">
                                        <b-form-radio :value="6" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Faith Based
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="7" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Individual
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="8" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            NGO
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio :value="9" checked="false" name="ownership"
                                                      v-model="data.ownership">
                                            Others
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="education_level">Education Level
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio value="PRY" checked="false" name="education_level"
                                                  v-model="data.education_level">
                                        Primary
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio value="SEC" checked="false" name="education_level"
                                                  v-model="data.education_level">
                                        Secondary
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Multigrading System
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="multigrade"
                                                  v-model="data.multigrade">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="multigrade"
                                                  v-model="data.multigrade">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">shift
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="shift" v-model="data.shift">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="shift" v-model="data.shift">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="management_committee">Management
                                Committee
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="management_committee"
                                                  v-model="data.management_committee">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="management_committee"
                                                  v-model="data.management_committee">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">PTA/PTF/MA
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="pta_pf"
                                                  v-model="data.pta_pf">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="pta_pf"
                                                  v-model="data.pta_pf">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Development Plan
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="development_plan"
                                                  v-model="data.development_plan">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="development_plan"
                                                  v-model="data.development_plan">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School grants
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="grants"
                                                  v-model="data.grants">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="0" checked="false" name="grants"
                                                  v-model="data.grants">
                                        No
                                    </b-form-radio>
                                </div>
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
            </form>
            <button class="btn btn-primary btn-lg btn-school pull-right" @click="onComplete()">Submit</button>
        </b-card>
    </div>
</template>
<script>
    import Vue from 'vue';
    import options from "src/validations/validations.js";
    import Multiselect from 'vue-multiselect';

    Vue.use(options);
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
                data: {
                    lga_ward_id: null,
                    name: '',
                    established: '',
                    average_distance: '0',
                    town: '',
                    location: '', //rural or urban
                    email: '',
                    phone: '',
                    website: '',
                    geolocation: '0.000 / 0.000000',
                    category: '', //private or public
                    private_membership_name: '',
                    type: null,
                    ownership: null,
                    education_level: "",
                    multigrade: null,
                    shift: null,
                    management_committee: null,
                    pta_pf: null,
                    development_plan: null,
                    grants: null,
                    address: '',
                },
                users: [
                    { name: 'Patrick' },
                    { name: 'Evan' },
                    { name: 'Christian' },
                    { name: 'Daniel' }
                ],
                selectedSharedFacilities: [],
            }
        },
        methods: {
            upload_pic() {
                this.$refs.user_image.processQueue();
            },
            uploaded() {
                console.log("uploaded");
            },
            clearqueue(file) {
                if (this.$refs.user_image.dropzone.files.length > 1) {
                    this.$refs.user_image.dropzone.removeFile(this.old_file);
                }
                this.old_file = file;
            },
            onComplete: function () {
                console.log("aaa")
                this.$school.addSchool(this.data).then(response => {

                })
                // alert('Yay. Done!');
            },
            addMore(elementGroup) {
                switch (elementGroup) {
                    case 'seater':
                        this.data.classrooms.seater.push({type: "", class: '', quantity: ''});
                        break;
                    case 'pupil':
                        this.data.textbooks.pupil.push({subject: '', level: '', quantity: ''});
                        break;
                    case 'teacher':
                        this.data.textbooks.teacher.push({subject: '', level: '', quantity: ''});
                        break;
                    case 'members':
                        this.data.sbmc.members.push({name: '', position: '', phone_number: '', email: ''});
                        break;
                    case 'projects':
                        this.data.sbmc.projects.push({brief: '', cost: '', funding: '', year: ''});
                        break;
                    default:
                        break;

                }
            },
            getWard(){
                this.wards = []; // clear previous ward elements
                this.wardKeys = [];
                // alert(this.data.lga);

                //get lga id
                let _lgaId = this.lgasInfo.filter(item => {
                    return (item.name === this.data.lga);
                });

                _lgaId = _lgaId[0].id;

                //todo: get the settings information
                let settings = JSON.parse(localStorage.getItem('settings'));

                // console.log(settings.lga_areas);
                //populatre LGA
                //todo: filter lga base on state
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
                console.log(this.wards);
            }
        },
        mounted: function () {
            // this.$lga.getLgas().then(data => {
            //     data.forEach(item => {
            //         // console.log(item);
            //         this.lgasInfo.push(item);
            //         this.lgas.push(item.name);
            //     });
            //     // console.log(this.lgasInfo);
            // });

            //todo: get the settings information
            let settings = JSON.parse(localStorage.getItem('settings'));

            // console.log(settings.lga_areas);
            //populatre LGA
            //todo: filter lga base on state
            settings.lga_areas.forEach(item => {
                this.lgasInfo.push(item);
                this.lgas.push(item.name);
            })

            this.$school.schoolProfile(this.$route.params.id).then(data => {
                this.data = data;
                this.schoolId = data.id;
            })


        },
        watch: {
            settings(data) {
                let a = 5;
            }
        },
        destroyed: function () {

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