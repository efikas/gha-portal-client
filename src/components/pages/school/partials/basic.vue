<template>
    <div>
        <b-card class="bg-clear2-card" no-body text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Basic Information" size="lg" lazy centered hide-footer>
                    <basic-form></basic-form>
                </b-modal>

                <h3>
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">Basic Information</router-link>
                </h3>
            </div>
            <div class="col-md-12 table-responsive">
                <table class="table table-bordred table-striped mytable">
                    <tr>
                        <td><i class="fa fa-home"></i> Name</td>
                        <td colspan="3">{{ school.name }}</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-map"></i> Address</td>
                        <td colspan="3">{{ school.address }}</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-envelope"></i> Email</td>
                        <td colspan="3">{{ school.email }}</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-globe"></i> Website</td>
                        <td colspan="3">{{ school.website }}</td>
                    </tr>
                    <tr>
                        <td>Education Level</td>
                        <td>{{ school.education_level }}</td>
                        <td>Category</td>
                        <td>{{ school.category }}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{{ school.type?data.school_types[school.type].name:null }}</td>
                        <td>Location</td>
                        <td>{{ school.location }}</td>
                    </tr>
                    <tr>
                        <td>Town</td>
                        <td>{{ school.town }}</td>
                        <td>Phone</td>
                        <td>{{ school.phone }}</td>
                    </tr>
                    <tr>
                        <td>Date Established</td>
                        <td>{{ school.established }}</td>
                        <td>Geo-location</td>
                        <td>{{ school.geolocation }}</td>
                    </tr>
                    <tr>
                        <td>Average Distance</td>
                        <td>{{ school.average_distance }}KM</td>
                        <td>Ownership</td>
                        <td>{{ school.ownership?data.school_ownerships[school.ownership].owner:null }}</td>
                    </tr>
                    <tr>
                        <td>Shifts</td>
                        <td>{{ yesNo(school.shift) }}</td>
                        <td>Grant</td>
                        <td>{{ yesNo(school.grants) }}</td>
                    </tr>
                    <tr>
                        <td>Management Committee</td>
                        <td>{{ yesNo(school.management_committee) }}</td>
                        <td>Development Plan</td>
                        <td>{{ yesNo(school.development_plan) }}</td>
                    </tr>
                    <tr>
                        <td>Mulitigrade</td>
                        <td>{{ yesNo(school.multigrade) }}</td>
                        <td>LGA Ward</td>
                        <td>{{ school.ward.name }}</td>
                    </tr>
                    <tr>
                        <td>Recognision Status</td>
                        <td>{{ yesNo(school.recognition_status) }}</td>
                        <td>Number of student</td>
                        <td>{{ school.students }}</td>
                    </tr>
                    <tr>
                        <td>
                            <router-link :to="{name:'school-staffs', params: {id: school.id}, query:{t:1}}">Teaching
                                Staff
                            </router-link>
                        </td>
                        <td>{{ school.staffs.teaching }}</td>
                        <td>
                            <router-link :to="{name:'school-staffs', params: {id: school.id}, query:{t:0}}">Non-Teaching
                                Staff
                            </router-link>
                        </td>
                        <td>{{ school.staffs.none_teaching }}</td>
                    </tr>
                </table>
            </div>
        </b-card>
    </div>
</template>
<script>
    import { tabsMixins } from './mixins'
    import basicForm from "../forms/basic"
    export default {
        components: { basicForm },
        mixins: [tabsMixins],
    }
</script>