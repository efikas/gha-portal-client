<template>
    <div>
        <b-card header="School Library Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal">
                <div>
                    <a class="btn btn-outline-primary pull-right" @click="addMore('pupil')">+ ADD MORE</a>
                    <div>
                        PUPILS TEXTBOOKS SUPPLIED
                    </div>
                    <div>
                        State the number of Pupils' Textbooks supplied to the school in the current academic
                        year.
                    </div>
                </div>
                <div class="row odd-row">
                    <div class="col-sx-12 col-md-6" v-for="(pupil, index) in data.textbooks.pupil">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Subject Area
                                    </label>
                                    <select v-model="data.textbooks.pupil[index].subject" name="pupil_subject_area" class="form-control" size="1">
                                        <option value="">Select Subject</option>
                                        <option v-for="subjects in subjectArea" :value="subjects.id">{{subjects.subject}}</option>
                                    </select>
                                 </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label">Class Level
                                    </label>
                                    <select class="form-control" v-model="data.textbooks.pupil[index].level"  size="1">
                                        <option value="">Select Class</option>
                                        <option value="1">Pry 1</option>
                                        <option value="2">Pry 2</option>
                                        <option value="3">Pry 3</option>
                                        <option value="4">Pry 4</option>
                                        <option value="5">Pry 5</option>
                                        <option value="6">Pry 6</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-2 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Quantity
                                    </label>
                                    <input type="number" min="0" class="form-control"
                                           name="pupil_quantity_supplied[]"
                                           v-model="data.textbooks.pupil[index].quantity">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a class="btn btn-outline-primary pull-right" @click="addMore('teacher')">+ ADD MORE</a>
                    <div>
                        TEACHERS' TEXTBOOKS SUPPLIED
                    </div>
                    <div>
                        State the number of Teachers' Textbooks supplied to the school in the current academic
                        year.
                    </div>
                </div>
                <div class="row even-row">
                    <div class="col-sx-12 col-md-6" v-for="(teacher, index) in data.textbooks.teacher">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Subject Area
                                    </label>
                                    <select v-model="data.textbooks.teacher[index].subject" name="teacher_subject_area" class="form-control" size="1">
                                        <option value="">Select Subject</option>
                                        <option v-for="subjects in subjectArea" :value="subjects.id">{{subjects.subject}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label">Class Level
                                    </label>
                                    <select class="form-control" v-model="data.textbooks.teacher[index].level" size="1">
                                        <option value="">Select Class</option>
                                        <option value="1">Pry 1</option>
                                        <option value="2">Pry 2</option>
                                        <option value="3">Pry 3</option>
                                        <option value="4">Pry 4</option>
                                        <option value="5">Pry 5</option>
                                        <option value="6">Pry 6</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-2 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Quantity
                                    </label>
                                    <input type="number" min="0" class="form-control"
                                           name="teacher_quantity_supplied"
                                           v-model="data.textbooks.teacher[index].quantity">
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
        name: "library-info",
        data() {
            return {
                subjectArea: {},
                data: {
                    ward_id: '',
<<<<<<< HEAD
=======
                    // school_textbooks: {
                    //     pupil_subject_area: ['', ''],
                    //     pupil_class_level: ['', ''],
                    //     pupil_quantity_supplied: ['', ''],
                    //     teacher_subject_area: ['', ''],
                    //     teacher_class_level: ['', ''],
                    //     teacher_quantity_supplied: ['', ''],
                    // },
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
                    textbooks: {
                        pupil: [{subject: '', level: '', quantity: ''}],
                        teacher: [{subject: '', level: '', quantity: ''}],
                    },
                }
            }
        },
        components: {},
        methods: {
            onSubmit: function () {
                this.$school.addSchool(this.data).then(response => {
<<<<<<< HEAD
                    if (typeof  response == 'object'){
                        this.$swal({
                            type: 'success',
                            title: 'School Record added Successfully!',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.value) {
                                location.reload();
                            }
                        })
                    }
=======
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
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
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
                // alert('Yay. Done!');
            },
            addMore(elementGroup) {
                switch (elementGroup) {
                    case 'pupil':
                        this.data.textbooks.pupil.push({subject: '', level: '', quantity: ''});
                        break;
                    case 'teacher':
                        this.data.textbooks.teacher.push({subject: '', level: '', quantity: ''});
                        break;
                    default:
                        break;
                }
            }
        },
        mounted: function () {
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                this.subjectArea = settings.subjects
<<<<<<< HEAD
            }

            this.$school.schoolProfile(this.$route.params.id).then(data => {
                this.schoolId = data.id
            })
=======

            }
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
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
        font-size: .7rem !important;
        letter-spacing: .9px;
        color: #684348 !important;
    }
    </style>
