<template>
    <main class="container">
            <div class="section m75-top">
                <div class="row">
                    <div class="form-box animated">
                        <form id="school_basic_info" class="col s12" data-form-action="school_info">
                            <div class="header">
                                <h2>School Basic Info</h2>
                                <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m8 l6">
                                    <input name="school_name" id="school_name" type="text" class="validate">
                                    <label for="school_name">School Name <span>*</span></label>
                                </div>
                                <div class="input-field col s12 m2 l2 offset-l1">
                                    <input name="established" id="established" type="text" class="validate">
                                    <label for="established">Year Established <span>*</span></label>
                                </div>
                                <div class="input-field col s12 m2 l2 offset-l1">
                                    <input name="average_distance" id="average_distance" type="number" class="validate">
                                    <label for="average_distance">Distance to Catchment Area <span>*</span></label>
                                    <div class="def">What is average distance of school from its catchment areas (in km)?</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row even-row">
                                <input name="state_code" id="state_code" type="text" class="hide">
                                <div class="input-field col s12 m4 l3">
                                    <select name="lga_code" id="lgas">
                                        <option value="" disabled selected>Select Local Govt.</option>
                                    </select>
                                    <label class="active" for="lgas">LGA <span>*</span></label>
                                </div>
                                <div class="input-field col s12 m4 l3">
                                    <select name="ward_code" id="wards" disabled>
                                        <option value="" disabled selected>Select Ward</option>
                                    </select>
                                    <label class="active" for="wards">Ward <span>*</span></label>
                                </div>
                                <div class="input-field col s12 m4 l2 offset-l1">
                                    <div class="col s8 no-pad-left relative">
                                        <input name="school_code_prefix" id="school_code_prefix" type="text" class="validate disabled right-align" readonly>
                                        <label for="school_code_prefix">School Code <span>*</span></label>
                                    </div>
                                    <div class="col s4 no-pad-right">
                                        <input name="school_code" id="school_code" type="text" class="validate disabled" readonly>
                                    </div>
                                </div>
                                <div class="input-field col s12 m4 l2 offset-l1">
                                    <input name="village_town" id="village_town" type="text" class="validate">
                                    <label for="village_town">Village/Town <span>*</span></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m4 l2">
                                    <input name="school_email_address" id="school_email_address" type="email" class="">
                                    <label for="school_email_address">Email Address</label>
                                </div>
                                <div class="input-field col s12 m4 l2">
                                    <input name="school_phone" id="school_phone" type="tel" class="validate numbersonly" data-length="11">
                                    <label for="school_phone">Phone Number <span>*</span></label>
                                </div>
                                <div class="input-field col s12 m4 l2">
                                    <input name="school_website" id="school_website" type="url" class="">
                                    <label for="school_website">Website</label>
                                </div>
                                <!--<div class="input-field col s12 m4 l2 offset-l1">
                                    <input name="geolocation" id="geolocation" type="text" class="numbersonly">
                                    <label for="geolocation">Map Coordinates</label>
                                </div>-->
                                <div class="input-field col s12 m4 l2 offset-l1">
                                    <div class="col s6 no-pad-left relative">
                                        <input name="latitude" id="latitude" type="text" class="validate" placeholder="e.g. 7.6408">
                                    </div>
                                    <div class="col s6 no-pad-right">
                                        <input name="longitude" id="longitude" type="text" class="validate" placeholder="e.g. 5.2031">
                                    </div>
                                    <label class="active">Map Coordinates (lat, long) <span>*</span></label>
                                </div>
                                <div id="school_location" class="input-field col s12 m4 l2 offset-l1 flex">
                                    <label class="active">School Location</label>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div id="school_category" class="input-field col s12 m4 l2 flex">
                                    <label class="active">School Category <span>*</span></label>
                                </div>
                                <div id="private" class="input-field col s12 m8 l3">
                                    <input name="name_of_proprietor" id="school_proprietor" type="text" disabled="disabled">
                                    <label for="school_proprietor" class="">Proprietor's Name</label>
                                </div>
                                <div id="private_membership" class="input-field col s12 m4 l2 offset-l1 flex m32-top-small-only">
                                    <p class="no-block"><input data-target="private_membership_name" data-trigger="Yes" class="with-gap" value="0" name="private_membership" type="radio" id="membership-no"><label for="membership-no">No</label></p>
                                    <p class="no-block"><input data-target="private_membership_name" data-trigger="Yes" class="with-gap" value="1" name="private_membership" type="radio" id="membership-yes"><label for="membership-yes">Yes</label></p>
                                    <label class="active">Private Membership <span>*</span></label>
                                    <div class="def">Does the school belong to any private membership?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="pfa_name" class="input-field col s12 m8 l4">
                                    <input name="private_membership_name" id="private_membership_name" type="text" disabled="disabled">
                                    <label for="private_membership_name" class="">Private Membership's Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div id="school_type" class="input-field col s12 m5 flex">
                                    <label class="active">School Type <span>*</span></label>
                                    <div class="def">Select an option that best describes your choice.</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="school_ownership" class="input-field col s12 m5 offset-m2 flex m32-top-small-only">
                                    <label class="active">School Ownership <span>*</span></label>
                                    <div class="def">Select an option that best describes which of the tier of Govt./Private owns the school?</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div id="education_level" class="input-field col s12 m4 l5 flex">
                                    <label class="active">Education Levels offered. <span>*</span></label>
                                    <div class="def">Select all education levels offered by the school.</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="multigrade" class="input-field col s12 m4 l2 offset-l1 flex m32-top-small-only">
                                    <p class=""><input class="with-gap" value="0" name="multigrade" type="radio" id="multigrade-no"><label for="multigrade-no">No</label></p>
                                    <p class=""><input class="with-gap" value="1" name="multigrade" type="radio" id="multigrade-yes"><label for="multigrade-yes">Yes</label></p>
                                    <label class="active">Multigrade Teaching <span>*</span></label>
                                    <div class="def">Does any teacher teach more than one class at the same time?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="shift" class="input-field col s12 m4 l2 offset-l1 flex m32-top-small-only">
                                    <p class=""><input class="with-gap" value="0" name="shifts" type="radio" id="shift-no"><label for="shift-no">No</label></p>
                                    <p class=""><input class="with-gap" value="1" name="shifts" type="radio" id="shift-yes"><label for="shift-yes">Yes</label></p>
                                    <label class="active">Shift System <span>*</span></label>
                                    <div class="def">Does the school operate a shift system?</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row">
                                <!--<div id="school_recognition_status" class="input-field col s12 m4 l5 flex">
                                    <label class="active">School Registration Status <span>*</span></label>
                                </div>-->
                                <div id="mgt" class="input-field col s12 m3 offset-m1 l2 flex m32-top-small-only">
                                    <p class=""><input class="with-gap" value="0" name="management_committee" type="radio" id="mgt-no"><label for="mgt-no">No</label></p>
                                    <p class=""><input class="with-gap" value="1" name="management_committee" type="radio" id="mgt-yes"><label for="mgt-yes">Yes</label></p>
                                    <label class="active">Management Committee <span>*</span></label>
                                    <div class="def">Does the school have an SBMC, which met at least once last academic year?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="pta" class="input-field col s12 m3 offset-m1 l2 offset-l1 flex m32-top-small-only">
                                    <p class=""><input class="with-gap" value="0" name="pta_ptf" type="radio" id="pta-no"><label for="pta-no">No</label></p>
                                    <p class=""><input class="with-gap" value="1" name="pta_ptf" type="radio" id="pta-yes"><label for="pta-yes">Yes</label></p>
                                    <label class="active">PTA / PTF / MA <span>*</span></label>
                                    <div class="def">Does the school have PTA / PF / MA, which met at least once last year?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="dev-plan" class="input-field col s12 m3 offset-m1 l2 offset-l1 flex m32-top-small-only">
                                    <p class=""><input class="with-gap" value="0" name="development_plan" type="radio" id="dev-plan-no"><label for="dev-plan-no">No</label></p>
                                    <p class=""><input class="with-gap" value="1" name="development_plan" type="radio" id="dev-plan-yes"><label for="dev-plan-yes">Yes</label></p>
                                    <label class="active">School Development Plan <span>*</span></label>
                                    <div class="def">Did the school prepare SDP in the last school year?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="grants" class="input-field col s12 m3 offset-m1 l2 offset-l1 flex m32-top-small-only">
                                    <p class=""><input class="with-gap" value="0" name="school_grants" type="radio" id="grants-no"><label for="grants-no">No</label></p>
                                    <p class=""><input class="with-gap" value="1" name="school_grants" type="radio" id="grants-yes"><label for="grants-yes">Yes</label></p>
                                    <label class="active">School Grants <span>*</span></label>
                                    <div class="def">Has the school ever received grants in the last 2 academic sessions?</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div class="input-field col s12 m3 l2">
                                    <input name="last_inspection_date" id="inspection_date" type="date" class="datepicker">
                                    <label for="inspection_date" class="active">Date of last inspection visit <span>*</span></label>
                                    <div class="def">When was the school last inspected?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div class="input-field col s12 m3 l2 offset-l1 m32-top-small-only">
                                    <input name="inspection_count" id="inspection_count" value="0" type="number" class="validate">
                                    <label for="inspection_count">Number of inspections <span>*</span></label>
                                    <div class="def">Number of inspection visits in the last academic year</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="inspection_authority" class="input-field col s12 m5 offset-m1 l2 offset-l1 flex m32-top-small-only">
                                    <label class="active">Inspection Authority <span>*</span></label>
                                    <div class="def">Select an option for the authority that conducted the last inspection visit.</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m6">
                                    <textarea name="school_address" id="school_address" class="materialize-textarea validate"></textarea>
                                    <label for="school_address">School Address <span>*</span></label>
                                </div>
                                <div class="input-field col s12 m5 offset-m1">
                                    <input type="file" name="school_picture">
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="form-box animated hide">
                        <form id="school_facilities_info" class="col s12" data-form-action="school_info">
                            <div class="header">
                                <h2>School Facilities Info</h2>
                                <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                            </div>
                            <div class="row">
                                <div id="boarding_facilities" class="input-field col s12 m5 offset-m1 l2 flex">
                                    <p class="no-block"><input class="with-gap" value="0" name="boarding_facilities" type="radio" id="boarding-no"><label for="boarding-no">No</label></p>
                                    <p class="no-block"><input class="with-gap" value="1" name="boarding_facilities" type="radio" id="boarding-yes"><label for="boarding-yes">Yes</label></p>
                                    <label class="active">Boarding Facilities <span>*</span></label>
                                    <div class="def">Does the school have boarding facilities?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="school_library" class="input-field col s12 m5 offset-m1 l2 offset-l1 flex">
                                    <p class="no-block"><input class="with-gap" value="0" name="school_library" type="radio" id="library-no"><label for="library-no">No</label></p>
                                    <p class="no-block"><input class="with-gap" value="1" name="school_library" type="radio" id="library-yes"><label for="library-yes">Yes</label></p>
                                    <label class="active">School Library <span>*</span></label>
                                    <div class="def">Does the school have one or more functional libraries?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div class="input-field col s12 m3 l2 offset-l1 m32-top-small-only">
                                    <input name="security_guards" id="security_guards" value="0" type="number" class="validate">
                                    <label for="security_guards">Security Guards <span>*</span></label>
                                    <div class="def">Does the school have security guards? If yes, state how many.</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div id="school_building_type" class="input-field col s12 m6 l5 flex">
                                    <label class="active">School Building Type <span>*</span></label>
                                </div>
                                <div id="school_building_ownership" class="input-field col s12 m5 offset-m1 l2 flex m32-top-small-only">
                                    <label class="active">School Building Ownership <span>*</span></label>
                                </div>
                                <div id="fence_condition" class="input-field col s12 m5 offset-m1 l3 offset-l1 flex m32-top-small-only">
                                    <label class="active">School Fence Condition <span>*</span></label>
                                </div>
                            </div>
                            <div class="row">
                                <div id="play_rooms" class="input-field col s12 m5 l2 flex">
                                    <label class="active">Playrooms</label>
                                    <div class="def">Does the school have playroom for ECCD?</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="play_facilities" class="input-field col s12 m5 l3 offset-l1 flex">
                                    <label class="active">Play Facilities</label>
                                    <div class="def">Does the school have play facilities for ECCD? Tick all that apply.</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="learning_materials" class="input-field col s12 m5 l3 offset-l1 flex">
                                    <label class="active">Learning Materials</label>
                                    <div class="def">Does the school have learning materials for ECCD? Tick all that apply.</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row even-row">
                                <div id="power_source" class="input-field col s12 m5 l2 flex">
                                    <label class="active">Sources of Power <span>*</span></label>
                                    <div class="def">Tick all applicable power sources used in the school.</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="health_facility" class="input-field col s12 m5 l2 offset-l1 flex">
                                    <label class="active">Health Facilities <span>*</span></label>
                                    <div class="def">Tick all applicable health facilities available in the school.</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="water_source" class="input-field col s12 m5 l2 offset-l1 flex">
                                    <label class="active">Sources of Water Supply <span>*</span></label>
                                    <div class="def">Tick all applicable water sources used in the school.</div>
                                    <i class="material-icons">info</i>
                                </div>
                                <div id="toilet_type" class="input-field col s12 m5 l2 offset-l1 flex">
                                    <label class="active">Toilet Facilities <span>*</span></label>
                                    <div class="def">Tick all applicable toilet facilities used in the school.</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m5">
                                    <input multiple="multiple" data-to-validate="schools" type="text" id="schools_auto_complete" name="sharing_facilities" placeholder="Schools sharing resources" data-min-length="1" list="school_list">
                                    <label class="active">Facility Sharing</label>
                                    <div class="def">Does the school share facilities/resources/premises with any other school? if 'Yes' state the names of schools sharing the facilities.</div>
                                    <i class="material-icons">info</i>
                                    <datalist id="school_list"></datalist>
                                </div>
                                <div id="facility_type" class="input-field col s12 m6 l5 offset-l1 flex m32-top-small-only">
                                    <label class="active">Facilities Shared</label>
                                    <div class="def">Tick all applicable facilities that is shared with other schools.</div>
                                    <i class="material-icons">info</i>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="form-box animated hide">
                        <form id="school_facilities_condition" class="col s12" data-form-action="school_info">
                            <div class="header">
                                <h2>School Facilities Details</h2>
                                <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m12 l4 no-padding">
                                    <table id="data-table" class="striped bordered highlight">
                                        <thead>
                                        <tr>
                                            <th data-field="facility" class="upper center-align">Facility type</th>
                                            <th data-field="good" class="upper center-align">Usable</th>
                                            <th data-field="bad" class="upper center-align">Not Usable</th>
                                        </tr>
                                        </thead>
                                        <tbody id="facility-list"></tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- <div class="form-box animated hide">
                        <form id="school_classroom_info" class="col s12" data-form-action="school_info">
                            <div class="header">
                                <h2>School Classroom Details</h2>
                                <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12">
                                    <table id="data-table2" class="striped bordered highlight">
                                        <thead>
                                            <tr>
                                                <th data-field="classroom_conditions" class="upper left-align relative p32-bot">
                                                    Information on classrooms/playrooms
                                                    <span>
                                                        Record information for individual classroom, regardless of whether
                                                        or not they are in use.
                                                    </span>
                                                    <span class="clone slim-tool-button absolute" data-clone="classroom_conditions">
                                                        <i class="material-icons">add</i> Add more
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-id="classroom_conditions">
                                                <td class="center-align">
                                                    <div class="input-field col s12 m2 l2">
                                                        <input name="constructed[]" type="text" placeholder="Year only">
                                                        <label class="active">Year Constructed</label>
                                                    </div>
                                                    <div class="input-field col s12 m2 l1 offset-l1">
                                                        <input name="length[]" type="number" placeholder="5">
                                                        <label class="active">Length in (m)</label>
                                                    </div>
                                                    <div class="input-field col s12 m2 l1">
                                                        <input name="width[]" type="number" placeholder="7">
                                                        <label class="active">Width in (m)</label>
                                                    </div>
                                                    <div class="input-field col s12 m2 l2 offset-l1">
                                                        <input name="rooms[]" type="number" placeholder="Number only">
                                                        <label class="active">Number of Rooms</label>
                                                    </div>
                                                    <div class="input-field col s12 m3 l3 offset-l1">
                                                        <select data-name="building_condition" name="building_condition[]">
                                                            <option value="0" disabled selected>Select one</option>
                                                        </select>
                                                        <label class="active">Present Condition</label>
                                                    </div>
                                                    <div class="input-field col s12 m2">
                                                        <select data-name="floor_material" name="floor[]">
                                                            <option value="0" disabled selected>Select one</option>
                                                        </select>
                                                        <label class="active">Floor Material</label>
                                                    </div>
                                                    <div class="input-field col s12 m2">
                                                        <select data-name="wall_material" name="wall[]">
                                                            <option value="0" disabled selected>Select one</option>
                                                        </select>
                                                        <label class="active">Wall Material</label>
                                                    </div>
                                                    <div class="input-field col s12 m2">
                                                        <select data-name="roof_material" name="roof[]">
                                                            <option value="0" disabled selected>Select one</option>
                                                        </select>
                                                        <label class="active">Roof Material</label>
                                                    </div>
                                                    <div id="seating" class="input-field col s12 m4 l2 offset-l1 flex m32-top-small-only">
                                                        <p class="no-block"><input class="with-gap" value="0" name="seating[]" type="radio" id="seating-no"><label for="seating-no">No</label></p>
                                                        <p class="no-block"><input class="with-gap" value="1" name="seating[]" type="radio" id="seating-yes"><label for="seating-yes">Yes</label></p>
                                                        <label class="active">Seating <span>*</span></label>
                                                        <div class="def">Are there enough seats for the children in the classroom(s)?</div>
                                                        <i class="material-icons">info</i>
                                                    </div>
                                                    <div id="blackboard" class="input-field col s12 m4 l2 offset-l1 flex m32-top-small-only">
                                                        <p class="no-block"><input class="with-gap" value="0" name="bboard[]" type="radio" id="bboard-no"><label for="bboard-no">No</label></p>
                                                        <p class="no-block"><input class="with-gap" value="1" name="bboard[]" type="radio" id="bboard-yes"><label for="bboard-yes">Yes</label></p>
                                                        <label class="active">Blackboard <span>*</span></label>
                                                        <div class="def">Does the classroom(s) have a good blackboard that the children can read from?</div>
                                                        <i class="material-icons">info</i>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12 m75-top">
                                    <table id="data-table3" class="striped bordered highlight">
                                        <thead>
                                            <tr>
                                                <th data-field="classroom_info" class="upper left-align relative p32-bot">
                                                    Additional Class Information
                                                    <span>
                                                        Indicate seating capacity by grade and type of seating, counting
                                                        only seats having a writing desk. e.g. if one 3 seater was available,
                                                        the capacity is 3 Pupils not 1.
                                                    </span>
                                                    <span class="clone slim-tool-button absolute" data-clone="classroom_info">
                                                        <i class="material-icons">add</i> Add more
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-id="classroom_info">
                                                <td class="center-align">
                                                    <div class="col s12 m5 l5">
                                                        <div class="input-field col s12 m3">
                                                            <input name="classroom_level[]" type="text" placeholder="e.g. Pry 1">
                                                            <label class="active">Class Level</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="seater1[]" type="number" placeholder="Quantity">
                                                            <label class="active">1 Seater</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="seater2[]" type="number" placeholder="Quantity">
                                                            <label class="active">2 Seater</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="seater3[]" type="number" placeholder="Quantity">
                                                            <label class="active">3 Seaters</label>
                                                        </div>
                                                    </div>
                                                    <div class="col s12 m5 l5 offset-l2">
                                                        <div class="input-field col s12 m3">
                                                            <input name="classroom_level[]" type="text" placeholder="e.g. Pry 1">
                                                            <label class="active">Class Level</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="seater1[]" type="number" placeholder="Quantity">
                                                            <label class="active">1 Seater</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="seater2[]" type="number" placeholder="Quantity">
                                                            <label class="active">2 Seater</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="seater3[]" type="number" placeholder="Quantity">
                                                            <label class="active">3 Seaters</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="form-box animated hide">
                        <form id="school_textbooks" class="col s12" data-form-action="school_info">
                            <div class="header">
                                <h2>School Textbooks</h2>
                                <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12">
                                    <table id="data-table4" class="striped bordered highlight">
                                        <thead>
                                            <tr>
                                                <th data-field="student_textbooks" class="upper left-align relative p32-bot">
                                                    Pupils Textbooks Supplied
                                                    <span>State the number of Pupils' Textbooks supplied to the school in the current academic year.</span>
                                                    <span class="clone slim-tool-button absolute" data-clone="student_textbooks">
                                                        <i class="material-icons">add</i> Add more
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-id="student_textbooks">
                                                <td>
                                                    <div class="col s12 m6 l5">
                                                        <div class="input-field col s12 m6">
                                                            <input name="subject[]" type="text" placeholder="e.g. English Language">
                                                            <label class="active">Subject Area</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="class_level[]" type="text" placeholder="e.g. Pry 1">
                                                            <label class="active">Class Level</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="quantity_supplied[]" type="number" placeholder="5">
                                                            <label class="active">Quantity supplied</label>
                                                        </div>
                                                    </div>
                                                    <div class="col s12 m6 l5 offset-l2">
                                                        <div class="input-field col s12 m6">
                                                            <input name="subject[]" type="text" placeholder="e.g. English Language">
                                                            <label class="active">Subject Area</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="class_level[]" type="text" placeholder="e.g. Pry 1">
                                                            <label class="active">Class Level</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="quantity_supplied[]" type="number" placeholder="5">
                                                            <label class="active">Quantity supplied</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12 m75-top">
                                    <table id="data-table5" class="striped bordered highlight">
                                        <thead>
                                            <tr>
                                                <th data-field="staff_textbooks" class="upper left-align relative p32-bot">
                                                    Teachers' Textbooks Supplied
                                                    <span>State the number of Teachers' Textbooks supplied to the school in the current academic year.</span>
                                                    <span class="clone slim-tool-button absolute" data-clone="staff_textbooks">
                                                        <i class="material-icons">add</i> Add more
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-id="staff_textbooks">
                                                <td>
                                                    <div class="col s12 m6 l5">
                                                        <div class="input-field col s12 m6">
                                                            <input name="subject[]" type="text" placeholder="e.g. English Language">
                                                            <label class="active">Subject Area</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="class_level[]" type="text" placeholder="e.g. Pry 1">
                                                            <label class="active">Class Level</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="quantity_supplied[]" type="number" placeholder="5">
                                                            <label class="active">Quantity supplied</label>
                                                        </div>
                                                    </div>
                                                    <div class="col s12 m6 l5 offset-l2">
                                                        <div class="input-field col s12 m6">
                                                            <input name="subject[]" type="text" placeholder="e.g. English Language">
                                                            <label class="active">Subject Area</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="class_level[]" type="text" placeholder="e.g. Pry 1">
                                                            <label class="active">Class Level</label>
                                                        </div>
                                                        <div class="input-field col s12 m3">
                                                            <input name="quantity_supplied[]" type="number" placeholder="5">
                                                            <label class="active">Quantity supplied</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="form-box animated hide">
                        <form id="school_bmc" class="col s12" data-form-action="school_info">
                            <div class="header">
                                <h2>School Based Management Committee</h2>
                                <p class="no-margin">All fields marked <strong>*</strong> are required.</p>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12">
                                    <table id="data-table6" class="striped bordered highlight">
                                        <thead>
                                        <tr>
                                            <th data-field="sbmc" class="upper left-align relative p32-bot">
                                                Membership Details
                                                <span>Provide the following details about the membership details of the SBMC of this school.</span>
                                                <span class="clone slim-tool-button absolute" data-clone="sbmc">
                                                    <i class="material-icons">add</i> Add more Members
                                                </span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr data-id="sbmc">
                                            <td>
                                                <div class="input-field col s12 m3 l4">
                                                    <input name="full_name[]" placeholder="e.g. Chief Aduloju Bamijoko" type="text" class="validate">
                                                    <label class="active">Full Name <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l2">
                                                    <input name="position[]" placeholder="e.g. Chairman" type="text" class="validate">
                                                    <label class="active">Position</label>
                                                </div>
                                                <div class="input-field col s12 m3 l2 offset-l1">
                                                    <input name="phone_number[]" placeholder="e.g. 08023456789" type="tel" class="validate">
                                                    <label class="active">Phone Number <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l3">
                                                    <input name="email_address[]" placeholder="e.g. bababamijoko@yahoo.com" type="email">
                                                    <label class="active">Email Address</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-id="sbmc">
                                            <td>
                                                <div class="input-field col s12 m3 l4">
                                                    <input name="full_name[]" placeholder="e.g. Chief Aduloju Bamijoko" type="text" class="validate">
                                                    <label class="active">Full Name <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l2">
                                                    <input name="position[]" placeholder="e.g. Member" type="text" class="validate">
                                                    <label class="active">Position</label>
                                                </div>
                                                <div class="input-field col s12 m3 l2 offset-l1">
                                                    <input name="phone_number[]" placeholder="e.g. 08023456789" type="tel" class="validate">
                                                    <label class="active">Phone Number <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l3">
                                                    <input name="email_address[]" placeholder="e.g. babajoko@yahoo.com" type="email">
                                                    <label class="active">Email Address</label>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 m12 l12 m75-top">
                                    <table id="data-table7" class="striped bordered highlight">
                                        <thead>
                                        <tr>
                                            <th data-field="sbmc_projects" class="upper left-align relative p32-bot">
                                                Projects Details
                                                <span>Indicate projects overseen by the SBMC of this school, whether ongoing or completed.</span>
                                                <span class="clone slim-tool-button absolute" data-clone="sbmc_projects">
                                                    <i class="material-icons">add</i> Add more Projects
                                                </span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr data-id="sbmc_projects">
                                            <td>
                                                <div class="input-field col s12 m6 l6">
                                                    <input name="project_brief[]" type="text" placeholder="e.g. Construction of 2 units of toilets" class="validate">
                                                    <label class="active">Project Brief <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l2">
                                                    <input name="project_cost[]" placeholder="e.g. N200,000" type="text" class="validate">
                                                    <label class="active">Project Cost <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l3">
                                                    <input name="source_of_funding[]" placeholder="e.g. Donations" type="text" class="validate">
                                                    <label class="active">Source of Funding <span>*</span></label>
                                                </div>
                                                <div class="input-field col s12 m3 l1">
                                                    <input name="project_year[]" placeholder="e.g. 2017" type="text" class="validate">
                                                    <label class="active">Year <span>*</span></label>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div> -->
                </div>
                <div class="row m40-top">
                    <div class="col s12 m10 mauto">
                        <input type="hidden" name="school_id" id="school_id" />
                        <button data-steps-to-go="" data-form-action="school_info" id="button" class="btn waves-effect waves-ripple animated active center-align" type="submit" name="action">
                            <span>Save and Continue</span>
                            <i class="material-icons right">keyboard_arrow_right</i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
</template>
<script>
export default {
  name: 'SchoolAdd',
  components: {},
  data () {
    return {
      schools: {},
      api: 'api',
      items: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'School',
          link: '/schools'
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
