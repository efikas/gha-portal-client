<template>
    <main class="container">
            <div class="section m75-top">
                <div id="student_profile" class="row p16-r p16-l" v-for="student_info in student" :key="student_info.id">
                    <div class="col s12 m12 l4 no-padding">
                        <div class="bordered-box">
                            <div class="picture-container relative" :class="student_info.personal.photo_active" data-target="passport">
                                <div class="picture">
                                    <img data-entity='student' src="" class='picture-src' id='wizardPicture' :title="student_info.personal.first_name + ' ' + personal.last_name">
                                    <i class="material-icons white-text">photo_camera</i>
                                </div>
                            </div>
                            <div class="col s12 m12 l12 no-padding">
                                <div class="col s12 m12 l12 no-padding center-align edu-bg-row">
                                    <span data-id="entity_name" class="col s12 xlarge thin">{{student_info.personal.first_name}} {{student_info.personal.last_name}}</span>
                                    <span data-id="entity_uid" id="uid" class="col s12 medium thin">{{student_info.personal.short_unique_id}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="bordered-box m32-top m40-b light center-align">
                            <span class="p16-l">{{student_info.academic.school_name}}</span>
                        </div>
                    </div>
                    <div class="col s12 m12 l7 offset-l1 bordered-box" id="profile_details" data-entity="student">
                        <div class="col s12 no-padding relative">
                            <ul class="tabs tabs-fixed-width">
                                <li class="tab col s3"><a class="active" href="#personal">Personal</a></li>
                                <li class="tab col s3"><a href="#academic">Academic</a></li>
                                <li class="tab col s3"><a href="#guardian">Parent/Guardian</a></li>
                                <li class="tab col s3"><a href="#biometrics">Biometrics</a></li>
                            </ul>
                        </div>
                        <div id="personal" class="col s12">
                            <h2 class="medium flow-text">
                                Personal Details
                            </h2>
                            <div class="row">
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l4 edu-profile-label">First Name</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.first_name}}
                                            <span class="tiny" data-edit-field="first_name" data-input-type="text"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l4 edu-profile-label">Middle Name</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.middle_name}}
                                            <span class="tiny" data-edit-field="middle_name" data-input-type="text"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Last Name</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.last_name}}
                                            <span class="tiny" data-edit-field="last_name" data-input-type="text"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Gender</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.sex}}
                                            <span class="tiny" data-edit-field="sex" data-input-type="radio"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Email Address</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            <a :href="'mailto:' + student_info.personal.email_address">
                                                <span class="dp24 left"><i class="material-icons">email</i></span>
                                                {{student_info.personal.email_address}}
                                            </a>
                                            <span class="tiny" data-edit-field="email_address" data-input-type="email"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Phone Number</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            <a :href="'tel:' + student_info.personal.phone_number">
                                                <span class="dp24 left"><i class="material-icons">phone</i></span>
                                                {{student_info.personal.phone_number}}
                                            </a>
                                            <span class="tiny" data-edit-field="phone_number" data-input-type="tel"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Height</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.height}}m
                                            <span class="tiny" data-edit-field="height" data-input-type="text"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Weight</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.weight}}kg
                                            <span class="tiny" data-edit-field="weight" data-input-type="text"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Date of Birth</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.date_of_birth}}
                                            <span class="tiny" data-edit-field="date_of_birth" data-input-type="date"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Special Condition</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.special_condition}}
                                            <span class="tiny" data-edit-field="special_condition" data-input-type="select" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Bloodgroup</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.blood_group}}
                                            <span class="tiny" data-edit-field="blood_group" data-input-type="select"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Birthplace</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.place_of_birth}}
                                            <span class="tiny" data-edit-field="place_of_birth" data-input-type="text"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Birth Certificate Availability</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.birth_cert_status}}
                                            <span class="tiny" data-edit-field="birth_cert_status" data-input-type="radio"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Birth Certificate Type</div>
                                        <div class="editable col s12 m8 l8 edu-profile-text relative">
                                            {{student_info.personal.birth_cert_type}}
                                            <span class="tiny" data-edit-field="birth_cert_type" data-input-type="select"  data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="academic" class="col s12">
                            <h2 class="medium flow-text">
                                Academic Record
                            </h2>
                            <div class="row">
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l4 edu-profile-label">School Name</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.academic.school_name}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Admission Category</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="admission_status">{{student_info.academic.admission_status}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Admission Year</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="admission_year">{{student_info.academic.admission_year}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Class on Admission</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="admission_class">{{student_info.academic.admission_education_level}} {{student_info.academic.admission_class_level}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Current Class</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="current_class">{{student_info.academic.current_education_level}} {{student_info.academic.current_class_level}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Distance from School</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="distance_from_school">{{student_info.academic.distance_from_school}}km</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Boarding</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="boarding">{{student_info.academic.boarding}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Dormitory</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative" data-edit-field="dormitory_id">{{student_info.academic.dormitory_id}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l4 edu-profile-label">Promotion Status</div>
                                        <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.academic.promotion_status}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="guardian" class="col s12">
                            <h2 class="medium flow-text">
                                Parent / Guardian Details
                            </h2>
                            <div class="row">
                                <div class="col s12 m12 l12 no-padding edu-bg-row">
                                    <div class="col s12 m4 l4 edu-profile-label">Full Name</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.guardian.fullname}}</div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Relationship</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.guardian.relationship}}</div>
                                </div>
                                <div class="col s12 m12 l12 no-padding edu-bg-row">
                                    <div class="col s12 m4 l4 edu-profile-label">Occupation</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.guardian.occupation}}</div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Mobile number</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">
                                        <a :href="'tel:' + student_info.guardian.mobile">
                                            <span class="dp24 left"><i class="material-icons">phone</i></span>
                                            {{student_info.guardian.mobile}}
                                        </a>
                                    </div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Phone number</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">
                                        <a :href="'tel:' + student_info.guardian.phone">
                                            <span class="dp24 left"><i class="material-icons">phone</i></span>
                                            {{student_info.guardian.phone}}
                                        </a>
                                    </div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Email Address</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">
                                        <a :href="'mailto:' + student_info.guardian.email">
                                            <span class="dp24 left"><i class="material-icons">email</i></span>
                                            {{student_info.guardian.email}}
                                        </a>
                                    </div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Date of Birth</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.guardian.dob}}</div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Religion</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.guardian.religious_status}}</div>
                                </div>
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m4 l4 edu-profile-label">Home Address</div>
                                    <div class="col s12 m8 l8 edu-profile-text relative">{{student_info.guardian.contact_address}}</div>
                                </div>
                            </div>
                        </div>
                        <div id="biometrics" class="col s12">
                            <h2 class="medium flow-text">Biometrics</h2>
                            <div class="col s12 m12 l12 no-padding">
                                <div class="col s6 m7 l9 offset-l2">
                                    <span id="biometry" data-target="right_1_file" class="f-scanner p12-r btn-rose white-text">
                                        <i class="material-icons">fingerprint</i> Scan Right Thumb
                                    </span>
                                    <!--<img class="map" id="image-map" src="assets/images/hand.png" width="441" height="600" usemap="#hand" alt="" />
                                    <map name="hand">
                                        <area id="right_1_file" data-maphilight='{"stroke":true,"fillColor":"00ff00","fillOpacity":0.6,"alwaysOn":true}' alt="right_1_file" title="right_1_file" shape="rect" coords="0,246,81,321" target="_self" onclick="on_capButton_click('right_1_file')" />
                                        <area id="right_2_file" alt="right_2_file" title="right_2_file" shape="rect" coords="101,38,168,112" target="_self" onclick="" />
                                        <area id="right_3_file" alt="right_3_file" title="right_3_file" shape="rect" coords="218,0,283,71" target="_self" onclick="" />
                                        <area id="right_4_file" alt="right_4_file" title="right_4_file" shape="rect" coords="311,23,378,96" target="_self" onclick="" />
                                        <area id="right_5_file" alt="right_5_file" title="right_5_file" shape="rect" coords="393,111,441,191" target="_self" onclick="" />
                                    </map>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
