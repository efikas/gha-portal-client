<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div>
                        <h3 class="default-color"><strong>Student result for Junior Secondary One A</strong></h3>
                        <h4>Third Term, 2017/2018 Session</h4>
                       <strong>Subject: CCA</strong>
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
                                        <th class="text-center">Psycomotor<br> (10%)</th>
                                        <th class="text-center">Exam<br> (60%)</th>
                                        <th class="text-center">Total<br>(100%)</th>
                                        <th>Grade</th>
                                        <th>Remark</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="result in data.results" :value="result.id">
                                        <td>{{ 'GHA/GSS/17/832' }}</td>
                                        <td>{{ result.name }}</td>
                                        <td><input type="number" v-model="result.test" size="1" min="0"max="20" class="form-control"></td>
                                        <td><input type="number" v-model="result.quiz"  size="1" min="0" max="10" class="form-control"></td>
                                        <td><input type="number" v-model="result.psycomotor" size="1" min="0" max="10" class="form-control"></td>
                                        <td><input type="number" v-model="result.exam" size="1" min="0" max="60" class="form-control"></td>
                                        <td class="green text-center">{{ totalMark(result.test, result.quiz, result.psycomotor, result.exam) }}</td>
                                        <td class="green text-center">A</td>
                                        <td class="green text-center">Excellent</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button class="btn btn-primary pull-right">Submit</button>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import Multiselect from 'vue-multiselect';

    export default {
        name: 'exam-update',
        components: {
            Multiselect,
        },
        data() {
            return {
                lga: '',  // selected local government
                lgasInfo: [], // hold the local government and their ids
                lgas: [], // hold the local government names
                school: '',
                lgas: [],
                schools: [],
                classes: [],
                subjects: [],
                data: {
                    subject_id: '',
                    results: [
                        {
                            id: '',
                            name: 'Ambrose Schulist',
                            test: 0,
                            quiz: 0,
                            psycomotor: 0,
                            exam: 0,
                        },
                        {
                            id: '',
                            name: 'Bernadette Medhurst',
                            test: 0,
                            quiz: 0,
                            psycomotor: 0,
                            exam: 0,
                        },
                    ]
                },
            }
        },
        methods: {
            totalMark(test, quiz, psycomotor, exam){
                return parseInt(test) + parseInt(quiz) + parseInt(psycomotor) + parseInt(exam) | 0;
            },
            getSchool() {
                // get lga id
                let _lgaId = this.lgasInfo.filter(item => {
                    return (item.name === this.lga);
                });

                //Since array index is starting from 0, we need to increment by 1 to start
                // the index from 1
                this.$lga.getLgasSchool(_lgaId[0].id).then(data => {
                    this.schools = [];
                    this.school = '';
                    data.forEach(item => {
                        this.schools.push(item.name);
                    });
                })
            }
        },
        created() {
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                //populate LGA
                settings.lga_areas.forEach(item => {
                    this.lgasInfo.push(item);
                    this.lgas.push(item.name);
                });
                this.classes = settings.classes;
                this.subjects = settings.subjects
            }
        },
        computed: {

        }
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
