<template>
    <div class="row">
        <div class="col-xl-4 col-lg-5">
            <b-card class="bg-info-card" v-if="staffInfo">
                <div class="profile text-center ">
                    <img :src="this.$store.state.user.picture" alt="User Image" class="rounded-circle img-fluid profile-thumb mb-3">
                    <h4 class="text-gray">{{ staffInfo.first_name + ' ' + staffInfo.middle_name + ' ' + staffInfo.last_name }}</h4>
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
                            <button type="button" :click="show()" class="btn btn-outline-primary pull-right">Edit
                            </button>
                            <h1>Personal Details</h1>
                        </p>
                        <table class="table account-detailsg" v-if="staffInfo">
                            <tbody>
                                <tr class="m-0">
                                    <td class="views">First Name</td>
                                    <td colspan="3"> {{ staffInfo.first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Last Name</td>
                                   <td colspan="3"> {{ staffInfo.last_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Middle Name</td>
                                    <td colspan="3"> {{ staffInfo.middle_name }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Gender</td>
                                    <td colspan="3"> {{ staffInfo.sex }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Email Address</td>
                                   <td colspan="3"> {{ staffInfo.email_address }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Phone Number</td>
                                    <td colspan="3"> {{ staffInfo.phone_number }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Date of Birth</td>
                                    <td colspan="3"> {{ staffInfo.date_of_birth }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Place of Birth</td>
                                   <td colspan="3">{{ staffInfo.place_of_birth }}</td>
                                </tr>
                                <tr>
                                    <td class="views">State of Birth</td>
                                    <td colspan="3"> {{ staffInfo.state_of_birth }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Local Government</td>
                                    <td colspan="3"> {{ staffInfo.lga_of_origin }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Home Town</td>
                                    <td colspan="3"> {{ staffInfo.home_town }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Marital Status</td>
                                    <td colspan="3"> {{ staffInfo.marital_status }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Religious Status</td>
                                   <td colspan="3"> {{ staffInfo.religious_status }}</td>
                                </tr>
                                <tr>
                                    <td class="views">House Address</td>
                                    <td colspan="3"> {{ staffInfo.residential_address }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                    <b-tab title="PROFESSIONAL">
                        <p>
                            <button type="button" class="btn btn-outline-primary pull-right">Edit
                            </button>
                            <h1>Professional Record</h1>
                        </p>
                        <table class="table account-detailsg" v-if="staffInfo">
                            <tbody>
                                <tr class="m-0">
                                    <td class="views">School Name</td>
                                    <td colspan="3"> {{ schoolName }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Grade/Level</td>
                                   <td colspan="3"> {{ staffInfo.gl_step }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Salary Source</td>
                                    <td colspan="3"> {{ staffInfo.salary_source }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Employment Year</td>
                                    <td colspan="3"> {{ staffInfo.year_of_posting }}</td>
                                </tr>
                                <tr>
                                    <td class="views">Staff Category</td>
                                   <td colspan="3"> {{ staffInfo.staff_category }}</td>
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
        <modal name="hello-world">
            hello, world!
        </modal>
    </div>
</template>
<script>
import Vue from 'vue'
import vScroll from "components/plugins/scroll/vScroll.vue"
import VModal from 'vue-js-modal'

Vue.use(VModal)

export default {
    name: "user_profile",
    components: {
        vScroll
    },
    data(){
        return {
            staffInfo: null,
            schoolName: '',
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
        this.$staff.staffProfile(this.$route.params.id).then(data => {
            this.staffInfo = data.data;
            this.schoolName = data.school.data.school_name
            // console.log()
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
