<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-header-card">
            <div class="row">
                <div class="col-lg-6">
                    <form  class="form-horizontal" @submit.prevent="onSubmit">
                        <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>FACILITY TYPE</th>
                            <th>Number Available</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(facility, index) in facilities">
                            <td>{{facility.type}}</td>
                            <td><input type="number" min="0" v-model="facility.status" class="form-control" placeholder=""></td>
                        </tr>
                        </tbody>
                    </table>
                        <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
                    </form>
                </div>
            </div>
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
                facilities: [],
                schoolId: '',
                data: {
                    facilities: [{}]
                },
            }
            },
        methods: {
            onSubmit: function () {
                this.data.facilities = [];
                this.facilities.forEach(item => {
                    this.data.facilities.push({facility_id: item.id, no_facility: item.status})
                })
                this.$school.editSchool(this.schoolId, this.data).then(response => {
<<<<<<< HEAD
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
=======
                    console.log(response);

                    // if( response.status == 'success'){
                        //     this.$swal({
                        //         type: 'success',
                        //         title: 'School Record updated Successfully!',
                        //         confirmButtonColor: '#3085d6',
                        //         confirmButtonText: 'Ok'
                        //     }).then((result) => {
                        //         if (result.value) {
                        //             // todo reload page
                        //             location.reload();
                        //         }
                        //     })
                        // }
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
                        // else {
                        //     this.$swal({
                        //         type: 'error',
                        //         title: 'Error updating school information!',
                        //         confirmButtonColor: '#3085d6',
                        //         confirmButtonText: 'Ok'
                        //     }).then((result) => {
                        //         if (result.value) {
                        //             // todo reload page
                        //             location.reload();
                        //         }
                        //     })
                        // }

                })
            }
        },
        mounted: function () {
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                this.facilities = settings.facility_types;

            }

            this.$school.schoolProfile(this.$route.params.id).then(data => {
<<<<<<< HEAD
                this.schoolId = data.id;
=======


                this.schoolId = data.id;
                // this.data.lga_id = data.ward.lga_id;
                this.data.lga_ward_id = data.ward.id;
                this.data.ownership = 1;

                // // get lGA
                // let _lga = this.lgasInfo.filter(item => {
                //     return (item.id == data.ward.lga_id);
                // })
                // this.lga = _lga[0].name;
                //
                // // get ward
                // let settings = JSON.parse(localStorage.getItem('settings'));
                //
                // let _wards = settings.lga_wards.filter(item => {
                //     return (item.id == data.ward.id);
                // })
                // this.ward = _wards[0].name;

>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
            })

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