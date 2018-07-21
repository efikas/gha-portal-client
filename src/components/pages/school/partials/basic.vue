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
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">{{ school.name }}</router-link>
                </h3>
            </div>
            <div class="col-md-12 table-responsive">
                <table class="table table-striped">
                    <tr>
                        <td class="text-muted text-right">Address</td>
                        <td colspan="3">{{ school.address }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Email</td>
                        <td colspan="3">{{ school.email }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Website</td>
                        <td colspan="3">{{ school.website }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Education Level</td>
                        <td>{{ school.education_level }}</td>
                        <td class="text-muted text-right">Category</td>
                        <td>{{ school.category }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Type</td>
                        <td>{{ school.type?data.school_types[school.type].name:null }}</td>
                        <td class="text-muted text-right">Location</td>
                        <td>{{ school.location }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Town</td>
                        <td>{{ school.town }}</td>
                        <td class="text-muted text-right">Phone</td>
                        <td>{{ school.phone }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Date Established</td>
                        <td>{{ school.established }}</td>
                        <td class="text-muted text-right">Geo-location</td>
                        <td>{{ school.geolocation }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Average Distance</td>
                        <td>{{ school.average_distance }}KM</td>
                        <td class="text-muted text-right">Ownership</td>
                        <td>{{ school.ownership?data.school_ownerships[school.ownership].owner:null }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Shifts</td>
                        <td>{{ yesNo(school.shift) }}</td>
                        <td class="text-muted text-right">Grant</td>
                        <td>{{ yesNo(school.grants) }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Management Committee</td>
                        <td>{{ yesNo(school.management_committee) }}</td>
                        <td class="text-muted text-right">Development Plan</td>
                        <td>{{ yesNo(school.development_plan) }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Mulitigrade</td>
                        <td>{{ yesNo(school.multigrade) }}</td>
                        <td class="text-muted text-right">LGA Ward</td>
                        <td >{{ school.ward.name }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">Recognition Status</td>
                        <td>{{ yesNo(school.recognition_status) }}</td>
                        <td class="text-muted text-right">Number of student</td>
                        <td>{{ school.students }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted text-right">
                            <router-link :to="{name:'school-staffs', params: {id: school.id}, query:{t:1}}">Teaching
                                Staff
                            </router-link>
                        </td>
                        <td>{{ school.staffs?school.staffs.teaching:0 }}</td>
                        <td class="text-muted text-right">
                            <router-link :to="{name:'school-staffs', params: {id: school.id}, query:{t:0}}">Non-Teaching
                                Staff
                            </router-link>
                        </td>
                        <td>{{ school.staffs? school.staffs.none_teaching:0 }}</td>
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