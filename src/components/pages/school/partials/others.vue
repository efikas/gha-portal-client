<template>
    <div>
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="table-responsive mb-5">
                    <table class="table table-bordred table-striped mytable">
                        <thead>
                        <tr>
                            <th>FACILITY</th>
                            <th>NUMBER AVAILABLE</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="facility in facilities">
                            <td>{{ facility.facility}}</td>
                            <td>{{ facility.no_facility}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mb-2">
                    <p>
                        <span class="pull-left"><h4>Projects</h4></span>
                        <a :href="`${school.id}/update/project`" type="button"
                           class="btn btn-outline-primary ekiti-btn pull-right">Edit</a>
                    </p>
                    <div class="table-responsive">
                        <table class="table table-bordred table-striped mytable classroom-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Funding</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="project in school.projects">
                                <td>{{ project.name }}</td>
                                <td>{{ project.cost }}</td>
                                <td>{{ project.funding }}</td>
                                <td>{{ project.date }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    export default {
        name: "others",
        mixins: [tabsMixins],
    }
</script>

<style scoped>

</style>