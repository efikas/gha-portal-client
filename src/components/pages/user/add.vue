<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <b-card header="User Information" header-tag="h4" class="bg-header-card">
                    <form method="" class="form-horizontal">
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8">Fullname <span class="text-error">*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control"
                                               v-model="data.fullname" placeholder="Fullname" v-validate="validation.required" name="fullname" required>
                                        <span class="text-error">{{ errors.first('fullname') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12">Email <span class="text-error">*</span>
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" class="form-control" required
                                               v-model="data.email" placeholder="Email" v-validate="validation.required" name="email">
                                        <span class="text-error">{{ errors.first('email') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-lg-6">
                                <label>Roles <span class="text-error">*</span></label>
                                <multiselect v-model="selectedRoles" :show-labels="false" :options="roles" :multiple="true"
                                             :close-on-select="false" :clear-on-select="false" :hide-selected="true" placeholder="Select Roles">
                                </multiselect>
                                <span class="text-error">{{ errors.first('schoolLga') }}</span>
                            </div>
                            <div class="col-lg-6">
                                <label>Permission <span class="text-error">*</span></label>
                                <multiselect v-model="selectedPermissions" :show-labels="false" :options="permissions" :multiple="true"
                                             :close-on-select="false" :clear-on-select="false" :hide-selected="true" placeholder="Select Permissions">
                                </multiselect>
                                <span class="text-error">{{ errors.first('schoolLga') }}</span>
                            </div>
                        </div>
                        <button type="submit" @click.prevent="onSubmit"
                                class="btn btn-primary btn-lg btn-school pull-right">Submit
                        </button>
                    </form>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import options from "src/validations/validations.js";
    import Multiselect from 'vue-multiselect';
    import VeeValidate from 'vee-validate';

    Vue.use(VeeValidate);
    export default {
        components: {
            Multiselect,
        },
        data() {
            return {
                roles: ['Admin', 'Moderator', 'User'],
                permissions: [
                    'Staff | can | add',
                    'Staff | can | update',
                    'Staff | can | delete',
                    'Student | can | add',
                    'Student | can | update',
                    'Student | can | delete',
                    'School | can | add',
                    'School | can | update',
                    'School | can | delete',
                ],
                selectedRoles: [],
                selectedPermissions: [],
                data: {},
                validation: {
                    text: 'required',
                    required: 'required',
                    email: 'email',
                    number: { regex: /\\.(js|ts)$/},
                }
            }
        },
        methods: {
            onSubmit: function () {
                this.$staff.addStaff(this.data).then(response => {
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
                })
            },
        },
        mounted: function () {},
        computed: {},
        destroyed: function () {}
    }
</script>
<style type="text/css" scoped>

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>