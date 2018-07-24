<template>
    <div>
        <b-card class="bg-clear2-card" no-body text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal-projects>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-projects" ref="modal" title="Projects" size="lg" lazy centered hide-footer>
                    <project-form @closeModal="()=>$refs.modal.hide()"></project-form>
                </b-modal>

                <h3>
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">Projects
                    </router-link>
                </h3>

            </div>
            <div class="col-lg-12 mb-3">
                <div class="table-responsive">
                    <table class="table">
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

        </b-card>
    </div>
</template>

<script>
    import {tabsMixins} from './mixins'
    import projectForm from "../forms/project"

    export default {
        name: "others",
        components: { projectForm },
        mixins: [tabsMixins],
    }
</script>

<style scoped>

</style>