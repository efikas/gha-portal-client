<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Academic Information" size="lg" lazy centered hide-footer >
                    <academic-form></academic-form>
                </b-modal>
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
                        <td> {{ student.admission_status?data.admissions[student.admission_status].status:null }}</td>
                        <td>Admission Year</td>
                        <td> {{ student.admission_year }}</td>
                    </tr>
                    <tr>
                        <td>Class of Admission</td>
                        <td> {{ student.admission_education_level ? data.classes[student.admission_education_level].class : null }}</td>
                        <td>Current Class</td>
                        <td> {{ student.current_class_level ? data.classes[student.current_class_level].class : null }}</td>
                    </tr>
                    <tr>
                        <td>Distance from School</td>
                        <td> {{ student.distance_from_school }}</td>
                        <td>Promotion Status</td>
                        <td> {{ student.promotion_status?data.promotions[student.promotion_status].status:null }}</td>
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
    import academicForm from '../../forms/academic'

    export default {
        components: {
            academicForm
        },
        computed: {
            ...mapGetters([
                'student',
                'data'
            ])
        }
    }
</script>

<style scoped>

</style>