<template>
    <div class="row">
        <div class="col-xl-4 col-lg-5">
            <b-card class="bg-info-card">
                <div class="profile text-center ">
                    <img :src="this.$store.state.user.picture" alt="User Image" class="rounded-circle img-fluid profile-thumb mb-3">
                    <h4 class="text-gray">{{this.$store.state.user.name}}</h4>
                    <p>{{this.$store.state.user.job}}</p>
                    <div class="row">
                        <div class="col-sm-7 text-warning user-rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-full" aria-hidden="true"></i>
                        </div>
                        <div class="col-sm-5">
                            <i class="fa fa-heart text-danger" aria-hidden="true"></i> 2,080
                        </div>
                    </div>
                </div>
                <div class="profile_details">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="nav-tabs-custom">
                                <b-tabs>
                                    <b-tab title="Status">
                                        <div class="row">
                                            <div class="col-12 mt-3">
                                                <div class="row">
                                                    <div class="col-6 text-right mt-1">Followers :</div>
                                                    <div class="col-6 mt-1">1,079</div>
                                                    <div class="col-6 text-right mt-1">Online Status :</div>
                                                    <div class="col-6 mt-1">Offline</div>
                                                    <div class="col-6 text-right mt-1">Last seen :</div>
                                                    <div class="col-6 mt-1">2 Days ago</div>
                                                    <div class="col-6 text-right mt-1">Last Updated :</div>
                                                    <div class="col-6 mt-1">A Month ago</div>
                                                    <div class="col-6 text-right mt-1">Connections :</div>
                                                    <div class="col-6 mt-1">2,679</div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-tab>
                                    <b-tab title="About" active>
                                          <div class="row">
                                              <div class="col-12">
                                                  <div class="row">
                                                      <div class="col-4 text-right mt-2">Email :</div>
                                                      <div class="col-8 mt-2">user@example.com</div>
                                                      <div class="col-4 text-right mt-2">Contact :</div>
                                                      <div class="col-8 nt-2">(394)-968-3152</div>
                                                      <div class="col-4 text-right mt-2">D.O.B :</div>
                                                      <div class="col-8 mt-2">6-4-1987</div>
                                                      <div class="col-4 text-right mt-1">Address :</div>
                                                      <div class="col-8 mt-1">Westwood, 12th Street,7023 Mckinley Ave, US.</div>
                                                  </div>
                                              </div>
                                          </div>
                                    </b-tab>
                                </b-tabs>
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
                            <button type="button" class="btn btn-outline-primary pull-right">Edit
                            </button>
                            <h1>Personal Details</h1>
                        </p>
                        <table class="table account-detailsg" v-if="studentInfo">
                            <tbody>
                                <tr class="m-0">
                                    <td class="views">First Name</td>
                                    <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Last Name</td>
                                   <td colspan="3"> {{ studentInfo.last_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Middle Name</td>
                                    <td colspan="3"> {{ studentInfo.middle_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Gender</td>
                                    <td colspan="3"> {{ studentInfo.sex }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Email Address</td>
                                   <td colspan="3"> {{ studentInfo.email_address }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Phone Number</td>
                                    <td colspan="3"> {{ studentInfo.phone_number }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Height</td>
                                    <td colspan="3"> {{ studentInfo.height }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Weight</td>
                                    <td colspan="3"> {{ studentInfo.weight }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Date of Birth</td>
                                    <td colspan="3"> {{ studentInfo.date_of_birth}}</td>
                                </tr>
                                <tr>
                                    <td class="views">Special Condition</td>
                                    <td colspan="3"> {{ studentInfo.special_condition }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Bloodgroup</td>
                                    <td colspan="3"> {{ studentInfo.blood_group }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Birth Place</td>
                                   <td colspan="3"> {{ studentInfo.place_of_birth }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Birth certificate available</td>
                                    <td colspan="3"> {{ studentInfo.birth_cert_status }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Birth certificate Type</td>
                                    <td colspan="3"> {{ studentInfo.birth_cert_type }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                    <b-tab title="ACADEMIC">
                        <p>
                            <button type="button" class="btn btn-outline-primary pull-right">Edit
                            </button>
                            <h1>Academic Record</h1>
                        </p>
                        <table class="table account-detailsg" v-if="studentInfo">
                            <tbody>
                                <tr class="m-0">
                                    <td class="views">School Name</td>
                                    <td colspan="3"> School Name</td>
                                </tr>
                                <tr>
                                    <td class="views">Admission promotion_status</td>
                                   <td colspan="3"> {{ studentInfo.admission_status }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Admission Year</td>
                                    <td colspan="3"> {{ studentInfo.admission_year }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Class of Admission</td>
                                    <td colspan="3"> {{ studentInfo.admission_education_level }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Current Class</td>
                                   <td colspan="3"> {{ studentInfo.current_class_level }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Distance from School</td>
                                    <td colspan="3"> {{ studentInfo.distance_from_school }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Boarding</td>
                                   <td colspan="3"> {{ studentInfo.boarding }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Dormitory</td>
                                    <td colspan="3"> {{ studentInfo.dormitory_id }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Promotion Status</td>
                                   <td colspan="3"> {{ studentInfo.promotion_status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                    <b-tab title="PARENT/GUARDIAN">
                        <p>
                            <button type="button" class="btn btn-outline-primary pull-right">Edit
                            </button>
                            <h1>Parent/Guardian Details</h1>
                        </p>
                        <table class="table account-detailsg" v-if="studentInfo">
                            <tbody>
                                <tr class="m-0">
                                    <td class="views">Full Name</td>
                                    <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Relationship</td>
                                   <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Occupation</td>
                                    <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Mobile Number</td>
                                    <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Phone Number</td>
                                   <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Email Address</td>
                                    <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Date of Birth</td>
                                   <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Religion</td>
                                    <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Home <Address></Address></td>
                                   <td colspan="3"> {{ studentInfo.first_name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                    <b-tab title="BIOMETRICS">
                        <p>
                            <button class="btn btn-primary">
                                <i class="fa fa-fingerprint" aria-hidden="true"></i>
                                Scan Right Thumb
                            </button>
                        </p>
                        
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>
<script>
import vScroll from "components/plugins/scroll/vScroll.vue"

export default {
    name: "user_profile",
    components: {
        vScroll
    },
    data(){
        return {
            studentInfo: null,
        }
    },
    mounted: function() {
        this.$student.studentProfile(this.$route.params.id).then(data => {
            this.studentInfo = data.data;
        })
    },
    destroyed: function() {}
}
</script>
<style>
td.views {
    background-color: #e5e5e5 !important;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #555;
}
</style>

<style src="assets/css/user_profile.css" scoped>
</style>
