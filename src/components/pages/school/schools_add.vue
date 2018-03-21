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
                                    <input type="text" class="form-control" v-model="sch_name" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Year Established
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" v-model="year_estbl" name="example-select" class="form-control" size="1">
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
                                <label class="control-label" for="text">Distance to Catchment Area 
                                </label>
                                <div class="col-md-12">
                                    <input type="number" v-model="sch_dist" class="form-control" id="text" placeholder="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-8" for="text">LGA
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" v-model="lga" name="example-select" class="form-control" size="1">
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
                                <label class="control-label col-md-12" for="text">Ward
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" v-model="ward" name="example-select" class="form-control" size="1">
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
                                <label class="control-label" for="text">Village/Town
                                </label>
                                <div class="col-md-12">
                                    <input type="text" v-model="town" class="form-control" id="text" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">School Location
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_loc" v-model="sch_loc">
                                            Rural
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_loc" v-model="sch_loc">
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
                                <label class="control-label col-md-8" for="text">Email
                                </label>
                                <div class="col-md-12">
                                    <input type="email" v-model="sch_email" class="form-control" id="input_Email" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-5">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Phone Munber
                                </label>
                                <div class="col-md-12">
                                    <input type="number" v-model="sch_phone" class="form-control" id="number" placeholder="Enter value">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row even-row">
                        <div class="col-xs-12 col-sm-5">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Website
                                </label>
                                <div class="col-md-12">
                                    <input type="url" v-model="sch_website" class="form-control" name="url" value="http://www.example.com/" id="url">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Map Coordinate (Lat, Long)
                                </label>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" v-model="sch_long" class="form-control" id="text" placeholder="e.g. 7.6408">
                                    </div>
                                    <div class="col-md-5">
                                        <input type="text" v-model="sch_lat" class="form-control" id="text" placeholder="e.g. 5.2031">
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
                                        <b-form-radio checked="false" name="sch_category" v-model="sch_category">
                                            Public
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_category" v-model="sch_category">
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
                                <label class="control-label col-md-12" for="text">Propritor Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" v-model="propritor_name" class="form-control" id="text" placeholder="Propritor Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Private Membership
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio name="p_membership" v-model="p_membership" checked="false">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio name="p_membership" v-model="p_membership">
                                            No
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Private Memebership's Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" v-model="p_name" class="form-control" id="text" placeholder="PPrivate Memebership's Name">
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
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
                                                Regular
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
                                                Islamiyya Integrated
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
                                                Montessori
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
                                                Special Needs
                                            </b-form-radio>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
                                                Vocational Training Center
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
                                                Science and Technology College
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_type" v-model="sch_type">
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
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                Community
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                Cooperation
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                Federal Government
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                State Government
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                Local Government
                                            </b-form-radio>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                Faith Based
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                Individual
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
                                                NGO
                                            </b-form-radio>
                                        </div>
                                        <div class="radio">
                                            <b-form-radio checked="false" name="sch_ownership" v-model="sch_ownership">
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
                                <label class="control-label col-md-12" for="text">Education Level
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="edu_level" v-model="edu_level">
                                            Primary
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="edu_level" v-model="edu_level">
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
                                        <b-form-radio checked="false" name="multigrade_system" v-model="multigrade_system">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="multigrade_system" v-model="multigrade_system">
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
                                        <b-form-radio checked="false" name="shift" v-model="shift">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="shift" v-model="shift">
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
                                <label class="control-label col-md-12" for="text">Management Committee 
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="magt_comm" v-model="magt_comm">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="magt_comm" v-model="magt_comm">
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
                                        <b-form-radio checked="false" name="pta" v-model="pta">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="pta" v-model="pta">
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
                                        <b-form-radio checked="false" name="sch_dev_plan" v-model="sch_dev_plan">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_dev_plan" v-model="sch_dev_plan">
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
                                        <b-form-radio checked="false" name="sch_grant" v-model="sch_grant">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_grant" v-model="sch_grant">
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
                                        <input type="date" v-model="date_last_insp" class="form-control" id="date" value="yyyy-mm-dd" aria-selected="true">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Number of Inspections
                                </label>
                                <div class="col-md-12">
                                    <input type="number" v-model="num_of_insp" class="form-control" id="text" placeholder="Number of Inspections">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Inspection Authority 
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="insp_auth" v-model="insp_auth">
                                            Federal Govt
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="insp_auth" v-model="insp_auth">
                                            State Govt
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="insp_auth" v-model="insp_auth">
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
                                <label class="control-label col-md-4" for="text_area">School Address</label>
                                <div class="col-md-12">
                                    <textarea rows="4" v-model="sch_address" class="form-control resize_vertical" id="text_area" placeholder="School Address"></textarea>
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
                                <label class="control-label col-md-12" for="text">Bording FAcilities
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false" name="boarding" v-model="boarding">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="boarding" v-model="boarding">
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
                                        <b-form-radio checked="false" name="sch_library" v-model="sch_library">
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_library" v-model="sch_library">
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
                                    <input type="number" v-model="security_guard" class="form-control" id="text" placeholder="0">
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
                                        <b-form-radio checked="false" name="sch_building_type" v-model="sch_building_type">
                                            <div>Proposely built</div>
                                            <div>Proposely built for educational use</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_building_type" v-model="sch_building_type">
                                            <div>Multiple Class in Rooms</div>
                                            <div>Converted building, rooms holding multiple classes (no walls between).</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_building_type" v-model="sch_building_type">
                                            <div>One Class per Room</div>
                                            <div>Converted building, one class per room (with walls separating).</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_building_type" v-model="sch_building_type">
                                            <div>Residential Space</div>
                                            <div>Converted space in a house/apartment (residential).</div>
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false" name="sch_building_type" v-model="sch_building_type">
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
                                        <b-form-radio checked="false">
                                            Owned
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio>
                                            Rented
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false">
                                            Leased
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio>
                                            Granted for free
                                        </b-form-radio>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">School Fence Condition
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false">
                                            No Fence/Wall
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio>
                                            Fence is in good Condition
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false">
                                            Fence needs minor repairs
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio>
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
                                <label class="control-label col-md-12" for="text">Play Rooms
                                </label>
                                <div class="col-md-12">
                                    <div class="radio">
                                        <b-form-radio checked="false">
                                            None
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio>
                                            Yes with Play Rugs
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false">
                                            Yes with Sand Floor
                                        </b-form-radio>
                                    </div>
                                    <div class="radio" checked="false">
                                        <b-form-radio>
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
                                        <b-form-checkbox checked="false">
                                            PlayRoom
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Merry Go Round
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Swing
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Ladder Slide
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            See Saw
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
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
                                        <b-form-checkbox checked="false">
                                            Charts
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Posters
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Toys
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Audio/Visua(Radio, TV, DVD)
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Word Puzzle Box
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
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
                                        <b-form-checkbox checked="false">
                                            PHCN/NEPA
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Generator
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Solar
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Inverter
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
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
                                        <b-form-checkbox checked="false">
                                            Health Clinic
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            First Aid Kit
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
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
                                        <b-form-checkbox checked="false">
                                            Pipe-borne
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Borehole
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Well
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Others
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
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
                                        <b-form-checkbox checked="false">
                                            Pit Latrine
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
                                            Bucket System
                                        </b-form-checkbox>
                                    </div>
                                        <div class="checkbox">
                                        <b-form-checkbox checked="false">
                                            Water Cistern
                                        </b-form-checkbox>
                                    </div>
                                    <div class="checkbox">
                                        <b-form-checkbox checked="true">
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
                                <label class="control-label" for="text">File Sharing
                                </label>
                                <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="File Sharing Resources">
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
                                            <b-form-checkbox checked="false">
                                            Toilet
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="true">
                                                Water Source
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Classrooms
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Play Ground
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="true">
                                                WhiteBoards
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Boarding Hostels
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Kitchen
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="true">
                                                Bathroooms
                                            </b-form-checkbox>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Computer
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="true">
                                            Laboratory
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Library
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Wash Hand Basin
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="true">
                                                Staff Room
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Offices
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="false">
                                            Dinning Room
                                            </b-form-checkbox>
                                        </div>
                                        <div class="checkbox">
                                            <b-form-checkbox checked="true">
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
                                <label class="control-label col-md-12" for="text">Year Constructed 
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" name="example-select" class="form-control" size="1">
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
                                    <input type="number" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Width in (m)
                                </label>
                                <div class="col-md-12">
                                    <input type="number" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Number of Rooms
                                </label>
                                <div class="col-md-12">
                                    <input type="number" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3">
                            <div class="form-group p-10">
                                <label class="control-label col-md-12" for="text">Select Condition 
                                </label>
                                <div class="col-md-12">
                                    <select id="example-select" name="example-select" class="form-control" size="1">
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
                                    <select id="example-select" name="example-select" class="form-control" size="1">
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
                                    <select id="example-select" name="example-select" class="form-control" size="1">
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
                                    <select id="example-select" name="example-select" class="form-control" size="1">
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
                                <label class="control-label col-md-12" for="text">Seetings 
                                </label>
                                <div class="col-md-12">
                                    <div class="radio" checked="false">
                                        <b-form-radio>
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false">
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
                                    <div class="radio" checked="false">
                                        <b-form-radio>
                                            Yes
                                        </b-form-radio>
                                    </div>
                                    <div class="radio">
                                        <b-form-radio checked="false">
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
                                    <label class="control-label col-md-12" for="text">Year Constructed 
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">1 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">2 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">3 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sx-12 col-md-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label col-md-12" for="text">Year Constructed 
                                    </label>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">1 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">2 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" id="text" placeholder="School Name">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="form-group p-10">
                                    <label class="control-label" for="text">3 Seater
                                    </label>
                                    <div class="col-md-12">
                                        <input type="number" class="form-control" id="text" placeholder="School Name">
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
                            INFORMATION ON CLASSROOMS/PLAYROOMS
                        </div>
                        <div>
                            Record information for individual classroom, regardless of whether or not they are in use.
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
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
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
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
                                        </div>
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
                    <div class="row even-row">
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10"> 
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
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
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
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
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Position
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Phone Number
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Email
                                </label>
                                <div class="col-md-12">
                                    <input type="email" class="form-control" id="text" placeholder="School Name">
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
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Position
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Phone Number
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Email
                                </label>
                                <div class="col-md-12">
                                    <input type="email" class="form-control" id="text" placeholder="School Name">
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
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Poject Cost
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Source of Funding
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2">
                            <div class="form-group p-10">
                                <label class="control-label" for="text">Year
                                </label>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" id="text" placeholder="School Name">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </tab-content>
             <tab-content title="School Based Mangement Committe" icon="fafa-check">
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
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10"> 
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
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
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
                                        </div>
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
                    <div class="row even-row">
                        <div class="col-sx-12 col-md-6">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10"> 
                                        <label class="control-label col-md-12" for="text">Subject Area
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
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
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Class Level
                                        </label>
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group p-10">
                                        <label class="control-label" for="text">Quantity Supplied
                                        </label>
                                        <div class="col-md-12">
                                            <input type="number" class="form-control" id="text" placeholder="School Name">
                                        </div>
                                    </div>
                                </div>
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