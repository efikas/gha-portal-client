<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>FACILITY TYPE</th>
                        <th>Number Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(ft, index) in data.facility_types">
                        <td>{{ft.type}}</td>
                        <td><input type="number" min="0" v-model="otherFacilities[ft.id].no_facility" class="form-control"
                                   placeholder=""></td>
                    </tr>
                    </tbody>
                </table>
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
        validations:{},
        data() {
            return {}
        },
        mixins: [schoolFormMixins],
        methods: {
            onSubmit: function () {
                let form = {facilities:[]};
                for (let index in this.otherFacilities) {
                    if(this.otherFacilities[index].no_facility !== 0) {
                        form.facilities.push(this.otherFacilities[index])
                    }
                }

                this.$store.dispatch('updateSchool', form).then(() => {
                    console.log('record updated')
                }).catch(() => {
                    console.log('error')
                });

            },
        }
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

    form .odd-row:first-of-type {
        border-top: 1px dashed #959DCC;
    }

    .form-group label {
        font-size: .8rem !important;
        letter-spacing: 1px;
        color: #684348 !important;
    }
</style>