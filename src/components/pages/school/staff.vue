cd
<template>
    <div>
        <SchoolCard></SchoolCard>
        <div class="row">
            <div class="col-xl-4 col-lg-5">
                <b-card class="bg-default-card">
                    <div class="profile text-center ">
                        <img :src="showImage()" alt="User Image"
                             class="rounded-circle img-fluid profile-thumb mb-3" />
                    </div>
                    <div class="profile_details">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="row" v-if="staff">
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-user"></i> Firstname :
                                    </div>
                                    <div class="col-6 mt-1 pl-0">{{ staff.first_name }}</div>
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-user"></i> Middlename :
                                    </div>
                                    <div class="col-6 mt-1 pl-0">{{ staff.middle_name }}</div>
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-user"></i> Lastname :
                                    </div>
                                    <div class="col-6 mt-1 pl-0">{{ staff.last_name }}</div>
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-genderless"></i> Gender :
                                    </div>
                                    <div class="col-6 mt-1 pl-0">{{ staff.sex }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-8 col-lg-7">
                <b-card class="bg-default-card data" v-if="staff">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="PERSONAL">
                            <div>
                                <p>
                                    <br>
                                    <a :href="'/staff/' + '' + '/update/personal'" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>
                            </div>
                            <table class="table table-bordred table-striped mytable" v-if="staff">
                                <tbody>
                                <tr class="m-0">
                                    <td><i class="fa fa-user"></i> Name</td>
                                    <td colspan="3"> {{ `${staff.first_name} ${staff.last_name}
                                        ${staff.middle_name}` }}
                                    </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-genderless"></i> Gender</td>
                                    <td> {{ staff.sex }}</td>
                                    <td><i class="fa fa-calendar"></i> Date of Birth</td>
                                    <td> {{ staff.date_of_birth }}</td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-envelope"></i> Email</td>
                                    <td> {{ staff.email_address }}</td>
                                    <td><i class="fa fa-phone"></i> Phone</td>
                                    <td> {{ staff.phone_number }}</td>
                                </tr>
                                <tr>
                                    <td>State of Birth</td>
                                    <td> {{ staff.state_of_birth }}</td>
                                    <td>Place of Birth</td>
                                    <td>{{ staff.place_of_birth }}</td>
                                </tr>
                                <tr>
                                    <td>Local Government</td>
                                    <td> {{ staff.lga_of_origin }}</td>
                                    <td>Home Town</td>
                                    <td> {{ staff.home_town }}</td>
                                </tr>
                                <tr>
                                    <td>Marital Status</td>
                                    <td> {{ staff.marital_status }}</td>
                                    <td>Religious Status</td>
                                    <td> {{ staff.religious_status }}</td>
                                </tr>
                                <tr>
                                    <td>House Address</td>
                                    <td colspan="3"> {{ staff.residential_address }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab title="PROFESSIONAL">
                            <p><br/>
                                <a :href="'/staff/' + '' + '/update/professional'" type="button"
                                   class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                </a><br/><br/>
                            </p>
                            <table class="table table-bordred table-striped mytable" v-if="staff">
                                <tbody>
                                <tr>
                                    <td>Academic Qualification</td>
                                    <td> {{ staff.academic_qualification }}</td>
                                    <td>Specilaity</td>
                                    <td> {{ staff.speciality }}</td>
                                </tr>
                                <tr>
                                    <td>Teaching Qualification</td>
                                    <td> {{ staff.teaching_qualification }}</td>
                                    <td>Subject taught</td>
                                    <td> {{ staff.subject_taught }}</td>
                                </tr>
                                <tr>
                                    <td>Employment Type</td>
                                    <td> {{ staff.employment_type }}</td>
                                    <td>Salary Source</td>
                                    <td> {{ staff.salary_source }}</td>
                                </tr>
                                <tr>
                                    <td>Staff Category</td>
                                    <td> {{ staff.category }}</td>
                                    <td>Last Promotion</td>
                                    <td> {{ staff.last_promotion_year }}</td>
                                </tr>
                                <tr>
                                    <td>TRC Reg No</td>
                                    <td> {{ staff.trc_reg_no }}</td>
                                    <td>Staff Status</td>
                                    <td> {{ staff.status }}</td>
                                </tr>
                                <tr>
                                    <td>Computer Literate</td>
                                    <td colspan="3"> {{ yesNo(staff.computer_literate) }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from 'vuex';
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import {baseURL} from '../../../resource'


    export default {
        components: {
            SchoolCard,
        },
        data() {
            return {}
        },
        methods: {
            yesNo: (value) => {
                return (value == 1) ? 'Yes' : 'No';
            },
            showImage() {
                if (typeof  this.staff.biometric) {
                    if (this.staff.biometric && this.staff.biometric.photo) {
                        return baseURL + this.staff.biometric.photo;
                    }
                }
                return require("img/authors/user.jpg");
            }
        },
        computed: mapGetters([
            'staff'
        ]),
        created: function () {
            this.$store.dispatch('staff', this.$route.params.id);
        },
        destroyed: function () {
        }
    }
</script>
<style scoped lang="scss">
    td.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        color: #555;
    }

    //'Single','Married','Divorced','Widowed','Separated'
</style>

<style src="assets/css/user_profile.css" scoped>
</style>

