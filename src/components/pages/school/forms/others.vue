<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
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
    </div>
</template>
<script>

    import {mapGetters} from 'vuex'

    export default {
        props: {
            // data: {type: Object, required: true}
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'data',
                'school'
            ]),
            facilities() {
                return this.data.facility_types.filter(facility => {
                    if (typeof this.school.facility_list !== 'undefined') {
                        for (let i = 0; i < this.school.facility_list.length; i++) {
                            if (this.school.facility_list[i].facility_id === facility.id) {
                                facility.no_facility = this.school.facility_list[i].no_facility
                            }
                        }
                    }
                    return true;
                });
            }
        },

        async created() {
            await this.$store.dispatch('school', this.$route.params.id);
        },
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