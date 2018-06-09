<template>
    <div>
        <SchoolCard :iData="schoolInfo" />
        <div class="row">
            <div class="col-xl-4 col-lg-5">
                <b-card class="bg-default-card" v-if="staffInfo">
                    <div class="profile text-center ">
                        <img :src="this.$store.state.user.picture" alt="User Image" class="rounded-circle img-fluid profile-thumb mb-3">
                        <h4 class="text-gray">{{ staffInfo.first_name + ' ' + staffInfo.middle_name + ' ' + staffInfo.last_name }}</h4>
                        <p>{{this.$store.state.user.job}}</p>
                    </div>
                    <div class="profile_details">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="row" v-if="staffInfo">
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-user"></i> Firstname :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.first_name }}</div>
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-user"></i> Middlename :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.middle_name }}</div>
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-user"></i> Lastname :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.last_name }}</div>
                                    <div class="col-6 mt-1 pl-5 default-color"><i class="fa fa-genderless"></i> Gender :</div>
                                    <div class="col-6 mt-1 pl-0">{{ staffInfo.sex }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-8 col-lg-7">
                <b-card class="bg-default-card data">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="PERSONAL">
                           <div>
                               <p>
                                   <br>
                                   <a :href="'/staff/' + staffId + '/update/personal'" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                   </a><br/><br/>
                               </p>
                           </div>
                            <table class="table table-bordred table-striped mytable" v-if="staffInfo">
                                <tbody>
                                <tr class="m-0">
                                   <td><i class="fa fa-user"></i> Name</td>
                                    <td colspan="3"> {{ `${staffInfo.first_name} ${staffInfo.last_name} ${staffInfo.middle_name}` }}</td>
                                </tr>
                                <tr>
                                   <td><i class="fa fa-genderless"></i> Gender</td>
                                    <td> {{ staffInfo.sex }}</td>
                                    <td><i class="fa fa-calendar"></i> Date of Birth</td>
                                    <td> {{ staffInfo.date_of_birth }}</td>
                                </tr>
                                <tr>
                                   <td><i class="fa fa-envelope"></i> Email</td>
                                    <td> {{ staffInfo.email_address }}</td>
                                   <td><i class="fa fa-phone"></i> Phone</td>
                                    <td> {{ staffInfo.phone_number }}</td>
                                </tr>
                                <tr>
                                    <td>State of Birth</td>
                                    <td> {{ staffInfo.state_of_birth }}</td>
                                   <td>Place of Birth</td>
                                    <td>{{ staffInfo.place_of_birth }}</td>
                                </tr>
                                <tr>
                                   <td>Local Government</td>
                                    <td> {{ staffInfo.lga_of_origin }}</td>
                                   <td>Home Town</td>
                                    <td> {{ staffInfo.home_town }}</td>
                                </tr>
                                <tr>
                                   <td>Marital Status</td>
                                    <td> {{ staffInfo.marital_status }}</td>
                                   <td>Religious Status</td>
                                    <td> {{ staffInfo.religious_status }}</td>
                                </tr>
                                <tr>
                                   <td>House Address</td>
                                    <td colspan="3"> {{ staffInfo.residential_address }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab title="PROFESSIONAL">
                            <p><br/>
                                <a :href="'/staff/' + staffId + '/update/professional'" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                </a><br/><br/>
                            </p>
                            <table class="table table-bordred table-striped mytable" v-if="staffInfo">
                                <tbody>
                                <tr class="m-0">
                                   <td>School Name</td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
                                    <td colspan="3"> {{ schoolName }}</td>
                                </tr>
                                <tr>
                                   <td>Academic Qualification</td>
                                    <td> {{ staffInfo.academic_qualification }}</td>
                                    <td>Specilaity</td>
                                    <td> {{ staffInfo.speciality }}</td>
                                </tr>
                                <tr>
                                    <td>Teaching Qualification</td>
                                    <td> {{ staffInfo.teaching_qualification }}</td>
                                    <td>Subject taught</td>
                                    <td> {{ staffInfo.subject_taught }}</td>
                                </tr>
                                <tr>
                                    <td>Employment Type</td>
                                    <td> {{ staffInfo.employment_type }}</td>
                                    <td>Salary Source</td>
                                    <td> {{ staffInfo.salary_source }}</td>
                                </tr>
                                <tr>
                                   <td>Staff Category</td>
                                    <td> {{ staffInfo.category }}</td>
                                    <td>Last Promotion</td>
                                    <td> {{ staffInfo.last_promotion_year }}</td>
                                </tr>
                                <tr>
                                    <td>TRC Reg No</td>
                                    <td> {{ staffInfo.trc_reg_no }}</td>
                                    <td>Staff Status</td>
                                    <td> {{ staffInfo.status }}</td>
                                </tr>
                                <tr>
                                    <td>Computer Literate</td>
                                    <td colspan="3"> {{ yesNo(staffInfo.computer_literate) }}</td>
<<<<<<< HEAD
=======
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
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
=======
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
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
<<<<<<< HEAD
<<<<<<< HEAD
        yesNo: (value) => {
           return (value == 1) ? 'Yes' : 'No';
        },
=======
        show () {
            this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        }
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
=======
        yesNo: (value) => {
           return (value == 1) ? 'Yes' : 'No';
        },
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
    },
    mounted: function() {
        this.staffId = this.$route.params.id,
        this.$staff.staffProfile(this.$route.params.id).then(data => {
            this.staffInfo = data;
            this.schoolName = data.school.name
            this.schoolId = data.school.id;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77

            let settings = JSON.parse(localStorage.getItem('settings'));
            let _status = settings.staff_statuses.filter(item => {
                return (item.id == data.status);
            });
            this.staffInfo.status = _status[0].status;
<<<<<<< HEAD
=======
            // console.log()
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
=======
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
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
//'Single','Married','Divorced','Widowed','Separated'
</style>

<style src="assets/css/user_profile.css" scoped>
</style>

