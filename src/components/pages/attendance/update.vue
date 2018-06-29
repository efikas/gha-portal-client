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
                        <div class="col-12 col-md-4">
                            <label>Section</label>
                            <select v-model="data.section" class="form-control" size="1">
                                <option value="">Select Section</option>
                                <option value="">2017/2018</option>
                                <option value="">2018/2019</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4">
                            <label>Term</label>
                            <select v-model="data.term" class="form-control" size="1">
                                <option value="">Select Term</option>
                                <option value="">First</option>
                                <option value="">Second</option>
                                <option value="">Third</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4">
                            <label>Class</label>
                            <select v-model="data.class" class="form-control" size="1">
                                <option value="">Select Class</option>
                                <option v-for="_class in classes" :value="_class.id">{{_class.class}}</option>
                            </select>
                        </div>
                    </div>
                    <br><br>
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <label>Arm</label>
                            <select v-model="data.arm" class="form-control" size="1">
                                <option value="">Select Arm</option>
                                <option value="">A</option>
                                <option value="">B</option>
                                <option value="">C</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4">
                            <label>Filter</label>
                            <select v-model="filter" class="form-control" size="1">
                                <option value="">Select Filter</option>
                                <option  value="0">weekly</option>
                                <option  value="1">Monthly</option>
                                <option  value="2">Termly</option>
                            </select>
                        </div>
                    </div><br>

                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <div class="table-responsive">
                                <table id="mytable" class="table table-bordred table-striped">
                                    <thead>
                                    <tr>
                                        <th colspan="6" class="text-center"><h2>WEEK 10</h2></th>6
                                    </tr>
                                    <tr class="text-center">
                                        <th style="width: 25%">Name</th>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thur</th>
                                        <th>FRi</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="student in data.attendance" :value="student.id">
                                        <td>{{ student.name }}</td>
                                        <td class="text-center"><input type="checkbox" value="1" v-model="student.mon" class="form-control"></td>
                                        <td class="text-center"><input type="checkbox" value="1" v-model="student.tue"  class="form-control"></td>
                                        <td class="text-center"><input type="checkbox" value="1" v-model="student.wed"  class="form-control"></td>
                                        <td class="text-center"><input type="checkbox" value="1" v-model="student.thur"  class="form-control"></td>
                                        <td class="text-center"><input type="checkbox" value="1" v-model="student.fri"  class="form-control"></td>
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
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import Multiselect from 'vue-multiselect';

    export default {
        name: 'attendance-update',
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
                filter: '',
                data: {
                    subject_id: '',
                    attendance: [
                        {
                            id: '',
                            name: 'Ambrose Schulist',
                            mon: 0,
                            tue: 0,
                            wed: 0,
                            thur: 0,
                            fri: 0,
                        },
                        {
                            id: '',
                            name: 'Bernadette Medhurst',
                            mon: 0,
                            tue: 0,
                            wed: 0,
                            thur: 0,
                            fri: 0,
                        },
                    ]
                },
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
            },
            onSubmit(){
                console.log(this.data.attendance[0].mon);
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
                this.subjects = settings.subjects
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
