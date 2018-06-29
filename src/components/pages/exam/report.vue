<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div class="row">
                        <div class="col-lg-6">
                            <label>LGA</label>
                            <multiselect v-model="lga" :show-labels="false" :options="lgas" @input="getSchool"></multiselect>
                        </div>
                        <div class="col-lg-6">
                            <label>Schools</label>
                            <multiselect v-model="school" :show-labels="false" :options="schools"></multiselect>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-lg-4">
                            <label>Level</label>
                            <select v-model="data.level" class="form-control" size="1">
                                <option value="">Select Religion</option>
                            </select>
                        </div>
                        <div class="col-lg-4">
                            <label>Class</label>
                            <select v-model="data.class" class="form-control" size="1">
                                <option value="">Select Class</option>
                                <option v-for="_class in classes" :value="_class.id">{{_class.class}}</option>
                            </select>
                        </div>
                        <div class="col-lg-4">
                            <label>Arm</label>
                            <select v-model="data.arm" class="form-control" size="1">
                                <option value="">Select Arm</option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                            </select>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-lg-6">
                            <label>Section</label>
                            <select v-model="data.section" class="form-control" size="1">
                                <option value="">Select Section</option>
                                <option value="">2017/2018</option>
                                <option value="">2018/2019</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label>Term</label>
                            <select v-model="data.term" class="form-control" size="1">
                                <option value="">Select Term</option>
                                <option value="">First</option>
                                <option value="">Second</option>
                                <option value="">Third</option>
                            </select>
                        </div>
                    </div>
                    <br><br>
                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <div class="table-responsive">
                                <table id="mytable" class="table table-bordred table-striped">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Test</th>
                                        <th>Quiz</th>
                                        <th>Psycomotor</th>
                                        <th>Exam</th>
                                        <th>Total</th>
                                        <th>Grade</th>
                                        <th>Remark</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Ambrose Schulist</td>
                                        <td>12</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>48</td>
                                        <td class="green">73</td>
                                        <td class="green">A</td>
                                        <td class="green">Excellent</td>
                                    </tr>
                                    <tr>
                                        <td>Bernadette Medhurst</td>
                                        <td>4</td>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>21</td>
                                        <td class="red">32</td>
                                        <td class="red">F</td>
                                        <td class="red">Fail</td>
                                    </tr>

                                    </tbody>
                                </table>
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
        name: 'exam-report',
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
                data: {},
            }
        },
        methods: {
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
        mounted() {
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                //populate LGA
                settings.lga_areas.forEach(item => {
                    this.lgasInfo.push(item);
                    this.lgas.push(item.name);
                });
                this.classes = settings.classes;
            }
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
