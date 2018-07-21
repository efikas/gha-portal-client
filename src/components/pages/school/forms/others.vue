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
                    <tr v-for="(facility, index) in facilities">
                        <td>{{facilities[index].type}}</td>
                        <td><input type="number" min="0" v-model="facilities[index].no_facility" class="form-control"
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
        // computed: {
        //     ...mapGetters([
        //         'data',
        //         'school'
        //     ]),
        //     facilities() {
        //         return this.data.facility_types.filter(facility => {
        //             if (typeof this.school.facility_list !== 'undefined') {
        //                 for (let i = 0; i < this.school.facility_list.length; i++) {
        //                     if (this.school.facility_list[i].facility_id === facility.id) {
        //                         facility.no_facility = this.school.facility_list[i].no_facility
        //                     }
        //                 }
        //             }
        //             return true;
        //         });
        //     }
        // },
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