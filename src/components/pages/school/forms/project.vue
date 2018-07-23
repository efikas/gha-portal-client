<template>
    <div>
        <div class="mb-5">
            <a class="btn btn-outline-primary pull-right" @click="addMore">+ ADD</a>
            <div>
                Indicate projectss overseen by the SBMC of this school, whether ongoing or completed.
            </div>
        </div>
        <div v-for="(projects, index) in school.projects" class="mb-5">
            <div class="bordered-box">
                <div class="row even-row">
                    <div class="col-md-12" v-if="school.projects.length > 1">
                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                                       @click="removeElement(index)">X</a></div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-5">
                        <div class="form-group p-10">
                            <label class="control-label">projects Brief
                            </label>
                            <input type="text" class="form-control" name="projects_brief"
                                   v-model="projects.name" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Poject Cost
                            </label>
                            <input type="text" class="form-control" name="projects_cost[]"
                                   v-model="projects.cost" placeholder="">

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="form-group p-10">
                            <label class="control-label">Source of Funding
                            </label>
                            <input type="text" class="form-control" name="source_of_funding[]"
                                   v-model="projects.funding" placeholder="">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Year
                            </label>
                            <input type="date" class="form-control" v-model="projects.date">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit"
                class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>
    </div>
</template>
<script>
    import {schoolFormMixins} from './mixins'

    export default {
        data() {
            return {
            }
        },
        validations:{},
        mixins: [schoolFormMixins],
        created(){
            this.school = this.getSchool;
        },
        methods: {
            addMore() {
                this.school.projects.push({});
            },
            removeElement(index) {
                if (this.school.projects.length > 1)
                    this.school.projects.splice(index, 1);
            },
            onSubmit: function () {
                let form = {
                    school_id: this.school.id,
                    projects: this.school.projects
                };
                // console.log(form);

                this.$store.dispatch('storeSchoolProject', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(()=>this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });

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