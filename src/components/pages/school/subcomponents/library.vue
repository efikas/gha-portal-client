<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-info-card">
            <form-wizard @on-complete="onComplete" color="#e67e22">
                <tab-content title="School Textbooks" icon="fafa-check">
                    <form method="" class="form-horizontal">
                        <div>
                            <div>
                                PUPILS TEXTBOOKS SUPPLIED
                            </div>
                            <div>
                                State the number of Pupils' Textbooks supplied to the school in the current academic
                                year.
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-sx-12 col-md-6">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Subject Area
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="pupil_subject_area[]"
                                                       v-model="data.school_textbooks.pupil_subject_area[0]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Class Level
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="pupil_class_level[]"
                                                       v-model="data.school_textbooks.pupil_class_level[0]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Quantity Supplied
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control"
                                                       name="pupil_quantity_supplied[]"
                                                       v-model="data.school_textbooks.pupil_quantity_supplied[0]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sx-12 col-md-6">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Subject Area
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" id="text"
                                                       name="pupil_subject_area[]"
                                                       v-model="data.school_textbooks.pupil_subject_area[1]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label">Class Level
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="pupil_class_level[]"
                                                       v-model="data.school_textbooks.pupil_class_level[1]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label">Quantity Supplied
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control"
                                                       name="pupil_quantity_supplied[]"
                                                       v-model="data.school_textbooks.pupil_quantity_supplied[1]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                TEACHERS' TEXTBOOKS SUPPLIED
                            </div>
                            <div>
                                State the number of Teachers' Textbooks supplied to the school in the current academic
                                year.
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-sx-12 col-md-6">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Subject Area
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" id="text"
                                                       name="teacher_subject_area[]"
                                                       v-model="data.school_textbooks.teacher_subject_area[0]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Class Level
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="teacher_class_level[]"
                                                       v-model="data.school_textbooks.teacher_class_level[0]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Quantity Supplied
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control"
                                                       name="teacher_quantity_supplied[]"
                                                       v-model="data.school_textbooks.teacher_quantity_supplied[0]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sx-12 col-md-6">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Subject Area
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" id="text"
                                                       name="teacher_subject_area[]"
                                                       v-model="data.school_textbooks.teacher_subject_area[1]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Class Level
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" name="teacher_class_level[]"
                                                       v-model="data.school_textbooks.teacher_class_level[1]">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Quantity Supplied
                                            </label>
                                            <div class="col-md-12">
                                                <input type="number" class="form-control"
                                                       name="teacher_quantity_supplied[]"
                                                       v-model="data.school_textbooks.teacher_quantity_supplied[1]">
                                            </div>
                                        </div>
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
        name: "library-info",
        data() {
            return {
                data: {
                    ward_id: '',
                    school_textbooks: {
                        pupil_subject_area: ['', ''],
                        pupil_class_level: ['', ''],
                        pupil_quantity_supplied: ['', ''],
                        teacher_subject_area: ['', ''],
                        teacher_class_level: ['', ''],
                        teacher_quantity_supplied: ['', ''],
                    }
                }
            }
        },
        components: {},
        methods: {
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
