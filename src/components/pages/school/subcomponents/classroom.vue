<template>
    <div>
        <b-card header="School Classroom Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal">
                <div>
                    <div>
                        INFORMATION ON CLASSROOMS/PLAYROOMS
                    </div>
                    <div>
                        Record information for individual classroom, regardless of whether or not they are in
                        use.
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Year Constructed</label>
                            <div class="col-md-12">
                                <select id="example-select" name="classroom_year_constructed"
                                        v-model="data.classroom_details.classroom_year_constructed"
                                        class="form-control" size="1">
                                    <option value="">
                                        Select Year
                                    </option>
                                    <option value="1">1930</option>
                                    <option value="2">1931</option>
                                    <option value="3">1932</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Length in (m)
                            </label>
                            <div class="col-md-12">
                                <input type="number" class="form-control" id="text" name="classroom_length"
                                        v-model="data.classroom_details.classroom_length"
                                        placeholder="School Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Width in (m)
                            </label>
                            <div class="col-md-12">
                                <input type="number" class="form-control" id="text" name="classroom_width"
                                        v-model="data.classroom_details.classroom_width"
                                        placeholder="School Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Number of Rooms
                            </label>
                            <div class="col-md-12">
                                <input type="number" class="form-control" name="number_of_rooms"
                                        v-model="data.classroom_details.number_of_rooms" id="text"
                                        placeholder="School Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Select Condition
                            </label>
                            <div class="col-md-12">
                                <select id="example-select" name="classroom_condition"
                                        v-model="data.classroom_details.classroom_condition"
                                        class="form-control" size="1">
                                    <option value="">
                                        Select Condition
                                    </option>
                                    <option value="1">1930</option>
                                    <option value="2">1931</option>
                                    <option value="3">1932</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Floor Material
                            </label>
                            <div class="col-md-12">
                                <select id="example-select" name="floor_material"
                                        v-model="data.classroom_details.floor_material" class="form-control"
                                        size="1">
                                    <option value="">
                                        Select Year
                                    </option>
                                    <option value="1">1930</option>
                                    <option value="2">1931</option>
                                    <option value="3">1932</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Wall Material
                            </label>
                            <div class="col-md-12">
                                <select id="example-select" name="wall_material"
                                        v-model="data.classroom_details.wall_material" class="form-control"
                                        size="1">
                                    <option value="">
                                        Select Year
                                    </option>
                                    <option value="1">1930</option>
                                    <option value="2">1931</option>
                                    <option value="3">1932</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Roof Material
                            </label>
                            <div class="col-md-12">
                                <select id="example-select" name="roof_material"
                                        v-model="data.classroom_details.roof_material" class="form-control"
                                        size="1">
                                    <option value="">
                                        Select Year
                                    </option>
                                    <option value="1">1930</option>
                                    <option value="2">1931</option>
                                    <option value="3">1932</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Seatings
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio name="seatings" v-model="data.classroom_details.seatings">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio name="seatings" v-model="data.classroom_details.seatings">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Blackboard
                            </label>
                            <div class="col-md-12">
                                <div class="radio">
                                    <b-form-radio name="blackboard" v-model="data.classroom_details.blackboard">
                                        Yes
                                    </b-form-radio>
                                </div>
                                <div class="radio">
                                    <b-form-radio name="blackboard" v-model="data.classroom_details.blackboard">
                                        No
                                    </b-form-radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        ADDITIONAL CLASS INFORMATION
                    </div>
                    <div>
                        Indicate seating capacity by grade and type of seating, counting only seats having a
                        writing desk. e.g. if one 3 seater was available, the capacity is 3 Pupils not 1.
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-sx-12 col-md-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Class Level
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="classroom_level[]"
                                                v-model="data.classroom_details.classroom_level[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">1 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater1[]"
                                                v-model="data.classroom_details.seater1[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">2 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater2[]"
                                                v-model="data.classroom_details.seater2[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">3 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater3[]"
                                                v-model="data.classroom_details.seater3[0]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sx-12 col-md-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Class Level
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="classroom_level[]"
                                                v-model="data.classroom_details.classroom_level[1]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">1 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater1[]"
                                                v-model="data.classroom_details.seater1[1]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">2 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater2[]"
                                                v-model="data.classroom_details.seater2[1]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">3 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater3[]"
                                                v-model="data.classroom_details.seater3[1]">
                                    </div>
                                </div>
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
                    classroom_year_constructed: '1',
                    classroom_length: '1',
                    classroom_width: '10',
                    number_of_room: '12',
                    classroom_condition: '',
                    floor_material: '2',
                    wall_material: '',
                    roof_material: '',
                    seatings: '',
                    blackboard: '',
                    classroom_level: ['', ''],
                    seater1: ['', ''],
                    seater2: ['', ''],
                    seater3: ['', ''],
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