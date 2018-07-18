<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="" @click.prevent="$emit('editProfile', 'AcademicForm')">
                    <i class="pull-right fa fa-edit card-profile-link"></i>
                </a>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Academic</router-link>
                </h3>
            </div>
        <div class="p-3">
            <div class="table-responsive">
                <table class="table table-bordred table-striped mytable">
                    <tr>
                        <td>Admission status</td>
                        <td> {{ student.admission_status }}</td>
                        <td>Admission Year</td>
                        <td> {{ student.admission_year }}</td>
                    </tr>
                    <tr>
                        <td>Class of Admission</td>
                        <td> {{ student.admission_education_level }}</td>
                        <td>Current Class</td>
                        <td> {{ student.current_class_level }}</td>
                    </tr>
                    <tr>
                        <td>Distance from School</td>
                        <td> {{ student.distance_from_school }}</td>
                        <td>Promotion Status</td>
                        <td> {{ student.promotion_status }}</td>
                    </tr>
                    <tr>
                        <td>Boarding</td>
                        <td> {{ student.boarding }}</td>
                        <td>Dormitory</td>
                        <td> {{ student.dormitory_id }}</td>
                    </tr>
                </table>
            </div>
        </div>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "academic",
        computed: {
            ...mapGetters([
                'student'
            ])
        }
    }
</script>

<style scoped>

</style>