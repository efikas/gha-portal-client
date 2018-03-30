<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-info-card">
            <form-wizard @on-complete="onComplete" color="#e67e22">
                <h2 slot="title">title</h2>
                <tab-content title="School Based Mangement Committe" icon="fafa-check">
                    <div class="row">
                        <div class="col-lg-12">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>FACILITY TYPE</th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Toilets</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Computer</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Water Source</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Labouratory</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Classrooms</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Library</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Play Ground</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Wash Hand Basin</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>White Board</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Staff Room</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Bording Hostels</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Offices</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Kitchens</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Dining Room</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Bathrooms</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                <tr>
                                    <td>Play Rooms</td>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                    <th><input type="number" class="form-control" placeholder=""></th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </tab-content>
            </form-wizard>
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
                        member_name: ['', ''],
                        member_position: ['', ''],
                        member_phone_number: ['', ''],
                        member_email: ['', ''],
                        project_brief: ['', ''],
                        project_cost: ['', ''],
                        source_of_funding: ['', ''],
                        project_year: ['', ''],
                    }

                }
            }
        },
        components: {},
        methods: {
            onComplete: function () {
                this.$school.addSchool(this.data).then(response => {

                })
                // alert('Yay. Done!');
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