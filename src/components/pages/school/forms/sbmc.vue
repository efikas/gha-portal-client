<template>
    <div>
        <div>
            <a class="btn btn-outline-primary pull-right" @click="addMore()">+ ADD</a>
            <div>
                MEMBERSHIP DETAILS
            </div>
            <div>
                Provide the following details about the membership details of the SBMC of this school.
            </div>
        </div>
        <div v-for="(members, index) in sbmc_list" class="mb-5">
            <div class="form-horizontal bordered-box">
                <div class="row even-row">
                    <div class="col-md-12">
                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                                       @click="removeElement(index)">X</a></div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10" :class="{'has-error':$v.sbmc.$each[index].name.$invalid}">
                            <label class="control-label">Name</label>
                            <input type="text" class="form-control" name="name"
                                   @blur="$v.sbmc.$each[index].name.$touch()"
                            v-model="members.name" placeholder="membership Name" required>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10" :class="{'has-error':$v.sbmc.$each[index].office.$invalid}">
                            <label class="control-label">Position
                            </label>
                            <input type="text" class="form-control" name="position[]"
                                   @blur="$v.sbmc.$each[index].office.$touch()"
                                   v-model="members.office" placeholder="Position" required>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10" :class="{'has-error':$v.sbmc.$each[index].phone.$invalid}">
                            <label class="control-label">phone
                            </label>
                            <input type="text" class="form-control" name="phone[]"
                                   @blur="$v.sbmc.$each[index].phone.$touch()"
                                   v-model="members.phone" placeholder="phone" required>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10" :class="{'has-error':$v.sbmc.$each[index].email.$invalid}">
                            <label class="control-label">Email
                            </label>
                            <input type="email" class="form-control" name="email"
                                   @blur="$v.sbmc.$each[index].email.$touch()"
                                   v-model="members.email" placeholder="Email">

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
    import {sbmcValidations} from 'src/validations/school'

    export default {
        data() {
            return {
                sbmc: []
            }
        },
        validations: sbmcValidations,
        mixins: [schoolFormMixins],
        computed: {
            sbmc_list() {
                return this.sbmc.map(obj => {
                    // delete obj.class;
                    delete obj.created_at;
                    delete obj.updated_at;
                    return obj;
                });
            }
        },
        methods: {
            addMore() {
                this.sbmc.push({});
            },
            removeElement(index) {
                this.sbmc.splice(index, 1);
            },
            onSubmit: function () {
                let form = {school_id: this.school.id, members: [...this.sbmc]};

                this.$store.dispatch('storeSchoolSbmc', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(() => this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });
            },
        },
        created() {
            this.sbmc = JSON.parse(JSON.stringify(this.school.sbmc));
        },
    }
</script>
<style type="text/css" scoped>

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
</style>