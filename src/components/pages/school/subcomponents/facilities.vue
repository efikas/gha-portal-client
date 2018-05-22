<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal">
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Bording Facilities
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="boarding"
                                                    v-model="data.facilities.boarding">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="2" checked="false" name="boarding"
                                                    v-model="data.facilities.boarding">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Library
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="sch_library"
                                                    v-model="data.facilities.school_library">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="2" checked="false" name="sch_library"
                                                    v-model="data.facilities.school_library">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Security Guard?
                            </label>
                            <div class="col-md-16">
                                <input type="number" min="0" v-model="data.facilities.security_guard"
                                        class="form-control" id="text" placeholder="0">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">School Building Type
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" checked="false" name="school_building_type"
                                                    v-model="data.facilities.school_building_type">
                                        <div>Proposely built</div>
                                        <div>Proposely built for educational use</div>
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="2" checked="false" name="school_building_type"
                                                    v-model="data.facilities.school_building_type">
                                        <div>Multiple Class in Rooms</div>
                                        <div>Converted building, rooms holding multiple classes (no walls
                                            between).
                                        </div>
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="3" checked="false" name="school_building_type"
                                                    v-model="data.facilities.school_building_type">
                                        <div>One Class per Room</div>
                                        <div>Converted building, one class per room (with walls separating).
                                        </div>
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="4" checked="false" name="school_building_type"
                                                    v-model="data.facilities.school_building_type">
                                        <div>Residential Space</div>
                                        <div>Converted space in a house/apartment (residential).</div>
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="5" checked="false" name="school_building_type"
                                                    v-model="data.facilities.school_building_type">
                                        <div>Mixed-Use Building</div>
                                        <div>Mixed-use building (School plus other commercial use)</div>
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">School Building Ownership
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" name="school_building_ownership"
                                                    v-model="data.facilities.school_building_ownership">
                                        Owned
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="2" name="school_building_ownership"
                                                    v-model="data.facilities.school_building_ownership">
                                        Rented
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="3" checked="false" name="school_building_ownership"
                                                    v-model="data.facilities.school_building_ownership">
                                        Leased
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="4" name="school_building_ownership"
                                                    v-model="data.facilities.school_building_ownership">
                                        Granted for free
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="school_fence_condition">School Fence Condition
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio :value="1" name="school_fence_condition"
                                                    v-model="data.facilities.school_fence_condition">
                                        No Fence/Wall
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="2" name="school_fence_condition"
                                                    v-model="data.facilities.school_fence_condition">
                                        Fence is in good Condition
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="3" name="school_fence_condition"
                                                    v-model="data.facilities.school_fence_condition">
                                        Fence needs minor repairs
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio :value="4" name="school_fence_condition"
                                                    v-model="data.facilities.school_fence_condition">
                                        Fence needs major repairs
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Play Rooms</label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio name="false" :value="1" v-model="data.facilities.play_rooms">
                                        None
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio name="false" :value="2" v-model="data.facilities.play_rooms">
                                        Yes with Play Rugs
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio name="false" :value="3" v-model="data.facilities.play_rooms">
                                        Yes with Sand Floor
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio name="false" :value="4" v-model="data.facilities.play_rooms">
                                        Yes, no Sand/Rug Floor
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Play Facilities
                            </label>
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <b-form-checkbox id="playroom" :value="1" v-model="data.facilities.play_facilities">
                                        PlayRoom
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="merry_go_round" :value="2" v-model="data.facilities.play_facilities">
                                        Merry Go Round
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="swing" :value="3" v-model="data.facilities.play_facilities">
                                        Swing
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="ladder_slide" :value="4" v-model="data.facilities.play_facilities">
                                        Ladder Slide
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="seesaw" :value="5" v-model="data.facilities.play_facilities">
                                        See Saw
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="indoor_activity_material" :value="6" v-model="data.facilities.play_facilities">
                                        Indoor Activity Material
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Learning Materials
                            </label>
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <b-form-checkbox id="chart" :value="1" v-model="data.facilities.learning_materials">
                                        Charts
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="poaster" :value="2" v-model="data.facilities.learning_materials">
                                        Posters
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="toys" :value="3" v-model="data.facilities.learning_materials">
                                        Toys
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="audio_visual" :value="4" v-model="data.facilities.learning_materials">
                                        Audio/Visual(Radio, TV, DVD)
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="word_puzzle_box" :value="5" v-model="data.facilities.learning_materials">
                                        Word Puzzle Box
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="caregiver_guide" :value="6" v-model="data.facilities.learning_materials">
                                        Caregiver Guide
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Sources of Power
                            </label>
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <b-form-checkbox id="phcn" :value="1" v-model="data.facilities.power_source">
                                        PHCN/NEPA
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="generator" :value="2" v-model="data.facilities.power_source">
                                        Generator
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="solar" :value="3" v-model="data.facilities.power_source">
                                        Solar
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="inverter" :value="4" v-model="data.facilities.power_source">
                                        Inverter
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="none" :value="5" v-model="data.facilities.power_source">
                                        None
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Health Facilities
                            </label>
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <b-form-checkbox id="health_clinic" :value="1" v-model="data.facilities.health_facilities">
                                        Health Clinic
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="water_source" :value="2" v-model="data.facilities.health_facilities">
                                        First Aid Kit
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox name="health_facilities"
                                                        v-model="data.facilities.health_facilities">
                                        None
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Sources of Water Supply
                            </label>
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <b-form-checkbox id="pipeborn" :value="1" v-model="data.facilities.water_supply">
                                        Pipe-borne
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="borehole" :value="2" v-model="data.facilities.water_supply">
                                        Borehole
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="well" :value="3" v-model="data.facilities.water_supply">
                                        Well
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="others" :value="4" v-model="data.facilities.water_supply">
                                        Others
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="none" :value="5" v-model="data.facilities.water_supply">
                                        None
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Toilet Facilities
                            </label>
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <b-form-checkbox id="pit-latrine" :value="1" v-model="data.facilities.toilet_facilities">
                                        Pit Latrine
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="bucket_system" :value="2" v-model="data.facilities.toilet_facilities">
                                        Bucket System
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="water_cistern" :value="3" v-model="data.facilities.toilet_facilities">
                                        Water Cistern
                                    </b-form-checkbox>
                                </div>
                                <div class="checkbox">
                                    <b-form-checkbox id="others" :value="4" v-model="data.facilities.toilet_facilities">
                                        Others
                                    </b-form-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Facilities Sharing</label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="text" name="facilities_sharing"
                                        v-model="data.facilities.facilities_sharing">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Facilities Shared  {{ data.facilities.facilities_shared }}
                            </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="checkbox">
                                        <b-form-checkbox  id="toilet" :value="1"
                                                            v-model="data.facilities.facilities_shared">
                                            Toilet
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="water_source" :value="2" v-model="data.facilities.facilities_shared">
                                            Water Source
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="classrooms" :value="3" v-model="data.facilities.facilities_shared">
                                            classroomss
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="play_ground" :value="4" v-model="data.facilities.facilities_shared">
                                            Play Ground
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="whiteboards" :value="5" v-model="data.facilities.facilities_shared">
                                            WhiteBoards
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="boarding_hostels" :value="6"  v-model="data.facilities.facilities_shared">
                                            Boarding Hostels
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="kitchen" :value="7" v-model="data.facilities.facilities_shared">
                                            Kitchen
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="bathrooms" :value="8"  v-model="data.facilities.facilities_shared">
                                            Bathroooms
                                        </b-form-checkbox>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkbox">
                                        <b-form-checkbox id="computer" :value="9" v-model="data.facilities.facilities_shared">
                                            Computer
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="labouratory" :value="10" v-model="data.facilities.facilities_shared">
                                            Laboratory
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="library" :value="11" v-model="data.facilities.facilities_shared">
                                            Library
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="wash_hand_basin" :value="12" v-model="data.facilities.facilities_shared">
                                            Wash Hand Basin
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="staff_room" :value="13" v-model="data.facilities.facilities_shared">
                                            Staff Room
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="offices" :value="14" v-model="data.facilities.facilities_shared">
                                            Offices
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="dinning_room" :value="15" v-model="data.facilities.facilities_shared">
                                            Dinning Room
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox id="play_rooms" :value="16" v-model="data.facilities.facilities_shared">
                                            Play Rooms
                                        </b-form-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </b-card>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueFormWizard from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import options from "src/validations/validations.js";

    Vue.use(VueFormWizard, options);
    export default {
        data() {
            return {
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    autoProcessQueue: false,
                    // maxFilesize: 0.5,
                    maxFiles: 1,
                    headers: {"My-Awesome-Header": "header value"}
                },
                data: {
                    ward_id: '',
                    facilities: {
                        boarding: '1',
                        school_library: '1',
                        security_guard: '1',
                        school_building_type: '1',
                        school_building_ownership: '1',
                        school_fence_condition: '1',
                        play_rooms: '1',
                        play_facilities: '1',
                        learning_materials: '1',
                        power_source: '1',
                        health_facilities: '1',
                        water_supply: '1',
                        toilet_facilities: '1',
                        facilities_sharing: '1',
                        facilities_shared: '1',
                    }
                }
            }
        },
        components: {
            vueDropzone: vue2Dropzone,
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
                this.$school.addSchool(this.data).then(response => {

                })
                // alert('Yay. Done!');
            }
        },
        mounted: function () {

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
</style>