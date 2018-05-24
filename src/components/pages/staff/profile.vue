<template>
    <div>
        <SchoolCard :iData="schoolInfo" />
        <div class="row">
            <div class="col-xl-4 col-lg-5">
                <b-card class="bg-info-card" v-if="staffInfo">
                    <div class="profile text-center ">
                        <img :src="this.$store.state.user.picture" alt="User Image" class="rounded-circle img-fluid profile-thumb mb-3">
                        <h4 class="text-gray">{{ staffInfo.first_name + ' ' + staffInfo.middle_name + ' ' + staffInfo.last_name }}</h4>
                        <p>{{this.$store.state.user.job}}</p>
                    </div>
                    <div class="profile_details">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="row" v-if="staffInfo">
                                    <div class="col-6 text-right mt-1">Firstname :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.first_name }}</div>
                                    <div class="col-6 text-right mt-1">Middlename :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.middle_name }}</div>
                                    <div class="col-6 text-right mt-1">Lastname :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.last_name }}</div>
                                    <div class="col-6 text-right mt-1">Gender :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.sex }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-8 col-lg-7">
                <b-card class="bg-primary-card data">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="PERSONAL">
                            <p>
                                <a :href="'/staff/' + staffId + '/update/personal'" type="button" class="btn btn-outline-primary pull-right">Edit
                                </a>
                            <h1>Personal Details</h1>
                            </p>
                            <table class="table account-detailsg" v-if="staffInfo">
                                <tbody>
                                <tr class="m-0">
                                   <td>First Name</td>
                                    <td> {{ staffInfo.first_name }}</td>
                                </tr>
                                <tr>
                                   <td>Last Name</td>
                                    <td> {{ staffInfo.last_name }}</td>
                                </tr>
                                <tr>
                                   <td>Middle Name</td>
                                    <td> {{ staffInfo.middle_name }}</td>
                                </tr>
                                <tr>
                                   <td>Gender</td>
                                    <td> {{ staffInfo.sex }}</td>
                                </tr>
                                <tr>
                                   <td>Email Address</td>
                                    <td> {{ staffInfo.email_address }}</td>
                                </tr>
                                <tr>
                                   <td>Phone Number</td>
                                    <td> {{ staffInfo.phone_number }}</td>
                                </tr>
                                <tr>
                                   <td>Date of Birth</td>
                                    <td> {{ staffInfo.date_of_birth }}</td>
                                </tr>
                                <tr>
                                   <td>Place of Birth</td>
                                    <td>{{ staffInfo.place_of_birth }}</td>
                                </tr>
                                <tr>
                                   <td>State of Birth</td>
                                    <td> {{ staffInfo.state_of_birth }}</td>
                                </tr>
                                <tr>
                                   <td>Local Government</td>
                                    <td> {{ staffInfo.lga_of_origin }}</td>
                                </tr>
                                <tr>
                                   <td>Home Town</td>
                                    <td> {{ staffInfo.home_town }}</td>
                                </tr>
                                <tr>
                                   <td>Marital Status</td>
                                    <td> {{ staffInfo.marital_status }}</td>
                                </tr>
                                <tr>
                                   <td>Religious Status</td>
                                    <td> {{ staffInfo.religious_status }}</td>
                                </tr>
                                <tr>
                                   <td>House Address</td>
                                    <td> {{ staffInfo.residential_address }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab title="PROFESSIONAL">
                            <p>
                                <a :href="'/staff/' + staffId + '/update/professional'" type="button" class="btn btn-outline-primary pull-right">Edit
                                </a>
                            <h1>Professional Record</h1>
                            </p>
                            <table class="table account-detailsg" v-if="staffInfo">
                                <tbody>
                                <tr class="m-0">
                                   <td>School Name</td>
                                    <td> {{ schoolName }}</td>
                                </tr>
                                <tr>
                                   <td>Grade/Level</td>
                                    <td> {{ staffInfo.gl_step }}</td>
                                </tr>
                                <tr>
                                   <td>Salary Source</td>
                                    <td> {{ staffInfo.salary_source }}</td>
                                </tr>
                                <tr>
                                   <td>Employment Year</td>
                                    <td> {{ staffInfo.year_of_posting }}</td>
                                </tr>
                                <tr>
                                   <td>Staff Category</td>
                                    <td> {{ staffInfo.staff_category }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
            <modal name="hello-world">
                hello, world!
            </modal>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import vScroll from "components/plugins/scroll/vScroll.vue"
import VModal from 'vue-js-modal'
import SchoolCard from "../../widgets/sbemis/SchoolCard";

Vue.use(VModal)

export default {
    name: "user_profile",
    components: {
        vScroll,
        SchoolCard,
    },
    data(){
        return {
            staffInfo: null,
            schoolName: '',
            schoolInfo: {},
            schoolId: null,
            staffId: null,
        }
    },
    methods: {
        show () {
            this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    },
    mounted: function() {
        this.staffId = this.$route.params.id,
        this.$staff.staffProfile(this.$route.params.id).then(data => {
            this.staffInfo = data;
            this.schoolName = data.school.name
            this.schoolId = data.school.id;
            // console.log()
        })
    },
    watch: {
        schoolId(value){
            // get school informations
            this.$school.schoolProfile(value).then(data => {
                this.schoolInfo = data;
            })
        }
    },
    destroyed: function() {}
}
</script>
<style scoped lang="scss">
td.views {
    background-color: #e5e5e5 !important;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #555;
}
table tr td:nth-child(odd) {
    width: 30% !important;
    color: #6b3d34;
    font-weight: bold;
}
</style>

<style src="assets/css/user_profile.css" scoped>
</style>
