<template>
    <div>
        <form method="" class="form-horizontal">
            <div class="row even-row">
                <div class="col-xs-12 col-sm-6">
                    <div class="form-group p-10" :class="{'has-error':$v.user.fullname.$invalid}">
                        <label class="control-label col-md-8">Fullname <span class="text-error">*</span>
                        </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control"
                                   @blur="$v.user.fullname.$touch()"
                                   v-model="user.fullname" placeholder="Fullname"
                                   name="fullname" required>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="form-group p-10" :class="{'has-error':$v.user.email.$invalid}">
                        <label class="control-label col-md-12">Email <span class="text-error">*</span>
                        </label>
                        <div class="col-md-12">
                            <input type="email" class="form-control" required
                                   @blur="$v.user.email.$touch()"
                                   v-model="user.email" placeholder="Email"
                                   name="email">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row odd-row">
                <div class="col-lg-6">
                    <div :class="{'has-error':$v.user.roles.$invalid}">
                        <label>Roles <span class="text-error">*</span></label>
                        <multiselect v-model="user.selectedRoles" :show-labels="false" :options="roles" :multiple="true"
                                     @blur="$v.user.roles.$touch()"
                                     :close-on-select="false" :clear-on-select="false" :hide-selected="true" placeholder="Select Roles">
                        </multiselect>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div :class="{'has-error':$v.user.permissions.$invalid}">
                        <label>Permission <span class="text-error">*</span></label>
                        <multiselect v-model="user.selectedPermissions" :show-labels="false"
                                     :options="permissions" :multiple="true"
                                     @blur="$v.user.permissions.$touch()"
                                     :close-on-select="false" :clear-on-select="false"
                                     :hide-selected="true" placeholder="Select Permissions">
                        </multiselect>
                    </div>
                </div>
            </div>
            <button type="submit" @click.prevent="onSubmit"
                    class="btn btn-primary btn-lg btn-school pull-right">Submit
            </button>
        </form>
    </div>
</template>
<script>
    import { userValidations } from "src/validations/validations";
    import Multiselect from 'vue-multiselect';

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
                user: {
                    selectedRoles: [],
                    selectedPermissions: [],
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
        validations: userValidations,
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