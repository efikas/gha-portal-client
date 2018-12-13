<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div>
                        <h3 class="default-color"><strong>Student result for Junior Secondary One A</strong></h3>
                        <h4>Third Term, 2017/2018 Session</h4>
                    </div>
                </b-card>

                <b-card>
                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <div class="table-responsive">
                                <table id="mytable" class="table table-bordred table-striped">
                                    <thead>
                                    <tr>
                                        <th style="width: 15%">Student Id</th>
                                        <th style="width: 25%">Student Name</th>
                                        <th class="text-center">Test<br>(20%)</th>
                                        <th class="text-center">Quiz<br> (10%)</th>
                                        <th class="text-center">Assignment<br> (10%)</th>
                                        <th class="text-center">Psycomotor<br> (10%)</th>
                                        <th class="text-center">Exam<br> (50%)</th>
                                        <th class="text-center">Total<br>(100%)</th>
                                        <th>Grade</th>
                                        <th>Remark</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="result in students_result" :value="result.id">
                                        <td>{{ result.student.school_student_id }}</td>
                                        <td>{{ `${result.student.first_name} ${result.student.middle_name} ${result.student.last_name}` }}</td>
                                        <td><input type="number" v-model="result.test" size="1" min="0"max="20" class="form-control"></td>
                                        <td><input type="number" v-model="result.quiz"  size="1" min="0" max="10" class="form-control"></td>
                                        <td><input type="number" v-model="result.assignment"  size="1" min="0" max="10" class="form-control"></td>
                                        <td><input type="number" v-model="result.psycomotor" size="1" min="0" max="10" class="form-control"></td>
                                        <td><input type="number" v-model="result.exam" size="1" min="0" max="50" class="form-control"></td>
                                        <td class="green text-center">{{ totalMark(result.test, result.quiz, result.assignment, result.psycomotor, result.exam) }}</td>
                                        <td class="green text-center">A</td>
                                        <td class="green text-center">Excellent</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button class="btn btn-primary pull-right" @click="onSubmit">Submit</button>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import store from 'src/store/store';

    export default {
        name: 'exam-update',
        components: {},
        data() {
            return {

            }
        },
        methods: {
            totalMark(test, quiz, assignment, psycomotor, exam){
                return parseInt(test) + parseInt(quiz) + parseInt(assignment) + parseInt(psycomotor) + parseInt(exam) | 0;
            },
            onSubmit: function(){
                let data = { data: this.students_result };
                this.$store.dispatch('storeResults', data).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    location.reload();
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });
            }
        },
        created() {
            this.$store.dispatch('studentsResult', this.$route.query.subject);
        },
        computed: {
            ...mapGetters(['students_result']),
        },
        async beforeRouteEnter(to, from, next) {
            let permission = [`edit_class_${to.params.schoolClassId}_subject_${to.query.subject}`];
           if (!store.getters.permissions.hasAny(permission)) {
               return next(from)
           }
            next()
        },
    }
</script>
<style scoped>
    .dz-progress {
        background-color: #08aa80 !important;
    }
    .red {
        color: red;
        font-weight: bold;
    }

    .green {
        color: darkgreen;
        font-weight: bold;
    }
</style>
