<template>
    <div>
        <b-card class="bg-clear2-card" no-body text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Classrooms" size="lg" lazy centered hide-footer>
                    <classroom-form></classroom-form>
                </b-modal>

                <h3>
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">Classrooms</router-link>
                </h3>

            </div>
            <div class="col-lg-12 mb-3">
                <div class="table-responsive">
                    <table class="table table-bordred table-striped ">
                        <thead>
                        <tr>
                            <th>Class</th>
                            <th>Good</th>
                            <th>Minor Repair</th>
                            <th>Major repair</th>
                            <th>Unusable</th>
                            <th>Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="classroom in school.classroom_list">
                            <td>{{ data.classes[classroom.class_id].class }}</td>
                            <td>{{ classroom.good }}</td>
                            <td>{{ classroom.major_repair }}</td>
                            <td>{{ classroom.minor_repair }}</td>
                            <td>{{ classroom.unusable }}</td>
                            <td>{{ classroom.comment }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    import classroomForm from '../forms/classroom'
    export default {
        name: "classroom",
        components: {classroomForm},
        mixins: [tabsMixins],
    }
</script>
