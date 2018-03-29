<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-info-card">
            <form-wizard @on-complete="onComplete" color="#e67e22">
                <h2 slot="title">title</h2>
                <tab-content title="School Facilities Details" icon="fafa-check">
                    <form method="" class="form-horizontal">
                        <div>
                            <div>
                                MEMBERSHIP DETAILS
                            </div>
                            <div>
                                Provide the following details about the membership details of the SBMC of this school.
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="member_name[]"
                                               v-model="data.sbmc.member_name[0]" placeholder="membership Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Position
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="member_position[]"
                                               v-model="data.sbmc.member_position[0]" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Phone Number
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="member_phone_number[]"
                                               v-model="data.sbmc.member_phone_number[0]" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Email
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" name="member_email[]"
                                               v-model="data.sbmc.member_email[0]" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="member_name[]"
                                               v-model="data.sbmc.member_name[1]" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Position
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="member_name[]"
                                               v-model="data.sbmc.member_name[1]" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Phone Number
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="member_phone_number[]"
                                               v-model="data.sbmc.member_phone_number[1]" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Email
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" name="member_email[]"
                                               v-model="data.sbmc.member_email[1]" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                PROJECTS DETAILS
                            </div>
                            <div>
                                Indicate projects overseen by the SBMC of this school, whether ongoing or completed.
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Project Brief
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="project_brief[]"
                                               v-model="data.sbmc.project_brief[0]" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Poject Cost
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="project_cost[]"
                                               v-model="data.sbmc.project_cost[0]" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Source of Funding
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="source_of_funding[]"
                                               v-model="data.sbmc.source_of_funding[0]" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Year
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="project_year[]"
                                               v-model="data.sbmc.project_year[0]" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </tab-content>
            </form-wizard>
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
                    facilities_details: {}

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