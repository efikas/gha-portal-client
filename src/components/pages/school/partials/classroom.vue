<template>
    <div>
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="table-responsive">
                    <table class="table table-bordred table-striped mytable classroom-table">
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
                        <tr v-for="classroom in classrooms">
                            <td>{{ classroom.class }}</td>
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
        </div>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    export default {
        name: "classroom",
        mixins: [tabsMixins],
    }
</script>
