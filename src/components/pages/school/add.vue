<template>
    <div>
        <b-card header="School Information" header-tag="h4" class="bg-info-card">
         <form-wizard @on-complete="onComplete" color="#e67e22">
            <h2 slot="title">title</h2> 
            <tab-content title="Basic School Inionformation" icon="fa fa-user">
                <form method="" class="form-horizontal">
                    <div class="row odd-row">
                        <div class="col-md-6">
                            <div class="form-group p-10">
                                <label class="control-label col-md-8" for="text">School Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" v-model="data.basic_info.school_name" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="year_established">Year Established
                                </label>
                                <div class="col-md-12">
                                    <select id="year_established" v-model="data.basic_info.year_established" name="year_established" class="form-control" size="1">
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
                        <div class="col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="school_dist">Distance to Catchment Area
                                </label>
                                <div class="col-md-12">
                                    <input type="number" v-model="data.basic_info.school_distance" class="form-control" id="text" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-8" for="lga">LGA
                                </label>
                                <div class="col-md-12">
                                    <select id="lga" v-model="data.basic_info.lga" name="lga" class="form-control" size="1">
                                        <option value="">
                                            Select LGA
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
                                <label class="control-label col-md-12" for="ward">Ward
                                </label>
                                <div class="col-md-12">
                                    <select id="ward" v-model="data.basic_info.ward" name="ward" class="form-control" size="1">
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
                                <label class="control-label" for="village_town">Village/Town
                                </label>
                                <div class="col-md-12">
                                    <input type="text" v-model="data.basic_info.village_town" class="form-control" id="village_town" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="school_location">School Location
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_location" v-model="data.basic_info.school_location">
                                            Rural
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_location" v-model="data.basic_info.school_location">
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
                                    <input type="email" v-model="data.basic_info.school_email_address" class="form-control" id="school_email_address" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-5">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="school_phone">Phone Munber
                                </label>
                                <div class="col-md-12">
                                    <input type="number" v-model="data.basic_info.school_phone" class="form-control" id="school_phone" placeholder="Enter value">
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
                                    <input type="url" v-model="data.basic_info.school_website" class="form-control" name="school_website" value="http://www.example.com/" id="url">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Map Coordinate (Lat, Long)
                                </label>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" v-model="data.basic_info.school_long" class="form-control" id="school_long" placeholder="e.g. 7.6408">
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" v-model="data.basic_info.school_lat" class="form-control" id="school_lat" placeholder="e.g. 5.2031">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">School Category
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_category_id" v-model="data.basic_info.school_category_id">
                                            Public
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_category_id" v-model="data.basic_info.school_category_id">
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
                                    <input type="text" v-model="data.basic_info.name_of_proprietor" class="form-control" id="name_of_proprietor" placeholder="Propritor Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Private Membership
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio name="private_membership_status" v-model="data.basic_info.private_membership_status" checked="false">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio name="private_membership_status" v-model="data.basic_info.private_membership_status">
                                            No
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="private_membership_name">Private Memebership's Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" v-model="data.basic_info.private_membership_name" class="form-control" id="private_membership_name" placeholder="PPrivate Memebership's Name">
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
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
                                                Regular
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
                                                Islamiyya Integrated
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
                                                Montessori
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
                                                Special Needs
                                            </b-form-radio>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
                                                Vocational Training Center
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
                                                Science and Technology College
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_type_id" v-model="data.basic_info.school_type_id">
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
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                Community
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                Cooperation
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                Federal Government
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                State Government
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                Local Government
                                            </b-form-radio>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                Faith Based
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                Individual
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
                                                NGO
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="school_ownership" v-model="data.basic_info.school_ownership">
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
                                        <b-form-radio checked="false" name="education_levels" v-model="data.basic_info.education_levels">
                                            Primary
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="education_levels" v-model="data.basic_info.education_levels">
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
                                        <b-form-radio checked="false" name="multigrade" v-model="data.basic_info.multigrade">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="multigrade" v-model="data.basic_info.multigrade">
                                            No
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Shift
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="shift" v-model="data.basic_info.shift">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="shift" v-model="data.basic_info.shift">
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
                                <label class="control-label col-md-12" for="management_committee">Management Committee
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="management_committee" v-model="data.basic_info.management_committee">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="management_committee" v-model="data.basic_info.management_committee">
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
                                        <b-form-radio checked="false" name="pta" v-model="data.basic_info.pta">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="pta" v-model="data.basic_info.pta">
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
                                        <b-form-radio checked="false" name="development_plan" v-model="data.basic_info.development_plan">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="development_plan" v-model="data.basic_info.development_plan">
                                            No
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">School Grants
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="grants" v-model="data.basic_info.grants">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="grants" v-model="data.basic_info.grants">
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
                                        <input type="date" v-model="data.basic_info.date_last_inspection" class="form-control" id="date" value="yyyy-mm-dd" aria-selected="true">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="um_of_inspection">Number of Inspections
                                </label>
                                <div class="col-md-12">
                                    <input type="number" v-model="data.basic_info.num_of_inspection" class="form-control" id="num_of_inspection" placeholder="Number of Inspections">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Inspection Authority 
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="insp_auth" v-model="data.basic_info.inspection_auth">
                                            Federal Govt
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="insp_auth" v-model="data.basic_info.inspection_auth">
                                            State Govt
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="insp_auth" v-model="data.basic_info.inspection_auth">
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
                                    <textarea rows="4" v-model="data.basic_info.school_address" class="form-control resize_vertical" id="school_address" placeholder="School Address"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-lg-12 col-12 mt-4">
                                <form class="form-horizontal form-validation" role="form" method="POST" action="" @submit.prevent="upload_pic">
                                    <div class="dropzone_wrapper">
                                        <vue-dropzone ref="user_image" id="dropzone" :options="dropzoneOptions" @vdropzone-success="uploaded"  @vdropzone-file-added="clearqueue"></vue-dropzone>
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
                                        <b-form-radio checked="false" name="boarding" v-model="data.facilities_info.boarding">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="boarding" v-model="data.facilities_info.boarding">
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
                                        <b-form-radio checked="false" name="sch_library" v-model="data.facilities_info.school_library">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_library" v-model="data.facilities_info.school_library">
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
                                    <input type="number" v-model="data.facilities_info.security_guard" class="form-control" id="text" placeholder="0">
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
                                        <b-form-radio checked="false" name="school_building_type" v-model="data.facilities_info.school_building_type">
                                            <div>Proposely built</div>
                                            <div>Proposely built for educational use</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_building_type" v-model="data.facilities_info.school_building_type">
                                            <div>Multiple Class in Rooms</div>
                                            <div>Converted building, rooms holding multiple classes (no walls between).</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_building_type" v-model="data.facilities_info.school_building_type">
                                            <div>One Class per Room</div>
                                            <div>Converted building, one class per room (with walls separating).</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_building_type" v-model="data.facilities_info.school_building_type">
                                            <div>Residential Space</div>
                                            <div>Converted space in a house/apartment (residential).</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_building_type" v-model="data.facilities_info.school_building_type">
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
                                        <b-form-radio checked="false" name="school_building_ownership" v-model="data.facilities_info.school_building_ownership">
                                            Owned
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="school_building_ownership" v-model="data.facilities_info.school_building_ownership">
                                            Rented
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="school_building_ownership" v-model="data.facilities_info.school_building_ownership">
                                            Leased
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="school_building_ownership" v-model="data.facilities_info.school_building_ownership">
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
                                        <b-form-radio name="school_fence_condition" v-model="data.facilities_info.school_fence_condition">
                                            No Fence/Wall
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="school_fence_condition" v-model="data.facilities_info.school_fence_condition">
                                            Fence is in good Condition
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="school_fence_condition" v-model="data.facilities_info.school_fence_condition">
                                            Fence needs minor repairs
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="school_fence_condition" v-model="data.facilities_info.school_fence_condition">
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
                                        <b-form-radio name="false" v-model="data.facilities_info.play_rooms">
                                            None
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="false" v-model="data.facilities_info.play_rooms">
                                            Yes with Play Rugs
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="false" v-model="data.facilities_info.play_rooms">
                                            Yes with Sand Floor
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="false" v-model="data.facilities_info.play_rooms">
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
                                        <b-form-checkbox name="play_facilities" v-model="data.facilities_info.play_facilities">
                                            PlayRoom
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="play_facilities" v-model="data.facilities_info.play_facilities">
                                            Merry Go Round
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="play_facilities" v-model="data.facilities_info.play_facilities">
                                            Swing
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="play_facilities" v-model="data.facilities_info.play_facilities">
                                            Ladder Slide
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="play_facilities" v-model="data.facilities_info.play_facilities">
                                            See Saw
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="play_facilities" v-model="data.facilities_info.play_facilities">
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
                                        <b-form-checkbox name="learning_materials" v-model="data.facilities_info.learning_materials">
                                            Charts
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="learning_materials" v-model="data.facilities_info.learning_materials">
                                            Posters
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="learning_materials" v-model="data.facilities_info.learning_materials">
                                            Toys
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="learning_materials" v-model="data.facilities_info.learning_materials">
                                            Audio/Visua(Radio, TV, DVD)
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="learning_materials" v-model="data.facilities_info.learning_materials">
                                            Word Puzzle Box
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="learning_materials" v-model="data.facilities_info.learning_materials">
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
                                        <b-form-checkbox name="power_source" v-model="data.facilities_info.power_source">
                                            PHCN/NEPA
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="power_source" v-model="data.facilities_info.power_source">
                                            Generator
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="power_source" v-model="data.facilities_info.power_source">
                                            Solar
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="power_source" v-model="data.facilities_info.power_source">
                                            Inverter
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="power_source" v-model="data.facilities_info.power_source">
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
                                        <b-form-checkbox name="health_facilities" v-model="data.facilities_info.health_facilities">
                                            Health Clinic
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="health_facilities" v-model="data.facilities_info.health_facilities">
                                            First Aid Kit
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="health_facilities" v-model="data.facilities_info.health_facilities">
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
                                        <b-form-checkbox name="water_supply" v-model="data.facilities_info.water_supply">
                                            Pipe-borne
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="water_supply" v-model="data.facilities_info.water_supply">
                                            Borehole
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="water_supply" v-model="data.facilities_info.water_supply">
                                            Well
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="water_supply" v-model="data.facilities_info.water_supply">
                                            Others
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="water_supply" v-model="data.facilities_info.water_supply">
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
                                        <b-form-checkbox name="toilet_facilities" v-model="data.facilities_info.toilet_facilities">
                                            Pit Latrine
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="toilet_facilities" v-model="data.facilities_info.toilet_facilities">
                                            Bucket System
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox name="toilet_facilities" v-model="data.facilities_info.toilet_facilities">
                                            Water Cistern
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox name="toilet_facilities" v-model="data.facilities_info.toilet_facilities">
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
                                    <input type="text" class="form-control" id="text" name="facilities_sharing" v-model="data.facilities_info.facilities_sharing">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Facilities Shared
                                </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                                Toilet
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                                Water Source
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Classrooms
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Play Ground
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                                WhiteBoards
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Boarding Hostels
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Kitchen
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox cname="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                                Bathroooms
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Computer
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Laboratory
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Library
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Wash Hand Basin
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                                Staff Room
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Offices
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
                                            Dinning Room
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox name="facilities_shared" v-model="data.facilities_info.facilities_shared">
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
            <tab-content title="School Classroom Details" icon="fafa-check">
                <form method="" class="form-horizontal">
                    <div>
                        <div>
                            INFORMATION ON CLASSROOMS/PLAYROOMS
                        </div>
                        <div>
                            Record information for individual classroom, regardless of whether or not they are in use.
                        </div>
                    </div>
                    <div class="row odd-row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Year Constructed</label>
                                <div class="col-md-12">
                                    <select id="example-select" name="classroom_year_constructed" v-model="data.classroom_details.classroom_year_constructed" class="form-control" size="1">
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
                                <label class="control-label" for="text">Length in (m)
                                </label>
                                <div class="col-md-12">
                                    <input type="number" class="form-control" id="text" name="classroom_length" v-model="data.classroom_details.classroom_length" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Width in (m)
                                </label>
                                <div class="col-md-12">
                                    <input type="number" class="form-control" id="text" name="classroom_width" v-model="data.classroom_details.classroom_width" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Number of Rooms
                                </label>
                                <div class="col-md-12">
                                    <input type="number" class="form-control" name="number_of_rooms" v-model="data.classroom_details.number_of_rooms" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Select Condition
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" name="classroom_condition" v-model="data.classroom_details.classroom_condition" class="form-control" size="1">
                                        <option value="">
                                            Select Condition
                                        </option>
                                        <option value="1">1930</option>
                                        <option value="2">1931</option>
                                        <option value="3">1932</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Floor Material
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" name="floor_material" v-model="data.classroom_details.floor_material" class="form-control" size="1">
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
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Wall Material
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" name="wall_material" v-model="data.classroom_details.wall_material" class="form-control" size="1">
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
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Roof Material
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" name="roof_material" v-model="data.classroom_details.roof_material" class="form-control" size="1">
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
                                <label class="control-label col-md-12" for="text">Seatings
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio name="seatings" v-model="data.classroom_details.seatings">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="seatings" v-model="data.classroom_details.seatings">
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
                                        <b-form-radio name="blackboard" v-model="data.classroom_details.blackboard">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio name="blackboard" v-model="data.classroom_details.blackboard">
                                            No
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            ADDITIONAL CLASS INFORMATION
                        </div>
                        <div>
                            Indicate seating capacity by grade and type of seating, counting only seats having a writing desk. e.g. if one 3 seater was available, the capacity is 3 Pupils not 1.
                        </div>
                    </div>
                    <div class="row odd-row">
                        <div class="col-sx-12 col-md-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Class Level
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="classroom_level[]" v-model="data.classroom_details.classroom_level[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">1 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater1[]" v-model="data.classroom_details.seater1[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">2 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater2[]" v-model="data.classroom_details.seater2[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">3 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater3[]" v-model="data.classroom_details.seater3[0]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sx-12 col-md-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Class Level
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="classroom_level[]" v-model="data.classroom_details.classroom_level[1]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">1 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater1[]" v-model="data.classroom_details.seater1[0]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">2 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater2[]" v-model="data.classroom_details.seater2[1]">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">3 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" name="seater3[]" v-model="data.classroom_details.seater3[2]">
                                    </div>
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
                        <div>
                            PUPILS TEXTBOOKS SUPPLIED
                        </div>
                        <div>
                            State the number of Pupils' Textbooks supplied to the school in the current academic year.
                        </div>
                    </div>
                        <div class="row odd-row">
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="pupil_subject_area[]" v-model="data.school_textbooks.pupil_subject_area[0]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="pupil_class_level[]" v-model="data.school_textbooks.pupil_class_level[0]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" name="pupil_quantity_supplied[]" v-model="data.school_textbooks.pupil_quantity_supplied[0]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" name="pupil_subject_area[]" v-model="data.school_textbooks.pupil_subject_area[1]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="pupil_class_level[]" v-model="data.school_textbooks.pupil_class_level[1]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" name="pupil_quantity_supplied[]" v-model="data.school_textbooks.pupil_quantity_supplied[1]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            TEACHERS' TEXTBOOKS SUPPLIED
                        </div>
                        <div>
                            State the number of Teachers' Textbooks supplied to the school in the current academic year.
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                             <input type="text" class="form-control" id="text" name="teacher_subject_area[]" v-model="data.school_textbooks.teacher_subject_area[0]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="teacher_class_level[]" v-model="data.school_textbooks.teacher_class_level[0]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" name="teacher_quantity_supplied[]" v-model="data.school_textbooks.teacher_quantity_supplied[0]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" name="teacher_subject_area[]" v-model="data.teacher_subject_area[1]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" name="teacher_class_level[]" v-model="data.teacher_class_level[1]">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" name="teacher_quantity_supplied[]" v-model="data.teacher_quantity_supplied[1]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </tab-content>
            <tab-content title="School Facilities Details" icon="fafa-check">
                <form method="" class="form-horizontal">
                    <div>
                        <div>
                            MEMBERSHIP DETAILS
                        </div>
                        <div>
                            Provide the following details about the membership details of the SBMC of this school.
                        </div>
                    </div>
                    <div class="row odd-row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="member_name[]" v-model="data.sbmc.member_name[0]" placeholder="membership Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Position
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="member_position[]" v-model="data.sbmc.member_position[0]" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Phone Number
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="member_phone_number[]" v-model="data.sbmc.member_phone_number[0]" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Email
                                </label>
                                <div class="col-md-12">
                                    <input type="email" class="form-control" name="member_email[]" v-model="data.sbmc.member_email[0]" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="member_name[]" v-model="data.sbmc.member_name[1]" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Position
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="member_name[]" v-model="data.sbmc.member_name[1]" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Phone Number
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="member_phone_number[]" v-model="data.sbmc.member_phone_number[1]" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Email
                                </label>
                                <div class="col-md-12">
                                    <input type="email" class="form-control" name="member_email[]" v-model="data.sbmc.member_email[1]" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            PROJECTS DETAILS
                        </div>
                        <div>
                            Indicate projects overseen by the SBMC of this school, whether ongoing or completed.
                        </div>
                    </div>
                    <div class="row odd-row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Project Brief
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control"name="project_brief[]" v-model="data.sbmc.project_brief[0]" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Poject Cost
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="project_cost[]" v-model="data.sbmc.project_cost[0]" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Source of Funding
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="source_of_funding[]" v-model="data.sbmc.source_of_funding[0]" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Year
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="project_year[]" v-model="data.sbmc.project_year[0]" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </tab-content>


             <tab-content title="School Based Mangement Committe" icon="fafa-check">
                <div class="row">
                    <div class="col-lg-12">
                        <b-card header="Responsive Table" header-tag="h4" class="bg-primary-card">
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>FACILITY TYPE</th>
                                            <th>USABLE</th>
                                            <th>NON USABLE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Toilets</td>
                                            <td>Durgan-Sauer23@yahoo.com</td>
                                            <td>032-563-1943</td>
                                        </tr>
                                        <tr>
                                            <td>Computer</td>
                                            <td>HickleLLC.Cremin62@hotmail.com</td>
                                            <td>158-351-5915</td>
                                        </tr>
                                        <tr>
                                            <td>Water Source</td>
                                            <td>Padberg-Cronin.Kunde10@hotmail.com</td>
                                            <td>265-460-4774</td>
                                        </tr>
                                        <tr>
                                            <td>Labouratory</td>
                                            <td>Lakin-Cronin_Batz61@hotmail.com</td>
                                            <td>443-924-7214</td>
                                        </tr>
                                        <tr>
                                            <td>Classrooms</td>
                                            <td>Bednar-Padberg22@yahoo.com</td>
                                            <td>700-808-9992</td>
                                        </tr>
                                        <tr>
                                            <td>Library</td>
                                            <td>Gibson-DuBuque_Buckridge@yahoo.com</td>
                                            <td>372-126-7393</td>
                                        </tr>
                                        <tr>
                                            <td>Play Ground</td>
                                            <td>SchroederInc_Grimes98@gmail.com</td>
                                            <td>379-212-1752</td>
                                        </tr>
                                        <tr>
                                            <td>Wash Hand Basin</td>
                                            <td>Durgan-Sauer23@yahoo.com</td>
                                            <td>032-563-1943</td>
                                        </tr>
                                        <tr>
                                            <td>White Board</td>
                                            <td>HickleLLC.Cremin62@hotmail.com</td>
                                            <td>158-351-5915</td>
                                        </tr>
                                        <tr>
                                            <td>Staff Room</td>
                                            <td>Padberg-Cronin.Kunde10@hotmail.com</td>
                                            <td>265-460-4774</td>
                                        </tr>
                                        <tr>
                                            <td>Bording Hostels</td>
                                            <td>Lakin-Cronin_Batz61@hotmail.com</td>
                                            <td>443-924-7214</td>
                                        </tr>
                                        <tr>
                                            <td>Offices</td>
                                            <td>Bednar-Padberg22@yahoo.com</td>
                                            <td>700-808-9992</td>
                                        </tr>
                                        <tr>
                                            <td>Kitchens</td>
                                            <td>Gibson-DuBuque_Buckridge@yahoo.com</td>
                                            <td>372-126-7393</td>
                                        </tr>
                                        <tr>
                                            <td>Dining Room</td>
                                            <td>SchroederInc_Grimes98@gmail.com</td>
                                            <td>379-212-1752</td>
                                        </tr>
                                        <tr>
                                            <td>Bathrooms</td>
                                            <td>Durgan-Sauer23@yahoo.com</td>
                                            <td>032-563-1943</td>
                                        </tr>
                                        <tr>
                                            <td>Play Rooms</td>
                                            <td>HickleLLC.Cremin62@hotmail.com</td>
                                            <td>158-351-5915</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card>
                    </div>
                </div>

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
Vue.use(VueFormWizard, options);
export default {
    data() {
        return {
            dropzoneOptions:{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                autoProcessQueue:false,
                // maxFilesize: 0.5,
                maxFiles:1,
                headers: { "My-Awesome-Header": "header value" }
            },
            data: {
                basic_info: {
                    school_name: '',
                    year_estblished: '',
                    school_distance: '',
                    lga: '',
                    ward: '',
                    village_town: '',
                    school_location: '',
                    school_email_address: '',
                    school_phone: '',
                    school_website: '',
                    school_long: '',
                    school_lat: '',
                    school_category_id: '',
                    name_of_proprietor: '',
                    private_membership_status: '',
                    private_membership_name: '',
                    school_type_id: '',
                    school_ownership: '',
                    education_levels: '',
                    multigrade: '',
                    shift: '',
                    management_committee: '',
                    pta: '',
                    development_plan: '',
                    grants: '',
                    date_last_inspection: '',
                    num_of_inspection: '',
                    inspection_auth: '',
                    school_address: '',
                },
                facilities_info: {
                    boarding: '',
                    school_library: '',
                    security_guard: '',
                    school_building_type: '',
                    school_building_ownership: '',
                    school_fence_condition: '',
                    play_rooms: '',
                    play_facilities: '',
                    learning_materials: '',
                    power_source: '',
                    health_facilities: '',
                    water_supply: '',
                    toilet_facilities: '',
                    facilities_sharing: '',
                    facilities_shared: '',
                },
                classroom_details: {
                    classroom_year_constructed: '',
                    classroom_length: '',
                    classroom_width: '',
                    number_of_room: '',
                    classroom_condition: '',
                    floor_material: '',
                    wall_material: '',
                    roof_material: '',
                    seatings: '',
                    blackboard: '',
                    classroom_level: ['', ''],
                    seater1: ['', ''],
                    seater2: ['', ''],
                    seater3: ['', ''],
                },
                school_textbooks: {
                    pupil_subject_area: ['', ''],
                    pupil_class_level: ['', ''],
                    pupil_quantity_supplied: ['', ''],
                    teacher_subject_area: ['', ''],
                    teacher_class_level: ['', ''],
                    teacher_quantity_supplied: ['', ''],
                },
                sbmc: {
                    member_name: ['', ''],
                    member_position: ['', ''],
                    member_phone_number: ['', ''],
                    member_email: ['', ''],
                    project_brief: ['', ''],
                    project_cost: ['', ''],
                    source_of_funding: ['', ''],
                    project_year: ['', ''],
                },
                facilities_details: {

                }

                }
        }
    },
    components: {
        vueDropzone: vue2Dropzone,
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
       onComplete: function(){
            alert('Yay. Done!');
        } 
    },
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style type="text/css" scoped>
#color {
    height: 35px;
}
    /deep/ .form-control:disabled{
        cursor: not-allowed;
    }
    .disabled{
        cursor:not-allowed;
    }
.form-control:active, .input-group .form-control:hover{
    z-index: 1;
}

.dropzone_wrapper {
    width: 100%;
}
.align-left{
    float: left;
}
    .align-right{
        float: right;
    }

tab-content {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}
.even-row{background-color:#fafafa;border-top:1px dashed #959DCC;border-bottom:1px dashed #959DCC;min-height:62px;padding:8px 0;}
.odd-row{padding:8px 0;}
form .odd-row:first-of-type{
    border-top:1px dashed #959DCC;
}
.form-group label{font-size:.8rem!important; letter-spacing:1px; color:#684348!important;}
</style>