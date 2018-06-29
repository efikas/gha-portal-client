<template>
    <div>
        <b-card header="School SBMC Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal"  @submit.prevent="onSubmit">
                <div>
                    <a class="btn btn-outline-primary pull-right" @click="addMore()">+ ADD MORE</a>
                    <div>
                        MEMBERSHIP DETAILS
                    </div>
                    <div>
                        Provide the following details about the membership details of the SBMC of this school.
                    </div>
                </div>
                <div v-for="(members, index) in data.members" class="mb-5">
                    <div class="form-horizonal bordered-box">
                        <div class="row even-row">
                            <div class="col-md-12">
                                <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red" @click="removeElement(index)">X</a></div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Name</label>
                                    <input type="text" class="form-control" name="member_name"
                                            v-model="data.members[index].name" placeholder="membership Name" required>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Position
                                    </label>
                                        <input type="text" class="form-control" name="member_position[]"
                                                v-model="data.members[index].office" placeholder="Position" required>

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label">Phone Number
                                    </label>
                                        <input type="tel" maxlength="11" class="form-control" name="member_phone_number[]"
                                                v-model="data.members[index].phone"
                                                placeholder="Phone Number" required>

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label">Email
                                    </label>
                                        <input type="email" class="form-control" name="member_email"
                                                v-model="data.members[index].email" placeholder="Email">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div>-->
                        <!--<a class="btn btn-outline-primary pull-right" @click="addMore('projects')">+ ADD MORE</a>-->
                    <!--<div>-->
                        <!--PROJECTS DETAILS-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--Indicate projects overseen by the SBMC of this school, whether ongoing or completed.-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div v-for="(project, index) in data.projects" class="mb-5">-->
                    <!--<div class="form-horizonal bordered-box">-->
                        <!--<div class="row even-row">-->
                            <!--<div class="col-md-12">-->
                                <!--<div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red" @click="removeElement('projects', index)">X</a></div>-->
                            <!--</div>-->
                            <!--<div class="col-xs-12 col-sm-6 col-md-6">-->
                                <!--<div class="form-group p-10">-->
                                    <!--<label class="control-label col-md-12">Project Brief-->
                                    <!--</label>-->
                                        <!--<input type="text" class="form-control" name="project_brief"-->
                                                <!--v-model="data.projects[index].brief" placeholder="">-->

                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="col-xs-12 col-sm-6 col-md-2">-->
                                <!--<div class="form-group p-10">-->
                                    <!--<label class="control-label">Poject Cost-->
                                    <!--</label>-->
                                        <!--<input type="text" class="form-control" name="project_cost[]"-->
                                                <!--v-model="data.projects[index].cost" placeholder="">-->

                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="col-xs-12 col-sm-6 col-md-2">-->
                                <!--<div class="form-group p-10">-->
                                    <!--<label class="control-label">Source of Funding-->
                                    <!--</label>-->
                                        <!--<input type="text" class="form-control" name="source_of_funding[]"-->
                                                <!--v-model="data.projects[index].funding" placeholder="">-->

                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="col-xs-12 col-sm-6 col-md-2">-->
                                <!--<div class="form-group p-10">-->
                                    <!--<label class="control-label">Year-->
                                    <!--</label>-->
                                        <!--<input type="text" class="form-control" name="project_year[]"-->
                                                <!--v-model="data.projects[index].year" placeholder="">-->

                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
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
                data: {
                    school_id: '',
                    members: [{}],
                    // projects: [{brief: '', cost: '', funding: '', year: ''}]

                }
            }
        },
        components: {},
        methods: {
            onSubmit: function () {
                this.$school.editSchoolSbmc(this.data).then(response => {
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
            addMore() {
                this.data.members.push({name: '', position: '', phone_number: '', email: ''});
            },
            removeElement(index) {
                this.data.members.splice(index, 1);
            }
        },
        mounted: function () {
            this.data.school_id = this.$route.params.id;
            // this.$school.schoolProfile(this.$route.params.id).then(data => {
            //     // this.data = data;
            // });
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