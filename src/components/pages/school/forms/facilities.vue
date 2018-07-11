<template>
    <div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School Building Ownership
                    </label>
                    <div class="col-md-12">
                        <b-form-radio-group v-model="data.building_id" :options="schoolBuilding" stacked
                                            name="building_ownership"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Play Rooms</label>
                    <div class="col-md-12">
                        <b-form-radio-group v-model="data.play_room_id" :options="playRooms" stacked name="play_rooms"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Play Facilities
                    </label>
                    <div class="col-md-12">
                        <b-form-radio-group v-model="data.play_facility_id" :options="playFacilities" stacked
                                            name="play_facilities"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Learning Materials
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="data.learning_ids" :options="learningMaterials" stacked
                                               name="learning"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row even-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Sources of Power
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="data.power_source_ids" :options="powerSource" stacked/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Health Facilities
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="data.health_ids" :options="healthFacilities" stacked name="health"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Sources of Water Supply
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="data.water_ids" :options="waterSupply" stacked name="water"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Toilet Facilities
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="data.toilet_ids" :options="toiletFacilities" stacked name="toilet"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import options from "src/validations/validations.js";

    Vue.use(options);
    export default {
        props: {
            data: {type: Object, required: true}
        },
        data() {
            return {
                facilitiesShared: [],
                schoolBuildingType: [],
                schoolBuilding: [],
                fenceCondition: [],
                playRooms: [],
                playFacilities: [],
                learningMaterials: [],
                powerSource: [],
                healthFacilities: [],
                waterSupply: [],
                toiletFacilities: [],
                schoolId: ''
            }
        },
        methods: {},
        created() {
            let settings = JSON.parse(localStorage.getItem('settings'));

            if (settings) {

                settings.learning.forEach(item => this.learningMaterials.push({text: item.material, value: item.id}));
                settings.buildings.forEach(item => this.schoolBuilding.push({
                    text: item.ownership,
                    value: item.id
                }))
                settings.healths.forEach(item => this.healthFacilities.push({text: item.facility, value: item.id}));
                settings.water.forEach(item => this.waterSupply.push({text: item.source, value: item.id}));
                settings.toilet_types.forEach(item => this.toiletFacilities.push({text: item.type, value: item.id}));
                settings.play_facilities.forEach(item => this.playFacilities.push({text: item.type, value: item.id}));
                settings.play_rooms.forEach(item => this.playRooms.push({text: item.category, value: item.id}));
                settings.power_sources.forEach(item => this.powerSource.push({text: item.power_sources, value: item.id}));
            }
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