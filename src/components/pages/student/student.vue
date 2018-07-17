<template>
    <div style="margin-top: -0%">
        <SchoolCard></SchoolCard>
        <div class="container">
            <div class="row">
                <b-card class="col-md-10 bg-clear-card" bg-variant="light" text-variant="dark">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="" style="padding: 0; margin-left: 40px; margin-bottom: -40px">
                                <div style="">
                                    <img :src="showImage()" alt="User Image"
                                         class="img-fluid profile-thumb"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9 offset-3" style="padding: 0;">
                                    <div class="profile-name" style="position: absolute; bottom: 0px;">
                                        <p> {{ student.first_name }}
                                            {{ student.middle_name }}
                                            {{ student.last_name}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="footer">
                        <div class="row" style="padding: 0;">
                            <div class="col-md-9 offset-3" style="padding: 0;">
                                <b-nav tabs>
                                    <b-nav-item active>Active</b-nav-item>
                                    <b-nav-item>Link</b-nav-item>
                                    <b-nav-item>Link with a long name </b-nav-item>
                                    <b-nav-item disabled>Disabled</b-nav-item>
                                    <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" extra-toggle-classes="nav-link-custom" right>
                                        <b-dropdown-item>one</b-dropdown-item>
                                        <b-dropdown-item>two</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>three</b-dropdown-item>
                                    </b-nav-item-dropdown>
                                </b-nav>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="row">
                <b-card class="col-md-10 bg-clear-card">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="PERSONAL">
                            <div style="margin: 0px 30px 0 30px">
                                <p><br/>
                                    <a :href="'/student/' + '' + '/update/basic'" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>
                                <div class="table-responsive">
                                    <table class="table table-bordred table-striped mytable">
                                        <tr>
                                            <td><i class="fa fa-user"></i> Name</td>
                                            <td colspan="3"> {{ `${student.first_name} ${student.last_name}
                                                ${student.middle_name}` }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i class="fa fa-genderless"></i> Gender</td>
                                            <td colspan="3"> {{ student.sex }}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="fa fa-envelope"></i> Email</td>
                                            <td> {{ student.email_address }}</td>
                                            <td><i class="fa fa-phone"></i> Phone</td>
                                            <td> {{ student.phone_number }}</td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td> {{ student.height }}</td>
                                            <td>Weight</td>
                                            <td> {{ student.weight }}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td> {{ student.date_of_birth}}</td>
                                            <td>Birth Place</td>
                                            <td> {{ student.place_of_birth }}</td>
                                        </tr>
                                        <tr>
                                            <td>Special Condition</td>
                                            <td> {{ student.special_condition }}</td>
                                            <td>Bloodgroup</td>
                                            <td> {{ student.blood_group }}</td>
                                        </tr>
                                        <!--<tr>-->
                                        <!--<td>Birth certificate available</td>-->
                                        <!--<td> {{ student.birth_cert_status }}</td>-->
                                        <!--</tr>-->
                                        <tr>
                                            <td>Birth certificate Type</td>
                                            <td colspan="3"> {{ student.birth_cert_type }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="ACADEMIC">
                            <div style="margin: 0px 30px 0 30px">
                                <p><br/>
                                    <a :href="'/student/' + '' + '/update/academic'" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>

                                <div class="table-responsive">
                                    <table class="table table-bordred table-striped mytable">
                                        <tr>
                                            <td>Admission status</td>
                                            <td> {{ student.admission_status }}</td>
                                            <td>Admission Year</td>
                                            <td> {{ student.admission_year }}</td>
                                        </tr>
                                        <tr>
                                            <td>Class of Admission</td>
                                            <td> {{ student.admission_education_level }}</td>
                                            <td>Current Class</td>
                                            <td> {{ student.current_class_level }}</td>
                                        </tr>
                                        <tr>
                                            <td>Distance from School</td>
                                            <td> {{ student.distance_from_school }}</td>
                                            <td>Promotion Status</td>
                                            <td> {{ student.promotion_status }}</td>
                                        </tr>
                                        <tr>
                                            <td>Boarding</td>
                                            <td> {{ student.boarding }}</td>
                                            <td>Dormitory</td>
                                            <td> {{ student.dormitory_id }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="PARENT/GUARDIAN">
                            <div style="margin: 0px 30px 0 30px">
                                <p><br/>
                                    <a :href="'/student/' + '' + '/update/parent'" type="button"
                                       class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>
                                <div class="table-responsive" v-if="student.guardians">
                                    <table class="table table-bordred table-striped mytable guardian-table"
                                           v-for="(guardian, index) in student.guardians">
                                        <tr>
                                            <td colspan="2" class="text-center"><h5>Guardian {{ index + 1 }}</h5></td>
                                        </tr>
                                        <tr>
                                            <td>Full Name</td>
                                            <td>{{ guardian.title }} {{ guardian.fullname }}</td>
                                        </tr>
                                        <tr>
                                            <td>Relationship</td>
                                            <td> {{ guardian.relationship }}</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile Number</td>
                                            <td> {{ guardian.Mobile }}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone Number</td>
                                            <td> {{ guardian.phone }}</td>
                                        </tr>
                                        <tr>
                                            <td>Email Address</td>
                                            <td> {{ guardian.email }}</td>
                                        </tr>
                                        <tr>
                                            <td>Religion</td>
                                            <td> {{ guardian.religion }}</td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import {mapGetters} from 'vuex';
    import {baseURL} from '../../../resource'

    export default {
        components: {
            SchoolCard,
        },
        data() {
            return {};
        },
        computed: mapGetters([
            'student'
        ]),
        created: function () {
            this.$store.dispatch('student', this.$route.params.id);
        },
        methods: {
            showImage(obj) {
                if (typeof  this.student.biometric) {
                    if (this.student.biometric && this.student.biometric.photo) {
                        return baseURL + this.student.biometric.photo;
                    }
                }
                return require("img/authors/user.jpg");
            }
        },
        destroyed: function () {
        },
    };
</script>
<style scoped>
    .profile-name{
        padding: 5px;
        /*background: linear-gradient(to bottom, gray, #000000);*/
        /*color: black;*/
        width: inherit;
        font-family: "Courier 10 Pitch", sans-serif;
        font-size: 25px;
        font-weight: bold;
    }
    .bg-clear-card{
        padding: 0!important;
    }
    .card-footer {
        padding-top: 0!important;
        padding-bottom: 0!important;
        margin: 0!important;
    }
    td.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        color: #555;
    }

    .sbemis-table div.views {
        background-color: #e5e5e5 !important;
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: 0.5px solid #c5c5c5;
        border-bottom: 0.5px solid #c5c5c5;
        color: #555;
        font-style: bold;
    }

    .sbemis-table div {
        padding-top: 12px;
        padding-bottom: 12px;
        border-top: 0.5px solid #c5c5c5;
        border-bottom: 0.5px solid #c5c5c5;
    }

    #mytable tr td:nth-child(odd) {
        width: 30% !important;
    }

    .pl-0 {
        padding-left: 0px
    }

    .guardian-table {
        margin-bottom: 30px;
    }
</style>

<style src="assets/css/user_profile.css" scoped></style>
