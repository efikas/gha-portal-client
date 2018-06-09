<template>
    <div>
        <SchoolCard :iData="schoolInfo" />
        <div class="row">
            <div class="col-xl-4 col-lg-5">
                <b-card class="bg-default-card">
                    <div class="profile text-center ">
                        <img :src="this.$store.state.user.picture" alt="User Image" class="rounded-circle img-fluid profile-thumb mb-3">
                        <h4 class="text-gray">{{this.$store.state.user.name}}</h4>
                        <p>{{this.$store.state.user.job}}</p>
                    </div>
                    <div class="profile_details">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="row" v-if="studentInfo">
                                    <div class="col-6 text-right mt-1">Firstname :</div>
                                    <div class="col-6 mt-1 pl-0">{{ studentInfo.first_name }}</div>
                                    <div class="col-6 text-right mt-1">Middlename :</div>
                                    <div class="col-6 mt-1 pl-0">{{ studentInfo.middle_name }}</div>
                                    <div class="col-6 text-right mt-1">Lastname :</div>
                                    <div class="col-6 mt-1 pl-0">{{ studentInfo.last_name }}</div>
                                    <div class="col-6 text-right mt-1">Gender :</div>
                                    <div class="col-6 mt-1 pl-0">{{ studentInfo.sex }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-8 col-lg-7">
                <b-card class="bg-default-card data" v-if="studentInfo">
                    <!-- Nav tabs -->
                    <b-tabs>
                        <b-tab title="PERSONAL">
                            <div style="margin: 0px 30px 0 30px">
<<<<<<< HEAD
<<<<<<< HEAD
                                <p><br/>
=======
                                <p>
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
=======
                                <p><br/>
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
                                    <a :href="'/student/' + studentId + '/update/basic'" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>
                                <div class="table-responsive">
                                    <table class="table table-bordred table-striped mytable">
                                        <tr>
                                            <td><i class="fa fa-user"></i> Name</td>
                                            <td colspan="3"> {{ `${studentInfo.first_name} ${studentInfo.last_name} ${studentInfo.middle_name}` }}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="fa fa-genderless"></i> Gender</td>
                                            <td colspan="3"> {{ studentInfo.sex }}</td>
                                        </tr>
                                        <tr>
                                            <td><i class="fa fa-envelope"></i> Email</td>
                                            <td> {{ studentInfo.email_address }}</td>
                                            <td><i class="fa fa-phone"></i> Phone</td>
                                            <td> {{ studentInfo.phone_number }}</td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td> {{ studentInfo.height }}</td>
                                            <td>Weight</td>
                                            <td> {{ studentInfo.weight }}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td> {{ studentInfo.date_of_birth}}</td>
                                            <td>Birth Place</td>
                                            <td> {{ studentInfo.place_of_birth }}</td>
                                        </tr>
                                        <tr>
                                            <td>Special Condition</td>
                                            <td> {{ studentInfo.special_condition }}</td>
                                            <td>Bloodgroup</td>
                                            <td> {{ studentInfo.blood_group }}</td>
                                        </tr>
                                        <!--<tr>-->
                                            <!--<td>Birth certificate available</td>-->
                                            <!--<td> {{ studentInfo.birth_cert_status }}</td>-->
                                        <!--</tr>-->
                                        <tr>
                                            <td>Birth certificate Type</td>
                                            <td colspan="3"> {{ studentInfo.birth_cert_type }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="ACADEMIC">
                            <div style="margin: 0px 30px 0 30px">
<<<<<<< HEAD
<<<<<<< HEAD
                                <p><br/>
=======
                                <p>
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
=======
                                <p><br/>
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
                                    <a :href="'/student/' + studentId + '/update/academic'" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>

                                <div class="table-responsive" v-if="studentInfo">
                                    <table class="table table-bordred table-striped mytable">
                                        <tr>
                                            <td><i class="fa fa-home"></i> School Name</td>
                                            <td colspan="3"> School Name</td>
                                        </tr>
                                        <tr>
                                            <td>Admission status</td>
                                            <td> {{ studentInfo.admission_status }}</td>
                                            <td>Admission Year</td>
                                            <td> {{ studentInfo.admission_year }}</td>
                                        </tr>
                                        <tr>
                                            <td>Class of Admission</td>
                                            <td> {{ studentInfo.admission_education_level }}</td>
                                            <td>Current Class</td>
                                            <td> {{ studentInfo.current_class_level }}</td>
                                        </tr>
                                        <tr>
                                            <td>Distance from School</td>
                                            <td> {{ studentInfo.distance_from_school }}</td>
                                            <td>Promotion Status</td>
                                            <td> {{ studentInfo.promotion_status }}</td>
                                        </tr>
                                        <tr>
                                            <td>Boarding</td>
                                            <td> {{ studentInfo.boarding }}</td>
                                            <td>Dormitory</td>
                                            <td> {{ studentInfo.dormitory_id }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="PARENT/GUARDIAN">
                            <div style="margin: 0px 30px 0 30px">
<<<<<<< HEAD
<<<<<<< HEAD
                                <p><br/>
=======
                                <p>
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
=======
                                <p><br/>
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
                                    <a :href="'/student/' + studentId + '/update/parent'" type="button" class="btn btn-outline-primary ekiti-btn pull-right">Edit
                                    </a><br/><br/>
                                </p>
                                <div class="table-responsive" v-if="studentInfo">
                                    <table class="table table-bordred table-striped mytable">
                                        <tr><td>Full Name</td>
                                            <td>{{ studentInfo.guardians[0].title }} {{ studentInfo.guardians[0].fullname }}</td></tr>
                                        <tr><td>Relationship</td>
                                            <td> {{ studentInfo.guardians[0].relationship }}</td></tr>
                                        <tr><td>Mobile Number</td>
                                            <td> {{ studentInfo.guardians[0].Mobile }}</td></tr>
                                        <tr><td>Phone Number</td>
                                            <td> {{ studentInfo.guardians[0].phone }}</td></tr>
                                        <tr><td>Email Address</td>
                                            <td> {{ studentInfo.guardians[0].email }}</td></tr>
                                        <tr><td>Religion</td>
                                            <td> {{ studentInfo.guardians[0].religion }}</td>
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
import vScroll from "components/plugins/scroll/vScroll.vue";
import SchoolCard from "../../widgets/sbemis/SchoolCard";

export default {
  name: "user_profile",
  components: {
      vScroll,
      SchoolCard,
  },
  data() {
    return {
      studentInfo: null,
        schoolInfo: {},
      studentId: null,
      schoolId: null,
    };
  },
  mounted: function() {
    // console.log('route is : ' + this.$route.params.id);
    this.studentId = this.$route.params.id;
    this.$student.studentProfile(this.$route.params.id).then(data => {
        this.studentInfo = data;
        this.schoolId = data.school_id;
        // console.log(data);
    });
  },
    watch: {
        schoolId(value){
            // get school informations
            this.$school.schoolProfile(value).then(data => {
                this.schoolInfo = data;
            })
        }
    },
  destroyed: function() {},
};
</script>
<style>
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
</style>

<style src="assets/css/user_profile.css" scoped>
</style>
