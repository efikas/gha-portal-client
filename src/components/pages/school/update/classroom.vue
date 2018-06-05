<template>
    <div>
        <b-card header="School Classroom Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal" @submit.prevent="onSubmit">
                    <div class="even-row classroom-wrapper-div">
                        <a class="btn btn-outline-primary pull-right" @click="addClassroom()">+ ADD MORE</a>
                        <div>
                            INFORMATION ON classroomsS/PLAYROOMS
                        </div>
                        <div>
                            Record information for individual classrooms, regardless of whether or not they are in
                            use.
                        </div>
                    </div>

                    <div v-for="(classroom, index) in data.classrooms" class="classroom-wrapper-div">
                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red" @click="removeClassroom(index)">X</a></div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Class Level</label>
                                    <select class="form-control" v-model="data.classrooms[index].class_id" size="1">
                                        <option value="">Select Class</option>
                                        <option v-for="_class in classes" :value="_class.id">{{_class.class}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Good</label>
                                        <input type="number" v-model="data.classrooms[index].good" min="0" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Needs Minor Repair</label>
                                        <input type="number" v-model="data.classrooms[index].minor_repair" min="0" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Needs Major Repair</label>
                                        <input type="number" v-model="data.classrooms[index].major_repair" min="0" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Unuseable</label>
                                        <input type="number" v-model="data.classrooms[index].unusable" min="0" class="form-control" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="even-row">
                            <div class="col-xs-8">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Comment</label>
                                    <div class="col-xs-8">
                                        <textarea class="form-control" v-model="data.classrooms[index].comment" placeholder="" cols="30" rows="4"></textarea>
                                    </div>
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

    export default {
        data() {
            return {
                classConditions: [],
                floorMaterials: [],
                wallMaterials: [],
                roofMaterials: [],
                classes: [],
                data: {
                    classrooms: [{}],
                }
            }
        },
        components: {

        },
        methods: {
            onSubmit: function () {
                this.$school.editSchool(this.$route.params.id, this.data).then(response => {
                    // console.log(response);

                    // if( response.status == 'success'){
                        //     this.$swal({
                        //         type: 'success',
                        //         title: 'School Record updated Successfully!',
                        //         confirmButtonColor: '#3085d6',
                        //         confirmButtonText: 'Ok'
                        //     }).then((result) => {
                        //         if (result.value) {
                        //             // todo reload page
                        //             location.reload();
                        //         }
                        //     })
                        // }
                        // else {
                        //     this.$swal({
                        //         type: 'error',
                        //         title: 'Error updating school information!',
                        //         confirmButtonColor: '#3085d6',
                        //         confirmButtonText: 'Ok'
                        //     }).then((result) => {
                        //         if (result.value) {
                        //             // todo reload page
                        //             location.reload();
                        //         }
                        //     })
                        // }
                })
            },
            addClassroom() {
                this.data.classrooms.push({});
            },
            removeClassroom(index) {
                this.data.classrooms.splice(index, 1);
            },
        },
        mounted: function () {
            //populate the select boxes using the settings data from local storage
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                // this.classConditions = settings.building_conditions;
                // this.floorMaterials = settings.floors;
                // this.wallMaterials = settings.walls;
                // this.roofMaterials = settings.roofs;
                this.classes = settings.classes;
            }

            this.$school.schoolProfile(this.$route.params.id).then(data => {
                // this.data.schoolId = data.id

                // populating the classroom with the values coming from the API
                this.data.classrooms = [];
                data.classrooms.forEach( item => {
                    this.data.classrooms.push({
                        class_id: item.pivot.class_id,
                        good: item.pivot.good,
                        minor_repair: item.pivot.minor_repair,
                        major_repair: item.pivot.major_repair,
                        unusable: item.pivot.unusable,
                        comment: item.pivot.comment,
                    });

                })
            })

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

    .classroom-wrapper-div:not(:last-of-type) {
        border-bottom: solid #650606 2px;
        margin: 20px 0px 20px 0px
    }

    .remove-btn-div {
        height: 30px;
        padding: 0px 10px 0px 0px;
    }

    .red {
        color:  red !important;
        font-weight: bold;
    }
    .red:hover {
        color:  white !important;
    }
</style>