<template>
    <div>
        <b-card header="School Facilities Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal" @submit.prevent="onSubmit">
                <!--<div class="row even-row">-->
                    <!--<div class="col-xs-12 col-sm-6 col-md-6">-->
                        <!--<div class="form-group p-10">-->
                            <!--<label class="control-label col-md-12">School Building Type-->
                            <!--</label>-->
                            <!--<div class="col-md-12">-->
                                <!--<b-form-radio-group v-model="data.school_building_type" :options="schoolBuildingType" stacked name="school_building" />-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!---->
                    <!--<div class="col-xs-12 col-sm-6 col-md-3">-->
                        <!--<div class="form-group p-10">-->
                            <!--<label class="control-label">School Fence Condition-->
                            <!--</label>-->
                            <!--<div class="col-md-12">-->
                                <!--<b-form-radio-group v-model="data.school_fence_condition" :options="fenceCondition" stacked name="fence_condition" />-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">School Building Ownership
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.building_ownership" :options="schoolBuildingOwnership" stacked name="building_ownership" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12">Play Rooms</label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.play_rooms" :options="playRooms" stacked name="play_rooms" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">Play Facilities
                            </label>
                            <div class="col-md-12">
                                <b-form-radio-group v-model="data.play_facilities" :options="playFacilities" stacked name="play_facilities" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">Learning Materials
                            </label>
                            <div class="col-md-12">
                                <b-form-checkbox-group v-model="data.learning" :options="learningMaterials" stacked name="learning" />
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
                                <b-form-checkbox-group v-model="data.power_sources" :options="powerSource" stacked />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">Health Facilities
                            </label>
                            <div class="col-md-12">
                                <b-form-checkbox-group v-model="data.health" :options="healthFacilities" stacked name="health" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">Sources of Water Supply
                            </label>
                            <div class="col-md-12">
                                <b-form-checkbox-group v-model="data.water" :options="waterSupply" stacked name="water" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">Toilet Facilities
                            </label>
                            <div class="col-md-12">
                                <b-form-checkbox-group v-model="data.toilet" :options="toiletFacilities" stacked name="toilet" />
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
               facilitiesShared:[],
                schoolBuildingType: [],
                schoolBuildingOwnership: [],
                fenceCondition: [],
                playRooms: [],
                playFacilities: [],
                learningMaterials: [],
                powerSource: [],
                healthFacilities: [],
                waterSupply: [],
                toiletFacilities:[],
                schoolId: '',
                data: {
                    school_building_type: '',
                    building_ownership: '',
                    school_fence_condition: '',
                    building_ownership: '',
                    play_rooms: '',
                    play_facilities: '',
                    learning: [],
                    power_sources: [],
                    health: [],
                    water: [],
                    toilet: [],
                }
            }
        },
        methods: {
            onSubmit: function () {
                // reset
                this.data.play_rooms = '';
                this.data.play_facilities = ''
                this.data.learning = [];
                this.data.power_sources = [];
                this.data.health = [];
                this.data.water = [];
                this.data.toilet = [];

                // this.data.learning.forEach( (item, index) => {
                //     this.data.learning[index] = {learning_id: item}
                // })
                // this.data.toilet.forEach( (item, index) => {
                //     this.data.toilet[index] = {toilet_type_id: item}
                // })
                // this.data.power_sources.forEach( (item, index) => {
                //     this.data.power_sources[index] = {power_source_id: item}
                // })
                // this.data.health.forEach( (item, index) => {
                //     this.data.health[index] = {health_id: item}
                // })
                // this.data.water.forEach( (item, index) => {
                //     this.data.water[index] = {water_id: item}
                // })

                this.$school.editSchool(this.schoolId, this.data).then(response => {
                    if (typeof  response == 'object'){
                        this.$swal({
                            type: 'success',
                            title: 'School Record added Successfully!',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.value) {
                                window.location.href ='http://' + window.location.hostname + '/school/' + this.schoolId;
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
                                    location.reload();
                                }
                            })
                        }

                })
            }
        },
        mounted: function () {

            //populate the select boxes using the settings data from local storage
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {

                settings.learning.forEach(item => this.learningMaterials.push({ text: item.material, value: item.id }));
                settings.buildings.forEach(item => this.schoolBuildingOwnership.push({ text: item.ownership, value: { building_id: item.id } }))
                settings.healths.forEach(item => this.healthFacilities.push({ text: item.facility, value: item.id }));
                settings.water.forEach(item => this.waterSupply.push({ text: item.source, value: item.id }));
                settings.toilet_types.forEach(item => this.toiletFacilities.push({ text: item.type, value: item.id }));
                settings.play_facilities.forEach(item => this.playFacilities.push({ text: item.type, value: item.id }));
                settings.play_rooms.forEach(item => this.playRooms.push({ text: item.category, value: item.id }));
                settings.power_sources.forEach(item => this.powerSource.push({ text: item.power_sources, value: item.id }));
                // settings.fences.forEach(item => this.fenceCondition.push({ text: item.condition, value: item.id }))
                // settings.building_types.forEach(item => this.schoolBuildingType.push({ text: item.type + '<br />' + item.description, value: item.id }));
            }

            this.$school.schoolProfile(this.$route.params.id).then(data => {
                this.schoolId = data.id

                this.play_rooms = '';
                this.play_facilities = ''
                this.learning = [];
                this.power_sources = [];
                this.health = [];
                this.water = [];
                this.toilet = [];

                // this.data.learning.forEach( (item, index) => {
                //     this.data.learning[index] = {learning_id: item}
                // })
                // this.data.toilet.forEach( (item, index) => {
                //     this.data.toilet[index] = {toilet_id: item}
                // })
                // this.data.power_sources.forEach( (item, index) => {
                //     this.data.power_sources[index] = {power_sources_id: item}
                // })
                // this.data.health.forEach( (item, index) => {
                //     this.data.health[index] = {health_id: item}
                // })
                // this.data.water.forEach( (item, index) => {
                //     this.data.water[index] = {water_id: item}
                // })

                console.log(this.data.learning);

                this.data.building_ownership = (typeof data.building_ownership[0] !== 'undefined') ? {building_id: data.building_ownership[0].pivot.building_id} : '';
                this.data.play_rooms = (typeof data.play_rooms[0] !== 'undefined') ? data.play_rooms[0].pivot.play_room_id : '';
                this.data.play_facilities = (typeof data.play_facilities[0] !== 'undefined') ? data.play_facilities[0].pivot.play_facility_id : '';

                // for (let i = 0; i < data.toilet.length; i++){
                //     this.data.toilet[i] = { toilet_type_id: data.learning[i].pivot.toilet_type_id };
                // }
                //
                // for (let i = 0; i < data.learning.length; i++){
                //     this.data.learning[i] = {learning_id: data.learning[i].pivot.learning_id};
                // }
                // for (let i = 0; i < data.power_sources.length; i++){
                //     this.data.power_sources[i] = {power_source_id: data.power_sources[i].pivot.power_source_id};
                // }
                // for (let i = 0; i < data.health.length; i++){
                //     this.data.health[i] = {health_id: data.health[i].pivot.health_id};
                // }
                // for (let i = 0; i < data.water.length; i++){
                //     this.data.water[i] = { water_id: data.water[i].pivot.water_id };
                // }

                data.toilet.forEach(item => { this.data.toilet.push(item.pivot.toilet_type_id);})
                data.learning.forEach(item => { this.data.learning.push(item.pivot.learning_id); })
                data.power_sources.forEach(item => { this.data.power_sources.push(item.pivot.power_source_id) })
                data.health.forEach(item => { this.data.health.push(item.pivot.health_id) })
                data.water.forEach(item => { this.data.water.push(item.pivot.water_id ); })

                console.log(this.data.power_sources);
            })

        },
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
</style>