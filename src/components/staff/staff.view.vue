<template>
    <div>
        <main class="container">
            <div class="section m75-top">
                <div id="staff_profile" class="row p16-r p16-l">
                    <div class="col s12 m12 l4 no-padding">
                        <div class="bordered-box">
                            <div class="picture-container relative {{personal.photo_active}}" data-target="passport">
                                <div class="picture">
                                    <img data-entity='staff' data-state='{{personal.photo.state}}' data-unique='{{personal.unique_id}}' data-src='{{{personal.photo.src}}}' src="" class='picture-src' id='wizardPicture' title='{{personal.first_name}} {{personal.last_name}}'>
                                    <i class="material-icons white-text">photo_camera</i>
                                </div>
                            </div>
                            <div class="col s12 m12 l12 no-padding">
                                <div class="col s12 m12 l12 no-padding center-align edu-bg-row">
                                    <span data-id="entity_name" class="col s12 xlarge thin">{{personal.first_name}} {{personal.last_name}}</span>
                                    <span data-id="entity_uid" id="uid" class="col s12 medium thin">{{personal.short_unique_id}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="bordered-box m32-top m40-b xsmall center-align">
                            <span class="p16-l">{{professional.school_name}}</span>
                        </div>
                    </div>
                    <div class="col s12 m12 offset-l1 l7 bordered-box" id="profile_details" data-entity="staff" data-unique-id="{{personal.unique_id}}">
                    <!--div id="profile_details" data-entity="staff" data-unique-id="{{personal.school_unique_id}}-{{personal.unique_id}}" class="col s12 m12 l7 bordered-box"-->
                        <div class="col s12 no-padding relative">
                            <ul class="tabs tabs-fixed-width">
                                <li class="tab col s3"><a class="active" href="#personal">Personal</a></li>
                                <li class="tab col s3"><a href="#professional">Professional</a></li>
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
                                        <div class="col s12 m4 l3 edu-profile-label">First Name</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.first_name}}
                                            <span class="tiny" data-edit-field="first_name" data-input-type="text" data-edit-value="{{personal.first_name}}" data-target="profile_modal">Edit</span> </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Last Name</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.last_name}}
                                            <span class="tiny" data-edit-field="last_name" data-input-type="text" data-edit-value="{{personal.last_name}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Middle Name</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.middle_name}}
                                            <span class="tiny" data-edit-field="middle_name" data-input-type="text" data-edit-value="{{personal.middle_name}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Gender</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.sex}}
                                            <span class="tiny" data-edit-field="sex" data-input-type="text" data-edit-value="{{personal.sex}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Email Address</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.email_address}}
                                            <span class="tiny" data-edit-field="email_address" data-input-type="text" data-edit-value="{{personal.email_address}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>

                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Phone Number</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.phone_number}}
                                            <span class="tiny" data-edit-field="phone_number" data-input-type="text" data-edit-value="{{personal.phone_number}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>

                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Date of Birth</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.date_of_birth}}
                                            <span class="tiny" data-edit-field="date_of_birth" data-input-type="text" data-edit-value="{{personal.date_of_birth}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Birthplace</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.place_of_birth}}
                                            <span class="tiny" data-edit-field="place_of_birth" data-input-type="text" data-edit-value="{{personal.place_of_birth}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">State of Origin</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.state_of_origin}}
                                            <span class="tiny" data-edit-field="state_of_origin" data-input-type="text" data-edit-value="{{personal.state_of_origin}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Local Government</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.lga}}
                                            <span class="tiny" data-edit-field="lga" data-input-type="text" data-edit-value="{{personal.lga}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>

                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Home Town</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.home_town}}
                                            <span class="tiny" data-edit-field="home_town" data-input-type="text" data-edit-value="{{personal.home_town}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>

                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Marital Status</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.marital_status}}
                                            <span class="tiny" data-edit-field="marital_status" data-input-type="text" data-edit-value="{{personal.marital_status}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>

                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">Religious Status</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.religious_status}}
                                            <span class="tiny" data-edit-field="religious_status" data-input-type="text" data-edit-value="{{personal.religious_status}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>

                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label">House Address</div>
                                        <div class="editable col s12 m8 l9 edu-profile-text relative">
                                            {{personal.residential_address}}
                                            <span class="tiny" data-edit-field="residential_address" data-input-type="text" data-edit-value="{{personal.residential_address}}" data-target="profile_modal">Edit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="professional" class="col s12">
                            <h2 class="medium flow-text">
                                Professional Record
                            </h2>
                            <div class="row">
                                <div class="col s12 m12 l12 no-padding">
                                    <div class="col s12 m12 l12 no-padding edu-bg-row">
                                        <div class="col s12 m4 l3 edu-profile-label eduArLangCss">School Name</div>
                                        <div class="col s12 m8 l9 edu-profile-text">{{professional.school_name}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l3 edu-profile-label eduArLangCss">Grade / Level</div>
                                        <div class="col s12 m8 l9 edu-profile-text">{{professional.gl_step}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l3 edu-profile-label eduArLangCss">Salary Source</div>
                                        <div class="col s12 m8 l9 edu-profile-text">{{professional.salary_source}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l3 edu-profile-label eduArLangCss">Year of Employment</div>
                                        <div class="col s12 m8 l9 edu-profile-text">{{professional.employment_date}}</div>
                                    </div>
                                    <div class="col s12 m12 l12 no-padding">
                                        <div class="col s12 m4 l3 edu-profile-label eduArLangCss">Staff Category</div>
                                        <div class="col s12 m8 l9 edu-profile-text">{{professional.category}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="biometrics" class="col s12">
                            <h2 class="medium flow-text">Biometrics</h2>
                            <div class="col s12 m12 l12 no-padding">
                                <div class="col s6 m7 l9 offset-l2">
                                    <span id="biometry" data-target="right_1_file" class="f-scanner p12-r btn-rose white-text" data-unique-id="{{personal.unique_id}}">
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
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SchoolOverview',
  components: {},
  data () {
    return {
      schools: {},
      api: 'api'
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
          link: '/students'
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