import { mapMutations } from 'vuex'
import DataTable from 'vue-materialize-datatable'
export default {
  name: 'StudentView',
  components: {
    'datatable': DataTable
  },
  data () {
    return {
      student: {},
      api: 'api',
      id: this.$route.params.id,
      title: 'School List',
      Rows: [
        {
          name: 'SCHOOL NAME',
          id: '',
          coordinate: '',
          opt: ''
        }
      ],
      Columns: [
        {
          label: 'SCHOOL NAME',
          field: 'name',
          numeric: false,
          html: false
        },
        {
          label: 'SCHOOL ID',
          field: 'id',
          numeric: false,
          html: false
        },
        {
          label: 'COORDINATE',
          field: 'coordinate',
          numeric: false,
          html: false
        },
        {
          label: '',
          field: 'opt',
          numeric: false,
          html: false
        }
      ]
    }
  },
  methods: {
    ...mapMutations([
      // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
      'updateBreadCrumbItem'
    ])
  },
  created () {
    this.$store.commit(
      'updateBreadCrumbItem',
      [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'Students',
          link: '/sstudents'
        },
        {
          name: 'Manageeeee',
          link: '/students/manage'
        }
      ]
    )
  },
  mounted () {
    // this.axios.get(this.api).then((response) => {
    //   this.schools = response.data
    // })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
