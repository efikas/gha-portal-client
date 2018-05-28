<template>
    <div>
        <b-card header="School SBMC Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal">
                <div>
                        <a class="btn btn-outline-primary pull-right" @click="addMore('members')">+ ADD MORE</a>
                    <div>
                        MEMBERSHIP DETAILS
                    </div>
                    <div>
                        Provide the following details about the membership details of the SBMC of this school.
                    </div>
                </div>
                <div class="row odd-row" v-for="(members, index) in data.sbmc.members">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Name
                            </label>
                                <input type="text" class="form-control" name="member_name"
                                        v-model="data.sbmc.members[index].name" placeholder="membership Name">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Position
                            </label>
                                <input type="text" class="form-control" name="member_position[]"
                                        v-model="data.sbmc.members[index].position" placeholder="School Name">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Phone Number
                            </label>
                                <input type="text" class="form-control" name="member_phone_number[]"
                                        v-model="data.sbmc.members[index].phone_number"
                                        placeholder="School Name">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Email
                            </label>
                                <input type="email" class="form-control" name="member_email"
                                        v-model="data.sbmc.members[index].email" placeholder="School Name">

                        </div>
                    </div>
                </div>
                <div>
                        <a class="btn btn-outline-primary pull-right" @click="addMore('projects')">+ ADD MORE</a>
                    <div>
                        PROJECTS DETAILS
                    </div>
                    <div>
                        Indicate projects overseen by the SBMC of this school, whether ongoing or completed.
                    </div>
                </div>
                <div class="row odd-row" v-for="(project, index) in data.sbmc.projects">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12" for="text">Project Brief
                            </label>
                                <input type="text" class="form-control" name="project_brief"
                                        v-model="data.sbmc.projects[index].brief" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Poject Cost
                            </label>
                                <input type="text" class="form-control" name="project_cost[]"
                                        v-model="data.sbmc.projects[index].cost" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Source of Funding
                            </label>
                                <input type="text" class="form-control" name="source_of_funding[]"
                                        v-model="data.sbmc.projects[index].funding" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label" for="text">Year
                            </label>
                                <input type="text" class="form-control" name="project_year[]"
                                        v-model="data.sbmc.projects[index].year" placeholder="">

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
                data: {
                    ward_id: '',
                    sbmc: {
                        members: [{name: '', position: '', phone_number: '', email: ''}],
                        projects: [{brief: '', cost: '', funding: '', year: ''}]
                    },

                }
            }
        },
        components: {},
        methods: {
            onComplete: function () {
                this.$school.addSchool(this.data).then(response => {
                })
            },
            addMore(elementGroup) {
                switch (elementGroup) {
                    case 'members':
                        this.data.sbmc.members.push({name: '', position: '', phone_number: '', email: ''});
                        break;
                    case 'projects':
                        this.data.sbmc.projects.push({brief: '', cost: '', funding: '', year: ''});
                        break;
                    default:
                        break;

                }
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