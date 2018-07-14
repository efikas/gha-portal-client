<template>
    <div>
        <div class="row odd-row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">School Building Ownership
                    </label>
                    <div class="col-md-12">
                        <b-form-radio-group v-model="school.building_id" :options="buildings" stacked
                                            name="building_ownership"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label col-md-12">Play Rooms</label>
                    <div class="col-md-12">
                        <b-form-radio-group v-model="school.play_room_id" :options="play_rooms" stacked
                                            name="play_rooms"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Play Facilities
                    </label>
                    <div class="col-md-12">
                        <b-form-radio-group v-model="school.play_facility_id" :options="play_facilities" stacked
                                            name="play_facilities"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Learning Materials
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="school.learning_ids" :options="learning" stacked
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
                        <b-form-checkbox-group v-model="school.power_source_ids" :options="power_sources" stacked/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Health Facilities
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="school.health_ids" :options="healths" stacked
                                               name="health"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Sources of Water Supply
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="school.water_ids" :options="waters" stacked name="water"/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="form-group p-10">
                    <label class="control-label">Toilet Facilities
                    </label>
                    <div class="col-md-12">
                        <b-form-checkbox-group v-model="school.toilet_ids" :options="toilets" stacked
                                               name="toilet"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from 'vuex';

    export default {
        props: {
            // data: {type: Object, required: true}
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'data',
                'school'
            ]),
            learning() {
                return this.data.learning.map(item =>
                    ({text: item.material, value: item.id})
                );
            },
            buildings() {
                return this.data.buildings.map(item =>
                    ({text: item.ownership, value: item.id})
                )
            },
            healths() {
                return this.data.healths.map(item =>
                    ({text: item.facility, value: item.id})
                );
            },
            waters() {
                return this.data.water.map(item =>
                    ({text: item.source, value: item.id})
                );
            },
            toilets() {
                return this.data.toilet_types.map(item =>
                    ({text: item.type, value: item.id})
                );
            },
            play_facilities() {
                return this.data.play_facilities.map(item =>
                    ({text: item.type, value: item.id})
                );
            },
            play_rooms() {
                return this.data.play_rooms.map(item =>
                    ({text: item.category, value: item.id})
                );
            },
            power_sources() {
                return this.data.power_sources.map(item =>
                    ({text: item.power_sources, value: item.id})
                );
            }
        },
        async created() {
            await this.$store.dispatch('school', this.$route.params.id);
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