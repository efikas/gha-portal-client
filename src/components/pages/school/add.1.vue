<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-info-card">
            <form-wizard @on-complete="onComplete" color="#e67e22">
                <h2 slot="title"></h2>
                <tab-content title="Basic School Inionformation" icon="fa fa-user">
                    <form method="" class="form-horizontal">
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <label  class="control-label">LGA</label>
                                <multiselect v-model="data.data.lga" :show-labels="false" :options="lgas" @input="getWard"></multiselect>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="school_name">School Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" v-model="data.data.school_name"
                                               id="school_name" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <label>Ward</label>
                                <multiselect v-model="data.data.ward" :show-labels="false" :options="wards"></multiselect>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="year_established">Year Established
                                    </label>
                                    <div class="col-md-12">
                                        <select id="year_established" v-model="data.data.established"
                                                name="established" class="form-control" size="1">
                                            <option value="0">
                                                Select Year
                                            </option>
                                            <option value="1">1930</option>
                                            <option value="2">1931</option>
                                            <option value="3">1932</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="school_dist">Distance to Catchment Area
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" v-model="data.data.average_distance"
                                               class="form-control" id="school_dist" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="village_town">Village/Town
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" v-model="data.data.village_town" class="form-control"
                                               id="village_town" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="school_location">School Location
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="school_location"
                                                          v-model="data.data.school_location">
                                                Rural
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="school_location"
                                                          v-model="data.data.school_location">
                                                Urban
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-7">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-8" for="school_email_address">Email
                                    </label>
                                    <div class="col-md-12">
                                        <input type="email" v-model="data.data.school_email_address"
                                               class="form-control" id="school_email_address" placeholder="Email">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-5">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="school_phone">Phone Munber
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" v-model="data.data.school_phone" class="form-control"
                                               id="school_phone" placeholder="Enter value">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-5">
                                <div class="form-group p-10">
                                    <label class="control-label" for="school_website">Website
                                    </label>
                                    <div class="col-md-12">
                                        <input type="url" v-model="data.data.school_website" class="form-control"
                                               name="school_website" value="http://www.example.com/" id="url">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Map Coordinate (Lat, Long)
                                    </label>
                                    <input type="text" v-model="data.data.school_geolocation"
                                           class="form-control" id="school_long" placeholder="e.g. 9.182 / -39.140625">

                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">School Category
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="school_category_id"
                                                          v-model="data.data.school_category_id">
                                                Public
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" checked="false" name="school_category_id"
                                                          v-model="data.data.school_category_id">
                                                Private
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-5">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="name_of_proprietor">Propritor Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" v-model="data.data.name_of_proprietor"
                                               class="form-control" id="name_of_proprietor"
                                               placeholder="Propritor Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Private Membership
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" name="private_membership_status"
                                                          v-model="data.data.private_membership_status"
                                                          checked="false">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio" checked="false">
                                            <b-form-radio :value="0" name="private_membership_status"
                                                          v-model="data.data.private_membership_status">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="private_membership_name">Private Memebership's
                                        Name
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" v-model="data.data.private_membership_name"
                                               class="form-control" id="private_membership_name"
                                               placeholder="PPrivate Memebership's Name">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">School Type
                                    </label>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="radio">
                                                <b-form-radio :value="1" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Regular
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="2" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Islamiyya Integrated
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="3" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Montessori
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="4" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Special Needs
                                                </b-form-radio>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="radio">
                                                <b-form-radio :value="5" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Vocational Training Center
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="6" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Science and Technology College
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="7" checked="false" name="school_type_id"
                                                              v-model="data.data.school_type_id">
                                                    Nomadic (Migrant)
                                                </b-form-radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">School Ownership
                                    </label>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="radio">
                                                <b-form-radio :value="1" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Community
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="2" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Cooperation
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="3" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Federal Government
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="4" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    State Government
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="5" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Local Government
                                                </b-form-radio>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="radio">
                                                <b-form-radio :value="6" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Faith Based
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="7" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Individual
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="8" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    NGO
                                                </b-form-radio>
                                            </div>
                                            <div class="radio">
                                                <b-form-radio :value="9" checked="false" name="school_ownership"
                                                              v-model="data.data.school_ownership">
                                                    Others
                                                </b-form-radio>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="education_levels">Education Level
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio value="PRY" checked="false" name="education_levels"
                                                          v-model="data.data.education_levels">
                                                Primary
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio value="SEC" checked="false" name="education_levels"
                                                          v-model="data.data.education_levels">
                                                Secondary
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Multigrading System
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="multigrade"
                                                          v-model="data.data.multigrade">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="multigrade"
                                                          v-model="data.data.multigrade">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">shifts
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="shifts" v-model="data.data.shifts">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="shifts" v-model="data.data.shifts">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="management_committee">Management
                                        Committee
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="management_committee"
                                                          v-model="data.data.management_committee">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="management_committee"
                                                          v-model="data.data.management_committee">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">PTA/PTF/MA
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="pta_pf"
                                                          v-model="data.data.pta_pf">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="pta_pf"
                                                          v-model="data.data.pta_pf">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">School Development Plan
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="development_plan"
                                                          v-model="data.data.development_plan">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="development_plan"
                                                          v-model="data.data.development_plan">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">School school_grants
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="school_grants"
                                                          v-model="data.data.school_grants">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="0" checked="false" name="school_grants"
                                                          v-model="data.data.school_grants">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-md-5">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Date of Last Inspection Visit
                                    </label>
                                    <div class="col-md-12">
                                        <input type="date" v-model="data.data.date_last_inspection"
                                               class="form-control" id="date" value="yyyy-mm-dd" aria-selected="true">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="um_of_inspection">Number of Inspections
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" v-model="data.data.num_of_inspection"
                                               class="form-control" id="num_of_inspection">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Inspection Authority
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="insp_auth"
                                                          v-model="data.data.inspection_auth">
                                                Federal Govt
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" checked="false" name="insp_auth"
                                                          v-model="data.data.inspection_auth">
                                                State Govt
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="3" checked="false" name="insp_auth"
                                                          v-model="data.data.inspection_auth">
                                                Local Govt
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-4" for="school_address">School Address</label>
                                    <div class="col-md-12">
                                        <textarea rows="4" v-model="data.data.school_address"
                                                  class="form-control resize_vertical" id="school_address"
                                                  placeholder="School Address"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="col-lg-12 col-12 mt-4">
                                    <form class="form-horizontal form-validation" role="form" method="POST" action=""
                                          @submit.prevent="upload_pic">
                                        <div class="dropzone_wrapper">
                                            <vue-dropzone ref="user_image" id="dropzone" :options="dropzoneOptions"
                                                          @vdropzone-success="uploaded"
                                                          @vdropzone-file-added="clearqueue"></vue-dropzone>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>
                </tab-content>
                <tab-content title="Additional Info" icon="fa fa-setting">
                    <form method="" class="form-horizontal">
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Bording Facilities
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="boarding"
                                                          v-model="data.facilities.boarding">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" checked="false" name="boarding"
                                                          v-model="data.facilities.boarding">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">School Library
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="sch_library"
                                                          v-model="data.facilities.school_library">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" checked="false" name="sch_library"
                                                          v-model="data.facilities.school_library">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Security Guard?
                                    </label>
                                    <div class="col-md-16">
                                        <input type="number" min="0" v-model="data.facilities.security_guard"
                                               class="form-control" id="text" placeholder="0">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">School Building Type
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" checked="false" name="school_building_type"
                                                          v-model="data.facilities.school_building_type">
                                                <div>Proposely built</div>
                                                <div>Proposely built for educational use</div>
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" checked="false" name="school_building_type"
                                                          v-model="data.facilities.school_building_type">
                                                <div>Multiple Class in Rooms</div>
                                                <div>Converted building, rooms holding multiple classes (no walls
                                                    between).
                                                </div>
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="3" checked="false" name="school_building_type"
                                                          v-model="data.facilities.school_building_type">
                                                <div>One Class per Room</div>
                                                <div>Converted building, one class per room (with walls separating).
                                                </div>
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="4" checked="false" name="school_building_type"
                                                          v-model="data.facilities.school_building_type">
                                                <div>Residential Space</div>
                                                <div>Converted space in a house/apartment (residential).</div>
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="5" checked="false" name="school_building_type"
                                                          v-model="data.facilities.school_building_type">
                                                <div>Mixed-Use Building</div>
                                                <div>Mixed-use building (School plus other commercial use)</div>
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">School Building Ownership
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" name="school_building_ownership"
                                                          v-model="data.facilities.school_building_ownership">
                                                Owned
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" name="school_building_ownership"
                                                          v-model="data.facilities.school_building_ownership">
                                                Rented
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="3" checked="false" name="school_building_ownership"
                                                          v-model="data.facilities.school_building_ownership">
                                                Leased
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="4" name="school_building_ownership"
                                                          v-model="data.facilities.school_building_ownership">
                                                Granted for free
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="school_fence_condition">School Fence Condition
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio :value="1" name="school_fence_condition"
                                                          v-model="data.facilities.school_fence_condition">
                                                No Fence/Wall
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="2" name="school_fence_condition"
                                                          v-model="data.facilities.school_fence_condition">
                                                Fence is in good Condition
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="3" name="school_fence_condition"
                                                          v-model="data.facilities.school_fence_condition">
                                                Fence needs minor repairs
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio :value="4" name="school_fence_condition"
                                                          v-model="data.facilities.school_fence_condition">
                                                Fence needs major repairs
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Play Rooms</label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio name="false" :value="1" v-model="data.facilities.play_rooms">
                                                None
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="false" :value="2" v-model="data.facilities.play_rooms">
                                                Yes with Play Rugs
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="false" :value="3" v-model="data.facilities.play_rooms">
                                                Yes with Sand Floor
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="false" :value="4" v-model="data.facilities.play_rooms">
                                                Yes, no Sand/Rug Floor
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Play Facilities
                                    </label>
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <b-form-checkbox id="playroom" :value="1" v-model="data.facilities.play_facilities">
                                                PlayRoom
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="merry_go_round" :value="2" v-model="data.facilities.play_facilities">
                                                Merry Go Round
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="swing" :value="3" v-model="data.facilities.play_facilities">
                                                Swing
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="ladder_slide" :value="4" v-model="data.facilities.play_facilities">
                                                Ladder Slide
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="seesaw" :value="5" v-model="data.facilities.play_facilities">
                                                See Saw
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="indoor_activity_material" :value="6" v-model="data.facilities.play_facilities">
                                                Indoor Activity Material
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Learning Materials
                                    </label>
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <b-form-checkbox id="chart" :value="1" v-model="data.facilities.learning_materials">
                                                Charts
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="poaster" :value="2" v-model="data.facilities.learning_materials">
                                                Posters
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="toys" :value="3" v-model="data.facilities.learning_materials">
                                                Toys
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="audio_visual" :value="4" v-model="data.facilities.learning_materials">
                                                Audio/Visual(Radio, TV, DVD)
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="word_puzzle_box" :value="5" v-model="data.facilities.learning_materials">
                                                Word Puzzle Box
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="caregiver_guide" :value="6" v-model="data.facilities.learning_materials">
                                                Caregiver Guide
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Sources of Power
                                    </label>
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <b-form-checkbox id="phcn" :value="1" v-model="data.facilities.power_source">
                                                PHCN/NEPA
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="generator" :value="2" v-model="data.facilities.power_source">
                                                Generator
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="solar" :value="3" v-model="data.facilities.power_source">
                                                Solar
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="inverter" :value="4" v-model="data.facilities.power_source">
                                                Inverter
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="none" :value="5" v-model="data.facilities.power_source">
                                                None
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Health Facilities
                                    </label>
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <b-form-checkbox id="health_clinic" :value="1" v-model="data.facilities.health_facilities">
                                                Health Clinic
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="water_source" :value="2" v-model="data.facilities.health_facilities">
                                                First Aid Kit
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="health_facilities"
                                                             v-model="data.facilities.health_facilities">
                                                None
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Sources of Water Supply
                                    </label>
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <b-form-checkbox id="pipeborn" :value="1" v-model="data.facilities.water_supply">
                                                Pipe-borne
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="borehole" :value="2" v-model="data.facilities.water_supply">
                                                Borehole
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="well" :value="3" v-model="data.facilities.water_supply">
                                                Well
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="others" :value="4" v-model="data.facilities.water_supply">
                                                Others
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="none" :value="5" v-model="data.facilities.water_supply">
                                                None
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Toilet Facilities
                                    </label>
                                    <div class="col-md-12">
                                        <div class="checkbox">
                                            <b-form-checkbox id="pit-latrine" :value="1" v-model="data.facilities.toilet_facilities">
                                                Pit Latrine
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="bucket_system" :value="2" v-model="data.facilities.toilet_facilities">
                                                Bucket System
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="water_cistern" :value="3" v-model="data.facilities.toilet_facilities">
                                                Water Cistern
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox id="others" :value="4" v-model="data.facilities.toilet_facilities">
                                                Others
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Facilities Sharing</label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" name="facilities_sharing"
                                               v-model="data.facilities.facilities_sharing">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Facilities Shared  {{ data.facilities.facilities_shared }}
                                    </label>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="checkbox">
                                                <b-form-checkbox  id="toilet" :value="1"
                                                                 v-model="data.facilities.facilities_shared">
                                                    Toilet
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="water_source" :value="2" v-model="data.facilities.facilities_shared">
                                                    Water Source
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="classrooms" :value="3" v-model="data.facilities.facilities_shared">
                                                    classroomss
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="play_ground" :value="4" v-model="data.facilities.facilities_shared">
                                                    Play Ground
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="whiteboards" :value="5" v-model="data.facilities.facilities_shared">
                                                    WhiteBoards
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="boarding_hostels" :value="6"  v-model="data.facilities.facilities_shared">
                                                    Boarding Hostels
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="kitchen" :value="7" v-model="data.facilities.facilities_shared">
                                                    Kitchen
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="bathrooms" :value="8"  v-model="data.facilities.facilities_shared">
                                                    Bathroooms
                                                </b-form-checkbox>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkbox">
                                                <b-form-checkbox id="computer" :value="9" v-model="data.facilities.facilities_shared">
                                                    Computer
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="labouratory" :value="10" v-model="data.facilities.facilities_shared">
                                                    Laboratory
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="library" :value="11" v-model="data.facilities.facilities_shared">
                                                    Library
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="wash_hand_basin" :value="12" v-model="data.facilities.facilities_shared">
                                                    Wash Hand Basin
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="staff_room" :value="13" v-model="data.facilities.facilities_shared">
                                                    Staff Room
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="offices" :value="14" v-model="data.facilities.facilities_shared">
                                                    Offices
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="dinning_room" :value="15" v-model="data.facilities.facilities_shared">
                                                    Dinning Room
                                                </b-form-checkbox>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-checkbox id="play_rooms" :value="16" v-model="data.facilities.facilities_shared">
                                                    Play Rooms
                                                </b-form-checkbox>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </tab-content>
                <tab-content title="School Facilities Details" icon="fafa-check">
                    <div class="row">
                        <div class="col-lg-12">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>FACILITY TYPE</th>
                                    <th>Number Of Useable</th>
                                    <th>Minor Repair</th>
                                    <th>Major Repair</th>
                                    <th>Number of unuseable</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Toilets</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Computer</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Water Source</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Labouratory</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>classrooms</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Library</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Play Ground</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Wash Hand Basin</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>White Board</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Staff Room</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Bording Hostels</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Offices</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Kitchens</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Dining Room</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Bathrooms</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                <tr>
                                    <td>Play Rooms</td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                    <td><input type="number" min="0" class="form-control" placeholder=""></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </tab-content>
                <tab-content title="School classrooms Details" icon="fafa-check">
                    <form method="" class="form-horizontal">
                        <div class="even-row">
                            <div>
                                INFORMATION ON classroomsS/PLAYROOMS
                            </div>
                            <div>
                                Record information for individual classrooms, regardless of whether or not they are in
                                use.
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Year Constructed</label>
                                    <div class="col-md-12">
                                        <select id="example-select" name="classrooms_year_constructed"
                                                v-model="data.classrooms.classrooms_year_constructed"
                                                class="form-control" size="1">
                                            <option value="">
                                                Select Year
                                            </option>
                                            <option value="1">1930</option>
                                            <option value="2">1931</option>
                                            <option value="3">1932</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="classrooms_length">Length in (m)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" class="form-control" id="classrooms_length" name="classrooms_length"
                                               v-model="data.classrooms.classrooms_length">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="classrooms_width">Width in (m)
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" class="form-control" id="classrooms_width" name="classrooms_width"
                                               v-model="data.classrooms.classrooms_width">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="number_of_rooms">Number of Rooms
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" min="0" class="form-control" name="number_of_rooms"
                                               v-model="data.classrooms.number_of_rooms" id="number_of_rooms">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="classrooms_condition">Select Condition
                                    </label>
                                    <div class="col-md-12">
                                        <select id="classrooms_condition" name="classrooms_condition"
                                                v-model="data.classrooms.classrooms_condition" class="form-control" size="1">
                                            <option value="" disabled="" selected="">Select one</option>
                                            <option data-value="1" value="1">Good</option>
                                            <option data-value="2" value="2">Needs minor repairs</option>
                                            <option data-value="3" value="3">Needs major repairs</option>
                                            <option data-value="4" value="4">Under construction</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="floor_material">Floor Material
                                    </label>
                                    <div class="col-md-12">
                                        <select id="floor_material" name="floor_material"
                                                v-model="data.classrooms.floor_material" class="form-control" size="1">
                                            <option value="" disabled="" selected="">Select one</option>
                                            <option data-value="1" value="1">Mud / Earth</option>
                                            <option data-value="2" value="2">Concrete</option>
                                            <option data-value="3" value="3">Wood</option>
                                            <option data-value="4" value="4">Tile / Terrazzo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Wall Material
                                    </label>
                                    <div class="col-md-12">
                                        <select id="wall_material" name="wall_material"
                                                v-model="data.classrooms.wall_material" class="form-control" size="1">
                                            <option value="" disabled="" selected="">Select one</option>
                                            <option data-value="1" value="1">Mud</option>
                                            <option data-value="2" value="2">Cement / Concrete</option>
                                            <option data-value="3" value="3">Wood / Bamboo</option>
                                            <option data-value="4" value="4">Burnt Bricks</option>
                                            <option data-value="5" value="5">Iron Sheets</option>
                                            <option data-value="6" value="6">Stone</option>
                                            <option data-value="7" value="7">No walls/Dwarf Walls</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="roof_material">Roof Material
                                    </label>
                                    <div class="col-md-12">
                                        <select id="roof_material" name="roof_material"
                                                v-model="data.classrooms.roof_material" class="form-control" size="1">
                                                <option value="" disabled="" selected="">Select one</option>
                                                <option data-value="1" value="1">Mud</option>
                                                <option data-value="2" value="2">Cement / Concrete</option>
                                                <option data-value="3" value="3">Wood / Bamboo</option>
                                                <option data-value="4" value="4">Ceramic Tiles</option>
                                                <option data-value="5" value="5">Iron Sheets</option>
                                                <option data-value="6" value="6">Asbestos</option>
                                                <option data-value="7" value="7">No roof</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Seatings
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio name="seatings" v-model="data.classrooms.seatings">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="seatings" v-model="data.classrooms.seatings">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Blackboard
                                    </label>
                                    <div class="col-md-12">
                                        <div class="radio">
                                            <b-form-radio name="blackboard" v-model="data.classrooms.blackboard">
                                                Yes
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio name="blackboard" v-model="data.classrooms.blackboard">
                                                No
                                            </b-form-radio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a class="btn btn-outline-primary pull-right" @click="addMore('seater')">+ ADD MORE</a>
                            <div>
                                ADDITIONAL CLASS INFORMATION
                            </div>
                            <small>
                                Indicate seating capacity by grade and type of seating, counting only seats having a
                                writing desk. e.g. if one 3 seater was available, the capacity is 3 Pupils not 1.
                            </small>
                        </div>
                        <div class="row odd-row">
                            <div v-for="(seater, index) in data.classrooms.seater" class="col-sx-12 col-md-6">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Class Level
                                            </label>
                                            <select class="form-control" v-model="data.classrooms.seater[index].class">
                                                <option value="">Select Class</option>
                                                <option value="1">Pry 1</option>
                                                <option value="2">Pry 2</option>
                                                <option value="3">Pry 3</option>
                                                <option value="4">Pry 4</option>
                                                <option value="5">Pry 5</option>
                                                <option value="6">Pry 6</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Seater</label>
                                            <select v-model="data.classrooms.seater[index].type" class="form-control">
                                                <option value="">Select Seater</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Quatity
                                            </label>
                                            <input type="number" min="0" class="form-control" name="quantity"
                                                   v-model="data.classrooms.seater[index].quantity">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </tab-content>
                <tab-content title="School Textbooks" icon="fafa-check">
                    <form method="" class="form-horizontal">
                        <div>
                             <a class="btn btn-outline-primary pull-right" @click="addMore('pupil')">+ ADD MORE</a>
                            <div>
                                PUPILS TEXTBOOKS SUPPLIED
                            </div>
                            <div>
                                State the number of Pupils' Textbooks supplied to the school in the current academic
                                year.
                            </div>
                        </div>
                        <div class="row odd-row">
                            <div class="col-sx-12 col-md-6" v-for="(pupil, index) in data.textbooks.pupil">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Subject Area
                                            </label>
                                                <input type="text" class="form-control" name="pupil_subject_area"
                                                       v-model="data.textbooks.pupil[index].subject">
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-4 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Class Level
                                            </label>
                                            <select class="form-control" v-model="data.textbooks.pupil[index].level">
                                                <option value="">Select Class</option>
                                                <option value="1">Pry 1</option>
                                                <option value="2">Pry 2</option>
                                                <option value="3">Pry 3</option>
                                                <option value="4">Pry 4</option>
                                                <option value="5">Pry 5</option>
                                                <option value="6">Pry 6</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-2 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Quantity Supplied
                                            </label>
                                                <input type="number" min="0" class="form-control"
                                                       name="pupil_quantity_supplied[]"
                                                       v-model="data.textbooks.pupil[index].quantity">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                             <a class="btn btn-outline-primary pull-right" @click="addMore('teacher')">+ ADD MORE</a>
                            <div>
                                TEACHERS' TEXTBOOKS SUPPLIED
                            </div>
                            <div>
                                State the number of Teachers' Textbooks supplied to the school in the current academic
                                year.
                            </div>
                        </div>
                        <div class="row even-row">
                            <div class="col-sx-12 col-md-6" v-for="(teacher, index) in data.textbooks.teacher">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div class="form-group p-10">
                                            <label class="control-label col-md-12" for="text">Subject Area
                                            </label>
                                                <input type="text" class="form-control" id="text"
                                                       name="teacher_subject_area"
                                                       v-model="data.textbooks.teacher[index].subject">
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-4 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Class Level
                                            </label>
                                                <select class="form-control" v-model="data.textbooks.teacher[index].level">
                                                    <option value="">Select Class</option>
                                                    <option value="1">Pry 1</option>
                                                    <option value="2">Pry 2</option>
                                                    <option value="3">Pry 3</option>
                                                    <option value="4">Pry 4</option>
                                                    <option value="5">Pry 5</option>
                                                    <option value="6">Pry 6</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-2 col-md-3">
                                        <div class="form-group p-10">
                                            <label class="control-label" for="text">Quantity Supplied
                                            </label>
                                                <input type="number" min="0" class="form-control"
                                                       name="teacher_quantity_supplied"
                                                       v-model="data.textbooks.teacher[index].quantity">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </tab-content>
                <tab-content title="School Based Mangement Committe" icon="fafa-check">
                    <form method="" class="form-horizontal">
                        <div>
                             <a class="btn btn-outline-primary pull-right" @click="addMore('members')">+ ADD MORE</a>
                            <div>
                                MEMBERSHIP DETAILS
                            </div>
                            <div>
                                Provide the following details about the membership details of the SBMC of this school.
                            </div>
                        </div>
                        <div class="row odd-row" v-for="(members, index) in data.sbmc.members">
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Name
                                    </label>
                                        <input type="text" class="form-control" name="member_name"
                                               v-model="data.sbmc.members[index].name" placeholder="membership Name">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Position
                                    </label>
                                        <input type="text" class="form-control" name="member_position[]"
                                               v-model="data.sbmc.members[index].position" placeholder="School Name">

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Phone Number
                                    </label>
                                        <input type="text" class="form-control" name="member_phone_number[]"
                                               v-model="data.sbmc.members[index].phone_number"
                                               placeholder="School Name">

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Email
                                    </label>
                                        <input type="email" class="form-control" name="member_email"
                                               v-model="data.sbmc.members[index].email" placeholder="School Name">

                                </div>
                            </div>
                        </div>
                        <div>
                             <a class="btn btn-outline-primary pull-right" @click="addMore('projects')">+ ADD MORE</a>
                            <div>
                                PROJECTS DETAILS
                            </div>
                            <div>
                                Indicate projects overseen by the SBMC of this school, whether ongoing or completed.
                            </div>
                        </div>
                        <div class="row odd-row" v-for="(project, index) in data.sbmc.projects">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Project Brief
                                    </label>
                                        <input type="text" class="form-control" name="project_brief"
                                               v-model="data.sbmc.projects[index].brief" placeholder="">

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Poject Cost
                                    </label>
                                        <input type="text" class="form-control" name="project_cost[]"
                                               v-model="data.sbmc.projects[index].cost" placeholder="">

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Source of Funding
                                    </label>
                                        <input type="text" class="form-control" name="source_of_funding[]"
                                               v-model="data.sbmc.projects[index].funding" placeholder="">

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-2">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">Year
                                    </label>
                                        <input type="text" class="form-control" name="project_year[]"
                                               v-model="data.sbmc.projects[index].year" placeholder="">

                                </div>
                            </div>
                        </div>
                    </form>
                </tab-content>
            </form-wizard>
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
    import Multiselect from 'vue-multiselect';

    Vue.use(VueFormWizard, options);
    export default {
        name: 'school-add',
        components: {
            vueDropzone: vue2Dropzone,
            Multiselect,
        },
        data() {
            return {
                lgas: [],
                wards: [],
                lgasInfo:[],
                wardKeys: {}, // capture the ward id and ward name of the selected LGA
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    autoProcessQueue: false,
                    // maxFilesize: 0.5,
                    maxFiles: 1,
                    headers: {"My-Awesome-Header": "header value"}
                },
                data: {
                    lga_ward_id: 1,
                    data: {
                        school_name: 'Saint Mathew Nur and pry school',
                        estblished: '2008',
                        average_distance: '1',
                        lga: 'Ado',
                        ward: '',
                        village_town: 'Ado',
                        school_location: 1,
                        school_email_address: '',
                        school_phone: '080',
                        school_website: 'www.sbemis.com',
                        school_geolocation: '9.182 / -39.140625',
                        school_category_id: 1,
                        name_of_proprietor: 'SBMC',
                        private_membership_status: '1',
                        private_membership_name: 'Ado',
                        school_type_id: 2,
                        school_ownership: '1',
                        education_levels: "PRY",
                        multigrade: 0,
                        shifts: '1',
                        management_committee: 1,
                        pta_pf: 0,
                        development_plan: 1,
                        school_grants: '1',
                        // date_last_inspection: '1',
                        // num_of_inspection: '1',
                        // inspection_auth: '1',
                        school_address: 'ado',
                    },
                    facilities: {
                        boarding: '1',
                        school_library: '1',
                        security_guard: '1',
                        school_building_type: '1',
                        school_building_ownership: '1',
                        school_fence_condition: '1',
                        play_rooms: '1',
                        play_facilities: [],
                        learning_materials: [],
                        power_source: [],
                        health_facilities: [],
                        water_supply: [],
                        toilet_facilities: [],
                        facilities_sharing: [],
                        facilities_shared: [],
                    },
                    classrooms: {
                        classrooms_year_constructed: '1',
                        classrooms_length: '1',
                        classrooms_width: '10',
                        number_of_room: '12',
                        classrooms_condition: '',
                        floor_material: '2',
                        wall_material: '',
                        roof_material: '',
                        seatings: '',
                        blackboard: '',
                        seater: [{type: "", class: '', quantity: ''}],
                    },
                    textbooks: {
                        pupil: [{subject: '', level: '', quantity: ''}],
                        teacher: [{subject: '', level: '', quantity: ''}],
                    },
                    sbmc: {
                        members: [{name: '', position: '', phone_number: '', email: ''}],
                        projects: [{brief: '', cost: '', funding: '', year: ''}]
                    },
                    facilities_details: {},
                    class_room: {
                        total_classrooms: 100,
                        good: 50,
                        minor_repair: 30,
                        major_repair: 20,
                        unuseable: 0
                    },
                    other_room: {
                        staff_rooms: 2,
                        offices: 10,
                        libraries: 2,
                        labouratories: 5,
                        stores: 4,
                        others: 5
                    },
                    source_drinking: {
                        pipeborne: 1,
                        borehole: 1,
                        well: 1,
                        other: 0,
                        no_source: 0
                    },
                    source_power: {
                        phcn: 1,
                        generator: 1,
                        solar: 0,
                        no_source: 0
                    },
                    health_facilities: {
                        clinic: 1,
                        first_aid_kit: 1,
                        no_facility: 0
                    },
                    fence_wall: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    toilet: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    computer: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    water_source: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    labouratory: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    classrooms: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    library: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    bathtooms: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    dinning_room: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    kitchen: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    offices: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    bording_hotels: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                    staff_rooms: { good: 0, minor_repair: 0, major_repair: 0, no_fence: 0 },
                },
                users: [
                    { name: 'Patrick' },
                    { name: 'Evan' },
                    { name: 'Christian' },
                    { name: 'Daniel' }
                ],
                selectedSharedFacilities: [],
            }
        },
        methods: {
            upload_pic() {
                this.$refs.user_image.processQueue();
            },
            uploaded() {
                console.log("uploaded");
            },
            clearqueue(file) {
                if (this.$refs.user_image.dropzone.files.length > 1) {
                    this.$refs.user_image.dropzone.removeFile(this.old_file);
                }
                this.old_file = file;
            },
            onSubmit: function () {
                this.$school.addSchool(this.data).then(response => {

                })
                // alert('Yay. Done!');
            },
            addMore(elementGroup) {
                switch (elementGroup) {
                    case 'seater':
                        this.data.classrooms.seater.push({type: "", class: '', quantity: ''});
                        break;
                    case 'pupil':
                        this.data.textbooks.pupil.push({subject: '', level: '', quantity: ''});
                        break;
                    case 'teacher':
                        this.data.textbooks.teacher.push({subject: '', level: '', quantity: ''});
                        break;
                    case 'members':
                        this.data.sbmc.members.push({name: '', position: '', phone_number: '', email: ''});
                        break;
                    case 'projects':
                        this.data.sbmc.projects.push({brief: '', cost: '', funding: '', year: ''});
                        break;
                    default:
                        break;

                }
            },
            getWard(){
                this.wards = []; // clear previous ward elements
                this.wardKeys = [];

                let _lga = this.lgasInfo.filter(item => {
                    return (item.id === this.lgas.indexOf(this.data.data.lga) + 1);
                });
                _lga[0].wards.forEach(item => {
                    this.wards.push(item.name);
                    this.wardKeys[item.id] = item.name;
                })
            } 
        },
        mounted: function () {
            this.$lga.getLgas().then(data => {
                data.forEach(item => {
                    // console.log(item);
                    this.lgasInfo.push(item);
                    this.lgas.push(item.name);
                });
                console.log(this.lgasInfo);
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>