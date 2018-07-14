<template>
    <div>
        <div>
            <a class="btn btn-outline-primary pull-right" @click="addMore">+ ADD</a>
            <div>
                projectsS DETAILS
            </div>
            <div>
                Indicate projectss overseen by the SBMC of this school, whether ongoing or completed.
            </div>
        </div>
        <div v-for="(projects, index) in data.projects" class="mb-5">
            <div class="form-horizonal bordered-box">
                <div class="row even-row">
                    <div class="col-md-12" v-if="data.projects.length > 1">
                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                                       @click="removeElement(index)">X</a></div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12">projects Brief
                            </label>
                            <input type="text" class="form-control" name="projects_brief"
                                   v-model="data.projects[index].name" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Poject Cost
                            </label>
                            <input type="text" class="form-control" name="projects_cost[]"
                                   v-model="data.projects[index].cost" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Source of Funding
                            </label>
                            <input type="text" class="form-control" name="source_of_funding[]"
                                   v-model="data.projects[index].funding" placeholder="">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Year
                            </label>
                            <input type="date" class="form-control" v-model="data.projects[index].date">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            data: {type: Object, required: true}
        },
        data() {
            return {
            }
        },
        components: {},
        methods: {
            addMore() {
                this.data.projects.push({});
            },
            removeElement(index) {
                if (this.data.projects.length > 1)
                    this.data.projects.splice(index, 1);
            },
        },
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