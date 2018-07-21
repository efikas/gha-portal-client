<template>
    <div>
        <b-card class="bg-clear2-card" no-body text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Facilities" size="lg" lazy centered hide-footer>
                    <facility-form></facility-form>
                </b-modal>

                <h3>
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">Facilities</router-link>
                </h3>

            </div>
            <div class="col-lg-12 mb-3">
                <div class="table-responsive mt-lg-5">
                    <table class="table table-striped">
                        <tbody>
                        <tr>
                            <td class="text-muted">Power Source:</td>
                            <td>{{ power_sources }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Health Facilities:</td>
                            <td>{{ healths }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Learning Materials:</td>
                            <td>{{ learning }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Water Source:</td>
                            <td>{{ waters }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Toilets:</td>
                            <td class="text-muted">{{ toilets }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Play facility:</td>
                            <td>{{ school.play_facility_id?data.play_facilities[school.play_facility_id].type:null }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </b-card>
        </div>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    import facilityForm from "../forms/facilities"

    export default {
        components: { facilityForm },
        name: "facility",
        mixins: [tabsMixins],
    }
</script>