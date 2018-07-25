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
        <div v-for="(members, index) in school.sbmc" class="mb-5">
            <div class="form-horizonal bordered-box">
                <div class="row even-row">
                    <div class="col-md-12">
                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                                       @click="removeElement(index)">X</a></div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label">Name</label>
                            <input type="text" class="form-control" name="name"
                                   v-model="members.name" placeholder="membership Name" required>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Position
                            </label>
                            <input type="text" class="form-control" name="position[]"
                                   v-model="members.office" placeholder="Position" required>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">phone
                            </label>
                            <input type="text" class="form-control" name="phone[]"
                                   v-model="members.phone" placeholder="phone" required>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label">Email
                            </label>
                            <input type="email" class="form-control" name="email"
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
    export default {
        data() {
            return {}
        },
        validations:{},
        mixins: [schoolFormMixins],
        methods: {
            addMore() {
                this.school.sbmc.push({});
            },
            removeElement(index) {
                this.school.sbmc.splice(index, 1);
            },
            onSubmit: function () {
                let form = {school_id: this.school.id, members:[...this.school.sbmc]};

                this.$store.dispatch('storeSchoolSbmc', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(()=>this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });
            },
        },
        created(){
            this.school = this.getSchool;
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

    .form-group label {
        font-size: .8rem !important;
        letter-spacing: 1px;
        color: #684348 !important;
    }
</style>